"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { CTAButton } from "../ui/CTAButton";
import { MedIcon } from "../ui/MedIcon";

/** Kompakte Einwand-FAQ auf der Startseite: nimmt Kaufbremsen direkt vor dem CTA. */
const FAQS = [
  {
    q: "Lohnt sich der Preis der Workshop-Reihe wirklich?",
    a: "Rechne ehrlich gegen: Ein verlorenes Semester kostet Monate an Miete und Lebenshaltung, im Ausland kommt ein Wiederholungsjahr von 10.000 bis 15.000 € dazu. Gemessen daran rechnen sich die 800 € schon, wenn sie dir ein einziges verlorenes Semester ersparen.",
  },
  {
    q: "Bekomme ich „garantiert bestehen“?",
    a: "Nein, und jeder, der das verspricht, ist unseriös. Bestehen hängt von dir ab. Was wir liefern, ist ein erprobtes System und eine Community, die deine Chancen messbar verbessern, indem du klüger statt nur härter lernst.",
  },
  {
    q: "Funktioniert das auch für Studierende in Deutschland?",
    a: "Ja. medIQ lab ist auf das Studium im Ausland ausgerichtet, aber die Methoden sind unabhängig von Standort und Curriculum. Active Recall, Spaced Repetition und Prüfungsstrategie funktionieren an einer deutschen Uni genauso wie in Ungarn oder Österreich.",
  },
  {
    q: "Wie laufen Anmeldung und Zahlung ab?",
    a: "Vollständig und sicher über Skool. Du klickst auf einen Button, landest in der medIQ lab Community und wählst dort Community-Abo oder Workshop-Reihe. Diese Website wickelt keine Zahlung ab.",
  },
];

function FaqRow({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-5 py-5 text-left"
      >
        <span className="font-serif text-lg font-medium text-ink">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-petrol-700 transition-transform duration-300 ${
            open ? "rotate-45 bg-petrol-50" : ""
          }`}
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
            <p className="pb-6 pr-8 leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqTeaser() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <Section tone="paper">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <SectionHeading center eyebrow="Bevor du dich entscheidest" title="Die häufigsten Fragen" />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10 border-t border-line">
            {FAQS.map((item, i) => (
              <FaqRow
                key={item.q}
                q={item.q}
                a={item.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 text-center">
            <CTAButton href="/faq" variant="ghost" external={false}>
              Alle Fragen &amp; Antworten
              <MedIcon name="arrowRight" className="h-4 w-4" />
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
