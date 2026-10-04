import { SKOOL_URL } from "@/lib/config";
import { Section, SectionHeading } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";
import { MedIcon } from "../ui/MedIcon";
import { VideoPlayer } from "../ui/VideoPlayer";

/** Vorstellungsvideo von Faith & Hannah (Hochformat, self-hosted). */
export function VSL() {
  return (
    <Section id="video" tone="sand">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              eyebrow="90 Sekunden, die sich lohnen"
              title="Faith und Hannah stellen medIQ lab vor"
              subtitle="In anderthalb Minuten erfährst du, wer hinter medIQ lab steht, was dich in der Community erwartet und warum wir das machen. Direkt von den Gründerinnen."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={SKOOL_URL} size="lg">
                Jetzt Platz sichern
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="/ueber" variant="secondary" size="lg" external={false}>
                Mehr über uns
              </CTAButton>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.05}>
            <VideoPlayer className="mx-auto max-w-[22rem]" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
