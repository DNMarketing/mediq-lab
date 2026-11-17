import { SKOOL_URL } from "@/lib/config";
import { COMMUNITY_SHOTS } from "@/lib/images";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { Picture } from "../ui/Picture";

function Shot({ src, alt, w, h, className = "" }: { src: string; alt: string; w: number; h: number; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[10px] border border-line-strong bg-paper-light shadow-lift ${className}`}>
      <Picture src={src} alt={alt} loading="lazy" decoding="async" width={w} height={h} className="block h-auto w-full" />
    </div>
  );
}

function Label({ icon, title, body }: { icon: "structure" | "clock"; title: string; body: string }) {
  return (
    <div className="flex gap-3.5">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-teal-100 text-teal-700">
        <MedIcon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="font-display text-lg font-semibold text-ink">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
      </div>
    </div>
  );
}

/** Echte Einblicke in die Skool-Community: Klassenzimmer (Kurse) und Kalender (Events). */
export function CommunityShowcase({ t }: { t: Dict["communityShowcase"] }) {
  return (
    <Section id="community" tone="light">
      <Reveal>
        <SectionHeading center eyebrow={t.eyebrow} title={<Rich text={t.title} />} subtitle={t.subtitle} />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <Shot src={COMMUNITY_SHOTS.kurse} alt={t.courses.alt} w={1400} h={882} />
          <div className="mt-6">
            <Label icon="structure" title={t.courses.title} body={t.courses.body} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="relative">
            <Shot src={COMMUNITY_SHOTS.eventsNov} alt={t.calendar.alt1} w={960} h={775} className="w-[88%]" />
            <Shot src={COMMUNITY_SHOTS.eventsDez} alt={t.calendar.alt2} w={956} h={597} className="relative -mt-[22%] ml-auto w-[78%]" />
          </div>
          <div className="mt-6">
            <Label icon="clock" title={t.calendar.title} body={t.calendar.body} />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-line pt-10 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-ink-mute sm:text-left">{t.caption}</p>
          <CTAButton href={SKOOL_URL} size="lg" className="w-full sm:w-auto">
            {t.cta}
            <MedIcon name="arrowRight" className="h-4 w-4" />
          </CTAButton>
        </div>
      </Reveal>
    </Section>
  );
}
