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
    <div className="min-h-screen">
      <header className="border-b border-line">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Zurück zur Startseite">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            ← Zurück
          </Link>
        </Container>
      </header>

      <main>
        <Container className="max-w-3xl py-16 sm:py-24">
          <div className="mb-8 flex items-center gap-3">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>
            <PlaceholderBadge />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-slate-400">
            {children}
          </div>
        </Container>
      </main>

      <footer className="border-t border-line">
        <Container className="py-8 text-xs text-slate-600">
          <Link href="/" className="hover:text-slate-300">
            medIQ lab
          </Link>{" "}
          · <Link href="/impressum" className="hover:text-slate-300">Impressum</Link>{" "}
          · <Link href="/datenschutz" className="hover:text-slate-300">Datenschutz</Link>
        </Container>
      </footer>
    </div>
  );
}
