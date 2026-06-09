import Link from "next/link";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { PlaceholderBadge } from "./ui/Badge";

/**
 * Gerüst für Rechtstexte (/impressum, /datenschutz).
 * Inhalte sind bewusst leer – vor dem Go-Live mit rechtskonformen Texten
 * befüllen (DSGVO-Pflicht).
 */
export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line">
        <Container className="flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="Zurück zur Startseite">
            <Logo />
          </Link>
          <Link href="/" className="text-sm text-ink-soft transition-colors hover:text-petrol-700">
            ← Zurück
          </Link>
        </Container>
      </header>

      <main>
        <Container className="max-w-3xl py-16 sm:py-24">
          <div className="mb-8 flex items-center gap-3">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {title}
            </h1>
            <PlaceholderBadge />
          </div>
          <div className="space-y-4 leading-relaxed text-ink-soft">{children}</div>
        </Container>
      </main>

      <footer className="border-t border-line">
        <Container className="py-8 text-xs text-ink-mute">
          <Link href="/" className="hover:text-petrol-700">
            medIQ lab
          </Link>{" "}
          · <Link href="/impressum" className="hover:text-petrol-700">Impressum</Link>{" "}
          · <Link href="/datenschutz" className="hover:text-petrol-700">Datenschutz</Link>
        </Container>
      </footer>
    </div>
  );
}
