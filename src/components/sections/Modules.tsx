import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Workshop-Module ("Was du bekommst").
 * Inhalte sind Platzhalter – finale Modul-Beschreibungen einsetzen.
 * TODO: Modul-Titel & -Inhalte final befüllen, Reihenfolge prüfen.
 */
const MODULES = [
  {
    icon: "◎",
    title: "Lernsystematik",
    body: "Dein persönliches Lernsystem aufbauen – von der Stoffplanung bis zur Wochenstruktur, die wirklich durchhält.",
  },
  {
    icon: "↻",
    title: "Anki & Spaced Repetition",
    body: "Karteikarten richtig bauen und einsetzen. So lernst du einmal – und behältst es bis zum Examen.",
  },
  {
    icon: "✎",
    title: "Prüfungsstrategie & Altfragen",
    body: "Altfragen-Muster lesen, Schwerpunkte erkennen, gezielt das Prüfungsrelevante lernen statt alles.",
  },
  {
    icon: "◷",
    title: "Zeitmanagement",
    body: "Prioritäten setzen, Aufschieben durchbrechen, Lernzeit schützen – auch neben Klinik und Nebenjob.",
  },
  {
    icon: "✦",
    title: "Physikum- & Staatsexamen-Prep",
    body: "Strukturierte Lernpläne für die großen Hürden – mit klarem Countdown statt Last-Minute-Panik.",
  },
  {
    icon: "♥",
    title: "Mentale Belastung",
    body: "Prüfungsangst, Druck und Selbstzweifel begegnen – mit Werkzeugen, die im Ernstfall funktionieren.",
  },
  {
    icon: "⚇",
    title: "Community & Accountability",
    body: "Lerngruppen, Austausch und Verbindlichkeit – damit du dranbleibst, auch wenn die Motivation schwankt.",
  },
];

export function Modules() {
  return (
    <Section id="module">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Was du bekommst"
            title="Die Workshop-Module im Überblick"
            subtitle="Ein durchdachter Pfad – vom Lernsystem bis zum Examen. Jedes Modul löst ein konkretes Problem im Studienalltag."
          />
          <PlaceholderBadge className="mb-2" />
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((m, i) => (
          <Reveal key={m.title} delay={(i % 3) * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-ink-800/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:bg-ink-800/70">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-xl text-accent">
                <span aria-hidden>{m.icon}</span>
              </div>
              <h3 className="font-medium text-white">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {m.body}
              </p>
            </div>
          </Reveal>
        ))}

        {/* Hinweis-Card: Details in Skool */}
        <Reveal delay={0.16}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-line-strong bg-ink-900/40 p-6">
            <p className="text-sm leading-relaxed text-slate-400">
              Die vollständigen Inhalte, Lektionen und Materialien findest du im
              geschützten Bereich – direkt in der medIQ&nbsp;lab Community auf Skool.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
