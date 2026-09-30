import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { PillarGrid } from "../sections/PillarGrid";

/** Kurz-Methode für die Startseite (vier Säulen) → führt auf /methode. */
export function MethodTeaser() {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading
          center
          eyebrow="Die vier Säulen"
          title="Klüger lernen, nicht härter"
          subtitle="medIQ lab steht auf vier Säulen: Workshop-Reihe, Videoreihen, wöchentliche Live Events und Downloads. Keine Motivationssprüche, sondern ein System, das dich durchs Semester trägt."
        />
      </Reveal>

      <PillarGrid className="mt-14" />

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
