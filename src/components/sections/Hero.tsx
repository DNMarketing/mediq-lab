"use client";

import { m, useReducedMotion } from "framer-motion";
import { CAL_INFO_URL, SKOOL_URL } from "@/lib/config";
import { FOUNDERS_PHOTO } from "@/lib/images";
import { fill } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Pill } from "../ui/Badge";
import { MedIcon } from "../ui/MedIcon";
import { EkgLine } from "../ui/EkgLine";
import { Picture } from "../ui/Picture";

type Founder = { name: string; year: string };

/**
 * Startseiten-Hero: Faith & Hannah als Gesicht von medIQ lab.
 * Foto (beide im Kittel) mit Namensschildern, daneben Headline und zwei Wege:
 * kostenloses Infogespräch (niedrige Schwelle) und direkt in die Community.
 */
export function Hero({
  t,
  money,
  common,
  founders,
  spotsLabel,
}: {
  t: Dict["hero"];
  money: Dict["money"];
  common: Dict["common"];
  /** Reihenfolge wie auf dem Foto: Faith links, Hannah rechts. */
  founders: Founder[];
  spotsLabel: string | null;
}) {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  // Nur bewegen, nicht ausblenden: Text above the fold ist sofort sichtbar (LCP mobil)
  const item = {
    hidden: reduce ? {} : { y: 18 },
    show: {
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const [left, right] = founders;

  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-12 sm:pt-36 sm:pb-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Foto: auf dem Handy zuerst, damit die Gesichter sofort da sind */}
          <m.div
            initial={reduce ? false : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative order-first lg:order-last lg:col-span-6"
          >
            <div className="glow-teal-bg pointer-events-none absolute -inset-10 -z-10" aria-hidden />
            <figure className="relative mx-auto max-w-[23rem] sm:max-w-[28rem] lg:max-w-[36rem]">
              {/* Feiner Kupfer-Bogen als Rahmen um das Foto */}
              <div className="absolute -inset-x-3 -top-3 bottom-[18%] rounded-t-[999px] border border-copper-300/70" aria-hidden />
              <div className="relative overflow-hidden rounded-b-card rounded-t-[999px]">
                <Picture
                  src={FOUNDERS_PHOTO}
                  alt={t.imgAlt}
                  decoding="async"
                  width={862}
                  height={699}
                  className="aspect-[862/699] w-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
                />
              </div>

              {/* Namensschilder */}
              {left && (
                <figcaption className="absolute bottom-[14%] left-0 rounded-card border border-line bg-paper-light px-4 py-2.5 shadow-lift sm:left-[2%]">
                  <span className="block font-display text-lg font-semibold leading-none text-ink">{left.name}</span>
                  <span className="mt-1 block text-xs text-ink-soft">{left.year}</span>
                </figcaption>
              )}
              {right && (
                <figcaption className="absolute bottom-[22%] right-0 rounded-card border border-line bg-paper-light px-4 py-2.5 shadow-lift sm:right-[2%]">
                  <span className="block font-display text-lg font-semibold leading-none text-ink">{right.name}</span>
                  <span className="mt-1 block text-xs text-ink-soft">{right.year}</span>
                </figcaption>
              )}

              {/* Sprung zum Vorstellungsvideo */}
              <a
                href="#kennenlernen"
                className="group absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-paper-light py-1.5 pl-1.5 pr-4 text-sm font-medium text-ink shadow-soft transition-colors hover:border-petrol-700 hover:text-petrol-700"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-petrol-700 text-paper-light transition-transform group-hover:scale-105">
                  <MedIcon name="play" className="ml-0.5 h-3.5 w-3.5" />
                </span>
                {t.videoCta}
              </a>
            </figure>
          </m.div>

          {/* Text */}
          <m.div variants={container} initial="hidden" animate="show" className="lg:col-span-6">
            {spotsLabel && (
              <m.div variants={item} className="mb-7">
                <Pill>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  {spotsLabel}
                </Pill>
              </m.div>
            )}

            <m.div variants={item} className="eyebrow mb-6">
              <span className="rule-copper" aria-hidden />
              {t.eyebrow}
            </m.div>

            <m.h1
              variants={item}
              className="font-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.022em] text-ink sm:text-[3.4rem] sm:leading-[1.05]"
            >
              <Rich text={t.title} />
            </m.h1>

            <m.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {t.lead}
            </m.p>

            <m.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton href={CAL_INFO_URL} size="lg">
                {common.infoCall}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
              <CTAButton href={SKOOL_URL} variant="secondary" size="lg">
                {common.join}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </m.div>

            <m.p variants={item} className="mt-6 text-sm text-ink-mute">
              {fill(t.note, money)}
            </m.p>
          </m.div>
        </div>
      </Container>

      {/* Signatur: EKG-Vitalkurve als Section-Abschluss */}
      <div className="mt-16 text-petrol-700/50 sm:mt-20">
        <EkgLine beats={8} strokeWidth={1.5} className="h-16" />
      </div>
    </section>
  );
}
