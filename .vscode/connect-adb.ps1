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

function Get-MdnsEndpoint {
  param([Parameter(Mandatory)][string]$ServiceType)

  $service = & $adb mdns services |
    Where-Object { $_ -match [regex]::Escape($ServiceType) } |
    Select-Object -First 1

  if ($service -and $service -match "(\d{1,3}(?:\.\d{1,3}){3}:\d+)\s*$") {
    return $Matches[1]
  }

  return $null
}

function Get-ConnectedDevice {
  $devices = & $adb devices |
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

& $adb start-server | Out-Null

$connectEndpoint = Get-MdnsEndpoint -ServiceType "_adb-tls-connect._tcp"
if ($connectEndpoint) {
  & $adb connect $connectEndpoint | Write-Host
}

$device = Get-ConnectedDevice

if (-not $device) {
  $pairingCode = Read-Host "On your phone, open Wireless debugging > Pair device with pairing code, then enter the 6-digit code"

  if ($pairingCode -notmatch "^\d{6}$") {
    throw "The wireless debugging pairing code must contain exactly 6 digits."
  }

  $pairingEndpoint = Wait-ForMdnsEndpoint -ServiceType "_adb-tls-pairing._tcp"
  if (-not $pairingEndpoint) {
    $pairingEndpoint = Read-Host "Automatic discovery failed. Enter the pairing IP address and port shown on the phone"
  }

  if ($pairingEndpoint -notmatch "^\d{1,3}(?:\.\d{1,3}){3}:\d+$") {
    throw "The pairing address must use the IP:port format shown on the phone."
  }

  $pairResult = & $adb pair $pairingEndpoint $pairingCode 2>&1
  $pairResult | Write-Host

  if ($LASTEXITCODE -ne 0 -or $pairResult -notmatch "Successfully paired") {
    throw "ADB could not pair with the phone."
  }

  $connectEndpoint = Wait-ForMdnsEndpoint -ServiceType "_adb-tls-connect._tcp"
  if (-not $connectEndpoint) {
    $connectEndpoint = Read-Host "Enter the Wireless debugging IP address and port shown on the phone"
  }

  $connectResult = & $adb connect $connectEndpoint 2>&1
  $connectResult | Write-Host

  if ($LASTEXITCODE -ne 0 -or $connectResult -notmatch "connected to|already connected") {
    throw "ADB paired successfully but could not connect to the phone."
  }

  $device = $connectEndpoint
}

& $adb -s $device reverse tcp:4321 tcp:4321
if ($LASTEXITCODE -ne 0) {
  throw "ADB connected, but reverse port forwarding could not be configured."
}

Write-Host "Pixel connected. http://localhost:4321 maps to this repository's dev server."
