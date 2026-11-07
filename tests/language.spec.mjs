import { expect, test } from "@playwright/test";

const languageKey = "mabux.language.v1";

async function estonianBrowser(browser, options = {}) {
  return browser.newContext({ locale: "et-EE", ...options });
}

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
