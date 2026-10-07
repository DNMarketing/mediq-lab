"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { fill } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Section } from "../ui/Section";
import { MedIcon } from "../ui/MedIcon";

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-line">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center justify-between gap-5 py-5 text-left">
        <span className="font-serif text-lg font-medium text-ink">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-petrol-700 transition-transform duration-300 ${open ? "rotate-45 bg-petrol-50" : ""}`}
          aria-hidden
        >
          <MedIcon name="plus" className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="max-w-prose pb-6 pr-10 leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ({ items, money }: { items: Dict["pageFaq"]["items"]; money: Dict["money"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <Section id="faq" tone="paper">
      <div className="mx-auto max-w-3xl">
        <div className="border-t border-line">
          {items.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={fill(item.a, money)} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </Section>
  );
}
