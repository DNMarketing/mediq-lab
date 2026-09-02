import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Dunkles Wert-/Stakes-Band (ersetzt das frühere Platzhalter-„in Zahlen"-Band).
 * Ehrliches Preis-Argument statt erfundener Statistiken: reale Kosten eines
 * Auslands-Wiederholungsjahrs gegen den Einstiegspreis.
 */
export function CostReframe() {
  return (
    <section className="relative overflow-hidden bg-petrol-900 py-20 text-paper-light sm:py-28">
      <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-2/3" aria-hidden />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-teal-300">
              <span className="rule-copper bg-teal-400/80" aria-hidden />
              Was auf dem Spiel steht
            </span>

            <p className="mt-7 font-serif text-[1.9rem] font-medium leading-[1.18] tracking-[-0.01em] text-paper-light sm:text-[2.5rem]">
              Ein verlorenes Jahr im Ausland:{" "}
              <span className="whitespace-nowrap text-teal-300">10.000 bis 15.000 €.</span>
            </p>
            <p className="mt-3 font-serif text-[1.9rem] font-medium leading-[1.18] tracking-[-0.01em] text-paper-light sm:text-[2.5rem]">
              Dein Lernsystem:{" "}
              <span className="whitespace-nowrap text-copper-300">ab 20 € im Monat.</span>
            </p>

            <p className="mx-auto mt-7 max-w-lg text-[1.05rem] leading-relaxed text-paper/75">
              Die Frage ist nicht, ob du dir medIQ&nbsp;lab leisten kannst, sondern ob du
              dir ein verlorenes Jahr leisten willst.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
