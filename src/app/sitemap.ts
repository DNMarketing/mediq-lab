import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.mediq-lab.de";

/** Statische Sitemap für den Export (alle öffentlichen Routen). */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/programm", priority: 0.9 },
    { path: "/methode", priority: 0.8 },
    { path: "/ueber", priority: 0.7 },
    { path: "/team", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/kontakt", priority: 0.5 },
  ];
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
