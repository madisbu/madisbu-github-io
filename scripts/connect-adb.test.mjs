import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const script = fileURLToPath(new URL('../.vscode/connect-adb.ps1', import.meta.url));

const fakeAdb = `
const fs = require('node:fs');
const args = process.argv.slice(2);
const scenario = process.env.ADB_TEST_SCENARIO;
const state = process.env.ADB_TEST_STATE;
fs.appendFileSync(process.env.ADB_TEST_LOG, JSON.stringify(args) + '\\n');
switch (args[0]) {
  case 'start-server':
    console.error('* daemon started successfully *');
    if (scenario === 'server-failure') process.exit(1);
    break;
  case 'devices':
    console.log('List of devices attached');
    if (scenario === 'usb') console.log('usb-device\\tdevice');
    if (scenario === 'reconnect' && fs.existsSync(state)) {
      console.log('192.168.1.2:37000\\tdevice');
    }
    break;
  case 'mdns':
    if (scenario === 'discovery-failure') {
      console.error('discovery failed');
      process.exit(1);
    }
    console.log('List of discovered mdns services');
    if (scenario === 'manual-connection') break;
    if (fs.existsSync(state) || scenario === 'reconnect') {
      console.log('phone _adb-tls-connect._tcp 192.168.1.2:37000');
    } else if (scenario !== 'manual-pairing') {
      console.log('phone _adb-tls-pairing._tcp 192.168.1.2:38000');
    }
    break;
  case 'pair':
    if (scenario.startsWith('pair-failure')) {
      console.error("error: protocol fault (couldn't read status message): No error");
      process.exit(scenario === 'pair-failure-zero' ? 0 : 1);
    }
    console.log('Pairing response:');
    console.log('Successfully paired to ' + args[1]);
    fs.writeFileSync(state, 'paired');
    break;
  case 'connect':
    if (scenario === 'connect-failure') {
      console.error('failed to connect to ' + args[1]);
      process.exit(0);
    }
    console.log('Connection response:');
    console.log('connected to ' + args[1]);
    fs.writeFileSync(state, 'connected');
    break;
  case '-s':
    if (scenario === 'reverse-failure') {
      console.error('error: reverse failed');
      process.exit(1);
    }
    break;
  default:
    console.error('Unexpected ADB arguments: ' + args.join(' '));
    process.exit(1);
}
`;

