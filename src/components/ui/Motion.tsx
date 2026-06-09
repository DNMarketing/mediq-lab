"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Stagger-Container: blendet Kinder beim Scroll-in versetzt nacheinander ein.
 * Kinder müssen <StaggerItem> sein.
 */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  once?: boolean;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const container: Variants = {
    hidden: {},
    show: {
      transition: reduce
        ? {}
        : { staggerChildren: gap, delayChildren: delay },
    },
  };
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-70px" }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  y = 18,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };
  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
