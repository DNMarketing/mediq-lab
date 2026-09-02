"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPOTS_LEFT, SKOOL_URL } from "@/lib/config";
import { IMAGES } from "@/lib/images";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { MedIcon } from "../ui/MedIcon";
import { EkgLine } from "../ui/Anatomy";

export function Hero() {
  const reduce = useReducedMotion();

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
    <section id="hero" className="relative overflow-hidden pt-24 pb-14 sm:pt-40 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6"
          >
            {SPOTS_LEFT && (
              <motion.div variants={item} className="mb-7">
                <Pill>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  Nur noch {SPOTS_LEFT} Plätze frei
                </Pill>
              </motion.div>
            )}

            <motion.div variants={item} className="eyebrow mb-6">
              <span className="rule-copper" aria-hidden />
              Für Medizinstudierende im Ausland
            </motion.div>

            <motion.h1
              variants={item}
              className="font-serif text-[2.15rem] font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-[3.7rem] sm:leading-[1.04]"
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
              Fundierte Lernmethodik, klare Prüfungsstrategie und eine Community, die
              dich trägt. Damit dir im Ausland kein teures Wiederholungsjahr
              dazwischenkommt.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <CTAButton href={SKOOL_URL} size="lg">
                Jetzt beitreten
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton href="/methode" variant="secondary" size="lg" external={false}>
                So funktioniert die Methode
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </motion.div>

            <motion.p variants={item} className="mt-6 text-sm text-ink-mute">
              Für Medizinstudierende an Auslands-Unis in der EU · Start über Skool · jederzeit kündbar
            </motion.p>
          </motion.div>

          {/* Video (Erklärvideo / VSL) */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative lg:col-span-6"
          >
            <div className="glow-teal-bg pointer-events-none absolute -inset-8 -z-10" aria-hidden />
            <figure className="group relative aspect-video overflow-hidden rounded-card border border-line shadow-lift">
              {/* Poster (Platzhalter für das eigentliche Video-Embed) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES.community}
                alt="Vorschau: Erklärvideo zu medIQ lab"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-petrol-900/85 via-petrol-900/55 to-teal-700/25"
                aria-hidden
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Video abspielen"
                  className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-paper-light text-petrol-800 shadow-lift transition-transform duration-200 group-hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <MedIcon name="play" className="ml-0.5 h-6 w-6" />
                </button>
                <p className="text-sm font-medium text-paper-light">In 2 Minuten verstehen</p>
              </div>
              {/* TODO: Video-Embed einsetzen (YouTube erweiterter Datenschutzmodus / Vimeo),
                  Poster & Overlay ersetzen. Datenschutz deckt YouTube bereits ab. */}
            </figure>
          </motion.div>
        </div>
      </Container>

      {/* Signatur: EKG-Vitalkurve als Section-Abschluss */}
      <div className="mt-16 text-petrol-700/50 sm:mt-24">
        <EkgLine beats={8} strokeWidth={1.5} className="h-16" />
      </div>
    </section>
  );
}
