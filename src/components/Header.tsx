"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { SKOOL_URL } from "@/lib/config";
import { localeHref, stripLocale, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { CTAButton } from "./ui/CTAButton";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV: { key: keyof Dict["nav"]; path: string }[] = [
  { key: "methode", path: "/methode" },
  { key: "programm", path: "/programm" },
  { key: "team", path: "/team" },
  { key: "ueber", path: "/ueber" },
  { key: "faq", path: "/faq" },
  { key: "kontakt", path: "/kontakt" },
];

export function Header({ lang, nav, common }: { lang: Locale; nav: Dict["nav"]; common: Dict["common"] }) {
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line bg-paper/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href={localeHref(lang, "/")} className="flex items-center" title={common.toHome}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label={common.mainNav}>
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
          <LanguageSwitcher lang={lang} label={common.language} />
          <CTAButton href={SKOOL_URL} size="md">
            {common.join}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher lang={lang} label={common.language} compact />
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
            <div className="mt-3 border-t border-line px-3 pt-4">
              <LanguageSwitcher lang={lang} label={common.language} variant="chips" />
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
