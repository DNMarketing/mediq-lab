import { SPOTS_LEFT } from "@/lib/config";
import { fill, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { homeGraph, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { ProblemTeaser } from "@/components/home/ProblemTeaser";
import { FoundersIntro } from "@/components/home/FoundersIntro";
import { Journey } from "@/components/home/Journey";
import { AppShowcase } from "@/components/home/AppShowcase";
import { CommunityShowcase } from "@/components/home/CommunityShowcase";
import { MethodTeaser } from "@/components/home/MethodTeaser";
import { CostReframe } from "@/components/home/CostReframe";
import { OfferTeaser } from "@/components/home/OfferTeaser";
import { ShopTeaser } from "@/components/home/ShopTeaser";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { CTABand } from "@/components/sections/CTABand";

export function spotsLabel(lang: Locale): string | null {
  return SPOTS_LEFT ? fill(getDict(lang).common.spots, { spots: SPOTS_LEFT }) : null;
}

export function homeMeta(lang: Locale) {
  const d = getDict(lang);
  // Startseite: Titel ohne Template, kommt aus dem Root-Layout.
  const base = pageMetadata(lang, "/", { title: d.meta.titleDefault, description: d.meta.description });
  return {
    ...base,
    title: { absolute: d.meta.titleDefault },
    openGraph: { ...base.openGraph, title: d.meta.ogTitle, description: d.meta.ogDescription },
  };
}

export function HomeView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const spots = spotsLabel(lang);
  return (
    <>
      <JsonLd data={homeGraph(lang)} />
      {/* Reihenfolge (Entwurf Nov. 2026): Aufhänger, Problem, Faith & Hannah, Ablauf, App, Community, Methode, Preis */}
      <Hero
        t={d.hero}
        money={d.money}
        common={d.common}
        founders={["Faith", "Hannah"].map((name) => ({ name, year: d.pageUeber.founders.find((f) => f.name === name)?.year ?? "" }))}
        spotsLabel={spots}
      />
      <ProblemTeaser lang={lang} t={d.problemTeaser} money={d.money} />
      <FoundersIntro lang={lang} t={d.homeFounders} video={d.video} founders={d.pageUeber.founders} labels={d.pageUeber.labels} />
      <Journey t={d.journey} money={d.money} />
      <AppShowcase lang={lang} t={d.appShowcase} />
      <CommunityShowcase t={d.communityShowcase} />
      <MethodTeaser lang={lang} t={d.methodTeaser} pillars={d.pillars} />
      <CostReframe t={d.cost} money={d.money} />
      <OfferTeaser lang={lang} t={d.offer} money={d.money} join={d.common.join} />
      <ShopTeaser lang={lang} t={d.shopTeaser} product={d.pageShop.product} />
      <FaqTeaser lang={lang} t={d.faqTeaser} money={d.money} />
      <CTABand lang={lang} t={d.cta} note={fill(d.cta.note, d.money)} join={d.common.join} spotsLabel={spots} secondaryPath="/programm" />
    </>
  );
}
