$ErrorActionPreference = "Continue"

$workspace = Split-Path -Parent $PSScriptRoot
$astro = Join-Path $workspace "node_modules\.bin\astro.cmd"

if (-not (Test-Path $astro)) {
  throw "Astro is not installed. Run npm install before starting development."
}

$statusOutput = & $astro dev status 2>&1
if ($statusOutput -match "Dev server running") {
  try {
    $client = [System.Net.Sockets.TcpClient]::new()
    $client.Connect("127.0.0.1", 4321)
    $client.Dispose()
    $statusOutput | Write-Host
    exit 0
  } catch {
    if ($client) {
      $client.Dispose()
    }

    Write-Host "The existing Astro server is not listening on IPv4. Restarting it for Android forwarding..."
    & $astro dev stop | Write-Host
  }
}

for ($attempt = 1; $attempt -le 2; $attempt++) {
  $startOutput = & $astro dev --host 127.0.0.1 --port 4321 --strictPort --background 2>&1
  $startExitCode = $LASTEXITCODE
  $startOutput | Write-Host

  if ($startExitCode -eq 0) {
    $statusOutput = & $astro dev status 2>&1
    if ($statusOutput -match "Dev server running") {
      exit 0
    }
  }

  if ($attempt -eq 1) {
    Write-Host "Astro did not become ready. Cleaning its managed state and retrying once..."
    & $astro dev stop 2>$null | Out-Null
    Remove-Item (Join-Path $workspace ".astro\dev.json") -Force -ErrorAction SilentlyContinue
    Start-Sleep -Seconds 1
  }
}

Write-Error "Astro could not start on http://127.0.0.1:4321 after two attempts."
exit 1
