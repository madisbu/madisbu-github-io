import assert from "node:assert/strict";
import test from "node:test";
import { alternatePath, formatTemplate, getLocale, localeStaticPaths, localizedPath, parsePathname } from "./index.ts";

test("normalizes the path and keeps English as the only locale", () => {
  assert.deepEqual(parsePathname("/"), { locale: "en", path: "/" });
  assert.deepEqual(parsePathname("/about/"), { locale: "en", path: "/about" });
  assert.deepEqual(parsePathname("/projects/multistep-order-form/"), { locale: "en", path: "/projects/multistep-order-form" });
  assert.deepEqual(parsePathname("/site/about/", "/site/"), { locale: "en", path: "/about" });
  assert.equal(getLocale("/et/about/"), "en");
});

test("English paths stay unprefixed and honor the base path", () => {
  assert.equal(localizedPath("en", "/"), "/");
  assert.equal(localizedPath("en", "/about"), "/about");
  assert.equal(localizedPath("en", "/about", "/site/"), "/site/about");
  assert.equal(alternatePath("en", "/about/"), "/about");
});

test("static paths serve English at the root", () => {
  assert.deepEqual(localeStaticPaths(), [{ params: { lang: undefined } }]);
});

test("fills template placeholders", () => {
  assert.equal(formatTemplate("{count} projects shown", { count: 3 }), "3 projects shown");
  assert.equal(formatTemplate("Hi {missing}", {}), "Hi {missing}");
});
