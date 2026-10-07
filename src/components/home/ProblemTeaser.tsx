import { fill, localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

/** Kurz-Problem für die Startseite. Kernaussagen hervorgehoben, keine graue Text-Wüste. */
export function ProblemTeaser({ lang, t, money }: { lang: Locale; t: Dict["problemTeaser"]; money: Dict["money"] }) {
  return (
    <Section tone="paper">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.01em] text-ink sm:text-[2.7rem]">
            <Rich text={t.title} />
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            <Rich text={t.lead} em="font-medium text-ink" />
          </p>
        </Reveal>

        <Stagger as="ul" className="mt-10">
          {t.pains.map((p) => (
            <StaggerItem as="li" key={p.lead}>
              <div className="flex gap-4 border-t border-line py-6">
                <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-copper-500" aria-hidden />
                <p className="text-lg leading-relaxed text-ink-soft">
                  <span className="font-medium text-ink">{p.lead}</span>
                  {fill(p.rest, money)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <blockquote className="mt-10 border-l-2 border-copper-500 pl-6">
            <p className="font-serif text-2xl font-medium leading-snug text-ink sm:text-3xl">
              <Rich text={t.quote} />
            </p>
          </blockquote>
          <div className="mt-8">
            <CTAButton href={localeHref(lang, "/methode")} variant="secondary" external={false}>
              {t.cta}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
