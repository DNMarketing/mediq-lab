import { CAL_LERNPLAN_URL, SKOOL_URL } from "@/lib/config";
import { fill, localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

/** Kompakte Angebots-Section auf der Startseite: Mitgliedschaft im Monat, optional Lernplan. */
export function OfferTeaser({ lang, t, money, join }: { lang: Locale; t: Dict["offer"]; money: Dict["money"]; join: string }) {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading center eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 p-6 text-paper-light shadow-glow-teal sm:p-9">
          <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-semibold">{t.plan}</h3>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">{t.badge}</span>
              </div>
              <p className="mt-2 text-sm text-paper/75">{t.blurb}</p>
            </div>
            <div className="shrink-0">
              <div className="flex items-end gap-1.5">
                <span className="font-display text-5xl font-semibold">{money.monthly}</span>
                <span className="mb-2 text-sm text-paper/70">{t.per}</span>
              </div>
              <p className="mt-1 text-xs text-paper/60">{t.billing}</p>
            </div>
          </div>

          <ul className="relative mt-7 grid gap-2.5 border-t border-line-onDark pt-7 sm:grid-cols-2">
            {t.included.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-paper/90">
                <span aria-hidden className="mt-0.5 shrink-0 text-teal-300">
                  <MedIcon name="check" className="h-[17px] w-[17px]" strokeWidth={2} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="w-full sm:flex-1">
              {join}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href={localeHref(lang, "/programm")} variant="onDarkGhost" size="lg" external={false} className="w-full sm:w-auto">
              {t.details}
            </CTAButton>
          </div>
          <p className="relative mt-4 text-center text-xs text-paper/60">{t.note}</p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-6 flex max-w-3xl flex-col items-center justify-center gap-x-3 gap-y-1 text-center text-sm text-ink-soft sm:flex-row">
          <span>{fill(t.extra, money)}</span>
          <a
            href={CAL_LERNPLAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-petrol-700 underline decoration-copper-500/50 underline-offset-4 transition-colors hover:text-copper-600"
          >
            {t.extraCta}
            <MedIcon name="arrowRight" className="h-3.5 w-3.5" />
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
