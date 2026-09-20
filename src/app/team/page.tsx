import type { Metadata } from "next";
import { img } from "@/lib/images";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Die Menschen hinter medIQ lab: Faith und Hannah als Gesicht des Lern-Ökosystems, plus ein Team aus Coaching und Social Media, das dich durchs Medizinstudium im Ausland begleitet.",
};

type Member = { name: string; role: string; file: string };

const LEADS: Member[] = [
  { name: "Faith", role: "Gründerin", file: "faith.jpg" },
  { name: "Hannah", role: "Gründerin", file: "hannah.jpg" },
];

const TEAM: Member[] = [
  { name: "Daniela", role: "Heilpraktikerin, Entspannungstherapeutin, Life- & Businesscoach", file: "daniela.jpg" },
  { name: "Jessi", role: "Social Media", file: "jessi.jpg" },
  { name: "Lisi", role: "Social Media", file: "lisi.jpg" },
];

function TeamCard({ name, role, file }: Member) {
  return (
    <figure className="group h-full overflow-hidden rounded-card border border-line bg-paper-light shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-sand">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("team/" + file)}
          alt={`${name} – ${role}, medIQ lab`}
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

export default function TeamPage() {
  return (
    <>
      <PageIntro
        align="center"
        eyebrow="Das Team"
        title={
          <>
            Die Menschen hinter{" "}
            <span className="text-petrol-700 italic">medIQ lab.</span>
          </>
        }
        lead="Kein anonymes Programm, sondern ein Team, das selbst weiß, wie sich das Medizinstudium im Ausland anfühlt und dich mit Methode, Coaching und einer starken Community begleitet."
      />

      {/* Gründerinnen / Gesicht von medIQ lab */}
      <Section tone="paper" className="pt-4 sm:pt-6">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="flex justify-center">
              <span className="eyebrow">
                <span className="rule-copper" aria-hidden />
                Das Gesicht von medIQ lab
              </span>
            </div>
          </div>
        </Reveal>
        <Stagger className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
          {LEADS.map((m) => (
            <StaggerItem key={m.name}>
              <TeamCard {...m} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Erweitertes Team */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading center eyebrow="Dahinter" title="Das Team dahinter" />
        </Reveal>
        <Stagger className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <StaggerItem key={m.name}>
              <TeamCard {...m} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CTABand
        eyebrow="Lern uns kennen"
        title={
          <>
            Werde Teil von{" "}
            <span className="italic text-copper-300">medIQ lab.</span>
          </>
        }
        subtitle="Hinter medIQ lab stehen echte Menschen, die dich durchs Studium begleiten. Komm in die Community und lern uns kennen."
        secondaryHref="/methode"
        secondaryLabel="Die Methode ansehen"
      />
    </>
  );
}
