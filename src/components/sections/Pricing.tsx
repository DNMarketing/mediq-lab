import { SKOOL_URL } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { fill } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { EditorialImage } from "../ui/EditorialImage";

/** Ein Produkt, alles inklusive (Jahresmitgliedschaft). */
export function Pricing({ t, money, join }: { t: Dict["pageProgramm"]["pricing"]; money: Dict["money"]; join: string }) {
  return (
    <Section id="zugang" tone="light">
      <Reveal>
        <SectionHeading center eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-card border border-teal-400/30 bg-petrol-900 text-paper-light shadow-glow-teal">
          <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-1/2" aria-hidden />
          {/* warmes Community-Bild als edler Kopf */}
          <div className="relative">
            <EditorialImage src={IMAGES.community} alt={t.imgAlt} aspect="aspect-[16/6]" />
            <div className="absolute inset-0 bg-gradient-to-t from-petrol-900 via-petrol-900/55 to-transparent" aria-hidden />
            <span className="absolute right-5 top-5 rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-paper-light">{t.badge}</span>
          </div>

          <div className="relative p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-serif text-2xl font-medium text-paper-light sm:text-3xl">{t.plan}</h3>
                <p className="mt-2 max-w-md text-sm text-paper/75">{t.blurb}</p>
              </div>
              <div className="shrink-0">
                <div className="flex items-end gap-2">
                  <span className="font-serif text-5xl font-medium text-paper-light">{money.yearly}</span>
                  <span className="mb-2 text-sm text-paper/70">{t.perYear}</span>
                </div>
                <p className="mt-1 text-xs text-paper/60">{fill(t.perMonth, money)}</p>
              </div>
            </div>

            <p className="mt-6 rounded-card border border-line-onDark bg-petrol-800/50 p-4 text-xs leading-relaxed text-paper/80">{fill(t.compare, money)}</p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.included.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-paper/90">
                  <span aria-hidden className="mt-0.5 shrink-0 text-teal-300">
                    <MedIcon name="check" className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <CTAButton href={SKOOL_URL} variant="onDark" size="lg" className="mt-8 w-full">
              {join}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <p className="mt-3 text-center text-xs text-paper/70">{t.ctaNote}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-mute">{t.note}</p>
      </Reveal>
    </Section>
  );
}
