import Link from "next/link";
import { NAV_LINKS, SKOOL_URL } from "@/lib/config";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { EkgLine } from "./ui/Anatomy";

export function Footer() {
  return (
    <footer
      data-mobilecta="hide"
      className="relative overflow-hidden border-t border-line bg-paper"
    >
      {/* dezente EKG-Signatur als Markenelement */}
      <div className="pointer-events-none absolute inset-x-0 top-0 text-petrol-700/15" aria-hidden>
        <EkgLine beats={8} strokeWidth={1.4} className="h-8" />
      </div>

      <Container className="relative py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 leading-relaxed text-ink-soft">
              Das Lern-Ökosystem für Medizinstudierende. Effizienter lernen, sicher
              bestehen, und teure Umwege vermeiden.
            </p>
          </div>

          <nav aria-label="Seiten" className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
              Seiten
            </p>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-petrol-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label="Loslegen" className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
              Loslegen
            </p>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-copper-600 transition-colors hover:text-copper-500"
            >
              Community beitreten →
            </a>
            <Link href="/programm" className="text-sm text-ink-soft transition-colors hover:text-petrol-700">
              Programm &amp; Preise
            </Link>
            <Link href="/kontakt" className="text-sm text-ink-soft transition-colors hover:text-petrol-700">
              Kontakt
            </Link>
          </nav>

          <nav aria-label="Rechtliches" className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">
              Rechtliches
            </p>
            <Link href="/impressum" className="text-sm text-ink-soft transition-colors hover:text-petrol-700">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm text-ink-soft transition-colors hover:text-petrol-700">
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 medIQ lab. Alle Rechte vorbehalten.</p>
          <p>
            medIQ lab ist kein Ersatz für offizielle Lehrveranstaltungen. Ergebnisse
            sind individuell.
          </p>
        </div>
      </Container>
    </footer>
  );
}
