"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fill, localeHref, type Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Rich } from "@/i18n/Rich";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

type T = Dict["problemTeaser"];

/** Einmal sichtbar geworden → true (startet die Animation der jeweiligen Grafik). */
function useSeen<E extends Element>() {
  const ref = useRef<E>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  return [ref, seen] as const;
}

/* ------------------------------------------------------------------ */
/* Abb. 1: Stofffülle. Raster aus Stoff-Kacheln, wenige leuchten auf. */
/* ------------------------------------------------------------------ */
const COLS = 32;
const ROWS = 12;

/** Feste, „zufällig“ verteilte Prüfungs-Kacheln (deterministisch, gleich auf Server und Client). */
const EXAM_ORDER: Map<number, number> = (() => {
  // mulberry32: kleiner, gut streuender Zufallsgenerator mit festem Startwert
  let seed = 20261116;
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const picked: number[] = [];
  while (picked.length < 22) {
    const i = Math.floor(rand() * COLS * ROWS);
    if (!picked.includes(i)) picked.push(i);
  }
  return new Map(picked.map((cell, k) => [cell, k]));
})();

function MatrixFigure({ t }: { t: T["matrix"] }) {
  const [ref, seen] = useSeen<HTMLDivElement>();
  const reduce = useReducedMotion();
  return (
    <div>
      <div
        ref={ref}
        className="grid gap-[2px] sm:gap-1"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        aria-hidden
      >
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const r = Math.floor(i / COLS);
          const c = i % COLS;
          const k = EXAM_ORDER.get(i);
          const exam = k !== undefined;
          const delay = reduce ? 0 : exam ? 1100 + k * 70 : (c + r * 1.6) * 11;
          return (
            <span
              key={i}
              className={cn(
                "aspect-square rounded-[2px] transition-[opacity,transform,background-color] duration-500 ease-out",
                seen ? "scale-100 opacity-100" : "scale-50 opacity-0",
                exam ? "bg-copper-400" : "bg-paper-light/[0.13]",
              )}
              style={{ transitionDelay: `${delay}ms` }}
            />
          );
        })}
      </div>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/70">
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-paper-light/[0.13]" aria-hidden />
          {t.all}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-copper-400" aria-hidden />
          {t.exam}
        </li>
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Abb. 2: Vergessenskurve (schematisch, nach Ebbinghaus 1885).       */
/* ------------------------------------------------------------------ */
const CW = 600;
const CH = 300;
const TOP = 16;
const BOTTOM = 284;
const XE = 588; // Prüfung
const cx = (t: number) => t * XE;
const cy = (r: number) => TOP + (1 - r) * (BOTTOM - TOP);
const decay = (dt: number, tau: number) => 0.2 + 0.8 * Math.exp(-dt / tau);

function passivePath(): string {
  let d = "";
  for (let i = 0; i <= 90; i++) {
    const t = i / 90;
    d += `${i ? "L" : "M"}${cx(t).toFixed(1)} ${cy(decay(t, 0.1)).toFixed(1)} `;
  }
  return d.trim();
}

/** Wiederholen nach System: nach jeder Wiederholung wieder oben, Vergessen jedes Mal langsamer. */
function spacedPath(): string {
  const reviews = [0.1, 0.24, 0.44, 0.7];
  const taus = [0.1, 0.2, 0.4, 0.8, 1.6];
  let d = `M0 ${cy(1).toFixed(1)} `;
  let start = 0;
  [...reviews, 1].forEach((end, seg) => {
    const steps = 24;
    for (let i = 1; i <= steps; i++) {
      const t = start + ((end - start) * i) / steps;
      d += `L${cx(t).toFixed(1)} ${cy(decay(t - start, taus[seg])).toFixed(1)} `;
    }
    if (end < 1) d += `L${cx(end).toFixed(1)} ${cy(1).toFixed(1)} `;
    start = end;
  });
  return d.trim();
}

const PASSIVE = passivePath();
const SPACED = spacedPath();

