import { SKOOL_URL } from "@/lib/config";
import { IMAGES, unsplash } from "@/lib/images";
import { Section, SectionHeading } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";
import { MedIcon } from "../ui/MedIcon";
import { PlaceholderBadge } from "../ui/Badge";

export function VSL() {
  return (
    <Section id="video" tone="sand">
      <Reveal>
        <SectionHeading
          center
          eyebrow="2 Minuten, die sich lohnen"
          title="Schau dir an, wie medIQ lab funktioniert"
          subtitle="In zwei Minuten zeigen wir dir die Methode hinter medIQ lab – und warum sie dein Studium effizienter macht."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-14 max-w-3xl">
          <figure className="group relative aspect-video overflow-hidden rounded-card border border-line shadow-lift">
            {/* Poster-Bild (Platzhalter für das eigentliche VSL-Embed) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={unsplash(IMAGES.vslSkeleton, 1400)}
              alt="Anatomisches Skelettmodell – Poster für das Erklärvideo"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-petrol-900/85 via-petrol-900/60 to-teal-700/30"
              aria-hidden
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Video abspielen (Platzhalter)"
                className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-paper-light text-petrol-800 shadow-lift transition-transform duration-200 group-hover:scale-105"
              >
                <MedIcon name="play" className="ml-0.5 h-7 w-7" />
              </button>
              <PlaceholderBadge label="Platzhalter · VSL-Video einbinden" />
            </div>
            {/* TODO: Video-Embed einsetzen (YouTube/Vimeo/Wistia/Mux), das
                medIQ lab in ~2 Min erklärt. Poster-Bild & Overlay ersetzen. */}
          </figure>

          <div className="mt-9 flex justify-center">
            <CTAButton href={SKOOL_URL} size="lg">
              Jetzt beitreten
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
