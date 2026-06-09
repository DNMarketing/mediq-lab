import { IMAGES } from "@/lib/images";
import { Section, SectionHeading } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { EditorialImage } from "../ui/EditorialImage";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Authority / Methode – der zentrale Trust-Anker.
 *  (a) Gründer-/Mentor-Story (Porträt-Platzhalter – NICHT mit Stockfoto füllen)
 *  (b) Wissenschaftlich begründete Lernmethode
 */
const PRINCIPLES = [
  {
    title: "Aktives Abrufen",
    sub: "Active Recall",
    body: "Wissen festigt sich, indem du es aktiv aus dem Gedächtnis holst – nicht durch passives Wiederlesen. Lernpsychologisch klar belegt.",
  },
  {
    title: "Verteiltes Lernen",
    sub: "Spaced Repetition",
    body: "In wachsenden Abständen wiederholen statt vor der Prüfung pauken. So wandert Stoff ins Langzeitgedächtnis – und bleibt dort.",
  },
  {
    title: "Prüfungsorientierung",
    sub: "Altfragen-Logik",
    body: "Vom Prüfungsmuster rückwärts gedacht: Du lernst gezielt, was geprüft wird – statt dich in Details zu verlieren.",
  },
];

export function Authority() {
  return (
    <Section id="methode" tone="light">
      <Reveal>
        <SectionHeading
          eyebrow="Warum medIQ lab"
          title="Eine Methode mit Fundament — kein Bauchgefühl."
          subtitle="medIQ lab basiert nicht auf Motivationssprüchen, sondern auf lernpsychologisch belegten Prinzipien. Das ist der Unterschied zwischen härter lernen und klüger lernen."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* (a) Gründer-/Mentor-Story */}
        <Reveal className="lg:col-span-5">
          <figure className="overflow-hidden rounded-card border border-line bg-paper shadow-soft">
            {/* Porträt-Platzhalter – bewusst KEIN Stockfoto (Trust/Echtheit) */}
            <div className="relative flex aspect-[4/3] items-center justify-center border-b border-line bg-paper-sand">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-line-strong text-ink-mute">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="9" r="3.2" />
                    <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
                  </svg>
                </div>
                <p className="mt-3 text-xs text-ink-mute">Porträt der Gründer:in</p>
              </div>
            </div>
            <figcaption className="p-7">
              <div className="flex items-center gap-3">
                <p className="font-serif text-lg font-medium text-ink">[Name der Gründer:in]</p>
                <PlaceholderBadge />
              </div>
              <p className="mt-1 text-sm text-ink-mute">[Rolle · Hintergrund]</p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {/* TODO: Echte Gründer-/Mentor-Story einsetzen – eigener Studienweg,
                    Wendepunkte, warum diese Methode. Wichtigster Vertrauensbeweis. */}
                Hier steht die persönliche Geschichte hinter medIQ lab: der eigene Weg
                durchs Medizinstudium, die Hürden – und warum daraus eine Methode wurde,
                die heute vielen Studierenden hilft. Authentisch, konkret, nahbar.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6">
                <div>
                  <p className="font-serif text-2xl font-medium text-petrol-700">[X]</p>
                  <p className="text-xs text-ink-mute">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-medium text-petrol-700">[X]</p>
                  <p className="text-xs text-ink-mute">begleitete Studierende</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>

        {/* (b) Prinzipien + Notiz-Motiv */}
        <div className="lg:col-span-7">
          <Reveal>
            <EditorialImage
              id={IMAGES.methodNotes}
              alt="Hand schreibt mit Stift Notizen auf Papier"
              aspect="aspect-[16/7]"
              className="frame mb-8"
              width={1100}
            />
          </Reveal>

          <ol className="space-y-0">
            {PRINCIPLES.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08}>
                <div className="flex gap-6 border-t border-line py-7">
                  <span className="font-serif text-3xl font-medium leading-none text-copper-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-serif text-xl font-medium text-ink">{p.title}</h3>
                      <span className="text-xs uppercase tracking-[0.18em] text-ink-mute">
                        {p.sub}
                      </span>
                    </div>
                    <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2}>
            <p className="mt-5 text-xs text-ink-mute">
              {/* TODO: Optional Studien-Quellen verlinken (z. B. Karpicke & Roediger,
                  Cepeda et al.), um die Wissenschaftlichkeit zu belegen. */}
              Tipp: Mit Studien-Quellen belegen, um die Wissenschaftlichkeit sichtbar zu machen.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
