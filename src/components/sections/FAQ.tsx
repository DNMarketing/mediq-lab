"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { MedIcon } from "../ui/MedIcon";

const FAQS = [
  {
    q: "Für wen ist medIQ lab?",
    a: "Für Medizinstudierende an staatlichen, privaten und Auslands-Unis – vom ersten Semester bis zum Examen. Wenn du effizienter lernen, Prüfungen sicher bestehen und teure Verzögerungen vermeiden willst, bist du richtig.",
  },
  {
    q: "Wie laufen Anmeldung und Zahlung ab?",
    a: "Anmeldung und Zahlung erfolgen vollständig und sicher über Skool. Du klickst auf einen der Buttons, landest in der medIQ lab Community auf Skool und wählst dort Community-Abo oder Workshop-Reihe. Diese Website wickelt keine Zahlung ab.",
  },
  {
    q: "Was ist der Unterschied zwischen Abo und Workshop?",
    a: "Das Community-Abo ist der günstige monatliche Einstieg: Austausch, Lerngruppen und ausgewählte Inhalte. Die Premium-Workshop-Reihe ist das Hauptprodukt – ein einmaliger Kauf mit dem vollständigen Lernsystem von der Lernsystematik bis zur Examensvorbereitung.",
  },
  {
    q: "Lohnt sich der Preis der Workshop-Reihe wirklich?",
    a: "Rechne ehrlich gegen: Ein einziges verlorenes Semester kostet dich Monate an Miete und Lebenshaltung plus einen späteren Berufseinstieg. An Privat- und Auslands-Unis kommt ein Wiederholungsjahr von oft 10.000–15.000 € dazu. Gemessen daran ist die Workshop-Reihe eine Investition, die sich schon vermeidet, wenn sie dir ein einziges verlorenes Semester erspart.",
  },
  {
    q: "Gibt es eine Garantie oder Ratenzahlung?",
    a: "[Platzhalter – TODO: ehrlich befüllen. Falls Ratenzahlung oder eine Zufriedenheits-/Geld-zurück-Regelung über Skool angeboten wird, hier konkret und seriös beschreiben. Keine unhaltbaren Versprechen.]",
  },
  {
    q: "Funktioniert das auch für Auslandsstudenten?",
    a: "Ja. Die Methoden sind unabhängig von Standort und Curriculum – Active Recall, Spaced Repetition und Prüfungsstrategie funktionieren in Ungarn, Österreich oder Deutschland gleichermaßen. Alles läuft online über die Community.",
  },
  {
    q: "Bekomme ich „garantiert bestehen“?",
    a: "Nein – und jeder, der das verspricht, ist unseriös. Bestehen hängt von dir ab. Was wir liefern, ist ein erprobtes System und eine Community, die deine Chancen messbar verbessern, indem du klüger statt nur härter lernst.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
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
            <p className="max-w-prose pb-6 pr-10 leading-relaxed text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" tone="paper">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow="Häufige Fragen" title="Was du noch wissen willst" />
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal delay={0.05}>
            <div className="border-t border-line">
              {FAQS.map((item, i) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
