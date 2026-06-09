"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
  /** Vorangestelltes Zeichen, z. B. währungs- oder vergleichsbezogen. */
  prefix?: string;
  /** Nachgestelltes Zeichen, z. B. "+", "%", "h". */
  suffix?: string;
  /** Dezimalstellen. */
  decimals?: number;
  durationSec?: number;
};

/**
 * Animierter Zähler, der hochzählt, sobald er ins Bild scrollt.
 * Nutzt deutsche Zahlenformatierung (Tausenderpunkt, Dezimalkomma).
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  durationSec = 1.8,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: durationSec,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, durationSec, reduce]);

  const formatted = value.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
