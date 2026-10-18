$ErrorActionPreference = "Stop"

$adbCandidates = @(
  (Get-Command adb -ErrorAction SilentlyContinue).Source
  "$env:LOCALAPPDATA\Android\Sdk\platform-tools\adb.exe"
  "$HOME\Downloads\platform-tools-latest-windows\platform-tools\adb.exe"
) | Where-Object { $_ -and (Test-Path $_) }

$adb = $adbCandidates | Select-Object -First 1

if (-not $adb) {
  throw "ADB was not found. Install Android Platform Tools or add adb.exe to PATH."
}

function Invoke-Adb {
  param([Parameter(Mandatory)][string[]]$Arguments)

  # Windows PowerShell turns redirected native stderr into ErrorRecords.
  $previousErrorActionPreference = $ErrorActionPreference
  try {
    $ErrorActionPreference = "Continue"
    $output = & $adb @Arguments 2>&1
    $exitCode = $LASTEXITCODE
  }
  finally {
    $ErrorActionPreference = $previousErrorActionPreference
  }

  return [pscustomobject]@{
    ExitCode = $exitCode
    Output = ($output | ForEach-Object { $_.ToString() }) -join "`n"
  }
}

function Get-MdnsEndpoint {
  param([Parameter(Mandatory)][string]$ServiceType)

  $result = Invoke-Adb -Arguments @("mdns", "services")
  if ($result.ExitCode -ne 0) {
    throw "ADB discovery failed: $($result.Output)"
  }

  $service = $result.Output -split "\r?\n" |
    Where-Object { $_ -match [regex]::Escape($ServiceType) } |
    Select-Object -First 1

  if ($service -and $service -match "(\d{1,3}(?:\.\d{1,3}){3}:\d+)\s*$") {
    return $Matches[1]
  }

  return $null
}

function Get-ConnectedDevice {
  $result = Invoke-Adb -Arguments @("devices")
  if ($result.ExitCode -ne 0) {
    throw "ADB could not list devices: $($result.Output)"
  }

  $devices = $result.Output -split "\r?\n" |
    Select-String "^\S+\s+device$" |
    ForEach-Object { ($_ -split "\s+")[0] }

  return $devices | Select-Object -First 1
}

function Wait-ForMdnsEndpoint {
  param(
    [Parameter(Mandatory)][string]$ServiceType,
    [int]$TimeoutSeconds = 15
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)

  do {
    $endpoint = Get-MdnsEndpoint -ServiceType $ServiceType
    if ($endpoint) {
      return $endpoint
    }

    Start-Sleep -Milliseconds 500
  } while ((Get-Date) -lt $deadline)

  return $null
}

$startResult = Invoke-Adb -Arguments @("start-server")
if ($startResult.ExitCode -ne 0) {
  throw "ADB could not start its server: $($startResult.Output)"
}

$device = Get-ConnectedDevice

if (-not $device) {
  $connectEndpoint = Get-MdnsEndpoint -ServiceType "_adb-tls-connect._tcp"
  if ($connectEndpoint) {
    $connectResult = Invoke-Adb -Arguments @("connect", $connectEndpoint)
    $connectResult.Output | Write-Host
    if ($connectResult.ExitCode -ne 0 -or $connectResult.Output -notmatch "connected to|already connected") {
      throw "ADB could not connect to the discovered phone. $($connectResult.Output)"
    }
    $device = Get-ConnectedDevice
  }
}

if (-not $device) {
  Write-Host "Open Wireless debugging > Pair device with pairing code on your phone."
  Write-Host "Keep that dialog open: BOTH the pairing IP:port and the 6-digit code below come from this SAME dialog."
  $pairingEndpoint = Read-Host "Step 1/2 - Enter IP address & Port from the PAIRING CODE DIALOG (not the main Wireless debugging screen)"

  if ($pairingEndpoint -notmatch "^\d{1,3}(?:\.\d{1,3}){3}:\d+$") {
    throw "The pairing address must use the IP:port format shown in the pairing code dialog."
  }

  $pairingCode = Read-Host "Step 2/2 - Enter the 6-digit Wi-Fi pairing code from the SAME dialog; do not close it"

  if ($pairingCode -notmatch "^\d{6}$") {
    throw "The wireless debugging pairing code must contain exactly 6 digits."
  }

  $pairResult = Invoke-Adb -Arguments @("pair", $pairingEndpoint, $pairingCode)
  $pairResult.Output | Write-Host

  if ($pairResult.ExitCode -ne 0 -or $pairResult.Output -notmatch "Successfully paired") {
    throw "ADB could not pair with the phone. $($pairResult.Output)`nReopen 'Pair device with pairing code' and retry with its new pairing port and code; the main Wireless debugging port is only for connecting, not pairing. Keep the pairing dialog open and both devices on the same Wi-Fi without VPN/client isolation. If it persists, toggle Wireless debugging off/on and retry."
  }

  Write-Host "Pairing succeeded. You can now close the pairing dialog and return to the main Wireless debugging screen."
  $connectEndpoint = Wait-ForMdnsEndpoint -ServiceType "_adb-tls-connect._tcp"
  if (-not $connectEndpoint) {
    $connectEndpoint = Read-Host "Connection only (pairing is complete) - Enter IP address & Port from the MAIN Wireless debugging screen, NOT the pairing dialog"
  }

  if ($connectEndpoint -notmatch "^\d{1,3}(?:\.\d{1,3}){3}:\d+$") {
    throw "The connection address must use the IP:port format on the main Wireless debugging screen, not the pairing dialog."
  }

  $connectResult = Invoke-Adb -Arguments @("connect", $connectEndpoint)
  $connectResult.Output | Write-Host

  if ($connectResult.ExitCode -ne 0 -or $connectResult.Output -notmatch "connected to|already connected") {
    throw "ADB paired successfully but could not connect to the phone. $($connectResult.Output)"
  }

  $device = $connectEndpoint
}

$reverseResult = Invoke-Adb -Arguments @("-s", $device, "reverse", "tcp:4321", "tcp:4321")
if ($reverseResult.ExitCode -ne 0) {
  throw "ADB connected, but reverse port forwarding could not be configured. $($reverseResult.Output)"
}

Write-Host "Pixel connected. http://localhost:4321 maps to this repository's dev server."
