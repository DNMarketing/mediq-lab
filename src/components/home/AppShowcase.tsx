"use client";

import { useId, useRef, useState } from "react";
import { APP_URL } from "@/lib/config";
import { APP_SHOTS, appShot } from "@/lib/images";
import { cn } from "@/lib/cn";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { Picture } from "../ui/Picture";

/** Browser-Rahmen mit Adresszeile, damit klar ist: das ist die echte Web-App. */
function BrowserFrame({ children, host }: { children: React.ReactNode; host: string }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-line-strong bg-paper-light shadow-lift">
      <div className="flex items-center gap-3 border-b border-line bg-paper-sand px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-copper-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper-deep" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper-deep" />
        </span>
        <span className="mx-auto flex min-w-0 items-center gap-1.5 rounded-full bg-paper-light px-3 py-1 text-[11px] text-ink-mute">
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span className="truncate">{host}</span>
        </span>
        <span className="w-[42px]" aria-hidden />
      </div>
      {children}
    </div>
  );
}

/**
 * KI-Lernapp mit echten Screenshots: vier Funktionen als Tabs (Lernpfad,
 * KI-Erklärungen, Fehler-Arena, Fortschritt). Deutsche Screens auf /, englische sonst.
 */
export function AppShowcase({ lang, t }: { lang: Locale; t: Dict["appShowcase"] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const base = useId();
  const host = APP_URL.replace(/^https?:\/\//, "");

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = t.tabs.length;
    const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: n - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const j = (next + n) % n;
    setActive(j);
    tabRefs.current[j]?.focus();
  };

  return (
    <Section id="app" tone="paper">
      <Reveal>
        <SectionHeading center eyebrow={t.eyebrow} title={<Rich text={t.title} />} subtitle={t.subtitle} />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Tabs */}
        <Reveal className="lg:col-span-4">
          <div
            role="tablist"
            aria-label={t.tabsLabel}
            aria-orientation="vertical"
            className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-3 lg:overflow-visible lg:px-0"
          >
            {t.tabs.map((tab, i) => {
              const on = i === active;
              return (
                <button
                  key={tab.label}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  id={`${base}-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  aria-controls={`${base}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={cn(
                    "group shrink-0 snap-start rounded-card border text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
                    "px-4 py-2.5 lg:px-5 lg:py-4",
                    on
                      ? "border-petrol-700/30 bg-paper-light shadow-soft"
                      : "border-line bg-transparent hover:border-line-strong hover:bg-paper-light/60",
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "step-num hidden h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors lg:flex",
                        on ? "bg-petrol-700 text-paper-light" : "bg-paper-sand text-ink-soft",
                      )}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <span className={cn("text-sm font-medium lg:text-base", on ? "text-petrol-700" : "text-ink-soft")}>{tab.label}</span>
                  </span>
                  {/* Beschreibung nur am Desktop direkt im Tab */}
                  <span
                    className={cn(
                      "hidden overflow-hidden transition-all duration-300 lg:grid",
                      on ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="min-h-0 pl-10">
                      <span className="block font-display text-lg leading-snug text-ink">{tab.title}</span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-soft">{tab.body}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Screenshot */}
        <Reveal delay={0.1} className="lg:col-span-8">
          <div id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-tab-${active}`}>
            <BrowserFrame host={host}>
              <div className="relative aspect-[1600/752] bg-paper">
                {APP_SHOTS.map((name, i) => (
                  <Picture
                    key={name}
                    src={appShot(name, lang)}
                    alt={i === active ? t.tabs[i].alt : ""}
                    aria-hidden={i === active ? undefined : true}
                    loading="lazy"
                    decoding="async"
                    width={1600}
                    height={752}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500",
                      i === active ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
              </div>
            </BrowserFrame>

            {/* Beschreibung auf Handy/Tablet unter dem Bild */}
            <div className="mt-6 lg:hidden" aria-live="polite">
              <p className="font-display text-xl leading-snug text-ink">{t.tabs[active].title}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{t.tabs[active].body}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-line pt-10 sm:flex-row sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {t.features.map((f) => (
              <li key={f} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-light px-3.5 py-1.5 text-sm text-ink-soft">
                <MedIcon name="check" className="h-3.5 w-3.5 text-teal-600" strokeWidth={2.2} />
                {f}
              </li>
            ))}
          </ul>
          <CTAButton href={APP_URL} size="lg" className="w-full sm:w-auto">
            {t.cta}
            <MedIcon name="arrowRight" className="h-4 w-4" />
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
