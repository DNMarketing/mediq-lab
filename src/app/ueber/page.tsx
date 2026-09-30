import type { Metadata } from "next";
import { img } from "@/lib/images";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon, type IconName } from "@/components/ui/MedIcon";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { CTABand } from "@/components/sections/CTABand";
import { PillarGrid } from "@/components/sections/PillarGrid";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Wir stellen uns vor: Faith und Hannah, zwei Medizinstudentinnen mit einer gemeinsamen Mission, das Medizinstudium strukturierter, effektiver und ein Stück stressfreier zu machen. Unsere Mission, unsere vier Säulen, unsere Prinzipien.",
};

/** Aus dem Instagram-Post „Wir stellen uns vor" (@mediq.lab). */
const FOUNDERS: {
  name: string;
  file: string;
  year: string;
  subjects: string[];
  motivation: string;
}[] = [
  {
    name: "Hannah",
    file: "hannah.jpg",
    year: "4. Studienjahr",
    subjects: ["Physiologie", "Simulation Medicine"],
    motivation:
      "Meine Motivation ist die Vision, das Medizinstudium durch gezielte Unterstützung stressfreier, effizienter und erfolgreicher zu meistern. Ich möchte anderen Studierenden genau die Werkzeuge und das Wissen an die Hand geben, die ich mir selbst zu Beginn meines Studiums gewünscht hätte. Denn niemand sollte sich im extremen Lernalltag alleine durchkämpfen müssen.",
  },
  {
    name: "Faith",
    file: "faith.jpg",
    year: "4. Studienjahr",
    subjects: ["Simulation Medicine", "Pathophysiologie"],
    motivation:
      "Meine Motivation ist es, Studierende so zu unterstützen, dass möglichst wenige von ihnen durch Prüfungen fallen. Gerade im ersten Studienjahr testen viele mühsam verschiedene Ansätze aus. Wer früh die passende Lernstrategie findet, senkt die eigene Durchfallquote, und spart wertvolle Zeit, Geld und Nerven.",
  },
];

const MISSION: { icon: IconName; text: string }[] = [
  { icon: "structure", text: "Gemeinsam mit dir deinen eigenen Lernweg finden." },
  {
    icon: "community",
    text: "Einen Raum schaffen, in dem ihr euch gegenseitig unterstützt und voneinander lernt.",
  },
  {
    icon: "clock",
    text: "Eine Study-Life-Balance schaffen, die später im Beruf zur Work-Life-Balance wird.",
  },
];

const VALUES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "mind",
    title: "Wissenschaft statt Bauchgefühl",
    body: "Wir bauen auf lernpsychologisch belegte Prinzipien, nicht auf Motivations-Zitate oder das nächste Wundertool.",
  },
  {
    icon: "structure",
    title: "Methode statt Talent-Mythos",
    body: "Bestehen ist keine Frage angeborener Genialität, sondern erlernbarer Systeme. Das nimmt Druck und macht dich unabhängig.",
  },
  {
    icon: "check",
    title: "Ehrlichkeit statt Hype",
    body: "Keine garantierten Bestehens-Versprechen, keine erfundene Verknappung. Wir sagen, was realistisch ist, und was nicht.",
  },
  {
    icon: "community",
    title: "Gemeinsam statt Einzelkämpfer",
    body: "Studium ist ein Marathon. Eine Community, die dich trägt und verbindlich hält, macht den Unterschied auf der langen Strecke.",
  },
];

