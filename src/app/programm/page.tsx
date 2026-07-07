import type { Metadata } from "next";
import { SKOOL_URL } from "@/lib/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon } from "@/components/ui/MedIcon";
import { AnatomyDna } from "@/components/ui/Anatomy";
import { VSL } from "@/components/sections/VSL";
import { Modules } from "@/components/sections/Modules";
import { Pricing } from "@/components/sections/Pricing";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Programm",
  description:
    "Die medIQ lab Workshop-Reihe im Überblick: ein durchdachter Pfad vom Lernsystem bis zum Examen, plus Community-Abo als Einstieg. Anmeldung und Inhalte laufen über Skool.",
};

const DnaVisual = (
  <div className="relative mx-auto flex max-w-[18rem] justify-center">
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card border border-line bg-paper-light shadow-soft">
      <div className="glow-teal-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 text-petrol-700">
        <AnatomyDna strokeWidth={1.7} />
      </div>
    </div>
  </div>
);

export default function ProgrammPage() {
  return (
    <>
      <PageIntro
        eyebrow="Das Programm"
        title={
          <>
            Dein vollständiges System,{" "}
            <span className="text-petrol-700 italic">vom Lernsystem bis zum Examen.</span>
          </>
        }
        lead="Zwei Wege, ein Ziel: sicher durchs Studium. Steig niedrigschwellig über die Community ein oder geh mit der Premium-Workshop-Reihe direkt den schnellsten Weg. Für Studierende an staatlichen, privaten und Auslands-Unis."
        visual={DnaVisual}
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              Jetzt beitreten
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/methode" variant="secondary" size="lg" external={false}>
              Erst die Methode ansehen
            </CTAButton>
          </>
        }
      />

      <VSL />
      <Modules />
      <Pricing />

      <CTABand
        eyebrow="Loslegen"
        title={
          <>
            Zwei Wege rein,{" "}
            <span className="italic text-copper-300">ein Ziel.</span>
          </>
        }
        subtitle="Anmeldung, Zahlung und alle Workshop-Inhalte laufen sicher über Skool. Diese Seite informiert dich und leitet dich dorthin weiter."
        secondaryHref="/faq"
        secondaryLabel="Offene Fragen? Zur FAQ"
      />
    </>
  );
}
