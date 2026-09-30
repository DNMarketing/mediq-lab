import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { MedIQChat } from "@/components/MedIQChat";

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
  metadataBase: new URL("https://www.mediq-lab.de"), // finale Domain (mit Bindestrich, lt. Kunde)
  title: {
    default: "medIQ lab: Effizienter lernen. Sicher bestehen. Für Medizinstudierende in DE & EU-Ausland.",
    template: "%s · medIQ lab",
  },
  description:
    "Das Lern-Ökosystem für Medizinstudierende in Deutschland und im EU-Ausland: wissenschaftlich fundierte Lernmethoden, Prüfungsstrategie, eigene KI-Lernapp und eine Community, die dich durchs Studium trägt. Eine Mitgliedschaft, alles inklusive.",
  openGraph: {
    title: "medIQ lab: Effizienter lernen. Sicher bestehen.",
    description:
      "Wissenschaftlich fundiert durchs Medizinstudium, in Deutschland und im Ausland. Workshops, Lernzettel, KI-Lernapp und Community in einer Mitgliedschaft.",
    type: "website",
    locale: "de_DE",
  },
  // Preview: nicht indexieren. Vor dem echten Go-Live auf { index: true, follow: true } setzen.
  robots: { index: false, follow: false },
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
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-card focus:bg-petrol-700 focus:px-4 focus:py-2 focus:text-paper-light"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <MobileCTABar />
        <MedIQChat />
      </body>
    </html>
  );
}
