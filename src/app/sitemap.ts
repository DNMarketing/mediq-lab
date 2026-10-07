import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_TAGS, localeHref } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/** Statische Sitemap: alle öffentlichen Routen in allen Sprachen, mit hreflang-Alternativen. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/programm", priority: 0.9 },
    { path: "/methode", priority: 0.8 },
    { path: "/ueber", priority: 0.7 },
    { path: "/team", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/kontakt", priority: 0.5 },
  ];
  const abs = (lang: (typeof LOCALES)[number], path: string) => `${SITE_URL}${localeHref(lang, path)}/`.replace(/\/\/$/, "/");

  return routes.flatMap((r) =>
    LOCALES.map((lang) => ({
      url: abs(lang, r.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: lang === "de" ? r.priority : Math.max(0.3, r.priority - 0.2),
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_TAGS[l], abs(l, r.path)])),
      },
    })),
  );
}
