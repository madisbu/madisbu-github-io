import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import sharp from "sharp";

const output = new URL("../dist/", import.meta.url);
const files = await readdir(output, { recursive: true });
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const allPages = await Promise.all(
  htmlFiles.map(async (file) => ({
    file,
    html: await readFile(new URL(file.split(path.sep).join("/"), output), "utf8"),
  })),
);
// Redirect stubs (e.g. the old /resume URLs) are not content pages.
const pages = allPages.filter(({ html }) => !html.includes('http-equiv="refresh"'));

test("the old resume URLs redirect to the CV pages", () => {
  const redirects = Object.fromEntries(
    allPages
      .filter(({ html }) => html.includes('http-equiv="refresh"'))
      .map(({ file, html }) => [file.split(path.sep).join("/"), html.match(/url=([^"]+)"/)?.[1]]),
  );
  assert.deepEqual(redirects, { "resume/index.html": "/cv", "et/resume/index.html": "/et/cv" });
});

test("every generated page has unique search metadata and valid sharing URLs", () => {
  assert.equal(pages.length, 18);
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
    if (file === "404.html" || file.split(path.sep).join("/") === "et/404/index.html") {
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

const translated = ["", "about", "contact", "privacy", "projects", "projects/car-rental-app-redesign", "cv"];
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
  for (const file of ["404.html", "projects/multistep-order-form/index.html"]) {
    const { html } = pageFor(file);
    assert.doesNotMatch(html, /hreflang="et" href=/, file);
    assert.match(html, /<html lang="en">/, file);
  }
});

test("the car rental case study keeps localized images and enlargement sources separate", async () => {
  const en = pageFor("projects/car-rental-app-redesign/index.html").html;
  const et = pageFor("et/projects/car-rental-app-redesign/index.html").html;
  const imageBase = "/images/projects/car-rental-app-redesign/";
  const images = [
    ["research/benchmarking.webp", "research/benchmarking.et.png"],
    ["research/survey.png", "research/survey.et.png"],
    ["sketches/sketches.png", "sketches/sketches.et.png", "sketches/sketches-full.png", "sketches/sketches-full.et.png"],
    ...["main", "search", "details", "extras", "payment"].map((name) => [
      `design/${name}_visual_comparison.png`,
      `design/${name}_visual_comparison.et.png`,
    ]),
  ];

  assert.ok(en.includes("This solo project explored how a car rental app could make booking more approachable."));
  assert.ok(et.includes("Selles iseseisvas projektis uurisin, kuidas muuta mobiilirakenduse kaudu rendi auto broneerimine lihtsamaks. Aitasin klientidel sõidukeid võrrelda ja kuludest paremini aru saada. Samuti soovisin auto broneerimist saavutada väiksema arvu ja selgemate sammudega."));
  assert.match(et, /class="case-study-discipline"[^>]*>UX\/UI uuring<\/p>/);
  assert.match(et, /<p[^>]*>See projekt tuletas mulle meelde, et sujuv broneerimiskogemus eeldab selgust igal sammul, eriti hindade ja võõraste terminite puhul\. Ideede testimine kasutajatega aitas mul oma eeldustes kahelda ning muuta nende kõhklused lihtsamaks ja kindlamaks kasutuskogemuseks\.<\/p>/);
  assert.ok(en.includes("Tap to see the pain point &amp; the fix"));
  assert.ok(!en.includes("Tap to see the pain point &amp;amp; the fix"));
  assert.ok(et.includes("Vaata probleemi ja lahendust"));
  assert.match(et, /<span class="journey-card-title"[^>]*>Kaitse<\/span>/);
  assert.match(et, /<span class="journey-card-title"[^>]*>Tellimus<\/span>/);

  for (const [englishImage, estonianImage, englishZoom = englishImage, estonianZoom = estonianImage] of images) {
    const englishSrc = `${imageBase}${englishImage}`;
    const estonianSrc = `${imageBase}${estonianImage}`;
    for (const [html, expected, other] of [
      [en, englishSrc, estonianSrc],
      [et, estonianSrc, englishSrc],
    ]) {
      assert.ok(html.includes(` src="${expected}"`), `missing image ${expected}`);
      assert.ok(!html.includes(` src="${other}"`), `unexpected image ${other}`);
      if (englishImage.startsWith("design/") || englishImage.startsWith("sketches/")) {
        const triggers = [...html.matchAll(/<button\b[^>]*data-case-study-media-trigger[^>]*>[\s\S]*?<\/button>/g)];
        assert.ok(
          triggers.some(([trigger]) =>
            trigger.includes(`data-zoom-src="${imageBase}${html === en ? englishZoom : estonianZoom}"`)
            && trigger.includes(` src="${expected}"`)),
          `missing matching enlargement source for ${expected}`,
        );
      }
    }

    const [englishData, estonianData] = await Promise.all([
      readFile(new URL(englishSrc.slice(1), output)),
      readFile(new URL(estonianSrc.slice(1), output)),
    ]);
    assert.ok(!englishData.equals(estonianData), `${englishImage} must have a separate Estonian version`);
    const [englishSize, estonianSize] = await Promise.all([
      sharp(englishData).metadata(),
      sharp(estonianData).metadata(),
    ]);
    assert.deepEqual(
      [estonianSize.width, estonianSize.height],
      [englishSize.width, englishSize.height],
      `${estonianImage} dimensions must match the original`,
    );
  }

  const priceRegion = { left: 945, top: 392, width: 42, height: 69 };
  const detailsImage = async (suffix) => sharp(await readFile(new URL(`${imageBase.slice(1)}design/details_visual_comparison${suffix}.png`, output)))
    .extract(priceRegion)
    .ensureAlpha()
    .raw()
    .toBuffer();
  const [englishPrices, estonianPrices] = await Promise.all([detailsImage(""), detailsImage(".et")]);
  assert.ok(englishPrices.equals(estonianPrices), "the original vehicle detail prices must remain visible");

  for (const [name, corners] of [
    ["extras", [[1019, 496], [1052, 496], [1019, 513], [1052, 513]]],
    ["payment", [[1018, 500], [1052, 500], [1018, 517], [1052, 517]]],
  ]) {
    const buttonPixel = async (suffix, [left, top]) => sharp(
      await readFile(new URL(`${imageBase.slice(1)}design/${name}_visual_comparison${suffix}.png`, output)),
    ).extract({ left, top, width: 1, height: 1 }).raw().toBuffer();
    for (const point of corners) {
      const [englishPixel, estonianPixel] = await Promise.all([
        buttonPixel("", point),
        buttonPixel(".et", point),
      ]);
      assert.ok(englishPixel.equals(estonianPixel), `${name} button corner ${point.join(",")} must remain intact`);
    }
  }

  const [englishSketchZoom, estonianSketchZoom] = await Promise.all([
    readFile(new URL("images/projects/car-rental-app-redesign/sketches/sketches-full.png", output)),
    readFile(new URL("images/projects/car-rental-app-redesign/sketches/sketches-full.et.png", output)),
  ]);
  assert.ok(!englishSketchZoom.equals(estonianSketchZoom), "the enlarged sketches image must have a separate Estonian version");
  const [englishZoomSize, estonianZoomSize] = await Promise.all([
    sharp(englishSketchZoom).metadata(),
    sharp(estonianSketchZoom).metadata(),
  ]);
  assert.deepEqual(
    [estonianZoomSize.width, estonianZoomSize.height],
    [englishZoomSize.width, englishZoomSize.height],
  );
});

test("English case-study website links retain their accessibility labels", () => {
  const html = pageFor("projects/waste-disposal-website/index.html").html;
  assert.ok(html.includes('aria-label="Prahiveod website, opens in a new tab"'));
});

test("only the English home page redirects by browser language", () => {
  const redirect = /localStorage\.getItem\(key\)/;
  assert.match(pageFor("index.html").html, redirect);
  for (const { file, html } of pages) {
    if (file !== "index.html") assert.doesNotMatch(html, redirect, `${file}: unexpected language redirect`);
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
  assert.match(pageFor("et/cv/index.html").html, /Töökogemus/);
  assert.match(pageFor("et/privacy/index.html").html, /mabux\.language\.v1/);
  assert.match(pageFor("privacy/index.html").html, /mabux\.language\.v1/);
});

test("the error page is translated and the English one hands /et/ paths to it", () => {
  const en = pageFor("404.html").html;
  const et = pageFor("et/404/index.html").html;
  assert.match(en, /<html lang="en">/);
  assert.match(et, /<html lang="et">/);
  assert.match(et, /Näib, et oled eksinud\./);
  assert.match(en, /location\.replace\(target\)/);
  assert.match(en, /const target = "\/et\/404\/"/);
  assert.doesNotMatch(et, /location\.replace\(target\)/);
  assert.match(et, /<meta name="robots" content="noindex, follow"/);
});

test("inline redirect scripts are valid JavaScript", () => {
  for (const file of ["index.html", "404.html"]) {
    const scripts = [...pageFor(file).html.matchAll(/<script>(.*?)<\/script>/gs)].map((match) => match[1]);
    assert.ok(scripts.length > 0, `${file}: expected an inline script`);
    for (const code of scripts) assert.doesNotThrow(() => new Function(code), `${file}: invalid inline script`);
  }
});
