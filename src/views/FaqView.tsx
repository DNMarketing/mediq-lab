import { SKOOL_URL } from "@/lib/config";
import { fill, localeHref, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon } from "@/components/ui/MedIcon";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { spotsLabel } from "./HomeView";

export function faqMeta(lang: Locale) {
  const t = getDict(lang).pageFaq;
  return pageMetadata(lang, "/faq", { title: t.title, description: t.description });
}

export function FaqView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageFaq;
  return (
    <>
      <PageIntro
        align="center"
        eyebrow={t.intro.eyebrow}
        title={t.intro.title}
        lead={t.intro.lead}
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              {d.common.join}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href={localeHref(lang, "/kontakt")} variant="secondary" size="lg" external={false}>
              {t.intro.ctaContact}
            </CTAButton>
          </>
        }
      />

      <FAQ items={t.items} money={d.money} />

      <CTABand lang={lang} t={t.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spotsLabel(lang)} secondaryPath="/kontakt" />
    </>
  );
}
