import { PILLARS } from "@/lib/pillars";
import { IMAGES } from "@/lib/images";
import { Section, Eyebrow } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { Stagger, StaggerItem } from "../ui/Motion";
import { EditorialImage } from "../ui/EditorialImage";
import { MedIcon } from "../ui/MedIcon";

/**
 * Was in der Mitgliedschaft steckt: die vier Säulen mit den konkreten
 * Inhalten aus dem Content-Plan, plus KI-Lernapp als Extra-Callout.
 */
export function Modules() {
  return (
    <Section id="module" tone="paper">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Intro + Motive (sticky) */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Was du bekommst</Eyebrow>
              <h2 className="mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-[-0.01em] text-ink sm:text-[2.6rem]">
                Vier Säulen, alles in einer Mitgliedschaft
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">
                Es bleibt nicht beim Lernen. Workshops, Videoreihen, wöchentliche Live
                Events und fertige Downloads, dazu unsere eigene KI-Lernapp. Alles in
                einem Preis.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <EditorialImage
                src={IMAGES.moduleHeart}
                alt="Anatomisches Herzmodell"
                aspect="aspect-[4/3]"
                className="mt-8 frame"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <EditorialImage
                src={IMAGES.moduleMicroscope}
                alt="Mikroskop im Labor"
                aspect="aspect-[4/3]"
                className="mt-4 hidden frame lg:block"
              />
            </Reveal>
          </div>
        </div>

        {/* Die vier Säulen mit Inhalten */}
        <div className="lg:col-span-8">
          <Stagger as="ul" className="grid gap-3 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <StaggerItem as="li" key={p.title}>
                <div className="group flex h-full flex-col rounded-card border border-line bg-paper-light p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                      <MedIcon name={p.icon} className="h-6 w-6" />
                    </span>
                    <span className="step-num font-serif text-sm text-ink-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-ink">{p.title}</h3>
                  <span className="mt-1 text-xs uppercase tracking-[0.16em] text-teal-600">
                    {p.sub}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm leading-snug text-ink-soft">
                        <span aria-hidden className="mt-0.5 shrink-0 text-teal-600">
                          <MedIcon name="check" className="h-4 w-4" strokeWidth={2} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* KI-Lernapp als Extra */}
          <Reveal delay={0.1}>
            <div className="mt-3 flex gap-4 rounded-card border border-teal-400/30 bg-teal-100/40 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-teal-100 text-teal-600">
                <MedIcon name="repeat" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink">
                  Plus: unsere eigene KI-Lernapp
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  Abfragen, wiederholen, strukturieren: Die medIQ&nbsp;lab KI-Lernapp
                  begleitet dich zwischen den Events und ist in der Mitgliedschaft
                  enthalten.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-mute">
              Alle Termine, Aufzeichnungen und Materialien findest du im geschützten
              Bereich, direkt in der medIQ&nbsp;lab Community auf Skool.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
