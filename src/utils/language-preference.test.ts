import assert from "node:assert/strict";
import test from "node:test";
import { LANGUAGE_KEY, serializeLanguage } from "./language-preference.ts";

test("serializes the language choice under a versioned key", () => {
  assert.equal(LANGUAGE_KEY, "mabux.language.v1");
  assert.deepEqual(JSON.parse(serializeLanguage("et")), { version: 1, language: "et" });
});
