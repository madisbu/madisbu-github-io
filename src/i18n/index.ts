import { en, type Dictionary } from "./en.ts";
import { et } from "./et.ts";

export const locales = ["en", "et"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = { en, et };

// Pages that exist in every locale. Anything else is English-only and is linked unprefixed.
const translatedPaths = new Set([
  "/",
  "/projects",
  "/about",
  "/cv",
  "/contact",
  "/privacy",
  "/projects/car-rental-app-redesign",
  "/projects/waste-disposal-website",
]);

export function hasTranslation(path: string): boolean {
  return translatedPaths.has(path);
}

const trimBase = (base: string) => base.replace(/\/$/, "");

// Splits a request pathname into its locale and a normalized, locale-free path
// ("/", "/about", "/projects/x": leading slash, no trailing slash).
export function parsePathname(pathname: string, base = "/"): { locale: Locale; path: string } {
  let rest = pathname;
  const prefix = trimBase(base);
  if (prefix && (rest === prefix || rest.startsWith(`${prefix}/`))) rest = rest.slice(prefix.length);
  let locale: Locale = defaultLocale;
  for (const candidate of locales) {
    if (candidate === defaultLocale) continue;
    if (rest === `/${candidate}` || rest.startsWith(`/${candidate}/`)) {
      locale = candidate;
      rest = rest.slice(candidate.length + 1);
      break;
    }
  }
  const path = `/${rest.replace(/^\/+|\/+$/g, "")}`;
  return { locale, path };
}

export function getLocale(pathname: string, base = "/"): Locale {
  return parsePathname(pathname, base).locale;
}

// URL for a locale-free path. Untranslated pages fall back to their English URL.
export function localizedPath(locale: Locale, path: string, base = "/"): string {
  const usePrefix = locale !== defaultLocale && hasTranslation(path);
  const prefixed = usePrefix ? (path === "/" ? `/${locale}/` : `/${locale}${path}`) : path;
  return `${trimBase(base)}${prefixed}`;
}

// The URL of the page the language switcher should link to for `target`.
export function alternatePath(target: Locale, pathname: string, base = "/"): string {
  const { path } = parsePathname(pathname, base);
  if (hasTranslation(path) || target === defaultLocale) return localizedPath(target, path, base);
  // No translated counterpart: land on the closest translated page.
  return localizedPath(target, path.startsWith("/projects/") ? "/projects" : "/", base);
}

// Static paths for `src/pages/[...lang]/*`: English at the root, other locales under /<locale>/.
export function localeStaticPaths() {
  return locales.map((locale) => ({ params: { lang: locale === defaultLocale ? undefined : locale } }));
}

export function formatTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match));
}
