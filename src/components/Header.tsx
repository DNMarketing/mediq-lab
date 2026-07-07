"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SKOOL_URL } from "@/lib/config";
import { CTAButton } from "./ui/CTAButton";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route bei Navigation schließen
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center" title="Zur Startseite">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative text-sm transition-colors hover:text-petrol-700",
                  active ? "text-petrol-700" : "text-ink-soft",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-copper-500 transition-all duration-300",
                    active ? "w-full" : "w-0",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <CTAButton href={SKOOL_URL} size="md">
            Jetzt beitreten
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <div className="flex flex-col gap-1.5">
            <span className={cn("h-px w-6 bg-current transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-px w-6 bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("h-px w-6 bg-current transition-transform", open && "-translate-y-[7px] -rotate-45")} />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-paper-light md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "rounded-card px-3 py-2.5 text-sm transition-colors hover:bg-paper-sand hover:text-petrol-700",
                  isActive(link.href) ? "bg-paper-sand text-petrol-700" : "text-ink-soft",
                )}
              >
                {link.label}
              </Link>
            ))}
            <CTAButton href={SKOOL_URL} size="lg" className="mt-2 w-full">
              Jetzt beitreten
            </CTAButton>
          </Container>
        </div>
      )}
    </header>
  );
}
