/**
 * Mehrsprachigkeit: statisch gebaute Sprachversionen mit eigenen URLs.
 * Deutsch liegt im Root (/programm/), alle anderen Sprachen im Präfix
 * (/en/programm/). Jede Seite verlinkt per hreflang auf ihre Geschwister.
 */
export const LOCALES = ["de", "en", "fr", "it"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "de";

/** Nicht-deutsche Sprachen: bekommen das URL-Präfix und die [lang]-Routen. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_NAMES: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
  it: "Italiano",
};

/** BCP-47 für <html lang> und OpenGraph. */
export const LOCALE_TAGS: Record<Locale, string> = {
  de: "de-DE",
  en: "en",
  fr: "fr",
  it: "it",
};

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}

/** Interne Route (z. B. "/programm") in die URL der Sprache übersetzen. */
export function localeHref(lang: Locale, path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  if (lang === DEFAULT_LOCALE) return clean || "/";
  return `/${lang}${clean}` || `/${lang}`;
}

/** Aus einem Pathname Sprache und sprachfreien Pfad ermitteln. */
export function stripLocale(pathname: string): { lang: Locale; path: string } {
  const m = pathname.match(/^\/([a-z]{2})(\/|$)/);
  if (m && isLocale(m[1]) && m[1] !== DEFAULT_LOCALE) {
    const rest = pathname.slice(m[0].length - (m[2] ? 1 : 0)) || "/";
    return { lang: m[1], path: rest.startsWith("/") ? rest : `/${rest}` };
  }
  return { lang: DEFAULT_LOCALE, path: pathname || "/" };
}

/** Platzhalter wie {yearly} in Übersetzungen befüllen. */
export function fill(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}
