import { localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";
import { GuideCover } from "../ui/GuideCover";

/** Kurzer Hinweis auf das erste digitale Produkt → /shop/. */
export function ShopTeaser({ lang, t, product }: { lang: Locale; t: Dict["shopTeaser"]; product: Dict["pageShop"]["product"] }) {
  const edition = product.langs.find((l) => l.code.toLowerCase() === lang) ?? product.langs[lang === "de" ? 0 : 1];
  return (
    <Section tone="light" className="py-20 sm:py-24">
      <Reveal>
        <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-card border border-line bg-paper p-7 shadow-soft sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-12 sm:p-10">
          <GuideCover word={edition.cover} code={edition.code} label={product.coverLabel} className="mx-auto w-44 sm:w-full" />
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.018em] text-ink sm:text-[2.3rem]">
              <Rich text={t.title} />
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{t.body}</p>
            <div className="mt-6">
              <CTAButton href={localeHref(lang, "/shop")} external={false}>
                {t.cta}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
