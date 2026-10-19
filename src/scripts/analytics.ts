import {
  ANALYTICS_COOKIE_LIFETIME,
  CONSENT_KEY,
  CONSENT_LIFETIME,
  analyticsPageUrl,
  isAnalyticsAllowed,
  readConsent,
  type ConsentStatus,
} from "../utils/analytics-consent";

declare global {
  interface Window {
    dataLayer?: IArguments[];
    gtag?: (...args: unknown[]) => void;
  }
}

const root = document.querySelector<HTMLElement>("[data-analytics-consent]");
const dialog = root?.querySelector<HTMLDialogElement>("dialog");
const notice = root?.querySelector<HTMLElement>("[data-consent-status]");
const accept = root?.querySelector<HTMLButtonElement>("[data-consent-accept]");
const measurementId = root?.dataset.measurementId ?? "";
const allowed = isAnalyticsAllowed(root?.dataset.production === "true", measurementId, new URL(location.href));
let active = false;
let expiryTimer: ReturnType<typeof setTimeout> | undefined;
let preference: ReturnType<typeof readConsent> = null;

function report(message: string, error?: unknown) {
  console.error(message, error ?? "");
  if (notice) notice.textContent = message;
}

function savedPreference() {
  try {
    return readConsent(localStorage.getItem(CONSENT_KEY));
  } catch (error) {
    report("Your browser cannot save cookie choices. Analytics stays off until you accept on this page.", error);
    return null;
  }
}

function clearAnalyticsCookies() {
  const domains = ["", location.hostname, ".mabux.me"];
  const segments = location.pathname.split("/");
  const paths = new Set(["/", ...segments.map((_, index) => segments.slice(0, index + 1).join("/") || "/")]);
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (name !== "_ga" && !name.startsWith("_ga_")) continue;
    for (const domain of domains) {
      for (const path of paths) {
        document.cookie = `${name}=; Max-Age=0; Path=${path};${domain ? ` Domain=${domain};` : ""} SameSite=Lax; Secure`;
      }
    }
  }
}

function stopAnalytics() {
  // Reload unloads Google's listeners and in-flight loader before another choice.
  Reflect.set(window, `ga-disable-${measurementId}`, true);
  clearAnalyticsCookies();
  if (active) location.reload();
}

function startAnalytics() {
  if (!allowed || active || preference?.status !== "accepted") return;
  active = true;
  Reflect.set(window, `ga-disable-${measurementId}`, false);
  window.dataLayer = [];
  window.gtag = function () { window.dataLayer?.push(arguments); };
  const gtag = window.gtag;
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  gtag("config", measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: ANALYTICS_COOKIE_LIFETIME,
    cookie_update: false,
    cookie_flags: "SameSite=Lax;Secure",
    page_location: analyticsPageUrl(location.href),
    page_referrer: document.referrer ? analyticsPageUrl(document.referrer) : "",
  });
  gtag("event", "page_view", {
    page_location: analyticsPageUrl(location.href),
    page_title: document.title,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.onerror = (error) => report("Analytics could not load. You can still use the entire website.", error);
  document.head.append(script);
}

function scheduleExpiry() {
  clearTimeout(expiryTimer);
  if (preference) {
    // Timers are limited to a signed 32-bit delay; recheck long-lived tabs daily.
    expiryTimer = setTimeout(() => {
      if (preference && preference.expiresAt <= Date.now()) {
        preference = null;
        stopAnalytics();
        if (allowed && !dialog?.open) dialog?.showModal();
      } else scheduleExpiry();
    }, Math.min(preference.expiresAt - Date.now(), 24 * 60 * 60 * 1000));
  }
}

function choose(status: ConsentStatus) {
  preference = { status, expiresAt: Date.now() + CONSENT_LIFETIME };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ version: 1, ...preference }));
  } catch (error) {
    report("Your choice applies to this page only because browser storage is unavailable.", error);
  }
  scheduleExpiry();
  dialog?.close();
  if (status === "accepted") startAnalytics();
  else stopAnalytics();
}

if (root && dialog && accept) {
  preference = savedPreference();
  accept.disabled = !allowed;
  root.querySelector("[data-consent-reject]")?.addEventListener("click", () => choose("rejected"));
  accept.addEventListener("click", () => choose("accepted"));
  document.querySelectorAll("[data-cookie-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      if (notice) notice.textContent = allowed
        ? `Analytics is ${active ? "on" : "off"}. You can change your choice below.`
        : "Analytics is disabled on this address or build. No analytics data is sent.";
      dialog.showModal();
    });
  });
  // Escape dismisses the dialog without granting permission.
  dialog.addEventListener("cancel", () => {
    if (!preference) choose("rejected");
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== CONSENT_KEY && event.key !== null) return;
    preference = savedPreference();
    if (preference?.status !== "accepted") {
      stopAnalytics();
    } else {
      startAnalytics();
    }
    scheduleExpiry();
  });
  document.addEventListener("click", (event) => {
    if (!active || preference?.status !== "accepted" || preference.expiresAt <= Date.now()) return;
    const contactTarget = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-contact-method]") : null;
    if (contactTarget?.dataset.contactMethod) {
      window.gtag?.("event", "contact_click", { contact_method: contactTarget.dataset.contactMethod });
      return;
    }
    const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!(link instanceof HTMLAnchorElement)) return;
    const url = new URL(link.href);
    if (url.protocol === "mailto:") {
      window.gtag?.("event", "contact_click", { contact_method: "email" });
    } else if (url.origin === location.origin && url.pathname === "/resume.pdf") {
      window.gtag?.("event", "resume_download", { file_name: "resume.pdf" });
    }
  });
  if (preference?.status === "accepted") startAnalytics();
  else clearAnalyticsCookies();
  scheduleExpiry();
  if (allowed && !preference) dialog.showModal();
}
