import { SKOOL_URL } from "@/lib/config";
import { localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Section, SectionHeading } from "../ui/Section";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";
import { MedIcon } from "../ui/MedIcon";
import { VideoPlayer } from "../ui/VideoPlayer";

/** Vorstellungsvideo von Faith & Hannah (Hochformat, self-hosted). */
export function VSL({ lang, t, video, join }: { lang: Locale; t: Dict["pageProgramm"]["vsl"]; video: Dict["video"]; join: string }) {
  return (
    <Section id="video" tone="sand">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={SKOOL_URL} size="lg">
                {join}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton href={localeHref(lang, "/ueber")} variant="secondary" size="lg" external={false}>
                {t.ctaAbout}
              </CTAButton>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.05}>
            <VideoPlayer lang={lang} t={video} className="mx-auto max-w-[22rem]" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
