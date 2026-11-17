import { img } from "@/lib/images";
import { localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { Picture } from "../ui/Picture";
import { VideoPlayer } from "../ui/VideoPlayer";

/** Typografische Anführungszeichen je Sprache. */
const QUOTES: Record<Locale, [string, string]> = { de: ["„", "“"], en: ["“", "”"], fr: ["« ", " »"], it: ["«", "»"] };

/**
 * „Hi, wir sind Faith und Hannah“: Vorstellungsvideo plus beide Gründerinnen mit
 * Foto, Studienjahr, Lieblingsfächern und einem Satz aus ihrer Motivation (/ueber).
 */
export function FoundersIntro({
  lang,
  t,
  video,
  founders,
  labels,
}: {
  lang: Locale;
  t: Dict["homeFounders"];
  video: Dict["video"];
  founders: Dict["pageUeber"]["founders"];
  labels: Dict["pageUeber"]["labels"];
}) {
  return (
    <Section id="kennenlernen" tone="light">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <VideoPlayer lang={lang} t={video} className="mx-auto max-w-[19rem]" />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.018em] text-ink sm:text-[3rem]">
              <Rich text={t.title} />
            </h2>
            <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink-soft">{t.lead}</p>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2">
            {t.quotes.map((q) => {
              const f = founders.find((x) => x.name === q.name);
              return (
                <StaggerItem key={q.name}>
                  <figure className="flex h-full flex-col rounded-card border border-line bg-paper p-6 shadow-soft">
                    <div className="flex items-center gap-4">
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-paper-light shadow-soft ring-1 ring-copper-300/60">
                        <Picture
                          src={img("team/" + (f?.file ?? `${q.name.toLowerCase()}.jpg`))}
                          alt={labels.founderAlt.replace("{name}", q.name)}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full origin-[50%_37%] scale-[2.1] object-cover"
                        />
                      </span>
                      <figcaption>
                        <span className="block font-display text-xl font-semibold leading-tight text-ink">{q.name}</span>
                        {f && (
                          <span className="mt-0.5 block text-xs leading-snug text-ink-mute">
                            {f.year} · {f.subjects.join(", ")}
                          </span>
                        )}
                      </figcaption>
                    </div>
                    <blockquote className="mt-5 border-l-2 border-copper-500 pl-4 font-display text-[1.08rem] leading-snug text-ink">
                      {QUOTES[lang][0]}
                      {q.text}
                      {QUOTES[lang][1]}
                    </blockquote>
                  </figure>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <CTAButton href={localeHref(lang, "/ueber")} variant="secondary" external={false}>
                {t.cta}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
