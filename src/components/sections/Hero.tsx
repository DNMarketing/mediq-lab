"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SKOOL_URL } from "@/lib/config";
import { fill, localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { MedIcon } from "../ui/MedIcon";
import { AnatomyHeart, EkgLine } from "../ui/Anatomy";
import { VideoPlayer } from "../ui/VideoPlayer";

export function Hero({
  lang,
  t,
  video,
  money,
  join,
  spotsLabel,
}: {
  lang: Locale;
  t: Dict["hero"];
  video: Dict["video"];
  money: Dict["money"];
  join: string;
  spotsLabel: string | null;
}) {
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
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
            {spotsLabel && (
              <motion.div variants={item} className="mb-7">
                <Pill>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  {spotsLabel}
                </Pill>
              </motion.div>
            )}

            <motion.div variants={item} className="eyebrow mb-6">
              <span className="rule-copper" aria-hidden />
              {t.eyebrow}
            </motion.div>

            <motion.h1
              variants={item}
              className="font-serif text-[2.15rem] font-medium leading-[1.06] tracking-[-0.015em] text-ink sm:text-[4rem] sm:leading-[1.04]"
            >
              <Rich text={t.title} />
            </motion.h1>

            <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t.lead}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={SKOOL_URL} size="lg">
                {join}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton href={localeHref(lang, "/methode")} variant="secondary" size="lg" external={false}>
                {t.ctaMethod}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </motion.div>

            <motion.p variants={item} className="mt-6 text-sm text-ink-mute">
              {fill(t.note, money)}
            </motion.p>
          </motion.div>

          {/* Visual: Handy = Video, Desktop = anatomisches Herz */}
          <div className="relative lg:col-span-5">
            <div className="glow-teal-bg pointer-events-none absolute -inset-8 -z-10" aria-hidden />

            {/* Handy/Tablet: Vorstellungsvideo (Hochformat, self-hosted) */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:hidden"
            >
              <VideoPlayer lang={lang} t={video} className="mx-auto max-w-[20rem]" />
            </motion.div>

            {/* Desktop: animiertes anatomisches Herz + EKG + Glas-Karte */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative mx-auto hidden max-w-md lg:block"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-full border border-line" aria-hidden />
                <div className="absolute inset-[8%] rounded-full border border-teal-300/40" aria-hidden />
                <div className="absolute inset-[8%] rounded-full bg-paper-light/60 shadow-soft" aria-hidden />
                <div className="absolute inset-[20%] text-petrol-700">
                  <AnatomyHeart strokeWidth={1.7} />
                </div>
                <div className="absolute inset-x-[6%] top-[60%] text-petrol-700/70">
                  <EkgLine beats={3} strokeWidth={1.4} className="h-12" />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 max-w-[14.5rem] rounded-card p-5 shadow-lift glass-card">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-card bg-teal-100 text-teal-600">
                    <MedIcon name="repeat" className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-base leading-tight text-ink">
                    <Rich text={t.cardTitle} />
                  </p>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-soft">{t.cardBody}</p>
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
