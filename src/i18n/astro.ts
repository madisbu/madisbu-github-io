import { alternatePath, dictionaries, getLocale, localizedPath, parsePathname, type Locale } from "./index";

// Per-request i18n helpers for Astro components and pages.
export function useI18n(url: URL) {
  const base = import.meta.env.BASE_URL;
  const locale: Locale = getLocale(url.pathname, base);
  return {
    locale,
    t: dictionaries[locale],
    // Locale-free path of the current page, e.g. "/about".
    path: parsePathname(url.pathname, base).path,
    // Link to a locale-free path in the current language.
    href: (path: string) => localizedPath(locale, path, base),
    // Link to the current page in another language.
    alternate: (target: Locale) => alternatePath(target, url.pathname, base),
  };
}
