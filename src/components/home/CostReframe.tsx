import { fill } from "@/i18n/config";
import type { Dict } from "@/i18n/de";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Dunkles Wert-/Stakes-Band: reale Kosten eines Wiederholungsjahrs gegen den
 * Jahrespreis der Mitgliedschaft. Ehrliches Argument statt erfundener Statistik.
 */
export function CostReframe({ t, money }: { t: Dict["cost"]; money: Dict["money"] }) {
  const h = "font-serif text-[1.9rem] font-medium leading-[1.18] tracking-[-0.01em] text-paper-light sm:text-[2.5rem]";
  return (
    <section className="relative overflow-hidden bg-petrol-900 py-20 text-paper-light sm:py-28">
      <div className="glow-teal-bg pointer-events-none absolute inset-x-0 top-0 h-2/3" aria-hidden />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-teal-300">
              <span className="rule-copper bg-teal-400/80" aria-hidden />
              {t.eyebrow}
            </span>

            <p className={`mt-7 ${h}`}>
              {t.line1} <span className="whitespace-nowrap text-teal-300">{fill(t.value1, money)}</span>
            </p>
            <p className={`mt-3 ${h}`}>
              {t.line2} <span className="whitespace-nowrap text-copper-300">{fill(t.value2, money)}</span>
            </p>

            <p className="mx-auto mt-7 max-w-lg text-[1.05rem] leading-relaxed text-paper/75">{t.text}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
