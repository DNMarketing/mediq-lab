"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { LOCALES, LOCALE_NAMES, localeHref, stripLocale, type Locale } from "@/i18n/config";

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
  </svg>
);

/**
 * Sprachumschalter: führt auf dieselbe Seite in der anderen Sprache
 * (/programm/ ↔ /en/programm/). Desktop als Dropdown, mobil als Chip-Reihe.
 */
export function LanguageSwitcher({
  lang,
  label,
  variant = "dropdown",
  compact = false,
}: {
  lang: Locale;
  label: string;
  variant?: "dropdown" | "chips";
  /** Nur Sprachkürzel statt Name (Handy-Header). */
  compact?: boolean;
}) {
  const pathname = usePathname() || "/";
  const { path } = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "chips") {
    return (
      <div className="flex flex-wrap items-center gap-2" aria-label={label}>
        <span className="mr-1 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-ink-mute">
          <GlobeIcon /> {label}
        </span>
        {LOCALES.map((l) => (
          <a
            key={l}
            href={localeHref(l, path)}
            hrefLang={l}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              l === lang
                ? "border-petrol-700 bg-petrol-700 text-paper-light"
                : "border-line-strong text-ink-soft hover:border-petrol-700 hover:text-petrol-700",
            )}
          >
            {LOCALE_NAMES[l]}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={label}
        className={cn(
          "inline-flex items-center gap-2 rounded-card border border-copper-500/50 bg-copper-100/70 font-semibold text-copper-600 shadow-soft transition-all duration-200 hover:border-copper-500 hover:bg-copper-100 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
          compact ? "h-10 px-3 text-xs uppercase tracking-[0.12em]" : "h-10 px-3.5 text-sm",
        )}
      >
        <GlobeIcon />
        {compact ? lang : LOCALE_NAMES[lang]}
        <svg viewBox="0 0 24 24" className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[11rem] overflow-hidden rounded-card border border-copper-500/30 bg-paper-light py-1 shadow-lift"
        >
          {LOCALES.map((l) => (
            <li key={l} role="none">
              <a
                role="menuitem"
                href={localeHref(l, path)}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? "true" : undefined}
                className={cn(
                  "flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-copper-100/60 hover:text-copper-600",
                  l === lang ? "font-semibold text-copper-600" : "text-ink-soft",
                )}
              >
                {LOCALE_NAMES[l]}
                {l === lang && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
