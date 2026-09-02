import { Hero } from "@/components/sections/Hero";
import { ProblemTeaser } from "@/components/home/ProblemTeaser";
import { MethodTeaser } from "@/components/home/MethodTeaser";
import { CostReframe } from "@/components/home/CostReframe";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemTeaser />
      <MethodTeaser />
      <CostReframe />
      <CTABand />
    </>
  );
}
