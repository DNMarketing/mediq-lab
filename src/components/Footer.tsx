import Link from "next/link";
import { NAV_LINKS, SKOOL_URL } from "@/lib/config";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Das Lern-Ökosystem für Medizinstudenten. Effizienter lernen, sicher
              bestehen – und teure Umwege vermeiden.
            </p>
          </div>

          <nav aria-label="Footer-Navigation" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-soft"
            >
              Zur Community →
            </a>
          </nav>

          <nav aria-label="Rechtliches" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Rechtliches
            </p>
            <Link
              href="/impressum"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {/* TODO: Jahr ggf. dynamisch */}2026 medIQ lab. Alle Rechte vorbehalten.</p>
          <p>
            medIQ lab ist kein Ersatz für offizielle Lehrveranstaltungen. Ergebnisse
            sind individuell.
          </p>
        </div>
      </Container>
    </footer>
  );
}
