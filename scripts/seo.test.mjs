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
  assert.equal(pages.length, 10);
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
