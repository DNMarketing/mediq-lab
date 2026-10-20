"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Verzögerung in Sekunden, für gestaffelte Listen. */
  delay?: number;
  /** Bewegungsrichtung beim Einblenden (dezent halten). */
  y?: number;
  /** false = nur bewegen, nicht ausblenden (für Inhalte above the fold, sofort sichtbar). */
  fade?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-Reveal-Wrapper. Blendet Inhalt beim Scrollen ruhig & edel ein
 * (sanftes Fade/Slide, keine auffälligen Effekte).
 * Respektiert `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  fade = true,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = m[as];
  const from = fade ? (reduce ? { opacity: 0 } : { opacity: 0, y }) : reduce ? false : { y };
  const to = fade ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : { y: 0 };

  return (
    <MotionTag
      className={className}
      initial={from}
      whileInView={to}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </MotionTag>
  );
}
