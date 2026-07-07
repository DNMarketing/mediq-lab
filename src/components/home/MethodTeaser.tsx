import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon, type IconName } from "../ui/MedIcon";

/** Kurz-Methode für die Startseite → führt auf /methode. */
const PRINCIPLES: { icon: IconName; title: string; sub: string; body: string }[] = [
  {
    icon: "mind",
    title: "Aktives Abrufen",
    sub: "Active Recall",
    body: "Wissen aktiv aus dem Kopf holen statt passiv wiederlesen, so sitzt der Stoff wirklich.",
  },
  {
    icon: "repeat",
    title: "Verteiltes Lernen",
    sub: "Spaced Repetition",
    body: "In wachsenden Abständen wiederholen, gegen die Vergessenskurve, rein ins Langzeitgedächtnis.",
  },
  {
    icon: "exam",
    title: "Prüfungsstrategie",
    sub: "Altfragen-Logik",
    body: "Vom Prüfungsmuster rückwärts lernen: gezielt das, was geprüft wird, statt alles auf einmal.",
  },
];

export function MethodTeaser() {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading
          center
          eyebrow="Die Methode"
          title="Klüger lernen, nicht härter"
          subtitle="medIQ lab baut auf drei lernpsychologisch gut belegten Prinzipien. Keine Motivationssprüche, sondern Methoden, die man lernen kann."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <StaggerItem key={p.title}>
            <div className="group flex h-full flex-col rounded-card border border-line bg-paper-light p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                <MedIcon name={p.icon} className="h-6 w-6" />
              </span>
              <div className="mt-5 flex items-baseline gap-2">
                <h3 className="font-serif text-xl font-medium text-ink">{p.title}</h3>
              </div>
              <span className="mt-1 text-xs uppercase tracking-[0.16em] text-teal-600">
                {p.sub}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.15}>
        <div className="mt-10 flex justify-center">
          <CTAButton href="/methode" external={false} size="lg">
            Die ganze Methode ansehen
            <MedIcon name="arrowRight" className="h-4 w-4" />
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
