import { IMAGES } from "@/lib/images";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { EditorialImage } from "../ui/EditorialImage";
import { MedIcon, type IconName } from "../ui/MedIcon";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Workshop-Module ("Was du bekommst") – editoriale Liste statt Karten-Raster.
 * TODO: Modul-Titel & -Inhalte final befüllen.
 */
const MODULES: { icon: IconName; title: string; body: string }[] = [
  { icon: "structure", title: "Lernsystematik", body: "Dein persönliches Lernsystem – von der Stoffplanung bis zur Wochenstruktur, die wirklich durchhält." },
  { icon: "repeat", title: "Anki & Spaced Repetition", body: "Karteikarten richtig bauen und einsetzen. Einmal lernen – bis zum Examen behalten." },
  { icon: "exam", title: "Prüfungsstrategie & Altfragen", body: "Altfragen-Muster lesen, Schwerpunkte erkennen, gezielt das Prüfungsrelevante lernen." },
  { icon: "clock", title: "Zeitmanagement", body: "Prioritäten setzen, Aufschieben durchbrechen, Lernzeit schützen – auch neben Klinik und Nebenjob." },
  { icon: "milestone", title: "Physikum- & Staatsexamen-Prep", body: "Strukturierte Lernpläne für die großen Hürden – mit klarem Countdown statt Last-Minute-Panik." },
  { icon: "mind", title: "Mentale Belastung", body: "Prüfungsangst, Druck und Selbstzweifel begegnen – mit Werkzeugen, die im Ernstfall funktionieren." },
  { icon: "community", title: "Community & Accountability", body: "Lerngruppen, Austausch und Verbindlichkeit – damit du dranbleibst, auch wenn die Motivation schwankt." },
];

export function Modules() {
  return (
    <Section id="module" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Intro + Motive (sticky) */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-3">
                <Eyebrow>Was du bekommst</Eyebrow>
                <PlaceholderBadge />
              </div>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                Die Workshop-Module
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
                Ein durchdachter Pfad – vom Lernsystem bis zum Examen. Jedes Modul löst
                ein konkretes Problem im Studienalltag.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <EditorialImage
                id={IMAGES.moduleHeart}
                alt="Anatomisches Herzmodell"
                aspect="aspect-[4/3]"
                className="mt-8 frame"
                width={760}
              />
            </Reveal>
            <Reveal delay={0.15}>
              <EditorialImage
                id={IMAGES.moduleMicroscope}
                alt="Mikroskop im Labor"
                aspect="aspect-[4/3]"
                className="mt-4 hidden frame lg:block"
                width={760}
              />
            </Reveal>
          </div>
        </div>

        {/* Modul-Liste */}
        <div className="lg:col-span-8">
          <ul className="border-t border-line">
            {MODULES.map((m, i) => (
              <Reveal as="li" key={m.title} delay={(i % 2) * 0.06}>
                <div className="group flex gap-6 border-b border-line py-7 transition-colors">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-paper-light text-petrol-700 transition-colors group-hover:border-petrol-700/40 group-hover:bg-petrol-50">
                    <MedIcon name={m.icon} className="h-6 w-6" />
                  </span>
                  <div className="pt-0.5">
                    <h3 className="font-serif text-xl font-medium text-ink">{m.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-ink-soft">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-mute">
              Die vollständigen Inhalte, Lektionen und Materialien findest du im
              geschützten Bereich – direkt in der medIQ&nbsp;lab Community auf Skool.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
