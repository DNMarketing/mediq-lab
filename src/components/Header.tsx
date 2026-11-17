"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { APP_URL, SKOOL_URL } from "@/lib/config";
import { localeHref, stripLocale, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { CTAButton } from "./ui/CTAButton";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Team steht im Footer und ist von „Über uns“ verlinkt; im Header Platz für Shop + KI-App.
const NAV: { key: keyof Dict["nav"]; path: string }[] = [
  { key: "methode", path: "/methode" },
  { key: "programm", path: "/programm" },
  { key: "ueber", path: "/ueber" },
  { key: "shop", path: "/shop" },
  { key: "faq", path: "/faq" },
  { key: "kontakt", path: "/kontakt" },
];

/** Externer Link zur KI-App, mit Pfeil nach rechts oben. */
function AppLink({ label, className }: { label: string; className?: string }) {
  return (
    <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </a>
  );
}

export function Header({
  lang,
  nav,
  common,
  langPath,
}: {
  lang: Locale;
  nav: Dict["nav"];
  common: Dict["common"];
  /** Fester Pfad für den Sprachumschalter (404-Seite). */
  langPath?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { path: current } = stripLocale(pathname || "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route bei Navigation schließen
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (path: string) => (path === "/" ? current === "/" : current.startsWith(path));

  return (
    <header
      className={cn(
        // Bewusst deckend statt backdrop-blur: ein Blur auf dem fixierten Header muss bei
        // jedem Scroll-Frame neu berechnet werden und flackert in Chrome/Safari, sobald
        // darunter Einblend-Animationen laufen.
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        scrolled || open ? "border-line bg-paper" : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href={localeHref(lang, "/")} className="flex items-center" title={common.toHome}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label={common.mainNav}>
          {NAV.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.key}
                href={localeHref(lang, link.path)}
                aria-current={active ? "page" : undefined}
                className={cn("relative text-sm transition-colors hover:text-petrol-700", active ? "text-petrol-700" : "text-ink-soft")}
              >
                {nav[link.key]}
                <span
                  className={cn("absolute -bottom-1.5 left-0 h-px bg-copper-500 transition-all duration-300", active ? "w-full" : "w-0")}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <AppLink
            label={nav.app}
            className="hidden items-center gap-1.5 rounded-card border border-line-strong px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-petrol-700 hover:text-petrol-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 xl:inline-flex"
          />
          <LanguageSwitcher lang={lang} label={common.language} fixedPath={langPath} />
          <CTAButton href={SKOOL_URL} size="md">
            {common.join}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} label={common.language} compact fixedPath={langPath} />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink"
          aria-expanded={open}
          aria-label={open ? common.menuClose : common.menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span className={cn("h-px w-6 bg-current transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-px w-6 bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px w-6 bg-current transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </div>
        </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper-light md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((link) => (
              <Link
                key={link.key}
                href={localeHref(lang, link.path)}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={cn(
                  "rounded-card px-3 py-2.5 text-sm transition-colors hover:bg-paper-sand hover:text-petrol-700",
                  isActive(link.path) ? "bg-paper-sand text-petrol-700" : "text-ink-soft",
                )}
              >
                {nav[link.key]}
              </Link>
            ))}
            <AppLink
              label={nav.app}
              className="inline-flex items-center gap-1.5 rounded-card px-3 py-2.5 text-sm text-ink-soft transition-colors hover:bg-paper-sand hover:text-petrol-700"
            />
            <div className="mt-3 border-t border-line px-3 pt-4">
              <LanguageSwitcher lang={lang} label={common.language} variant="chips" fixedPath={langPath} />
            </div>
            <CTAButton href={SKOOL_URL} size="lg" className="mt-3 w-full">
              {common.join}
            </CTAButton>
          </Container>
        </div>
      )}
    </header>
  );
}