export default function UeberPage() {
  return (
    <>
      <PageIntro
        align="center"
        eyebrow="Wir stellen uns vor"
        title={
          <>
            Studieren muss man{" "}
            <span className="text-petrol-700 italic">nicht alleine.</span>
          </>
        }
        lead="Hinter medIQ lab stehen Faith und Hannah, zwei Medizinstudentinnen mit einer gemeinsamen Idee: das Medizinstudium strukturierter, effektiver und vor allem ein Stück stressfreier zu machen."
      />

      {/* Wer wir sind: gemeinsames Foto + Kurzvorstellung */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-card border border-line shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("team/faith-hannah.jpg")}
                  alt="Faith und Hannah, die Gründerinnen von medIQ lab"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <Eyebrow>Wer wir sind</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.4rem]">
                Faith und Hannah
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Wir sind zwei Medizinstudentinnen mit der gleichen Mission: Studierenden
                  das Lernen einfacher, strukturierter und effektiver zu machen.
                </p>
                <p>
                  Wir wissen aus eigener Erfahrung, wie sich das Medizinstudium anfühlt,
                  und haben daraus ein System gebaut, das wirklich trägt: vom Lernsystem
                  über die Prüfungsstrategie bis zur Community, die den Unterschied auf
                  der langen Strecke macht.
                </p>
                <blockquote className="border-l-2 border-copper-500 pl-6">
                  <p className="pull-quote">
                    Mehr als Lernen.{" "}
                    <span className="italic text-petrol-700">Eine Community.</span>
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Einzelprofile */}
        <Stagger as="ul" className="mt-14 grid gap-5 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <StaggerItem as="li" key={f.name}>
              <article className="flex h-full flex-col gap-6 rounded-card border border-line bg-paper-light p-6 shadow-soft sm:flex-row sm:p-7">
                <div className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img("team/" + f.file)}
                    alt={`${f.name}, Gründerin von medIQ lab`}
                    loading="lazy"
                    decoding="async"
                    className="h-40 w-32 rounded-card object-cover object-top sm:h-44 sm:w-36"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-2xl font-medium text-ink">{f.name}</h3>
                  <dl className="mt-3 space-y-1.5 text-sm text-ink-soft">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-ink">Studienjahr:</dt>
                      <dd>{f.year}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-ink">Lieblingsfächer:</dt>
                      <dd>{f.subjects.join(", ")}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-copper-600">
                    Das motiviert mich
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.motivation}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <CTAButton href="/team" variant="ghost" external={false}>
              Das ganze Team ansehen
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
              <Eyebrow>Unsere Mission</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                Weniger verlorene Semester. Mehr sichere Abschlüsse.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
                Jedes verlorene Semester kostet nicht nur Zeit, sondern Geld, Nerven und
                oft ein Stück Selbstvertrauen. An Privat- und Auslands-Unis kommen
                schnell Wiederholungsjahre von 10.000 bis 20.000&nbsp;€ dazu. Das muss
                nicht sein.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Stagger as="ul" className="space-y-3">
              {MISSION.map((m) => (
                <StaggerItem as="li" key={m.text}>
                  <div className="flex items-start gap-4 rounded-card border border-line bg-paper-light p-5 shadow-soft">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-petrol-700 text-paper-light">
                      <MedIcon name={m.icon} className="h-5 w-5" />
                    </span>
                    <p className="pt-2 text-lg leading-snug text-ink">{m.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1}>
              <blockquote className="mt-8 border-l-2 border-copper-500 pl-6">
                <p className="pull-quote">
                  Gute Medizin braucht Menschen, die durchhalten,{" "}
                  <span className="italic text-petrol-700">nicht ausbrennen.</span>
                </p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Die vier Säulen des Studienerfolgs */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Unser Konzept"
            title="Die vier Säulen des Studienerfolgs"
            subtitle="Lernsystem, Prüfungsstrategie, Stress & Resilienz und Netzwerk. Sie bilden die Grundlage für nachhaltigen Studienerfolg, und wir helfen dir, jede einzelne gezielt zu verbessern."
          />
        </Reveal>
        <PillarGrid className="mt-12" />
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <CTAButton href="/programm" external={false}>
              Programm &amp; Preis ansehen
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </Section>

      {/* Werte */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading
            eyebrow="Was uns leitet"
            title="Vier Prinzipien, die wir ernst meinen"
            subtitle="Sie stehen nicht nur hier, sie entscheiden, wie wir Inhalte bauen und mit dir kommunizieren."
          />
        </Reveal>
        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <StaggerItem as="li" key={v.title}>
              <div className="group flex h-full gap-5 rounded-card border border-line bg-paper-light p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                  <MedIcon name={v.icon} className="h-6 w-6" />
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

      <CTABand
        eyebrow="Mitmachen"
        title={
          <>
            Werde Teil von{" "}
            <span className="italic text-copper-300">medIQ lab.</span>
          </>
        }
        subtitle="Wenn dich das überzeugt, ist der beste nächste Schritt der einfachste: komm in die Community und leg los."
        secondaryHref="/methode"
        secondaryLabel="Die Methode ansehen"
      />
    </>
  );
}
