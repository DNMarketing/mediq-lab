import { CAL_INFO_URL, CAL_LERNPLAN_URL, SKOOL_URL } from "@/lib/config";
import { cn } from "@/lib/cn";
import { fill } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { MedIcon, type IconName } from "../ui/MedIcon";
import { EkgLine } from "../ui/EkgLine";

/** Je Schritt: Icon, Link des Haupt-CTAs, optional (gestrichelt). Reihenfolge = journey.steps. */
const STEP_META: { icon: IconName; href: string; optional: boolean }[] = [
  { icon: "pulse", href: CAL_INFO_URL, optional: false },
  { icon: "community", href: SKOOL_URL, optional: false },
  { icon: "repeat", href: CAL_INFO_URL, optional: true },
];

/**
 * Schritt-für-Schritt-Grafik: Statusanalyse → Workshops & Live-Events → monatliche
 * Check-ups (auf Wunsch). Desktop waagerecht mit EKG-Verbindern, Handy senkrecht.
 */
export function Journey({ t, money }: { t: Dict["journey"]; money: Dict["money"] }) {
  const link =
    "inline-flex items-center gap-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-sand rounded-sm";

  return (
    <Section id="ablauf" tone="sand">
      <Reveal>
        <SectionHeading center eyebrow={t.eyebrow} title={<Rich text={t.title} />} subtitle={t.subtitle} />
      </Reveal>

      <Stagger as="ol" gap={0.14} className="mx-auto mt-16 grid max-w-5xl gap-0 lg:grid-cols-3 lg:gap-8">
        {t.steps.map((s, i) => {
          const meta = STEP_META[i];
          const last = i === t.steps.length - 1;
          return (
            <StaggerItem as="li" key={s.title} className="relative flex gap-5 pb-12 last:pb-0 lg:block lg:pb-0">
              {/* Verbinder: Handy senkrecht, Desktop EKG-Kurve zum nächsten Schritt */}
              {!last && (
                <>
                  <span
                    className={cn(
                      "absolute left-7 top-16 bottom-2 w-px lg:hidden",
                      STEP_META[i + 1]?.optional ? "border-l border-dashed border-copper-500/60" : "bg-petrol-700/25",
                    )}
                    aria-hidden
                  />
                  <span className="absolute left-[4.5rem] right-[-1.25rem] top-3 hidden text-petrol-700 lg:block" aria-hidden>
                    <EkgLine beats={1} strokeWidth={1.4} className={cn("h-8", STEP_META[i + 1]?.optional && "opacity-60")} />
                  </span>
                </>
              )}

              {/* Knoten */}
              <div className="relative shrink-0">
                <span
                  className={cn(
                    "relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-soft",
                    meta.optional
                      ? "border-2 border-dashed border-copper-500 bg-paper-light text-copper-600"
                      : "bg-petrol-700 text-paper-light",
                  )}
                >
                  <MedIcon name={meta.icon} className="h-6 w-6" />
                </span>
              </div>

              {/* Inhalt */}
              <div className="min-w-0 lg:mt-7">
                <div className="flex h-6 flex-wrap items-center gap-2.5">
                  <span className="step-num text-xs font-semibold uppercase tracking-[0.18em] text-copper-600">
                    {t.step} {i + 1}
                  </span>
                  {meta.optional && (
                    <span className="rounded-full border border-copper-500/50 px-2.5 py-0.5 text-[11px] font-medium text-copper-600">
                      {t.optional}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-card bg-paper-light px-3 py-1.5 text-xs font-medium text-ink">
                  <MedIcon name="check" className="h-3.5 w-3.5 text-teal-600" strokeWidth={2.2} />
                  {fill(s.meta, money)}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  <a href={meta.href} target="_blank" rel="noopener noreferrer" className={cn(link, "text-petrol-700 hover:text-copper-600")}>
                    {s.cta}
                    <MedIcon name="arrowRight" className="h-4 w-4" />
                  </a>
                  {i === 0 && (
                    <a href={CAL_LERNPLAN_URL} target="_blank" rel="noopener noreferrer" className={cn(link, "text-ink-soft hover:text-copper-600")}>
                      {t.lernplanCta}
                      <MedIcon name="arrowRight" className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
