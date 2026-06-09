import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Authority / Methode – der zentrale Trust-Anker.
 * Enthält zwei Bausteine, die du befüllen musst:
 *  (a) Gründer-/Mentor-Story (links)
 *  (b) Wissenschaftlich begründete Lernmethode (rechts/unten)
 * Beide sind als Platzhalter markiert.
 */

const PRINCIPLES = [
  {
    title: "Aktives Abrufen (Active Recall)",
    body: "Wissen wird gefestigt, indem du es aktiv aus dem Gedächtnis holst – nicht durch passives Wiederlesen. Studien zeigen messbar bessere Behaltensleistung.",
  },
  {
    title: "Verteiltes Lernen (Spaced Repetition)",
    body: "In wachsenden Abständen wiederholen, statt vor der Prüfung zu pauken. So wandert Stoff ins Langzeitgedächtnis – und bleibt dort.",
  },
  {
    title: "Prüfungsorientierung",
    body: "Vom Altfragen-Muster rückwärts gedacht: Du lernst gezielt das, was geprüft wird – statt dich in Details zu verlieren.",
  },
];

export function Authority() {
  return (
    <Section id="methode" className="relative">
      <div aria-hidden className="glow-violet pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px]" />

      <Reveal>
        <SectionHeading
          eyebrow="Warum medIQ lab"
          title="Eine Methode mit Fundament – kein Bauchgefühl."
          subtitle="medIQ lab basiert nicht auf Motivationssprüchen, sondern auf lernpsychologisch belegten Prinzipien. Das ist der Unterschied zwischen härter lernen und klüger lernen."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* (a) Gründer-/Mentor-Story */}
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-800/50 p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line-strong bg-ink-700">
                <div className="flex h-full items-center justify-center text-xs text-slate-500">
                  Foto
                </div>
              </div>
              <div>
                <p className="font-medium text-white">[Name der Gründer:in]</p>
                <p className="text-sm text-slate-400">[Rolle · Hintergrund]</p>
              </div>
            </div>
            <PlaceholderBadge className="mb-3 self-start" />
            <p className="text-sm leading-relaxed text-slate-400">
              {/* TODO: Echte Gründer-/Mentor-Story einsetzen. Wer steckt hinter
                  medIQ lab? Eigener Studienweg, Hürden, warum diese Methode? Das
                  ist der wichtigste Vertrauensbeweis – ausführlich und authentisch. */}
              Hier kommt die persönliche Geschichte hinter medIQ lab hin: der eigene
              Weg durchs Medizinstudium, die Wendepunkte, und warum daraus eine
              Methode wurde, die heute hunderten Studierenden hilft. Authentisch,
              konkret, nahbar – das schafft Vertrauen für ein High-Ticket-Produkt.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6">
              <div>
                <p className="font-display text-2xl font-semibold text-white">[X]</p>
                <p className="text-xs text-slate-500">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-white">[X]</p>
                <p className="text-xs text-slate-500">begleitete Studierende</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* (b) Wissenschaftliche Prinzipien */}
        <div className="grid gap-4 lg:col-span-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group flex gap-5 rounded-2xl border border-line bg-ink-800/40 p-6 transition-colors hover:border-accent/30">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-display text-lg font-semibold text-accent">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-medium text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="px-2 text-xs text-slate-600">
              {/* TODO: Optional Quellen/Studien verlinken, um Wissenschaftlichkeit
                  zu untermauern (z. B. Karpicke & Roediger, Cepeda et al.). */}
              Tipp: Mit Studien-Quellen belegen, um die Wissenschaftlichkeit sichtbar zu machen.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
