import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { VSL } from "@/components/sections/VSL";
import { Stats } from "@/components/sections/Stats";
import { Problem } from "@/components/sections/Problem";
import { Authority } from "@/components/sections/Authority";
import { Modules } from "@/components/sections/Modules";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VSL />
        <Stats />
        <Problem />
        <Authority />
        <Modules />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
