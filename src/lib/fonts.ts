import { Fraunces, IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";

// Überschriften: Schibsted Grotesk (klar, eigenständig, ohne Vorlagen-Look). Variable Font, eine Datei.
export const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Nur für die Wortmarke „medIQ“ (Logo, Cover): Fraunces aufrecht, wie auf den Skool-Kursbildern.
// Nicht vorladen, damit sie nicht mit den Textschriften konkurriert.
export const logo = Fraunces({
  subsets: ["latin"],
  variable: "--font-logo",
  display: "swap",
  style: ["normal"],
  weight: ["500"],
  preload: false,
});

// Seriöse, klare Sans für Fließtext
export const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});
