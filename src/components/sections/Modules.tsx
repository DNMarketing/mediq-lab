import { IMAGES } from "@/lib/images";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { EditorialImage } from "../ui/EditorialImage";
import { MedIcon, type IconName } from "../ui/MedIcon";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Workshop-Module ("Was du bekommst"), editoriale Liste mit Stagger-Animation
 * und Teal-Glow-Hover.
 * TODO: Modul-Titel & -Inhalte final befüllen.
 */
const MODULES: { icon: IconName; title: string; body: string }[] = [
  { icon: "structure", title: "Lernsystematik", body: "Dein persönliches Lernsystem, von der Stoffplanung bis zur Wochenstruktur, die wirklich durchhält." },
  { icon: "repeat", title: "Anki & Spaced Repetition", body: "Karteikarten richtig bauen und einsetzen. Einmal lernen, bis zum Examen behalten." },
  { icon: "exam", title: "Prüfungsstrategie & Altfragen", body: "Altfragen-Muster lesen, Schwerpunkte erkennen, gezielt das Prüfungsrelevante lernen." },
  { icon: "clock", title: "Zeitmanagement", body: "Prioritäten setzen, Aufschieben durchbrechen, Lernzeit schützen, auch neben Klinik und Nebenjob." },
  { icon: "milestone", title: "Physikum- & Staatsexamen-Prep", body: "Strukturierte Lernpläne für die großen Hürden, mit klarem Countdown statt Last-Minute-Panik." },
  { icon: "mind", title: "Mentale Belastung", body: "Prüfungsangst, Druck und Selbstzweifel begegnen, mit Werkzeugen, die im Ernstfall funktionieren." },
  { icon: "community", title: "Community & Accountability", body: "Lerngruppen, Austausch und Verbindlichkeit, damit du dranbleibst, auch wenn die Motivation schwankt." },
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
                Ein durchdachter Pfad, vom Lernsystem bis zum Examen. Jedes Modul löst
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

        {/* Modul-Liste mit Stagger + Glow-Hover */}
        <div className="lg:col-span-8">
          <Stagger as="ul" className="grid gap-3 sm:grid-cols-2">
            {MODULES.map((m, i) => (
              <StaggerItem as="li" key={m.title}>
                <div className="group h-full rounded-card border border-line bg-paper-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                      <MedIcon name={m.icon} className="h-6 w-6" />
                    </span>
                    <span className="step-num font-serif text-sm text-ink-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-ink">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{m.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-mute">
              Die vollständigen Inhalte, Lektionen und Materialien findest du im
              geschützten Bereich, direkt in der medIQ&nbsp;lab Community auf Skool.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
