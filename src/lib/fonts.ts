import { Fraunces, IBM_Plex_Sans } from "next/font/google";

// Serif mit Charakter für Headlines
export const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
  // Nicht vorladen: Die zwei Fraunces-Dateien (~150 KB) konkurrierten mit der Fließtextschrift,
  // die auf dem Handy das LCP-Element trägt. Optik unverändert (Fallback mit angepassten Metriken, dann Swap).
  preload: false,
});

// Seriöse, klare Sans für Fließtext
export const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});
