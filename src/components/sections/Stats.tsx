import { Container } from "../ui/Container";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Stats-Bar mit animierten Countern.
 * WICHTIG: Nur ehrlich belegbare Kennzahlen. Alle Werte unten sind Platzhalter
 * und müssen vor dem Go-Live durch echte Zahlen ersetzt werden.
 * TODO: Echte Zahlen einsetzen und ggf. Kennzahlen austauschen/streichen.
 */
const STATS = [
  { to: 200, suffix: "+", label: "Stunden Lernmaterial & Workshops" },
  { to: 500, suffix: "+", label: "Mitglieder in der Community" },
  { to: 12, label: "Fokus-Module von Lernsystematik bis Examen" },
  { to: 4.8, decimals: 1, suffix: "/5", label: "Durchschnittliche Bewertung" },
];

export function Stats() {
  return (
    <section className="relative border-y border-line bg-ink-900/40 py-14">
      <Container>
        <Reveal>
          <div className="mb-8 flex items-center justify-center gap-3 text-center">
            <p className="text-sm text-slate-500">
              Was medIQ lab heute ausmacht
            </p>
            <PlaceholderBadge />
          </div>
        </Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <div className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  <span className="text-gradient">
                    <Counter
                      to={stat.to}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </span>
                </div>
                <p className="mx-auto mt-3 max-w-[16ch] text-sm leading-snug text-slate-400">
                  {stat.label}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
