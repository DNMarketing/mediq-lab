"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/** Lädt nur die Animations-Features, die die Website nutzt (kein Drag/Layout). Komponenten nutzen `m` statt `motion`. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
