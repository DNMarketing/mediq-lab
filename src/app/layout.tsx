import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
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
    <html lang="de" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