function CurveFigure({ t }: { t: T["curve"] }) {
  const [ref, seen] = useSeen<SVGSVGElement>();
  const reduce = useReducedMotion();
  const draw = (delay: number, dur: number) => ({
    strokeDasharray: 1,
    strokeDashoffset: seen ? 0 : 1,
    transition: reduce ? "none" : `stroke-dashoffset ${dur}s cubic-bezier(0.22,0.61,0.36,1) ${delay}s`,
  });
  const fadeIn = (delay: number) => ({
    opacity: seen ? 1 : 0,
    transition: reduce ? "none" : `opacity 0.5s ease ${delay}s`,
  });
  return (
    <div>
      <p className="mb-3 text-xs text-paper/60">{t.retention}</p>
      <svg ref={ref} viewBox={`0 0 ${CW} ${CH}`} className="block w-full overflow-visible" aria-hidden>
        {/* Raster */}
        {[1, 0.6, 0.2].map((r) => (
          <line key={r} x1={0} x2={CW} y1={cy(r)} y2={cy(r)} stroke="currentColor" className="text-paper-light/10" vectorEffect="non-scaling-stroke" />
        ))}
        <line x1={0} x2={CW} y1={BOTTOM} y2={BOTTOM} stroke="currentColor" className="text-paper-light/25" vectorEffect="non-scaling-stroke" />
        {/* Prüfung */}
        <line
          x1={XE}
          x2={XE}
          y1={TOP - 6}
          y2={BOTTOM}
          stroke="currentColor"
          strokeDasharray="4 5"
          className="text-paper-light/40"
          vectorEffect="non-scaling-stroke"
        />
        {/* Wiederholen nach System */}
        <path
          d={SPACED}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinejoin="round"
          className="text-teal-300"
          vectorEffect="non-scaling-stroke"
          style={draw(1.5, 2.2)}
        />
        {/* Nur lesen & markieren */}
        <path
          d={PASSIVE}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.75}
          strokeLinecap="round"
          className="text-copper-300"
          vectorEffect="non-scaling-stroke"
          style={draw(0.2, 1.6)}
        />
        <circle cx={XE} cy={cy(decay(1, 0.1))} r={6} className="fill-copper-300" style={fadeIn(1.7)} />
        <circle cx={XE} cy={cy(decay(1 - 0.7, 1.6))} r={6} className="fill-teal-300" style={fadeIn(3.6)} />
      </svg>
      <div className="mt-2 flex justify-between text-xs text-paper/60">
        <span>{t.start}</span>
        <span className="font-semibold text-paper-light">{t.exam}</span>
      </div>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-paper/70">
        <li className="flex items-center gap-2">
          <span className="h-[3px] w-5 rounded-full bg-copper-300" aria-hidden />
          {t.passive}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-[2px] w-5 rounded-full bg-teal-300" aria-hidden />
          {t.spaced}
        </li>
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Abb. 3: Ein Fehlversuch zieht Kreise.                               */
/* ------------------------------------------------------------------ */
const RW = 600;
const RH = 360;
const RCX = 64;
const RCY = 324;
const RADII = [96, 170, 246, 322];
const ANGLE = (-30 * Math.PI) / 180;
const onRay = (r: number) => ({ x: RCX + r * Math.cos(ANGLE), y: RCY + r * Math.sin(ANGLE) });

function RippleFigure({ labels, lost }: { labels: T["ripple"]; lost: string }) {
  const [ref, seen] = useSeen<HTMLDivElement>();
  const reduce = useReducedMotion();
  const appear = (i: number) => ({
    opacity: seen ? 1 : 0,
    transform: seen ? "scale(1)" : "scale(0.35)",
    transformBox: "view-box" as const,
    transformOrigin: `${RCX}px ${RCY}px`,
    transition: reduce ? "none" : `opacity 0.6s ease ${0.25 + i * 0.35}s, transform 0.9s cubic-bezier(0.22,0.61,0.36,1) ${0.25 + i * 0.35}s`,
  });
  const labelIn = (i: number) => ({
    opacity: seen ? 1 : 0,
    transition: reduce ? "none" : `opacity 0.5s ease ${0.55 + i * 0.35}s`,
  });
  const pos = (x: number, y: number) => ({ left: `${(x / RW) * 100}%`, top: `${(y / RH) * 100}%` });
  // Grundstil ohne Farbe/Größe, damit sich nichts überschreibt (cn führt Klassen nur zusammen)
  const chip = "absolute -translate-y-1/2 rounded-[3px] bg-[#0E2E2A] px-1.5 py-0.5 leading-tight";
  const small = "text-[11px] sm:text-sm";

  return (
    <div ref={ref} className="relative" aria-hidden>
      <svg viewBox={`0 0 ${RW} ${RH}`} className="block w-full overflow-hidden">
        {/* laufende Welle, solange der Bereich sichtbar ist */}
        {seen && !reduce && (
          <circle
            cx={RCX}
            cy={RCY}
            r={RADII[3] + 40}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="animate-ripple-out text-copper-300"
            style={{ transformBox: "view-box", transformOrigin: `${RCX}px ${RCY}px` }}
            vectorEffect="non-scaling-stroke"
          />
        )}
        {RADII.map((r, i) => (
          <circle
            key={r}
            cx={RCX}
            cy={RCY}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={i === RADII.length - 1 ? 2 : 1.25}
            className={i === RADII.length - 1 ? "text-copper-400" : "text-paper-light/25"}
            vectorEffect="non-scaling-stroke"
            style={appear(i)}
          />
        ))}
        {RADII.map((r, i) => {
          const p = onRay(r);
          return <circle key={`d${r}`} cx={p.x} cy={p.y} r={5} className={i === RADII.length - 1 ? "fill-copper-300" : "fill-paper-light"} style={labelIn(i)} />;
        })}
        <circle cx={RCX} cy={RCY} r={9} className="fill-copper-400" />
      </svg>

      {/* Beschriftung als HTML: bleibt auf jedem Bildschirm gleich gut lesbar */}
      <span className={cn(chip, small, "ml-4 font-semibold text-paper-light")} style={pos(RCX, RCY)}>
        {labels[0]}
      </span>
      {RADII.slice(0, 3).map((r, i) => {
        const p = onRay(r);
        return (
          <span key={r} className={cn(chip, small, "ml-3 text-paper/85")} style={{ ...pos(p.x, p.y), ...labelIn(i) }}>
            {labels[i + 1]}
          </span>
        );
      })}
      {(() => {
        const p = onRay(RADII[3]);
        // Betrag nur an Leerzeichen innerhalb der Spanne umbrechen, nie vor „€“ oder innerhalb von Zahlen
        const amount = lost.replace(/ €/g, "\u00a0€").replace(/(\d) (\d)/g, "$1\u00a0$2");
        return (
          <span
            className={cn(chip, "ml-3 max-w-[11ch] text-balance py-1 font-display text-base font-semibold leading-[1.1] text-copper-300 sm:text-[1.6rem]")}
            // über dem Punkt verankert, damit der zweizeilige Betrag nicht in „Wiederholungsjahr“ ragt
            style={{ ...pos(p.x, p.y), ...labelIn(3), transform: "translateY(-82%)" }}
          >
            {amount}
          </span>
        );
      })()}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Abschnitt                                                          */
/* ------------------------------------------------------------------ */

/**
 * „Das Problem“ als Befund: drei Symptome mit je einer eigenen Grafik, dann die Diagnose.
 * Kupfer = Problem, Teal = System. Bewusst ohne Glow, Glas oder Icon-Karten.
 */
export function ProblemTeaser({ lang, t, money }: { lang: Locale; t: T; money: Dict["money"] }) {
  const figures = [
    <MatrixFigure key="m" t={t.matrix} />,
    <CurveFigure key="c" t={t.curve} />,
    <RippleFigure key="r" labels={t.ripple} lost={money.lost} />,
  ];

  return (
    <section id="problem" className="relative overflow-hidden bg-petrol-900 py-24 text-paper-light sm:py-32">
      <Container>
        <div className="max-w-3xl">
          <div className="eyebrow text-copper-300">
            <span className="rule-copper bg-copper-300/80" aria-hidden />
            {t.eyebrow}
          </div>
          <h2 className="mt-6 font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.025em] text-paper-light sm:text-[3.6rem]">
            <Rich text={t.title} em="text-copper-300" />
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">{t.lead}</p>
        </div>

        <ol className="mt-20 space-y-20 sm:mt-24 sm:space-y-28">
          {t.pains.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={p.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
                <div className={cn("lg:col-span-5", flip && "lg:order-2")}>
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-copper-300">
                    <span className="step-num">
                      {t.symptom} {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-10 bg-copper-300/50" aria-hidden />
                  </p>
                  <h3 className="mt-4 font-display text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.02em] text-paper-light sm:text-[2.2rem]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-paper/75">{fill(p.body, money)}</p>
                </div>

                <figure className={cn("lg:col-span-7", flip && "lg:order-1")}>
                  <div className="rounded-[10px] border border-line-onDark bg-[#0E2E2A] p-5 sm:p-8">{figures[i]}</div>
                  <figcaption className="mt-3 text-xs leading-relaxed text-paper/50">
                    <span className="font-semibold text-paper/70">
                      {t.figure} {i + 1}
                    </span>{" "}
                    · {p.caption}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ol>

        {/* Diagnose */}
        <div className="mt-24 grid gap-8 border-t border-line-onDark pt-14 sm:mt-32 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-300/50">
                <MedIcon name="pulse" className="h-5 w-5" />
              </span>
              {t.diagnosis}
            </p>
          </div>
          <div className="lg:col-span-9">
            <p className="font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.025em] text-paper-light sm:text-[3.6rem]">
              <Rich text={t.quote} em="text-teal-300" />
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/70">{t.quoteSub}</p>
            <div className="mt-9">
              <CTAButton href={localeHref(lang, "/methode")} variant="onDark" size="lg" external={false}>
                {t.cta}
                <MedIcon name="arrowRight" className="h-4 w-4" />
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
