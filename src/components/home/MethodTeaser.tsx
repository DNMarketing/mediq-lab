import { localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { PillarGrid } from "../sections/PillarGrid";

/** Kurz-Methode für die Startseite (vier Säulen) → führt auf /methode. */
export function MethodTeaser({ lang, t, pillars }: { lang: Locale; t: Dict["methodTeaser"]; pillars: Dict["pillars"] }) {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading center eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
      </Reveal>

      <PillarGrid pillars={pillars} className="mt-14" />

      <Reveal delay={0.15}>
        <div className="mt-10 flex justify-center">
          <CTAButton href={localeHref(lang, "/methode")} external={false} size="lg">
            {t.cta}
            <MedIcon name="arrowRight" className="h-4 w-4" />
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