function runScenario(scenario, input = '192.168.1.2:38000\n123456\n') {
  const directory = mkdtempSync(path.join(tmpdir(), 'connect-adb-test-'));
  try {
    const fakeScript = path.join(directory, 'fake-adb.cjs');
    const harness = path.join(directory, 'run.ps1');
    const log = path.join(directory, 'calls.jsonl');
    writeFileSync(fakeScript, fakeAdb);
    writeFileSync(harness, `
function Read-Host {
  param([string]$Prompt)
  Write-Host "PROMPT: $Prompt"
  [Console]::ReadLine()
}
& '${script.replaceAll("'", "''")}'
`);
    writeFileSync(
      path.join(directory, 'adb.cmd'),
      `@"${process.execPath}" "${fakeScript}" %*\r\n@exit /b %errorlevel%\r\n`,
    );
    writeFileSync(log, '');
    const result = spawnSync(
      'powershell.exe',
      ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', harness],
      {
        encoding: 'utf8',
        input,
        timeout: 30_000,
        env: {
          ...process.env,
          PATH: `${directory}${path.delimiter}${process.env.PATH}`,
          ADB_TEST_SCENARIO: scenario,
          ADB_TEST_STATE: path.join(directory, 'paired'),
          ADB_TEST_LOG: log,
        },
      },
    );
    assert.ifError(result.error);
    const calls = readFileSync(log, 'utf8').trim().split('\n').map(JSON.parse);
    return { ...result, output: result.stdout + result.stderr, calls };
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('Android connection task under Windows PowerShell 5.1', {
  skip: process.platform !== 'win32',
}, async (t) => {
  await t.test('pairs and connects with multiline output and benign native stderr', () => {
    const result = runScenario('success');
    assert.equal(result.status, 0, result.output);
    assert.deepEqual(result.calls.find(([command]) => command === 'pair'), [
      'pair', '192.168.1.2:38000', '123456',
    ]);
    assert.deepEqual(result.calls.at(-1), [
      '-s', '192.168.1.2:37000', 'reverse', 'tcp:4321', 'tcp:4321',
    ]);
    const prompts = result.output.split(/\r?\n/).filter((line) => line.startsWith('PROMPT:'));
    assert.equal(prompts.length, 2, result.output);
    assert.match(prompts[0], /IP address & Port from the PAIRING CODE DIALOG/);
    assert.match(prompts[1], /6-digit Wi-Fi pairing code from the SAME dialog/);
    const pairingIndex = result.calls.findIndex(([command]) => command === 'pair');
    assert.equal(result.calls.slice(0, pairingIndex).filter(([command]) => command === 'mdns').length, 1);
  });

  await t.test('an already authorized USB device bypasses pairing', () => {
    const result = runScenario('usb');
    assert.equal(result.status, 0, result.output);
    assert.equal(result.calls.some(([command]) => command === 'pair'), false);
    assert.deepEqual(result.calls.at(-1), [
      '-s', 'usb-device', 'reverse', 'tcp:4321', 'tcp:4321',
    ]);
  });

  await t.test('reconnects to a discovered paired phone without a pairing prompt', () => {
    const result = runScenario('reconnect');
    assert.equal(result.status, 0, result.output);
    assert.equal(result.calls.some(([command]) => command === 'pair'), false);
    assert.deepEqual(result.calls.at(-1), [
      '-s', '192.168.1.2:37000', 'reverse', 'tcp:4321', 'tcp:4321',
    ]);
  });

  await t.test('manual pairing works when discovery finds no pairing endpoint', () => {
    const result = runScenario('manual-pairing', '192.168.1.2:39000\n123456\n');
    assert.equal(result.status, 0, result.output);
    assert.deepEqual(result.calls.find(([command]) => command === 'pair'), [
      'pair', '192.168.1.2:39000', '123456',
    ]);
  });

  await t.test('asks for the main screen connection address only after pairing succeeds', () => {
    const result = runScenario('manual-connection', '192.168.1.2:38000\n123456\n192.168.1.2:37000\n');
    assert.equal(result.status, 0, result.output);
    const prompts = result.output.split(/\r?\n/).filter((line) => line.startsWith('PROMPT:'));
    assert.equal(prompts.length, 3, result.output);
    assert.match(prompts[0], /PAIRING CODE DIALOG/);
    assert.match(prompts[1], /6-digit Wi-Fi pairing code from the SAME dialog/);
    assert.match(prompts[2], /pairing is complete.*MAIN Wireless debugging screen/);
    assert.ok(result.output.indexOf('Pairing succeeded.') < result.output.indexOf(prompts[2]));
    assert.equal(result.calls.filter(([command]) => command === 'pair').length, 1);
    assert.deepEqual(result.calls.find(([command]) => command === 'connect'), [
      'connect', '192.168.1.2:37000',
    ]);
  });

  for (const scenario of ['pair-failure', 'pair-failure-zero']) {
    await t.test(`${scenario} preserves protocol error and supplies recovery instructions`, () => {
      const result = runScenario(scenario);
      assert.notEqual(result.status, 0, result.output);
      assert.match(result.output, /protocol fault/);
      assert.match(result.output, /new pairing port and code/);
      assert.doesNotMatch(result.output, /FullyQualifiedErrorId : NativeCommandError/);
      assert.equal(result.calls.some(([command]) => command === '-s'), false);
    });
  }

  for (const [scenario, message] of [
    ['server-failure', /could not start its server/],
    ['discovery-failure', /ADB discovery failed/],
    ['connect-failure', /paired successfully but could not connect/],
    ['reverse-failure', /reverse port forwarding could not be configured/],
  ]) {
    await t.test(`${scenario} stops the task explicitly`, () => {
      const result = runScenario(scenario);
      assert.notEqual(result.status, 0, result.output);
      assert.match(result.output, message);
      assert.doesNotMatch(result.output, /Pixel connected/);
    });
  }

  await t.test('rejects an invalid code without invoking pairing', () => {
    const result = runScenario('success', '192.168.1.2:38000\n12345\n');
    assert.notEqual(result.status, 0, result.output);
    assert.match(result.output, /exactly 6 digits/);
    assert.equal(result.calls.some(([command]) => command === 'pair'), false);
  });
});
