"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { GuideCover } from "../ui/GuideCover";
import { MedIcon } from "../ui/MedIcon";

const inputClass =
  "w-full rounded-card border border-line-strong bg-paper-light px-4 py-3 text-ink placeholder:text-ink-mute transition-colors focus:border-petrol-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

/**
 * Produktbereich Anatomie Survival Guide: Cover je Sprachausgabe, Eckdaten,
 * (noch deaktivierter) Kauf-Button und Vormerk-Formular (Netlify Forms).
 */
export function ProductPanel({ lang, t, w }: { lang: Locale; t: Dict["pageShop"]["product"]; w: Dict["pageShop"]["waitlist"] }) {
  const initial = Math.max(0, t.langs.findIndex((l) => l.code.toLowerCase() === lang));
  const [sel, setSel] = useState(lang === "de" ? 0 : initial || 1);
  const edition = t.langs[sel];

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Cover */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <GuideCover word={edition.cover} code={edition.code} label={t.coverLabel} className="mx-auto w-full max-w-[19rem]" />
        </div>
      </div>

      {/* Details */}
      <div className="lg:col-span-7">
        <span className="inline-flex items-center gap-2 rounded-full bg-copper-100 px-3 py-1 text-xs font-semibold text-copper-600">
          <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden />
          {t.badge}
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute">{t.eyebrow}</p>
        <h2 className="mt-2 font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.018em] text-ink sm:text-[3rem]">{t.name}</h2>
        <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">{t.lead}</p>

        {/* Sprachausgabe */}
        <fieldset className="mt-8">
          <legend className="mb-3 text-sm font-medium text-ink">{t.langLabel}</legend>
          <div className="flex flex-wrap gap-2">
            {t.langs.map((l, i) => (
              <label
                key={l.code}
                className={cn(
                  "relative inline-flex cursor-pointer items-center gap-2 rounded-card border px-4 py-2.5 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-copper-500 has-[:focus-visible]:ring-offset-2",
                  i === sel ? "border-petrol-700 bg-paper-light text-petrol-700" : "border-line-strong text-ink-soft hover:border-petrol-700/50",
                )}
              >
                <input type="radio" name="ausgabe-vorschau" value={l.code} checked={i === sel} onChange={() => setSel(i)} className="sr-only" />
                <span className="font-semibold">{l.code}</span>
                <span>{l.label}</span>
                {l.planned && <span className="rounded-full bg-paper-sand px-2 py-0.5 text-[11px] text-ink-mute">{t.planned}</span>}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Eckdaten */}
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-4">
          {t.facts.map((f) => (
            <div key={f.k} className="bg-paper-light p-4">
              <dt className="text-xs text-ink-mute">{f.k}</dt>
              <dd className="mt-1 text-sm font-medium leading-snug text-ink">{f.v}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          disabled
          className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-card bg-petrol-700/40 px-7 py-3.5 text-[15px] font-medium text-paper-light sm:w-auto"
        >
          {t.buy}
        </button>

        {/* Vormerken (Netlify Forms, ein Formular für alle Sprachen) */}
        <form
          name="warteliste-anatomie-guide"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mt-8 rounded-card border border-line bg-paper-light p-6 shadow-soft sm:p-7"
        >
          <input type="hidden" name="form-name" value="warteliste-anatomie-guide" />
          <input type="hidden" name="sprache" value={lang} />
          <p className="hidden">
            <label>
              {w.honeypot} <input name="bot-field" />
            </label>
          </p>

          <h3 className="font-display text-xl font-semibold text-ink">{w.title}</h3>
          <p className="mt-1 text-sm text-ink-soft">{w.sub}</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]">
            <div>
              <label htmlFor="wl-email" className="mb-1.5 block text-sm font-medium text-ink">
                {w.email}
              </label>
              <input id="wl-email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
            <div>
              <label htmlFor="wl-ausgabe" className="mb-1.5 block text-sm font-medium text-ink">
                {w.lang}
              </label>
              <select id="wl-ausgabe" name="ausgabe" value={edition.code} onChange={(e) => setSel(t.langs.findIndex((l) => l.code === e.target.value))} className={inputClass}>
                {t.langs.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.code} · {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-card bg-petrol-700 px-7 py-3.5 text-[15px] font-medium text-paper-light transition-all duration-200 hover:bg-petrol-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-px sm:w-auto"
          >
            {w.submit}
            <MedIcon name="arrowRight" className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs leading-relaxed text-ink-mute">{w.consent}</p>
        </form>
      </div>
    </div>
  );
}
