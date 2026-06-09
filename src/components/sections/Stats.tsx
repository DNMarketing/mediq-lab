import { Container } from "../ui/Container";
import { Counter } from "../ui/Counter";
import { Stagger, StaggerItem } from "../ui/Motion";
import { PlaceholderBadge } from "../ui/Badge";
import { EkgLine } from "../ui/Anatomy";

/**
 * Stats-Band – dramatische dunkle Petrol-Sektion mit klinischem Teal-Glow.
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
    <section className="relative overflow-hidden bg-petrol-900 py-20 text-paper-light sm:py-24">
      {/* klinischer Teal-Glow */}
      <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-2/3" aria-hidden />
      {/* EKG-Signatur oben */}
      <div className="pointer-events-none absolute inset-x-0 top-0 text-teal-400/50">
        <EkgLine beats={8} strokeWidth={1.4} className="h-10" />
      </div>

      <Container className="relative">
        <div className="mb-12 flex items-center justify-center gap-3 text-center">
          <span className="eyebrow text-teal-300">
            <span className="rule-copper bg-teal-400/80" aria-hidden />
            medIQ lab in Zahlen
          </span>
          <PlaceholderBadge />
        </div>

        <Stagger as="ol" className="grid grid-cols-2 divide-paper/10 sm:divide-x lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem as="li" key={stat.label} className="px-4 py-6 text-center sm:py-2">
              <div className="font-serif text-5xl font-medium tracking-tight text-paper-light sm:text-6xl">
                <span className="nums bg-gradient-to-b from-paper-light to-teal-300 bg-clip-text text-transparent">
                  <Counter to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
                </span>
              </div>
              <p className="mx-auto mt-4 max-w-[18ch] text-sm leading-snug text-paper/70">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
