import { Container } from "../ui/Container";
import { Counter } from "../ui/Counter";
import { Reveal } from "../ui/Reveal";
import { PlaceholderBadge } from "../ui/Badge";

/**
 * Stats-Band mit animierten Countern – als ruhige, dunkle Petrol-Sektion
 * für editorialen Rhythmus.
 * WICHTIG: Nur ehrlich belegbare Kennzahlen. Alle Werte sind Platzhalter.
 * TODO: Echte Zahlen einsetzen (keine erfundenen Statistiken!).
 */
const STATS = [
  { to: 200, suffix: "+", label: "Stunden Lernmaterial & Workshops" },
  { to: 500, suffix: "+", label: "Mitglieder in der Community" },
  { to: 12, label: "Fokus-Module bis zum Examen" },
  { to: 4.8, decimals: 1, suffix: "/5", label: "Durchschnittliche Bewertung" },
];

export function Stats() {
  return (
    <section className="bg-petrol-900 py-20 text-paper-light sm:py-24">
      <Container>
        <Reveal>
          <div className="mb-12 flex items-center justify-center gap-3 text-center">
            <span className="eyebrow text-copper-300">
              <span className="rule-copper bg-copper-300/80" aria-hidden />
              medIQ lab in Zahlen
            </span>
            <PlaceholderBadge />
          </div>
        </Reveal>

        <dl className="grid grid-cols-2 divide-paper/10 sm:divide-x lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="px-4 py-6 text-center sm:py-2"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <div className="font-serif text-5xl font-medium tracking-tight text-paper-light sm:text-6xl">
                  <span className="nums">
                    <Counter to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                </div>
                <p className="mx-auto mt-4 max-w-[18ch] text-sm leading-snug text-paper/70">
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
