import type { Metadata } from "next";
import { SKOOL_URL } from "@/lib/config";
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

export const metadata: Metadata = {
  title: "Methode",
  description:
    "Die Lernmethode hinter medIQ lab: Active Recall, Spaced Repetition und Prüfungsstrategie, lernpsychologisch fundiert. Klüger lernen statt härter, für ein sicheres Medizinstudium.",
};

const PRACTICE: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "repeat",
    title: "Anki & Karteikarten, richtig aufgesetzt",
    body: "Active Recall und Spaced Repetition werden konkret: Karten, die den Stoff wirklich abprüfen, mit einem Wiederholungsplan, der dich bis zum Examen trägt.",
  },
  {
    icon: "structure",
    title: "Persönliche Lernpläne & Wochenstruktur",
    body: "Aus Prinzipien wird ein Plan: eine Wochenstruktur, die neben Klinik und Nebenjob durchhält, statt guter Vorsätze, die nach zwei Wochen kippen.",
  },
  {
    icon: "exam",
    title: "Altfragen-Analyse & Prüfungssimulation",
    body: "Prüfungsmuster erkennen, Schwerpunkte ableiten, unter realistischen Bedingungen üben, damit die Prüfung kein Blindflug wird.",
  },
  {
    icon: "mind",
    title: "Werkzeuge für den Kopf",
    body: "Prüfungsangst, Druck und Aufschieben begegnest du mit Methoden, die im Ernstfall funktionieren, nicht mit „reiß dich zusammen“.",
  },
];

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

export default function MethodePage() {
  return (
    <>
      <PageIntro
        eyebrow="Die Methode"
        title={
          <>
            Eine Methode mit Fundament,{" "}
            <span className="text-petrol-700 italic">kein Bauchgefühl.</span>
          </>
        }
        lead="medIQ lab ist keine Sammlung von Motivationssprüchen. Dahinter steht, wie Lernen nachweislich funktioniert, und wie du dir das im Medizinstudium konsequent zunutze machst."
        visual={BrainVisual}
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              Jetzt beitreten
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/programm" variant="secondary" size="lg" external={false}>
              Programm ansehen
            </CTAButton>
          </>
        }
      />

      <Problem />

      <MethodPrinciples />

      {/* Von Prinzip zu Praxis */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <SectionHeading
                  eyebrow="In der Praxis"
                  title="Vom Prinzip zum Studienalltag"
                  subtitle="Prinzipien allein bestehen keine Prüfung. In medIQ lab werden sie zu konkreten Werkzeugen, die du ab Tag 1 anwendest."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8">
                  <CTAButton href="/programm" external={false}>
                    Alle Workshop-Module
                    <MedIcon name="arrowRight" className="h-4 w-4" />
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Stagger as="ul" className="grid gap-3 sm:grid-cols-2">
              {PRACTICE.map((p, i) => (
                <StaggerItem as="li" key={p.title}>
                  <div className="group h-full rounded-card border border-line bg-paper-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                        <MedIcon name={p.icon} className="h-6 w-6" />
                      </span>
                      <span className="step-num font-serif text-sm text-ink-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
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

      <CTABand
        eyebrow="Bereit?"
        title={
          <>
            Lern ab heute mit{" "}
            <span className="italic text-copper-300">Methode.</span>
          </>
        }
        subtitle="Die Prinzipien sind die halbe Miete, die andere Hälfte ist die Umsetzung mit System und Community. Genau dafür gibt es medIQ lab."
        secondaryHref="/programm"
        secondaryLabel="Programm & Preise"
      />
    </>
  );
}
