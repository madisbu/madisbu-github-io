import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const launch = JSON.parse(readFileSync(new URL('../.vscode/launch.json', import.meta.url), 'utf8'));
const { tasks } = JSON.parse(readFileSync(new URL('../.vscode/tasks.json', import.meta.url), 'utf8'));

function taskCommands(label) {
  const task = tasks.find((entry) => entry.label === label);
  assert.ok(task, `Task "${label}" must exist`);
  return [
    task.command ?? '',
    ...(task.dependsOn ?? []).flatMap(taskCommands),
  ];
}

test('default laptop launch opens the existing default browser without Android tasks', () => {
  const laptop = launch.configurations[0];
  assert.equal(laptop.name, 'Laptop (existing Chrome)');
  assert.equal(laptop.type, 'node-terminal');
  assert.equal(laptop.request, 'launch');
  assert.equal(laptop.command, 'npm run dev -- --force');
  assert.equal(laptop.preLaunchTask, undefined);
  assert.equal(laptop.postDebugTask, undefined);
  assert.doesNotMatch(JSON.stringify(laptop), /adb|android|pwa-chrome|userDataDir/i);

  const { action, pattern, uriFormat } = laptop.serverReadyAction;
  assert.equal(action, 'openExternally');
  const ready = '\u001b[2m┃\u001b[22m Local    \u001b[36mhttp://127.0.0.1:4321/\u001b[39m';
  const port = ready.match(new RegExp(pattern))?.[1];
  assert.equal(port, '4321');
  assert.equal(uriFormat.replace('%s', port), 'http://127.0.0.1:4321/');
});

test('the old Chrome-profile laptop tasks are removed', () => {
  assert.equal(tasks.some((entry) => /laptop/i.test(entry.label)), false);
});

test('Android launch retains its device setup and cleanup tasks', () => {
  const android = launch.configurations.find((entry) => entry.name === 'Android development server (ADB)');
  assert.ok(android);
  assert.equal(android.preLaunchTask, 'Prepare Android development');
  assert.equal(android.postDebugTask, 'Clean up Android development');
  assert.match(taskCommands(android.preLaunchTask).join('\n'), /connect-adb\.ps1/);
  assert.match(taskCommands(android.postDebugTask).join('\n'), /disconnect-adb\.ps1/);
});
