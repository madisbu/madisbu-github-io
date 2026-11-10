import assert from "node:assert/strict";
import test from "node:test";
import { alternatePath, formatTemplate, getLocale, localeStaticPaths, localizedPath, parsePathname } from "./index.ts";

test("detects the locale and normalizes the path", () => {
  assert.deepEqual(parsePathname("/"), { locale: "en", path: "/" });
  assert.deepEqual(parsePathname("/about/"), { locale: "en", path: "/about" });
  assert.deepEqual(parsePathname("/et"), { locale: "et", path: "/" });
  assert.deepEqual(parsePathname("/et/"), { locale: "et", path: "/" });
  assert.deepEqual(parsePathname("/et/projects/"), { locale: "et", path: "/projects" });
  assert.equal(getLocale("/etiquette"), "en");
  assert.deepEqual(parsePathname("/site/et/about/", "/site/"), { locale: "et", path: "/about" });
});

test("localized paths keep English unprefixed and fall back for untranslated pages", () => {
  assert.equal(localizedPath("en", "/"), "/");
  assert.equal(localizedPath("et", "/"), "/et/");
  assert.equal(localizedPath("et", "/about"), "/et/about");
  assert.equal(localizedPath("et", "/projects/car-rental-app-redesign"), "/et/projects/car-rental-app-redesign");
  assert.equal(localizedPath("et", "/projects/multistep-order-form"), "/projects/multistep-order-form");
  assert.equal(localizedPath("et", "/about", "/site/"), "/site/et/about");
});

test("the language switcher links to the closest translated page", () => {
  assert.equal(alternatePath("et", "/about/"), "/et/about");
  assert.equal(alternatePath("en", "/et/about/"), "/about");
  assert.equal(alternatePath("en", "/et/"), "/");
  assert.equal(alternatePath("et", "/projects/multistep-order-form/"), "/et/projects");
  assert.equal(alternatePath("et", "/projects/car-rental-app-redesign/"), "/et/projects/car-rental-app-redesign");
  assert.equal(alternatePath("en", "/et/projects/car-rental-app-redesign/"), "/projects/car-rental-app-redesign");
  assert.equal(alternatePath("et", "/404/"), "/et/");
});

test("static paths cover every locale with English at the root", () => {
  assert.deepEqual(localeStaticPaths(), [{ params: { lang: undefined } }, { params: { lang: "et" } }]);
});

test("fills template placeholders", () => {
  assert.equal(formatTemplate("{count} projects shown", { count: 3 }), "3 projects shown");
  assert.equal(formatTemplate("Hi {missing}", {}), "Hi {missing}");
});
