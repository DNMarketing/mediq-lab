import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_TAGS } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Statische Sitemap: alle öffentlichen Routen in allen Sprachen, mit hreflang-Alternativen und x-default.
 * Kein lastmod: ein Build-Datum ohne inhaltliche Änderung ist kein verlässliches Signal (Google ignoriert es dann).
 * changefreq und priority wertet Google nicht aus.
 */
const ROUTES = ["/", "/programm", "/methode", "/ueber", "/team", "/faq", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((path) =>
    LOCALES.map((lang) => ({
      url: absoluteUrl(lang, path),
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l], absoluteUrl(l, path)])),
          "x-default": absoluteUrl("de", path),
        },
      },
    })),
  );
}
