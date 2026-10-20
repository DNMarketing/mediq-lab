import type { Metadata } from "next";
import { LOCALES, LOCALE_TAGS, localeHref, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { CONTACT_EMAIL, INSTAGRAM_URL, SKOOL_URL } from "@/lib/config";

export const SITE_URL = "https://www.mediq-lab.de";

/** og:locale braucht Sprache_Region, unabhängig von hreflang/lang (LOCALE_TAGS). */
const OG_LOCALE: Record<Locale, string> = { de: "de_DE", en: "en_GB", fr: "fr_FR", it: "it_IT" };

const OG_IMAGE = { url: "/opengraph-image.png", width: 1200, height: 630, alt: "medIQ lab" };

/** Absolute, kanonische URL einer Route in einer Sprache (mit Schrägstrich am Ende). */
export function absoluteUrl(lang: Locale, path: string): string {
  return `${SITE_URL}${localeHref(lang, path)}/`.replace(/\/\/$/, "/");
}

/** hreflang-Alternativen für eine Route in allen Sprachen (+ x-default = Deutsch). */
export function alternatesFor(lang: Locale, path: string): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[LOCALE_TAGS[l]] = absoluteUrl(l, path);
  languages["x-default"] = absoluteUrl("de", path);
  return {
    canonical: absoluteUrl(lang, path),
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
      siteName: "medIQ lab",
      locale: OG_LOCALE[lang],
    },
    robots: { index: true, follow: true },
    // Google Search Console, Property https://www.mediq-lab.de/ (Bestätigung per HTML-Tag)
    verification: { google: "EHkQesIief2QwQWce9SkAZXGMfT4yvwsjgt9PGsZ6IQ" },
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
    // undefined nicht durchreichen: würde die Description aus dem Root-Layout überschreiben
    ...(opts.description ? { description: opts.description } : {}),
    alternates: alternatesFor(lang, path),
    // Eigenes og:url je Seite; og:title/og:description übernimmt Next aus title/description der Seite.
    // type und images explizit, weil Next openGraph flach zusammenführt.
    openGraph: {
      type: "website",
      siteName: "medIQ lab",
      locale: OG_LOCALE[lang],
      url: absoluteUrl(lang, path),
      images: [OG_IMAGE],
    },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** JSON-LD der Startseiten: Organisation, Website, Seite. Nur Angaben, die sichtbar auf der Website stehen. */
export function homeGraph(lang: Locale) {
  const m = getDict(lang).meta;
  const url = absoluteUrl(lang, "/");
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "medIQ lab",
        url: `${SITE_URL}/`,
        logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: `${SITE_URL}/apple-icon.png`, width: 180, height: 180 },
        email: CONTACT_EMAIL,
        sameAs: [INSTAGRAM_URL, SKOOL_URL],
        parentOrganization: { "@type": "Organization", name: "schlenker advisory GmbH" },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: "medIQ lab",
        inLanguage: LOCALES.map((l) => LOCALE_TAGS[l]),
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: m.titleDefault,
        description: m.description,
        inLanguage: LOCALE_TAGS[lang],
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
      },
    ],
  };
}
