"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

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
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-white">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
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
            <p className="pb-5 pr-10 text-sm leading-relaxed text-slate-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Reveal>
        <SectionHeading
          center
          eyebrow="Häufige Fragen"
          title="Was du noch wissen willst"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-12 max-w-2xl">
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
    </Section>
  );
}
