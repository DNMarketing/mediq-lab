import type { Metadata } from "next";
import { SKOOL_URL } from "@/lib/config";
import { img } from "@/lib/images";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon, type IconName } from "@/components/ui/MedIcon";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Warum es medIQ lab gibt: Zu viele fähige Medizinstudierende im Ausland verlieren Semester, nicht aus Faulheit, sondern aus Mangel an Methode. Unsere Mission, unsere Prinzipien.",
};

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
        eyebrow="Über medIQ lab"
        title={
          <>
            Damit kluge Köpfe nicht{" "}
            <span className="text-petrol-700 italic">an der Methode scheitern.</span>
          </>
        }
        lead="medIQ lab ist aus einer einfachen Beobachtung entstanden: Die meisten, die im Medizinstudium im Ausland straucheln, sind nicht zu wenig fähig oder zu faul. Ihnen fehlt ein System, das trägt. Genau das wollen wir liefern."
      />

      {/* Mission / Belief */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Unsere Mission</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                Weniger verlorene Semester. Mehr sichere Abschlüsse.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Jedes verlorene Semester kostet nicht nur Zeit, sondern Geld, Nerven und
                  oft ein Stück Selbstvertrauen. An Privat- und Auslands-Unis kommen schnell
                  Wiederholungsjahre von 10.000 bis 15.000&nbsp;€ dazu. Das muss nicht sein.
                </p>
                <p>
                  Wir glauben: Wer klüger lernt statt nur härter, kommt sicherer und
                  gesünder durchs Studium. Deshalb bündelt medIQ&nbsp;lab bewährte
                  Lernmethoden, klare Prüfungsstrategie und eine Community zu einem
                  Ökosystem, das dich vom ersten Semester bis zum Examen begleitet.
                </p>
                <blockquote className="border-l-2 border-copper-500 pl-6">
                  <p className="pull-quote">
                    Gute Medizin braucht Menschen, die durchhalten,{" "}
                    <span className="italic text-petrol-700">nicht ausbrennen.</span>
                  </p>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
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

      {/* Wer dahinter steht: Faith & Hannah */}
      <Section tone="paper">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-card border border-line shadow-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("team/faith-hannah.jpg")}
                  alt="Faith und Hannah, das Gesicht von medIQ lab"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.05}>
              <Eyebrow>Wer dahinter steht</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.4rem]">
                Faith und Hannah
              </h2>
              <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Faith und Hannah sind das Gesicht von medIQ&nbsp;lab. Sie wissen aus
                  eigener Erfahrung, wie sich das Medizinstudium im Ausland anfühlt, und
                  haben daraus ein Lernsystem gebaut, das wirklich trägt: von der
                  Lernsystematik über die Prüfungsstrategie bis zur Community, die den
                  Unterschied auf der langen Strecke macht.
                </p>
              </div>
              <div className="mt-7">
                <CTAButton href="/team" variant="secondary" external={false}>
                  Das ganze Team ansehen
                  <MedIcon name="arrowRight" className="h-4 w-4" />
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
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
