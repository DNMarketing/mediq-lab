import { Hero } from "@/components/sections/Hero";
import { ProblemTeaser } from "@/components/home/ProblemTeaser";
import { MethodTeaser } from "@/components/home/MethodTeaser";
import { CostReframe } from "@/components/home/CostReframe";
import { OfferTeaser } from "@/components/home/OfferTeaser";
import { FaqTeaser } from "@/components/home/FaqTeaser";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemTeaser />
      <MethodTeaser />
      <CostReframe />
      <OfferTeaser />
      <FaqTeaser />
      <CTABand />
    </>
  );
}
