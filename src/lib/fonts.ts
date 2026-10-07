import { Fraunces, IBM_Plex_Sans } from "next/font/google";

// Serif mit Charakter für Headlines
export const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// Seriöse, klare Sans für Fließtext
export const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});
