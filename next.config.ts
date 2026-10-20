import type { NextConfig } from "next";

// GitHub-Pages-Preview läuft im Unterpfad dnmarketing.github.io/mediq-lab.
// Für Netlify (eigene Domain im Root) einfach BASE_PATH leer lassen / Variable weglassen.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Statischer Export → deploy-ready für Netlify (oder jeden Static-Host).
  output: "export",
  basePath,
  // basePath für den Client verfügbar machen (für <img>-Pfade aus /public).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // Für statischen Export muss die Next-Image-Optimierung deaktiviert sein.
    unoptimized: true,
  },
  trailingSlash: true,
  // Eigene 404-Seite trotz zwei Root-Layouts ((de) und [lang]): src/app/global-not-found.tsx
  // inlineCss: CSS (~8 KB komprimiert) direkt ins HTML statt render-blockierender Datei (mobiler LCP).
  experimental: { globalNotFound: true, inlineCss: true },
};

export default nextConfig;
