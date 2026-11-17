import { CAL_INFO_URL, CAL_LERNPLAN_URL, SKOOL_URL } from "@/lib/config";
import { fill, type Locale } from "@/i18n/config";
import { getDict, Rich } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { MedIcon, type IconName } from "@/components/ui/MedIcon";
import { ProductPanel } from "@/components/shop/ProductPanel";

/**
 * Test-Shopseite (Entwurf Nov. 2026). Noch nicht in der Sitemap, bis Preis, Inhalt
 * und Zahlungsweg des Survival Guides feststehen.
 */
export function shopMeta(lang: Locale) {
  const t = getDict(lang).pageShop;
  return pageMetadata(lang, "/shop", { title: t.title, description: t.description });
}

/** Je Termin-/Angebotskarte: Link und Icon. Reihenfolge = pageShop.services.items. */
const SERVICE_META: { href: string; icon: IconName }[] = [
  { href: CAL_INFO_URL, icon: "pulse" },
  { href: CAL_LERNPLAN_URL, icon: "structure" },
  { href: SKOOL_URL, icon: "community" },
];

export function ShopView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageShop;
  return (
    <>
      <PageIntro eyebrow={t.intro.eyebrow} title={<Rich text={t.intro.title} />} lead={t.intro.lead} />

      {/* Produkt */}
      <Section tone="paper" className="pt-4 sm:pt-8">
        <ProductPanel lang={lang} t={t.product} w={t.waitlist} />

        <Reveal>
          <div className="mt-16 rounded-card border border-dashed border-line-strong p-7 sm:p-9 lg:ml-[calc((100%+4rem)*5/12)]">
            <h3 className="font-display text-2xl font-semibold text-ink">{t.product.contentsTitle}</h3>
            <p className="mt-2 text-ink-soft">{t.product.contentsNote}</p>
          </div>
        </Reveal>
      </Section>

      {/* Persönliche Begleitung */}
      <Section tone="sand">
        <Reveal>
          <SectionHeading center eyebrow={t.services.eyebrow} title={<Rich text={t.services.title} />} subtitle={t.services.subtitle} />
        </Reveal>
        <Stagger className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {t.services.items.map((s, i) => (
            <StaggerItem key={s.title}>
              <a
                href={SERVICE_META[i].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-card border border-line bg-paper-light p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-sand"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-card bg-teal-100 text-teal-700">
                    <MedIcon name={SERVICE_META[i].icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-xl font-semibold text-ink">{fill(s.price, d.money)}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-petrol-700 transition-colors group-hover:text-copper-600">
                  {s.cta}
                  <MedIcon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-ink-mute">{t.services.note}</p>
        </Reveal>
      </Section>
    </>
  );
}
