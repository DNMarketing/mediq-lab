import type { Metadata } from "next";
import { LOCALES, LOCALE_TAGS, localeHref, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";

export const SITE_URL = "https://www.mediq-lab.de";

/** hreflang-Alternativen für eine Route in allen Sprachen (+ x-default = Deutsch). */
export function alternatesFor(lang: Locale, path: string): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[LOCALE_TAGS[l]] = `${SITE_URL}${localeHref(l, path)}/`.replace(/\/\/$/, "/");
  languages["x-default"] = `${SITE_URL}${localeHref("de", path)}/`.replace(/\/\/$/, "/");
  return {
    canonical: `${SITE_URL}${localeHref(lang, path)}/`.replace(/\/\/$/, "/"),
    languages,
  };
}

/** Site-weite Metadaten (Root-Layout) je Sprache. */
export function rootMetadata(lang: Locale): Metadata {
  const m = getDict(lang).meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.titleDefault, template: m.titleTemplate },
    description: m.description,
    openGraph: {
      title: m.ogTitle,
      description: m.ogDescription,
      type: "website",
      locale: LOCALE_TAGS[lang].replace("-", "_"),
    },
    robots: { index: true, follow: true },
  };
}

/** Seiten-Metadaten inkl. Canonical + hreflang. */
export function pageMetadata(
  lang: Locale,
  path: string,
  opts: { title: string; description?: string; noindex?: boolean },
): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: alternatesFor(lang, path),
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
