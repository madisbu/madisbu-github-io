import assert from "node:assert/strict";
import test from "node:test";
import {
  CONSENT_LIFETIME,
  analyticsPageUrl,
  isAnalyticsAllowed,
  readConsent,
} from "./analytics-consent.ts";

test("analytics requires a production build, valid ID, and exact production origin", () => {
  const production = new URL("https://www.mabux.me/projects/");
  assert.equal(isAnalyticsAllowed(true, "G-WN68N9308Y", production), true);
  assert.equal(isAnalyticsAllowed(false, "G-WN68N9308Y", production), false);
  for (const origin of ["http://www.mabux.me", "https://mabux.me", "http://localhost:4321", "https://www.mabux.me:4321", "https://madisbu.github.io"]) {
    assert.equal(isAnalyticsAllowed(true, "G-WN68N9308Y", new URL(origin)), false);
  }
  for (const id of ["", "G-", "invalid", 'G-"><script>']) {
    assert.equal(isAnalyticsAllowed(true, id, production), false);
  }
});

test("only known, unexpired consent records are accepted", () => {
  const now = 1000;
  for (const status of ["accepted", "rejected"]) {
    assert.deepEqual(readConsent(JSON.stringify({ version: 1, status, expiresAt: now + CONSENT_LIFETIME }), now),
      { status, expiresAt: now + CONSENT_LIFETIME });
  }
  for (const value of [null, "null", "{}", '{"status":"accepted"}',
    JSON.stringify({ version: 2, status: "accepted", expiresAt: now + 1 }),
    JSON.stringify({ version: 1, status: "accepted", expiresAt: now }),
    JSON.stringify({ version: 1, status: "accepted", expiresAt: now + CONSENT_LIFETIME + 1 }),
    JSON.stringify({ version: 1, status: "unknown", expiresAt: now + 1 })]) {
    assert.equal(readConsent(value, now), null);
  }
});

test("page URLs never include query parameters or fragments", () => {
  assert.equal(analyticsPageUrl("https://www.mabux.me/contact/?email=private@example.com#secret"),
    "https://www.mabux.me/contact/");
});
