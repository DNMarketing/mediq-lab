"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SKOOL_URL } from "@/lib/config";
import { CTAButton } from "./ui/CTAButton";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center" aria-label="medIQ lab Startseite">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton href={SKOOL_URL} size="md">
            Jetzt beitreten
          </CTAButton>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-slate-300 md:hidden"
          aria-expanded={open}
          aria-label="Menü öffnen"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-5 bg-current transition-transform",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span className={cn("h-0.5 w-5 bg-current transition-opacity", open && "opacity-0")} />
            <span
              className={cn(
                "h-0.5 w-5 bg-current transition-transform",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </Container>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-line bg-ink-950/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-ink-800 hover:text-white"
              >
                {link.label}
              </a>
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
