"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/* Gemeinsame Draw-Variants: Pfade "zeichnen" sich beim Scroll-in.     */
/* ------------------------------------------------------------------ */
function useDrawVariants(duration = 1.8): {
  container: Variants;
  path: Variants;
} {
  const reduce = useReducedMotion();
  return {
    container: {
      hidden: {},
      show: { transition: { staggerChildren: reduce ? 0 : 0.18 } },
    },
    path: {
      hidden: reduce ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 },
      show: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: reduce ? 0 : duration, ease: EASE },
      },
    },
  };
}

type AnatomyProps = { className?: string; strokeWidth?: number };

/* ------------------------------------------------------------------ */
/* Anatomisches Herz – Hero-Signaturmotiv (zeichnet sich).             */
/* ------------------------------------------------------------------ */
export function AnatomyHeart({ className, strokeWidth = 1.6 }: AnatomyProps) {
  const { container, path } = useDrawVariants(2);
  return (
    <motion.svg
      viewBox="0 0 200 210"
      fill="none"
      className={cn("h-full w-full", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Umriss */}
        <motion.path
          variants={path}
          d="M100 184C62 150 26 122 26 82c0-24 18-42 42-42 16 0 28 9 32 22 4-13 16-22 32-22 24 0 42 18 42 42 0 40-36 68-74 102Z"
        />
        {/* Aorta + große Gefäße */}
        <motion.path variants={path} d="M100 62c2-16-2-30 6-42M100 62c-2-14 4-26-8-38M116 50c10-10 24-10 30 2" />
        {/* Koronararterien */}
        <motion.path variants={path} d="M70 78c14 8 22 24 24 42 2 22-2 40-6 56" />
        <motion.path variants={path} d="M132 84c-12 10-18 26-18 44 0 18 4 34 8 46" />
        <motion.path variants={path} d="M94 120c-12 4-24 2-34-6M114 132c12 2 24-2 32-12" />
      </g>
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/* Gehirn – Methode/Lernen (dunkle Authority-Sektion).                 */
/* ------------------------------------------------------------------ */
export function AnatomyBrain({ className, strokeWidth = 1.6 }: AnatomyProps) {
  const { container, path } = useDrawVariants(2.2);
  return (
    <motion.svg
      viewBox="0 0 220 200"
      fill="none"
      className={cn("h-full w-full", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      >
        {/* Umriss inkl. Hirnstamm */}
        <motion.path
          variants={path}
          d="M70 158c-20 2-36-12-36-30-12-6-16-22-6-33-8-13-2-31 14-36 6-16 26-25 44-19 12-12 33-12 45 1 20-3 38 12 38 31 13 9 14 29 1 39 3 16-10 31-27 31-6 11-21 16-33 11"
        />
        {/* Mittellinie / Hirnstamm */}
        <motion.path variants={path} d="M110 37c2 30 0 60 0 90 0 14-6 26-16 35" />
        {/* Gyri-Falten links */}
        <motion.path variants={path} d="M58 70c10 4 12 16 4 22M52 104c12 0 18 10 12 20M82 56c8 6 8 16-2 20M78 96c10 2 14 12 6 20M70 130c10-2 18 6 14 16" />
        {/* Gyri-Falten rechts */}
        <motion.path variants={path} d="M150 64c-10 4-12 16-2 22M162 96c-12 2-16 12-6 20M134 52c-8 6-6 16 4 18M140 124c-10 0-16 10-8 18" />
      </g>
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/* DNA-Doppelhelix – berechnet, "high-tech"-Akzent.                    */
/* ------------------------------------------------------------------ */
export function AnatomyDna({ className, strokeWidth = 1.6 }: AnatomyProps) {
  const { container, path } = useDrawVariants(1.8);
  const H = 320;
  const cx = 60;
  const amp = 40;
  const turns = 3;
  const steps = 80;
  const ptsA: string[] = [];
  const ptsB: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const ang = t * Math.PI * 2 * turns;
    const y = t * H;
    ptsA.push(`${(cx + amp * Math.sin(ang)).toFixed(1)} ${y.toFixed(1)}`);
    ptsB.push(`${(cx - amp * Math.sin(ang)).toFixed(1)} ${y.toFixed(1)}`);
  }
  const strandA = "M" + ptsA.join(" L");
  const strandB = "M" + ptsB.join(" L");
  const rungs: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 4; i <= steps; i += 8) {
    const t = i / steps;
    const ang = t * Math.PI * 2 * turns;
    const y = t * H;
    rungs.push({ x1: cx + amp * Math.sin(ang), y1: y, x2: cx - amp * Math.sin(ang), y2: y });
  }

  return (
    <motion.svg
      viewBox="0 0 120 320"
      fill="none"
      className={cn("h-full w-full", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      >
        {rungs.map((r, i) => (
          <motion.line
            key={i}
            variants={path}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            opacity={0.5}
          />
        ))}
        <motion.path variants={path} d={strandA} />
        <motion.path variants={path} d={strandB} />
      </g>
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/* EKG-/Vitalkurve – wiederkehrendes Signaturelement mit laufendem    */
/* Puls. Eignet sich als Section-Divider oder Hero-Akzent.            */
/* ------------------------------------------------------------------ */
function ekgPath(beats: number, beatW: number, h: number): string {
  const mid = h / 2;
  let d = `M0 ${mid}`;
  for (let i = 0; i < beats; i++) {
    const x = i * beatW;
    d +=
      ` H${(x + beatW * 0.32).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(-h * 0.08).toFixed(1)}` +
      ` l${(beatW * 0.03).toFixed(1)} ${(h * 0.16).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(-h * 0.66).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(h * 0.9).toFixed(1)}` +
      ` l${(beatW * 0.04).toFixed(1)} ${(-h * 0.46).toFixed(1)}` +
      ` l${(beatW * 0.03).toFixed(1)} ${(h * 0.12).toFixed(1)}` +
      ` H${(x + beatW).toFixed(1)}`;
  }
  return d;
}

export function EkgLine({
  className,
  strokeWidth = 1.6,
  beats = 6,
}: {
  className?: string;
  strokeWidth?: number;
  beats?: number;
}) {
  const reduce = useReducedMotion();
  const beatW = 200;
  const h = 80;
  const d = ekgPath(beats, beatW, h);
  return (
    <svg
      viewBox={`0 0 ${beats * beatW} ${h}`}
      fill="none"
      preserveAspectRatio="none"
      className={cn("w-full", className)}
      aria-hidden
    >
      {/* ruhige Grundlinie */}
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity={0.28}
      />
      {/* laufender Puls (heller Teal-Sweep) */}
      {!reduce && (
        <path
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth * 1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          className="animate-ekg-run text-teal-400"
          style={{ strokeDasharray: "160 2600" }}
        />
      )}
    </svg>
  );
}
