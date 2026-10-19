export const CONSENT_KEY = "mabux.analytics-consent.v1";
export const CONSENT_LIFETIME = 180 * 24 * 60 * 60 * 1000;
export const ANALYTICS_COOKIE_LIFETIME = 60 * 24 * 60 * 60;

export type ConsentStatus = "accepted" | "rejected";

export function readConsent(value: string | null, now = Date.now()): {
  status: ConsentStatus;
  expiresAt: number;
} | null {
  if (!value) return null;
  let consent: unknown;
  try {
    consent = JSON.parse(value);
  } catch (error) {
    console.warn("Invalid saved analytics preference; consent is required again.", error);
    return null;
  }
  if (
    typeof consent !== "object" || consent === null ||
    !("version" in consent) || consent.version !== 1 ||
    !("status" in consent) || (consent.status !== "accepted" && consent.status !== "rejected") ||
    !("expiresAt" in consent) || typeof consent.expiresAt !== "number" ||
    !Number.isFinite(consent.expiresAt) || consent.expiresAt <= now ||
    consent.expiresAt > now + CONSENT_LIFETIME
  ) return null;
  return { status: consent.status, expiresAt: consent.expiresAt };
}

export function isAnalyticsAllowed(production: boolean, measurementId: string, location: URL): boolean {
  return production && /^G-[A-Z0-9]+$/.test(measurementId) &&
    location.origin === "https://www.mabux.me";
}

export function analyticsPageUrl(value: string): string {
  const url = new URL(value);
  return `${url.origin}${url.pathname}`;
}
