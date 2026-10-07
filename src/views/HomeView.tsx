import { SPOTS_LEFT } from "@/lib/config";
import { fill, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ProblemTeaser } from "@/components/home/ProblemTeaser";
import { MethodTeaser } from "@/components/home/MethodTeaser";
import { CostReframe } from "@/components/home/CostReframe";
import { OfferTeaser } from "@/components/home/OfferTeaser";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { CTABand } from "@/components/sections/CTABand";

export function spotsLabel(lang: Locale): string | null {
  return SPOTS_LEFT ? fill(getDict(lang).common.spots, { spots: SPOTS_LEFT }) : null;
}

export function homeMeta(lang: Locale) {
  const d = getDict(lang);
  // Startseite: Titel ohne Template, kommt aus dem Root-Layout.
  return { ...pageMetadata(lang, "/", { title: d.meta.titleDefault }), title: { absolute: d.meta.titleDefault } };
}

export function HomeView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const spots = spotsLabel(lang);
  return (
    <>
      <Hero lang={lang} t={d.hero} video={d.video} money={d.money} join={d.common.join} spotsLabel={spots} />
      <ProblemTeaser lang={lang} t={d.problemTeaser} money={d.money} />
      <MethodTeaser lang={lang} t={d.methodTeaser} pillars={d.pillars} />
      <CostReframe t={d.cost} money={d.money} />
      <OfferTeaser lang={lang} t={d.offer} money={d.money} join={d.common.join} />
      <FaqTeaser lang={lang} t={d.faqTeaser} money={d.money} />
      <CTABand lang={lang} t={d.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spots} secondaryPath="/programm" />
    </>
  );
}
