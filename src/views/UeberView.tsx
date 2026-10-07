import { img } from "@/lib/images";
import { fill, localeHref, type Locale } from "@/i18n/config";
import { getDict, Rich } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon, type IconName } from "@/components/ui/MedIcon";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { CTABand } from "@/components/sections/CTABand";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { spotsLabel } from "./HomeView";

const MISSION_ICONS: IconName[] = ["structure", "community", "clock"];
const VALUE_ICONS: IconName[] = ["mind", "structure", "check", "community"];

export function ueberMeta(lang: Locale) {
  const t = getDict(lang).pageUeber;
  return pageMetadata(lang, "/ueber", { title: t.title, description: t.description });
}

export function UeberView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageUeber;
  return (
    <>
      <PageIntro align="center" eyebrow={t.intro.eyebrow} title={<Rich text={t.intro.title} />} lead={t.intro.lead} />

      {/* Wer wir sind: gemeinsames Foto + Kurzvorstellung */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-card border border-line shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("team/faith-hannah.jpg")} alt={t.who.imgAlt} loading="lazy" decoding="async" className="aspect-[3/2] w-full object-cover" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <Eyebrow>{t.who.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.4rem]">{t.who.title}</h2>
              <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-ink-soft">
                <p>{t.who.p1}</p>
                <p>{t.who.p2}</p>
                <blockquote className="border-l-2 border-copper-500 pl-6">
                  <p className="pull-quote">
                    <Rich text={t.who.quote} />
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Einzelprofile */}
        <Stagger as="ul" className="mt-14 grid gap-5 md:grid-cols-2">
          {t.founders.map((f) => (
            <StaggerItem as="li" key={f.name}>
              <article className="flex h-full flex-col gap-6 rounded-card border border-line bg-paper-light p-6 shadow-soft sm:flex-row sm:p-7">
                <div className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img("team/" + f.file)}
                    alt={fill(t.labels.founderAlt, { name: f.name })}
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-32 rounded-card object-cover object-top sm:h-44 sm:w-36"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl font-medium text-ink">{f.name}</h3>
                  <dl className="mt-3 space-y-1.5 text-sm text-ink-soft">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-ink">{t.labels.year}</dt>
                      <dd>{f.year}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-ink">{t.labels.subjects}</dt>
                      <dd>{f.subjects.join(", ")}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-copper-600">{t.labels.motivation}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.motivation}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <CTAButton href={localeHref(lang, "/team")} variant="ghost" external={false}>
              {t.who.cta}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* Mission */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{t.mission.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">{t.mission.title}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">{fill(t.mission.lead, d.money)}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Stagger as="ul" className="space-y-3">
              {t.mission.points.map((m, i) => (
                <StaggerItem as="li" key={m}>
                  <div className="flex items-start gap-4 rounded-card border border-line bg-paper-light p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petrol-700 text-paper-light">
                      <MedIcon name={MISSION_ICONS[i]} className="h-5 w-5" />
                    </span>
                    <p className="pt-2 text-lg leading-snug text-ink">{m}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <blockquote className="mt-8 border-l-2 border-copper-500 pl-6">
                <p className="pull-quote">
                  <Rich text={t.mission.quote} />
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Die vier Säulen des Studienerfolgs */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading center eyebrow={t.pillarsSection.eyebrow} title={t.pillarsSection.title} subtitle={t.pillarsSection.subtitle} />
        </Reveal>
        <PillarGrid pillars={d.pillars} className="mt-12" />
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <CTAButton href={localeHref(lang, "/programm")} external={false}>
              {t.pillarsSection.cta}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* Werte */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading eyebrow={t.values.eyebrow} title={t.values.title} subtitle={t.values.subtitle} />
        </Reveal>
        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.values.items.map((v, i) => (
            <StaggerItem as="li" key={v.title}>
              <div className="group flex h-full gap-5 rounded-card border border-line bg-paper-light p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                  <MedIcon name={VALUE_ICONS[i]} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABand lang={lang} t={t.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spotsLabel(lang)} secondaryPath="/methode" />
    </>
  );
}
