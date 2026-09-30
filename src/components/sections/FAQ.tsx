"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { PRICING } from "@/lib/config";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { MedIcon } from "../ui/MedIcon";

const FAQS = [
  {
    q: "Für wen ist medIQ lab?",
    a: "Für Medizinstudierende in Deutschland und im EU-Ausland, ob staatliche oder private Uni, vom ersten Semester bis zum Examen. Wenn du viel lernst und trotzdem das Gefühl hast, es reicht nicht, wenn du Prüfungen sicher bestehen und teure Verzögerungen vermeiden willst, bist du richtig.",
  },
  {
    q: "Funktioniert das auch, wenn ich in Deutschland studiere?",
    a: "Ja, ausdrücklich. medIQ lab ist für beides gebaut. Die Methoden sind unabhängig von Standort und Curriculum, und Workshops, Live Events, Downloads und KI-Lernapp nutzt du online, egal ob du in Heidelberg, Wien oder Pécs studierst.",
  },
  {
    q: "Was kostet die Mitgliedschaft?",
    a: `${PRICING.yearly} € im Jahr, alles inklusive: Workshop-Reihe, Videoreihen, wöchentliche Live Events wie Study Together und Community-Café, Gastvorträge, Prüfungssimulationen, Downloads und die KI-Lernapp. Wenn du lieber monatlich zahlst, sind es ${PRICING.monthly} € im Monat. Es gibt keine versteckten Extras und keine Upsells.`,
  },
  {
    q: "Gibt es Ratenzahlung, Rabatte oder eine Garantie?",
    a: `Ratenzahlung ja: Statt ${PRICING.yearly} € im Jahr kannst du ${PRICING.monthly} € monatlich zahlen. Außerdem gibt es einen Campus-Rabatt, sprich uns dazu einfach in der Community oder über die Kontaktseite an. Eine Bestehens-Garantie gibt es nicht, weil sie niemand seriös geben kann.`,
  },
  {
    q: "Lohnt sich der Preis wirklich?",
    a: `Rechne ehrlich gegen: Ein einziges verlorenes Semester kostet dich Monate an Miete und Lebenshaltung plus einen späteren Berufseinstieg. An Privat- und Auslands-Unis kommt ein Wiederholungsjahr von oft 10.000 bis 20.000 € dazu. Gemessen daran sind ${PRICING.yearly} € im Jahr eine Investition, die sich schon rechnet, wenn sie dir ein einziges verlorenes Semester erspart.`,
  },
  {
    q: "Wie laufen Anmeldung und Zahlung ab?",
    a: "Anmeldung und Zahlung erfolgen vollständig und sicher über Skool. Du klickst auf einen der Buttons, landest in der medIQ lab Community auf Skool und wählst dort jährliche oder monatliche Zahlung. Diese Website wickelt keine Zahlung ab.",
  },
  {
    q: "Bekomme ich „garantiert bestehen“?",
    a: "Nein, und jeder, der das verspricht, ist unseriös. Bestehen hängt von dir ab. Was wir liefern, ist ein erprobtes System und eine Community, die deine Chancen messbar verbessern, indem du klüger statt nur härter lernst.",
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

export function FAQ({ showHeading = true }: { showHeading?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!showHeading) {
    return (
      <Section id="faq" tone="paper">
        <div className="mx-auto max-w-3xl">
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
        </div>
      </Section>
    );
  }

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
