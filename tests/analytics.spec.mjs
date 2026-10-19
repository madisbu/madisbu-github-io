import { expect, test } from "@playwright/test";

const production = "https://www.mabux.me";
const consentKey = "mabux.analytics-consent.v1";
const analyticsRequests = /https:\/\/[^/]*(googletagmanager\.com|google-analytics\.com)\//;

test.afterEach(async ({ context }) => {
  await context.unrouteAll({ behavior: "wait" });
});

async function mockProduction(context) {
  const requests = [];
  await context.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.origin === production) {
      const response = await context.request.get(`http://127.0.0.1:4323${url.pathname}`);
      await route.fulfill({ response });
    } else if (analyticsRequests.test(url.href)) {
      requests.push(url.href);
      // Do not load Google or send test visitor information to a third party.
      await route.fulfill({
        contentType: "application/javascript",
        body: "globalThis.__mockTagLoaded = true;",
      });
    } else {
      await route.abort();
    }
  });
  return requests;
}

async function commands(page) {
  return page.evaluate(() => (window.dataLayer ?? []).map((args) => Array.from(args)));
}

test("local preview stays off even with saved acceptance", async ({ page }) => {
  await page.addInitScript((key) => {
    localStorage.setItem(key, JSON.stringify({ version: 1, status: "accepted", expiresAt: Date.now() + 86400000 }));
  }, consentKey);
  const requests = [];
  page.on("request", (request) => {
    if (analyticsRequests.test(request.url())) requests.push(request.url());
  });
  await page.goto("/");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.getByRole("button", { name: "Cookies", exact: true }).click();
  await expect(page.getByRole("button", { name: "Accept analytics", exact: true })).toBeDisabled();
  expect(requests).toEqual([]);
  expect(await commands(page)).toEqual([]);
});

test("no Analytics before consent or after rejection; keyboard dismissal rejects", async ({ context, page }) => {
  const requests = await mockProduction(context);
  await page.goto(production);
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("button", { name: "Reject analytics", exact: true })).toBeFocused();
  expect(requests).toEqual([]);
  expect(await context.cookies()).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.reload();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(await page.evaluate((key) => JSON.parse(localStorage.getItem(key)).status, consentKey)).toBe("rejected");
  expect(requests).toEqual([]);
  expect(await commands(page)).toEqual([]);
});

test("accept once, sanitize URLs, record safe intent events, and withdraw", async ({ context, page }) => {
  const requests = await mockProduction(context);
  await page.goto(`${production}/contact/?email=private@example.com#secret`);
  await page.getByRole("button", { name: "Accept analytics", exact: true }).click();
  await expect.poll(() => requests.length).toBe(1);
  let queue = await commands(page);
  expect(queue.filter((args) => args[0] === "event" && args[1] === "page_view")).toHaveLength(1);
  expect(queue.find((args) => args[0] === "config")[2]).toMatchObject({
    send_page_view: false, cookie_expires: 5184000, cookie_update: false,
    allow_google_signals: false, allow_ad_personalization_signals: false,
    page_location: `${production}/contact/`,
  });
  expect(JSON.stringify(queue)).not.toContain("private@example.com");
  expect(JSON.stringify(queue)).not.toContain("#secret");
  await page.evaluate(() => {
    const link = document.querySelector('a[href^="mailto:"]');
    link.addEventListener("click", (event) => event.preventDefault());
    link.click();
  });
  queue = await commands(page);
  expect(queue.filter((args) => args[1] === "contact_click")).toEqual([
    ["event", "contact_click", { contact_method: "email" }],
  ]);
  await page.goto(`${production}/resume/`);
  await expect.poll(() => requests.length).toBe(2);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect((await commands(page)).filter((args) => args[1] === "page_view")).toHaveLength(1);
  await page.evaluate(() => {
    const link = document.querySelector('a[href="/resume.pdf"]');
    link.addEventListener("click", (event) => event.preventDefault());
    link.click();
    document.cookie = "_ga=test; Path=/; Secure";
    document.cookie = "_ga_WN68N9308Y=test; Domain=.mabux.me; Path=/; Secure";
  });
  expect((await commands(page)).filter((args) => args[1] === "resume_download")).toEqual([
    ["event", "resume_download", { file_name: "resume.pdf" }],
  ]);
  await page.getByRole("button", { name: "Cookies", exact: true }).click();
  await Promise.all([
    page.waitForEvent("load"),
    page.getByRole("button", { name: "Reject analytics", exact: true }).click(),
  ]);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect((await context.cookies()).filter((cookie) => cookie.name.startsWith("_ga"))).toEqual([]);
  expect(await commands(page)).toEqual([]);
  expect(requests).toHaveLength(2);
});

