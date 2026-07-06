import type { Metadata } from "next";
import { SKOOL_URL } from "@/lib/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon } from "@/components/ui/MedIcon";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Antworten auf die häufigsten Fragen zu medIQ lab: Für wen es ist, wie Anmeldung und Zahlung über Skool laufen, was Community-Abo (20 €/Monat) und Workshop-Reihe (800 €) kosten – und was wir bewusst nicht versprechen.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        align="center"
        eyebrow="FAQ"
        title="Was du noch wissen willst"
        lead="Die häufigsten Fragen zu Ablauf, Zugang, Preisen und dazu, was medIQ lab realistisch leisten kann – ehrlich beantwortet."
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              Jetzt beitreten
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="/kontakt" variant="secondary" size="lg" external={false}>
              Frage nicht dabei? Kontakt
            </CTAButton>
          </>
        }
      />

      <FAQ showHeading={false} />

      <CTABand
        eyebrow="Noch Fragen?"
        title={
          <>
            Alles geklärt?{" "}
            <span className="italic text-copper-300">Dann los.</span>
          </>
        }
        subtitle="Wenn deine Frage offen geblieben ist, schreib uns kurz – wir helfen dir weiter, bevor du dich entscheidest."
        secondaryHref="/kontakt"
        secondaryLabel="Kontakt aufnehmen"
      />
    </>
  );
}
