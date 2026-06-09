"use client";

import { motion, useReducedMotion } from "framer-motion";
import { NEXT_COHORT, SKOOL_URL } from "@/lib/config";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Hintergrund: subtiles Grid + radialer Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div aria-hidden className="glow-radial pointer-events-none absolute inset-x-0 top-0 h-[480px]" />
      <div
        aria-hidden
        className="glow-violet pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] animate-pulse-glow"
      />

      <Container className="relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          {NEXT_COHORT && (
            <motion.div variants={item} className="mb-6 flex justify-center">
              <Pill>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Nächste Kohorte startet am {NEXT_COHORT}
              </Pill>
            </motion.div>
          )}

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Effizienter lernen.{" "}
            <span className="text-gradient">Sicher bestehen.</span>{" "}
            Keine teuren Wiederholungsjahre.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          >
            medIQ lab ist das Lern-Ökosystem für Medizinstudenten – wissenschaftlich
            fundierte Methoden, klare Prüfungsstrategie und eine Community, die dich
            durchträgt. Schluss mit verlorenen Semestern, ineffizientem Pauken und der
            Angst vor der nächsten Prüfung.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <CTAButton href={SKOOL_URL} size="lg" className="w-full sm:w-auto">
              Jetzt beitreten
              <span aria-hidden>→</span>
            </CTAButton>
            <CTAButton
              href="#vsl"
              variant="secondary"
              size="lg"
              external={false}
              className="w-full sm:w-auto"
            >
              <span aria-hidden>▶</span>
              In 2 Minuten verstehen
            </CTAButton>
          </motion.div>

          <motion.p variants={item} className="mt-5 text-sm text-slate-500">
            Für staatliche, private &amp; Auslands-Unis · Start über Skool · jederzeit kündbar
          </motion.p>
        </motion.div>

        {/* Visual / Foto-Platzhalter */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-ink-800/60 shadow-card">
            <div className="absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-40" />
            <div className="glow-radial absolute inset-x-0 top-0 h-2/3" />
            <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
              <span className="rounded-full border border-line-strong bg-ink-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                ⚠ Platzhalter – Hero-Visual / Produkt-Mockup
              </span>
              <p className="max-w-md px-6 text-sm text-slate-500">
                {/* TODO: Echtes Visual einsetzen – z. B. Screenshot der Skool-Community,
                    Dashboard-Mockup oder professionelles Foto der Gründer/Lernumgebung. */}
                Dashboard-Mockup, Community-Screenshot oder hochwertiges Foto einsetzen.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
