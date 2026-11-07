import type { Locale } from "../i18n";

export const LANGUAGE_KEY = "mabux.language.v1";

export function serializeLanguage(language: Locale): string {
  return JSON.stringify({ version: 1, language });
}

export function readLanguage(value: string | null): Locale | null {
  if (!value) return null;
  try {
    const saved: unknown = JSON.parse(value);
    if (typeof saved === "object" && saved !== null && "version" in saved && saved.version === 1 &&
      "language" in saved && (saved.language === "en" || saved.language === "et")) {
      return saved.language;
    }
  } catch {
    // Invalid saved value: treat as no preference.
  }
  return null;
}

// A saved choice wins; otherwise only the browser's first-choice language counts.
export function preferredLanguage(saved: Locale | null, browserLanguages: readonly string[]): Locale {
  if (saved) return saved;
  return browserLanguages[0]?.toLowerCase().split("-")[0] === "et" ? "et" : "en";
}
