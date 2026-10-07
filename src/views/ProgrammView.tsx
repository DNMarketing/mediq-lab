import { SKOOL_URL } from "@/lib/config";
import { fill, localeHref, type Locale } from "@/i18n/config";
import { getDict, Rich } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { CTAButton } from "@/components/ui/CTAButton";
import { MedIcon } from "@/components/ui/MedIcon";
import { AnatomyDna } from "@/components/ui/Anatomy";
import { VSL } from "@/components/sections/VSL";
import { Modules } from "@/components/sections/Modules";
import { Pricing } from "@/components/sections/Pricing";
import { CTABand } from "@/components/sections/CTABand";
import { spotsLabel } from "./HomeView";

const DnaVisual = (
  <div className="relative mx-auto flex max-w-[18rem] justify-center">
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card border border-line bg-paper-light shadow-soft">
      <div className="glow-teal-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 text-petrol-700">
        <AnatomyDna strokeWidth={1.7} />
      </div>
    </div>
  </div>
);

export function programmMeta(lang: Locale) {
  const t = getDict(lang).pageProgramm;
  return pageMetadata(lang, "/programm", { title: t.title, description: t.description });
}

export function ProgrammView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageProgramm;
  return (
    <>
      <PageIntro
        eyebrow={t.intro.eyebrow}
        title={<Rich text={t.intro.title} />}
        lead={t.intro.lead}
        visual={DnaVisual}
        actions={
          <>
            <CTAButton href={SKOOL_URL} size="lg">
              {d.common.join}
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
            <CTAButton href={localeHref(lang, "/methode")} variant="secondary" size="lg" external={false}>
              {t.intro.ctaMethod}
            </CTAButton>
          </>
        }
      />

      <VSL lang={lang} t={t.vsl} video={d.video} join={d.common.join} />
      <Modules t={t.modules} formats={t.formats} />
      <Pricing t={t.pricing} money={d.money} join={d.common.join} />

      <CTABand lang={lang} t={t.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spotsLabel(lang)} secondaryPath="/faq" />
    </>
  );
}
