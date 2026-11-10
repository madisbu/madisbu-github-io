import type { Locale } from "../i18n";

export const LANGUAGE_KEY = "mabux.language.v1";

export function serializeLanguage(language: Locale): string {
  return JSON.stringify({ version: 1, language });
}
