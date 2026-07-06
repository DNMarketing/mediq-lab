import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProblemTeaser } from "@/components/home/ProblemTeaser";
import { MethodTeaser } from "@/components/home/MethodTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProblemTeaser />
      <MethodTeaser />
      <Testimonials />
      <CTABand />
    </>
  );
}
