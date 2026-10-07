import { IMAGES } from "@/lib/images";
import { fill } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { EditorialImage } from "../ui/EditorialImage";

export function Problem({ t, money }: { t: Dict["pageMethode"]["problem"]; money: Dict["money"] }) {
  return (
    <Section id="problem" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Bild + Intro (sticky, asymmetrisch) */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">{t.title}</h2>
              <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">{t.lead}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <EditorialImage src={IMAGES.problemStudent} alt={t.imageAlt} aspect="aspect-[5/4]" className="mt-8 frame" />
            </Reveal>
          </div>
        </div>

        {/* Pain-Liste mit Stagger */}
        <div className="lg:col-span-7">
          <Stagger as="ul" className="border-t border-line">
            {t.pains.map((pain) => (
              <StaggerItem as="li" key={pain.title}>
                <div className="flex gap-5 border-b border-line py-6">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-mute" aria-hidden>
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-ink">{pain.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{fill(pain.body, money)}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Reframe als Pull-Quote */}
          <Reveal delay={0.1}>
            <blockquote className="mt-10 border-l-2 border-copper-500 pl-6">
              <p className="pull-quote">
                <Rich text={t.quote} />
              </p>
              <p className="mt-3 text-ink-soft">{t.quoteSub}</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
