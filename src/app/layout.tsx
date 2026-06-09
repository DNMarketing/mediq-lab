import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// Serif mit Charakter für Headlines
const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

// Seriöse, klare Sans für Fließtext
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "medIQ lab – Effizienter lernen. Sicher bestehen. Medizinstudium.",
  description:
    "Das Online-Lern-Ökosystem für Medizinstudenten: wissenschaftlich fundierte Lernmethoden, Prüfungsstrategie und eine Community, die dich durchs Studium trägt. Verlorene Semester und teure Wiederholungsjahre vermeiden.",
  metadataBase: new URL("https://www.mediqlab.de"), // TODO: finale Domain eintragen
  openGraph: {
    title: "medIQ lab – Effizienter lernen. Sicher bestehen.",
    description:
      "Wissenschaftlich fundiert durchs Medizinstudium. Workshop-Reihe + Community für Studenten an staatlichen, privaten und Auslands-Unis.",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-card focus:bg-petrol-700 focus:px-4 focus:py-2 focus:text-paper-light"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
