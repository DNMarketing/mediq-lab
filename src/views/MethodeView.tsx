import { SKOOL_URL } from "@/lib/config";
import { fill, localeHref, type Locale } from "@/i18n/config";
import { getDict, Rich } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon, type IconName } from "@/components/ui/MedIcon";
import { AnatomyBrain } from "@/components/ui/Anatomy";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { Problem } from "@/components/sections/Problem";
import { MethodPrinciples } from "@/components/sections/MethodPrinciples";
import { CTABand } from "@/components/sections/CTABand";
import { spotsLabel } from "./HomeView";

const PRACTICE_ICONS: IconName[] = ["repeat", "structure", "exam", "mind"];

const BrainVisual = (
  <div className="relative mx-auto max-w-md">
    <div className="relative aspect-square">
      <div className="absolute inset-0 rounded-full border border-line" aria-hidden />
      <div className="absolute inset-[8%] rounded-full border border-teal-300/40" aria-hidden />
      <div className="absolute inset-[8%] rounded-full bg-paper-light/60 shadow-soft" aria-hidden />
      <div className="absolute inset-[19%] text-petrol-700">
        <AnatomyBrain strokeWidth={1.7} />
      </div>
    </div>
  </div>
);

export function methodeMeta(lang: Locale) {
  const t = getDict(lang).pageMethode;
  return pageMetadata(lang, "/methode", { title: t.title, description: t.description });
}

export function MethodeView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageMethode;
  return (
    <>
      <PageIntro
        eyebrow={t.intro.eyebrow}
        title={<Rich text={t.intro.title} />}
        lead={t.intro.lead}
        visual={BrainVisual}
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              {d.common.join}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href={localeHref(lang, "/programm")} variant="secondary" size="lg" external={false}>
              {t.intro.ctaProgramm}
            </CTAButton>
          </>
        }
      />

      <Problem t={t.problem} money={d.money} />

      <MethodPrinciples t={t.principles} pillars={d.pillars} />

      {/* Von Prinzip zu Praxis */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHeading eyebrow={t.practice.eyebrow} title={t.practice.title} subtitle={t.practice.subtitle} />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <CTAButton href={localeHref(lang, "/programm")} external={false}>
                    {t.practice.cta}
                    <MedIcon name="arrowRight" className="h-4 w-4" />
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Stagger as="ul" className="grid gap-3 sm:grid-cols-2">
              {t.practice.items.map((p, i) => (
                <StaggerItem as="li" key={p.title}>
                  <div className="group h-full rounded-card border border-line bg-paper-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                        <MedIcon name={PRACTICE_ICONS[i]} className="h-6 w-6" />
                      </span>
                      <span className="step-num font-serif text-sm text-ink-mute">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-medium text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      <CTABand lang={lang} t={t.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spotsLabel(lang)} secondaryPath="/programm" />
    </>
  );
}