test("revocation in another tab stops an accepted tab", async ({ context, page }) => {
  const requests = await mockProduction(context);
  await page.goto(production);
  await page.getByRole("button", { name: "Accept analytics", exact: true }).click();
  await expect.poll(() => requests.length).toBe(1);
  const other = await context.newPage();
  await other.goto(`${production}/privacy/`);
  await expect.poll(() => requests.length).toBe(2);
  await other.getByRole("button", { name: "Cookies", exact: true }).first().click();
  await Promise.all([
    page.waitForEvent("load"),
    other.waitForEvent("load"),
    other.getByRole("button", { name: "Reject analytics", exact: true }).click(),
  ]);
  expect(await commands(page)).toEqual([]);
  expect(await commands(other)).toEqual([]);
  expect(requests).toHaveLength(2);
});

test("expired preferences and unavailable storage fail closed", async ({ context, page }) => {
  const requests = await mockProduction(context);
  await page.addInitScript((key) => {
    localStorage.setItem(key, JSON.stringify({ version: 1, status: "accepted", expiresAt: Date.now() - 1 }));
  }, consentKey);
  await page.goto(production);
  await expect(page.getByRole("dialog")).toBeVisible();
  expect(requests).toEqual([]);
  await page.evaluate(() => localStorage.clear());
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new DOMException("Blocked", "SecurityError"); };
    Storage.prototype.setItem = () => { throw new DOMException("Blocked", "SecurityError"); };
  });
  await page.reload();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("[data-consent-status]")).toContainText("cannot save");
  await page.getByRole("button", { name: "Reject analytics", exact: true }).click();
  expect(requests).toEqual([]);
});

