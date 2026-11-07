import { expect, test } from "@playwright/test";

const languageKey = "mabux.language.v1";

async function estonianBrowser(browser, options = {}) {
  return browser.newContext({ locale: "et-EE", ...options });
}

test("an Estonian browser opening the home page lands on the Estonian version", async ({ browser }) => {
  const context = await estonianBrowser(browser);
  const page = await context.newPage();
  await page.goto("/");
  await expect(page).toHaveURL(/\/et\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "et");
  await expect(page.locator("h1")).toContainText("mina olen Madis!");
  await context.close();
});

test("an English browser stays on the English home page", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page).toHaveURL(/\/$/);
  await expect(page).not.toHaveURL(/\/et\//);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await context.close();
});

test("only the first browser language decides", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "languages", { get: () => ["en-US", "et"] });
  });
  await page.goto("/");
  await expect(page).not.toHaveURL(/\/et\//);
  await context.close();
});

test("deep English links are never redirected", async ({ browser }) => {
  const context = await estonianBrowser(browser);
  const page = await context.newPage();
  for (const path of ["/about", "/contact", "/projects", "/projects/multistep-order-form"]) {
    await page.goto(path);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    expect(new URL(page.url()).pathname.replace(/\/$/, "")).toBe(path);
  }
  await context.close();
});

test("a saved English choice beats an Estonian browser", async ({ browser }) => {
  const context = await estonianBrowser(browser);
  const page = await context.newPage();
  await page.addInitScript(
    ([key]) => localStorage.setItem(key, JSON.stringify({ version: 1, language: "en" })),
    [languageKey],
  );
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page).not.toHaveURL(/\/et\//);
  await context.close();
});

test("a saved Estonian choice opens the Estonian home page", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.addInitScript(
    ([key]) => localStorage.setItem(key, JSON.stringify({ version: 1, language: "et" })),
    [languageKey],
  );
  await page.goto("/");
  await expect(page).toHaveURL(/\/et\/$/);
  await context.close();
});

test("invalid saved values and blocked storage fall back to the browser language", async ({ browser }) => {
  const context = await estonianBrowser(browser);
  const page = await context.newPage();
  await page.addInitScript(([key]) => localStorage.setItem(key, "not json"), [languageKey]);
  await page.goto("/");
  await expect(page).toHaveURL(/\/et\/$/);
  await context.close();

  for (const [locale, expected] of [["et-EE", "et"], ["en-US", "en"]]) {
    const blocked = await browser.newContext({ locale });
    const blockedPage = await blocked.newPage();
    await blockedPage.addInitScript(() => {
      Storage.prototype.getItem = () => { throw new DOMException("Blocked", "SecurityError"); };
    });
    await blockedPage.goto("/");
    await expect(blockedPage.locator("html")).toHaveAttribute("lang", expected);
    await blocked.close();
  }
});

test("the language switcher moves between matching pages and remembers the choice", async ({ browser }) => {
  const context = await estonianBrowser(browser);
  const page = await context.newPage();
  await page.goto("/about");
  const switcher = page.getByRole("group", { name: "Language" });
  // The current language is a filled, non-clickable option; only the other language is a link.
  await expect(switcher.locator('[aria-current="true"]')).toContainText("English");
  await expect(switcher.getByRole("link", { name: "English" })).toHaveCount(0);
  await switcher.getByRole("link", { name: "Eesti" }).click();
  await expect(page).toHaveURL(/\/et\/about\/?$/);
  await expect(page.getByRole("heading", { name: "Kes ma olen?" })).toBeVisible();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)).language, languageKey)).toBe("et");

  await page.getByRole("group", { name: "Keel" }).getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/about\/?$/);
  await expect(page.getByRole("heading", { name: "Who am I?" })).toBeVisible();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)).language, languageKey)).toBe("en");

  // The explicit English choice now wins over the Estonian browser on the home page.
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await context.close();
});

test("Estonian navigation stays in Estonian", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.goto("/et/");
  const nav = page.getByRole("navigation", { name: "Peamenüü" }).first();
  for (const [name, path] of [["Projektid", "/et/projects"], ["Minust", "/et/about"], ["CV", "/et/resume"], ["Kontakt", "/et/contact"], ["Avaleht", "/et/"]]) {
    await nav.getByRole("link", { name, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${path.replace(/\/$/, "")}/?$`));
    await expect(page.locator("html")).toHaveAttribute("lang", "et");
  }
  await context.close();
});

test("the Estonian project filters and status messages are translated", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.goto("/et/projects");
  await expect(page.getByRole("heading", { name: "Projektid" })).toBeVisible();
  await page.getByRole("button", { name: "VEEB" }).click();
  await expect(page.locator("[data-project-status]")).toHaveText("1 projekt kuvatud");
  await page.getByRole("button", { name: "KÕIK TÖÖD" }).click();
  await expect(page.locator("[data-project-status]")).toHaveText("3 projekti kuvatud");
  await context.close();
});

test("the Estonian contact page copies the address and announces it in Estonian", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US", permissions: ["clipboard-read", "clipboard-write"] });
  const page = await context.newPage();
  await page.goto("/et/contact");
  await page.getByRole("button", { name: "Kopeeri aadress" }).click();
  await expect(page.locator("[data-copy-status]")).toHaveText("Aadress madis.burmeister@mabux.me kopeeriti lõikelauale.");
  await context.close();
});

test("the Estonian resume uses Estonian dates and labels", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.goto("/et/resume");
  await expect(page.getByRole("heading", { name: "Töökogemus" })).toBeVisible();
  await expect(page.getByText("Jaanuar 2025").first()).toBeVisible();
  await expect(page.getByText("Praegune", { exact: true }).first()).toBeAttached();
  await expect(page.getByRole("link", { name: /Vaata CV-d/ })).toHaveAttribute("href", "/resume.pdf");
  await context.close();
});

test("switching to English from the Estonian home page sticks even when storage is blocked", async ({ browser }) => {
  const context = await estonianBrowser(browser);
  const page = await context.newPage();
  await page.goto("/et/");
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException("Blocked", "SecurityError"); };
    Storage.prototype.setItem = () => { throw new DOMException("Blocked", "SecurityError"); };
  });
  await page.getByRole("group", { name: "Keel" }).getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  // In-site navigation, e.g. the logo, stays English too.
  await page.getByRole("link", { name: "Mabux Home" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await context.close();
});

test("the language switcher is visible on mobile and clearly separated from the menu", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US", viewport: { width: 390, height: 800 } });
  const page = await context.newPage();
  await page.goto("/about");
  const switcher = page.getByRole("group", { name: "Language" });
  await expect(switcher).toBeInViewport();
  const box = await switcher.getByRole("link", { name: "Eesti" }).boundingBox();
  expect(box.height).toBeGreaterThanOrEqual(44);
  await switcher.getByRole("link", { name: "Eesti" }).click();
  await expect(page).toHaveURL(/\/et\/about\/?$/);
  await context.close();
});

test("missing pages show a translated 404 under /et/ and an English one elsewhere", async ({ browser }) => {
  const context = await browser.newContext({ locale: "en-US" });
  const page = await context.newPage();
  await page.goto("/et/does-not-exist");
  await expect(page).toHaveURL(/\/et\/404\/?$/);
  await expect(page.getByRole("heading", { name: "Näib, et keerasid valesti." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Tagasi avalehele" })).toHaveAttribute("href", "/et/");
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: "Looks like a wrong turn." })).toBeVisible();
  await context.close();
});
