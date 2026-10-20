import "./globals.css";
import type { Metadata } from "next";
import { RootShell } from "@/components/RootShell";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon } from "@/components/ui/MedIcon";
import { getDict } from "@/i18n";
import { LOCALES, LOCALE_NAMES, localePath } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo";

/**
 * Fehlerseite für unbekannte Adressen (out/404.html, von Netlify mit Status 404 ausgeliefert).
 * Wegen der zwei Root-Layouts ((de) und [lang]) als global-not-found statt not-found.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Seite nicht gefunden · medIQ lab",
  // Kein robots: Next setzt auf der Fehlerseite selbst noindex.
  // Bilder explizit, sonst löst Next das Datei-OG-Bild ohne metadataBase auf (localhost:3000).
  openGraph: { images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image.png"] },
};

export default function GlobalNotFound() {
  const d = getDict("de");
  return (
    <RootShell lang="de" langPath="/">
      <PageIntro
        eyebrow="Fehler 404"
        title="Diese Seite gibt es nicht."
        lead="Vielleicht hat sich ein Tippfehler eingeschlichen oder die Seite ist umgezogen. Hier geht es weiter:"
        actions={
          <>
            <CTAButton href="/" size="lg" external={false}>
              {d.common.toHome}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/methode/" variant="secondary" size="lg" external={false}>
              {d.nav.methode}
            </CTAButton>
            <CTAButton href="/faq/" variant="secondary" size="lg" external={false}>
              {d.nav.faq}
            </CTAButton>
          </>
        }
      />
      <Container>
        <p className="pb-24 text-sm text-ink-mute">
          {LOCALES.filter((l) => l !== "de").map((l, i) => (
            <span key={l}>
              {i > 0 && " · "}
              <a href={localePath(l, "/")} hrefLang={l} lang={l} className="underline-offset-4 hover:text-petrol-700 hover:underline">
                {LOCALE_NAMES[l]}
              </a>
            </span>
          ))}
        </p>
      </Container>
    </RootShell>
  );
}