test("mobile consent and persistent controls fit the viewport", async ({ context, page }) => {
  await mockProduction(context);
  await page.setViewportSize({ width: 360, height: 640 });
  await page.goto(production);
  await expect(page.getByRole("dialog")).toBeVisible();
  const dialog = await page.getByRole("dialog").boundingBox();
  expect(dialog.x).toBeGreaterThanOrEqual(0);
  expect(dialog.width + dialog.x).toBeLessThanOrEqual(360);
  expect(dialog.height + dialog.y).toBeLessThanOrEqual(640);
  await page.getByRole("button", { name: "Reject analytics", exact: true }).click();
  await expect(page.getByRole("button", { name: "Cookies", exact: true })).toBeInViewport();
  await page.getByRole("link", { name: "Privacy", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Privacy & cookies" })).toBeVisible();
  await page.getByRole("button", { name: "Cookies", exact: true }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
});

test("desktop privacy controls are centered in the footer row without a separate panel", async ({ context, page }) => {
  await mockProduction(context);
  for (const width of [640, 1024, 1440, 2110, 2560]) {
    await page.setViewportSize({ width, height: 1080 });
    await page.goto(production);
    if (await page.getByRole("dialog").isVisible()) {
      await page.getByRole("button", { name: "Reject analytics", exact: true }).click();
    }
    const copyright = await page.locator(".desktop-footer-copy").boundingBox();
    const controls = await page.locator(".privacy-controls").boundingBox();
    const social = await page.getByRole("navigation", { name: "Social links", exact: true }).boundingBox();
    const footerHeight = await page.locator("[data-site-footer]").evaluate((element) => element.getBoundingClientRect().height);
    expect(Math.abs(footerHeight - (width >= 2560 ? 105 : 81))).toBeLessThan(1);
    expect(Math.abs(controls.x + controls.width / 2 - width / 2)).toBeLessThan(2);
    expect(Math.abs(controls.y + controls.height / 2 - copyright.y - copyright.height / 2)).toBeLessThan(2);
    expect(Math.abs(controls.y + controls.height / 2 - social.y - social.height / 2)).toBeLessThan(2);
    expect(controls.x).toBeGreaterThanOrEqual(copyright.x + copyright.width);
    expect(controls.x + controls.width).toBeLessThanOrEqual(social.x);
    expect(await page.locator(".privacy-controls").evaluate((element) => getComputedStyle(element).borderTopWidth)).toBe("0px");
    await page.getByRole("button", { name: "Cookies", exact: true }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
  }
});

test("consent expiration unloads an active tag and requires a fresh choice", async ({ context, page }) => {
  const requests = await mockProduction(context);
  await page.clock.install();
  await page.addInitScript((key) => {
    if (!sessionStorage.getItem("test-seeded")) {
      localStorage.setItem(key, JSON.stringify({ version: 1, status: "accepted", expiresAt: Date.now() + 1000 }));
      sessionStorage.setItem("test-seeded", "true");
    }
  }, consentKey);
  await page.goto(production);
  await expect.poll(() => requests.length).toBe(1);
  await page.clock.fastForward(1001);
  await expect(page.getByRole("dialog")).toBeVisible();
  expect(await commands(page)).toEqual([]);
  expect(requests).toHaveLength(1);
});

test("privacy styling preserves touch targets, focus, and balanced responsive dialog actions", async ({ context, page }) => {
  await mockProduction(context);
  for (const viewport of [
    { width: 320, height: 568 },
    { width: 844, height: 390 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto(production);
    const settings = page.getByRole("button", { name: "Cookies", exact: true });
    if (!(await page.getByRole("dialog").isVisible())) await settings.click();
    const dialog = page.getByRole("dialog");
    const box = await dialog.boundingBox();
    expect(box.x).toBeGreaterThanOrEqual(0);
    expect(box.y).toBeGreaterThanOrEqual(0);
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
    expect(box.y + box.height).toBeLessThanOrEqual(viewport.height);
    const reject = page.getByRole("button", { name: "Reject analytics", exact: true });
    const accept = page.getByRole("button", { name: "Accept analytics", exact: true });
    const style = (element) => {
      const css = getComputedStyle(element);
      return { background: css.backgroundColor, color: css.color, border: css.border, weight: css.fontWeight };
    };
    expect(await accept.evaluate(style)).toEqual(await reject.evaluate(style));
    const rejectBox = await reject.boundingBox();
    const acceptBox = await accept.boundingBox();
    expect(rejectBox.width).toBe(acceptBox.width);
    expect(rejectBox.height).toBeGreaterThanOrEqual(44);
    expect(acceptBox.height).toBeGreaterThanOrEqual(44);
    await reject.click();
    expect(await settings.evaluate((element) => getComputedStyle(element).textDecorationLine)).toBe("none");
    expect(await page.locator(".privacy-separator").getAttribute("aria-hidden")).toBe("true");
    if (viewport.width < 1024) expect((await settings.boundingBox()).height).toBeGreaterThanOrEqual(44);
    const normal = await settings.evaluate((element) => getComputedStyle(element).backgroundColor);
    await settings.hover();
    expect(await settings.evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe(normal);
    await settings.focus();
    await page.keyboard.press("Tab");
    await page.keyboard.press("Shift+Tab");
    expect(await settings.evaluate((element) => getComputedStyle(element).outlineStyle)).toBe("solid");
    await page.keyboard.press("Enter");
    await expect(dialog).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(settings).toBeFocused();
  }
});

test("without JavaScript no Analytics loader is included", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const requests = await mockProduction(context);
    const page = await context.newPage();
    const response = await page.goto(production);
    expect(await response.text()).toContain("Analytics is off because JavaScript is disabled.");
    expect(await commands(page)).toEqual([]);
    expect(requests).toEqual([]);
    await expect(page.getByRole("link", { name: "Privacy", exact: true })).toBeVisible();
  } finally {
    await context.unrouteAll({ behavior: "wait" });
    await context.close();
  }
});
