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

$devices = & $adb devices |
  Select-String "^\S+\s+device$" |
  ForEach-Object { ($_ -split "\s+")[0] }

foreach ($device in $devices) {
  $previousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = "SilentlyContinue"
  & $adb -s $device reverse --remove tcp:4321 2>$null
  $ErrorActionPreference = $previousErrorActionPreference

  if ($device -match ":" -or $device -match "_adb-tls-connect\._tcp$") {
    & $adb disconnect $device | Write-Host
  }
}

Write-Host "Android reverse forwarding removed and wireless ADB disconnected."
