import assert from "node:assert/strict";
import test from "node:test";
import { getProfileAge } from "./profile-age.ts";

test("age changes on 1 May, not at the start of the year", () => {
  assert.equal(getProfileAge(new Date(2026, 0, 1)), 36);
  assert.equal(getProfileAge(new Date(2026, 3, 30, 23, 59, 59)), 36);
  assert.equal(getProfileAge(new Date(2026, 4, 1)), 37);
  assert.equal(getProfileAge(new Date(2026, 9, 15)), 37);
  assert.equal(getProfileAge(new Date(2027, 3, 30)), 37);
  assert.equal(getProfileAge(new Date(2027, 4, 1)), 38);
});
