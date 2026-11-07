import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const output = new URL("../dist/", import.meta.url);
const files = await readdir(output, { recursive: true });
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const pages = await Promise.all(
  htmlFiles.map(async (file) => ({
    file,
    html: await readFile(new URL(file.split(path.sep).join("/"), output), "utf8"),
  })),
);

test("every generated page has unique search metadata and valid sharing URLs", () => {
  assert.equal(pages.length, 16);
  const titles = new Set();
  const descriptions = new Set();
  for (const { file, html } of pages) {
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert.ok(title, `${file}: missing title`);
    assert.ok(description, `${file}: missing description`);
    assert.ok(!titles.has(title), `${file}: duplicate title`);
    assert.ok(!descriptions.has(description), `${file}: duplicate description`);
    titles.add(title);
    descriptions.add(description);
    for (const pattern of [
      /<link rel="canonical" href="([^"]+)"/,
      /<meta property="og:url" content="([^"]+)"/,
      /<meta property="og:image" content="([^"]+)"/,
      /<meta name="twitter:image" content="([^"]+)"/,
    ]) {
      const value = html.match(pattern)?.[1];
      assert.ok(value, `${file}: missing ${pattern}`);
      const url = new URL(value);
      assert.equal(url.protocol, "https:");
      assert.notEqual(url.hostname, "localhost");
      assert.equal(url.search, "");
    }
    assert.doesNotMatch(html, /<script[^>]+src=["'][^"']*(googletagmanager\.com|google-analytics\.com)/);
    assert.match(html, /data-cookie-settings/);
    assert.match(html, /data-consent-reject/);
  }
});

test("sitemap matches all indexable pages and excludes the error page", async () => {
  const index = await readFile(new URL("sitemap-index.xml", output), "utf8");
  const sitemap = await readFile(new URL("sitemap-0.xml", output), "utf8");
  const robots = await readFile(new URL("robots.txt", output), "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const canonicals = [];
  for (const { file, html } of pages) {
    if (file === "404.html") {
      assert.match(html, /<meta name="robots" content="noindex, follow"/);
      continue;
    }
    assert.doesNotMatch(html, /name="robots" content="noindex/);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    canonicals.push(canonical);
    const linkedSitemap = html.match(/<link rel="sitemap"[^>]*href="([^"]+)"/)[1];
    assert.ok(robots.includes(`Sitemap: ${linkedSitemap}`));
    assert.ok(index.includes(new URL("sitemap-0.xml", linkedSitemap).href));
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
    assert.ok(json, `${file}: missing structured data`);
    const data = JSON.parse(json);
    assert.equal(data["@context"], "https://schema.org");
    assert.deepEqual(data["@graph"].map((item) => item["@type"]), ["WebSite", "Person"]);
  }
  assert.deepEqual(sitemapUrls.sort(), canonicals.sort());
  assert.match(robots, /User-agent: \*\nAllow: \//);
});

const translated = ["", "about", "contact", "privacy", "projects", "resume"];
const pageFor = (file) => pages.find((page) => page.file.split(path.sep).join("/") === file);
const hreflangs = (html) =>
  Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map((match) => [match[1], match[2]]));
const canonicalOf = (html) => html.match(/<link rel="canonical" href="([^"]+)"/)[1];

test("every translated page exists in English and Estonian with reciprocal language alternates", () => {
  for (const name of translated) {
    const en = pageFor(name ? `${name}/index.html` : "index.html");
    const et = pageFor(name ? `et/${name}/index.html` : "et/index.html");
    assert.ok(en, `missing English page: ${name || "home"}`);
    assert.ok(et, `missing Estonian page: ${name || "home"}`);
    assert.match(en.html, /<html lang="en">/);
    assert.match(et.html, /<html lang="et">/);
    assert.match(en.html, /<meta property="og:locale" content="en_US">/);
    assert.match(et.html, /<meta property="og:locale" content="et_EE">/);
    const alternates = hreflangs(en.html);
    assert.deepEqual(alternates, hreflangs(et.html));
    assert.equal(alternates.en, canonicalOf(en.html));
    assert.equal(alternates.et, canonicalOf(et.html));
    assert.equal(alternates["x-default"], alternates.en);
    assert.notEqual(alternates.en, alternates.et);
    // The language switcher links to the same page in the other language.
    assert.ok(en.html.includes(`hreflang="et" data-language="et"`));
    assert.ok(et.html.includes(`hreflang="en" data-language="en"`));
  }
});

test("English-only pages do not advertise a language alternate", () => {
  for (const file of ["404.html", "projects/car-rental-app-redesign/index.html"]) {
    const { html } = pageFor(file);
    assert.doesNotMatch(html, /hreflang="et" href=/, file);
    assert.match(html, /<html lang="en">/, file);
  }
});

test("Estonian pages render translated, non-English interface text", () => {
  const home = pageFor("et/index.html").html;
  assert.match(home, /VAATA PROJEKTE/);
  assert.match(home, /Keeldu analüütikast/);
  assert.doesNotMatch(home, /VIEW PROJECTS|Reject analytics/);
  // Google links in the privacy notice open in a new tab; the Estonian notice points at Google's Estonian pages.
  for (const [file, language] of [["privacy/index.html", null], ["et/privacy/index.html", "et"]]) {
    const links = [...pageFor(file).html.matchAll(/<a href="(https:\/\/policies\.google\.com[^"]*)"([^>]*)>/g)];
    assert.equal(links.length, 2, `${file}: expected two Google policy links`);
    for (const [, href, attributes] of links) {
      assert.match(attributes, /target="_blank" rel="noopener noreferrer"/, `${file}: ${href} should open in a new tab`);
      assert.equal(new URL(href).searchParams.get("hl"), language, `${file}: ${href} language`);
    }
  }
  assert.match(pageFor("et/resume/index.html").html, /Töökogemus/);
});
