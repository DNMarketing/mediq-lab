"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NEXT_COHORT, SKOOL_URL } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { EditorialImage } from "../ui/EditorialImage";
import { MedIcon } from "../ui/MedIcon";

export function Hero() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
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
                  <span className="h-1.5 w-1.5 rounded-full bg-copper-500" aria-hidden />
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
              className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:text-[4rem]"
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

          {/* Visual */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative lg:col-span-5"
          >
            <div className="relative">
              <EditorialImage
                id={IMAGES.heroStudy}
                alt="Aufgeschlagenes Lehrbuch mit handschriftlichen Notizen vor einem Bücherregal"
                aspect="aspect-[4/5]"
                priority
                className="frame"
                width={1100}
              />
              {/* feine Kupfer-Eckmarke als Editorial-Detail */}
              <span
                aria-hidden
                className="absolute -left-3 -top-3 hidden h-16 w-16 border-l-2 border-t-2 border-copper-500/70 sm:block"
              />

              {/* dezente Kennzahl-Karte (überlappend, asymmetrisch) */}
              <div className="absolute -bottom-6 -left-6 hidden max-w-[14rem] rounded-card border border-line bg-paper-light p-5 shadow-lift sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-card bg-petrol-50 text-petrol-700">
                    <MedIcon name="repeat" className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-base leading-tight text-ink">
                    Methode statt
                    <br />
                    Auswendig-Pauken
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-mute">
                  Active Recall &amp; Spaced Repetition – lernpsychologisch fundiert.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
