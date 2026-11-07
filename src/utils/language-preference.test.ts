import assert from "node:assert/strict";
import test from "node:test";
import { preferredLanguage, readLanguage, serializeLanguage } from "./language-preference.ts";

test("round-trips a saved language and rejects invalid values", () => {
  assert.equal(readLanguage(serializeLanguage("et")), "et");
  assert.equal(readLanguage(serializeLanguage("en")), "en");
  assert.equal(readLanguage(null), null);
  assert.equal(readLanguage("not json"), null);
  assert.equal(readLanguage(JSON.stringify({ version: 2, language: "et" })), null);
  assert.equal(readLanguage(JSON.stringify({ version: 1, language: "fr" })), null);
});

test("a saved choice wins; otherwise only the first browser language counts", () => {
  assert.equal(preferredLanguage("en", ["et-EE"]), "en");
  assert.equal(preferredLanguage("et", ["en-US"]), "et");
  assert.equal(preferredLanguage(null, ["et-EE", "en"]), "et");
  assert.equal(preferredLanguage(null, ["et"]), "et");
  assert.equal(preferredLanguage(null, ["en-US", "et"]), "en");
  assert.equal(preferredLanguage(null, []), "en");
});
