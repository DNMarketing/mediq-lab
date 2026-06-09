import { SKOOL_URL } from "@/lib/config";
import { Section, SectionHeading } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function VSL() {
  return (
    <Section id="video" className="pt-4 sm:pt-6">
      <Reveal>
        <SectionHeading
          center
          eyebrow="2 Minuten, die sich lohnen"
          title="Schau dir an, wie medIQ lab funktioniert"
          subtitle="In zwei Minuten zeigen wir dir die Methode hinter medIQ lab – und warum sie dein Studium effizienter macht."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-3xl">
          {/* Video-Embed-Platzhalter (VSL) */}
          <div className="group relative aspect-video overflow-hidden rounded-2xl border border-line bg-ink-800/60 shadow-card">
            <div className="absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-30" />
            <div className="glow-radial absolute inset-x-0 top-0 h-2/3" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Video abspielen (Platzhalter)"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-ink-950 shadow-glow transition-transform duration-200 group-hover:scale-105"
              >
                <span className="ml-1 text-2xl" aria-hidden>▶</span>
              </button>
              <span className="rounded-full border border-line-strong bg-ink-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                ⚠ Platzhalter – VSL-Video einbinden
              </span>
              {/* TODO: Video-Embed einsetzen (YouTube/Vimeo/Wistia/Mux-iFrame),
                  das medIQ lab in ~2 Min erklärt. Diesen Platzhalter ersetzen. */}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <CTAButton href={SKOOL_URL} size="lg">
              Jetzt beitreten
              <span aria-hidden>→</span>
            </CTAButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
