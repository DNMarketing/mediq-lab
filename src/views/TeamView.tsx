import { img } from "@/lib/images";
import { fill, type Locale } from "@/i18n/config";
import { getDict, Rich } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { CTABand } from "@/components/sections/CTABand";
import { spotsLabel } from "./HomeView";

function TeamCard({ name, role, file }: { name: string; role: string; file: string }) {
  return (
    <figure className="group h-full overflow-hidden rounded-card border border-line bg-paper-light shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("team/" + file)}
          alt={`${name}, ${role}, medIQ lab`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="p-5">
        <p className="font-serif text-xl font-medium text-ink">{name}</p>
        <p className="mt-1 text-sm leading-snug text-ink-soft">{role}</p>
      </figcaption>
    </figure>
  );
}

export function teamMeta(lang: Locale) {
  const t = getDict(lang).pageTeam;
  return pageMetadata(lang, "/team", { title: t.title, description: t.description });
}

export function TeamView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageTeam;
  return (
    <>
      <PageIntro align="center" eyebrow={t.intro.eyebrow} title={<Rich text={t.intro.title} />} lead={t.intro.lead} />

      {/* Gründerinnen / Gesicht von medIQ lab */}
      <Section tone="paper" className="pt-4 sm:pt-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="flex justify-center">
              <span className="eyebrow">
                <span className="rule-copper" aria-hidden />
                {t.faceEyebrow}
              </span>
            </div>
          </div>
        </Reveal>
        <Stagger className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
          {t.leads.map((m) => (
            <StaggerItem key={m.name}>
              <TeamCard {...m} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Erweitertes Team */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading center eyebrow={t.teamEyebrow} title={t.teamTitle} />
        </Reveal>
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.team.map((m) => (
            <StaggerItem key={m.name}>
              <TeamCard {...m} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABand lang={lang} t={t.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spotsLabel(lang)} secondaryPath="/methode" />
    </>
  );
}
