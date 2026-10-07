import Link from "next/link";
import { SKOOL_URL } from "@/lib/config";
import { localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { EkgLine } from "./ui/Anatomy";

const NAV: { key: keyof Dict["nav"]; path: string }[] = [
  { key: "methode", path: "/methode" },
  { key: "programm", path: "/programm" },
  { key: "team", path: "/team" },
  { key: "ueber", path: "/ueber" },
  { key: "faq", path: "/faq" },
  { key: "kontakt", path: "/kontakt" },
];

export function Footer({ lang, t, nav }: { lang: Locale; t: Dict["footer"]; nav: Dict["nav"] }) {
  const link = "text-sm text-ink-soft transition-colors hover:text-petrol-700";
  return (
    <footer data-mobilecta="hide" className="relative overflow-hidden border-t border-line bg-paper">
      {/* dezente EKG-Signatur als Markenelement */}
      <div className="pointer-events-none absolute inset-x-0 top-0 text-petrol-700/15" aria-hidden>
        <EkgLine beats={8} strokeWidth={1.4} className="h-8" />
      </div>

      <Container className="relative py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 font-serif text-sm italic text-petrol-700">{t.tagline}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">{t.blurb}</p>
          </div>

          <nav aria-label={t.pages} className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">{t.pages}</p>
            {NAV.map((l) => (
              <Link key={l.key} href={localeHref(lang, l.path)} className={link}>
                {nav[l.key]}
              </Link>
            ))}
          </nav>

          <nav aria-label={t.start} className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">{t.start}</p>
            <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-copper-600 transition-colors hover:text-copper-500">
              {t.joinCommunity}
            </a>
            <Link href={localeHref(lang, "/programm")} className={link}>
              {t.programmPreise}
            </Link>
            <Link href={localeHref(lang, "/kontakt")} className={link}>
              {nav.kontakt}
            </Link>
          </nav>

          <nav aria-label={t.legal} className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-mute">{t.legal}</p>
            <Link href={localeHref(lang, "/impressum")} className={link}>
              {t.impressum}
            </Link>
            <Link href={localeHref(lang, "/datenschutz")} className={link}>
              {t.datenschutz}
            </Link>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>{t.rights}</p>
          <p>{t.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}
