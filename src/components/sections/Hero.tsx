"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { NEXT_COHORT, SKOOL_URL } from "@/lib/config";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { MedIcon } from "../ui/MedIcon";
import { AnatomyHeart, EkgLine } from "../ui/Anatomy";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // dezenter Parallax auf dem Visual
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {NEXT_COHORT && (
              <motion.div variants={item} className="mb-7">
                <Pill>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  Nächste Kohorte startet am {NEXT_COHORT}
                </Pill>
              </motion.div>
            )}

            <motion.div variants={item} className="eyebrow mb-6">
              <span className="rule-copper" aria-hidden />
              Für Medizinstudierende
            </motion.div>

            <motion.h1
              variants={item}
              className="font-serif text-[2.6rem] font-medium leading-[1.04] tracking-[-0.015em] text-ink sm:text-[4rem]"
            >
              Effizienter lernen.
              <br />
              Sicher bestehen.
              <br />
              <span className="text-petrol-700 italic">Keine verlorenen Jahre.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              medIQ lab ist das Lern-Ökosystem für Medizinstudierende –
              wissenschaftlich fundierte Methodik, klare Prüfungsstrategie und eine
              Community, die dich trägt. Schluss mit verlorenen Semestern, planlosem
              Pauken und der Angst vor der nächsten Prüfung.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CTAButton href={SKOOL_URL} size="lg">
                Jetzt beitreten
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="#video" variant="secondary" size="lg" external={false}>
                <MedIcon name="play" className="h-4 w-4" />
                In 2 Minuten verstehen
              </CTAButton>
            </motion.div>

            <motion.p variants={item} className="mt-6 text-sm text-ink-mute">
              Für staatliche, private &amp; Auslands-Unis · Start über Skool · jederzeit kündbar
            </motion.p>
          </motion.div>

          {/* Visual: animiertes anatomisches Herz + EKG + Parallax */}
          <div className="relative lg:col-span-5">
            <motion.div
              style={{ y: glowY }}
              className="glow-teal-bg pointer-events-none absolute -inset-10 -z-10"
              aria-hidden
            />
            <motion.div style={{ y: visualY }} className="relative mx-auto max-w-md">
              <div className="relative aspect-square">
                {/* klinische Ringe */}
                <div className="absolute inset-0 rounded-full border border-line" aria-hidden />
                <div className="absolute inset-[8%] rounded-full border border-teal-300/40" aria-hidden />
                <div
                  className="absolute inset-[8%] rounded-full bg-paper-light/60 shadow-soft"
                  aria-hidden
                />
                {/* Herz */}
                <div className="absolute inset-[20%] text-petrol-700">
                  <AnatomyHeart strokeWidth={1.7} />
                </div>
                {/* EKG quer durchs Visual */}
                <div className="absolute inset-x-[6%] top-[60%] text-petrol-700/70">
                  <EkgLine beats={3} strokeWidth={1.4} className="h-12" />
                </div>
              </div>

              {/* Glas-Karte (überlappend) */}
              <div className="absolute -bottom-4 -left-2 max-w-[14.5rem] rounded-card p-5 shadow-lift glass-card sm:-left-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-card bg-teal-100 text-teal-600">
                    <MedIcon name="repeat" className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-base leading-tight text-ink">
                    Methode statt
                    <br />
                    Auswendig-Pauken
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">
                  Active Recall &amp; Spaced Repetition – lernpsychologisch fundiert.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Signatur: EKG-Vitalkurve als Section-Abschluss */}
      <div className="mt-16 text-petrol-700/50 sm:mt-24">
        <EkgLine beats={8} strokeWidth={1.5} className="h-16" />
      </div>
    </section>
  );
}
