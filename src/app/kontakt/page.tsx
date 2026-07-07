import type { Metadata } from "next";
import { SKOOL_URL, CONTACT_EMAIL } from "@/lib/config";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MedIcon } from "@/components/ui/MedIcon";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Fragen zu medIQ lab, zur Methode oder zur Workshop-Reihe? Schreib uns, oder komm direkt in die Community auf Skool.",
};

const inputClass =
  "w-full rounded-card border border-line-strong bg-paper-light px-4 py-3 text-ink placeholder:text-ink-mute transition-colors focus:border-petrol-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export default function KontaktPage() {
  return (
    <>
      <PageIntro
        eyebrow="Kontakt"
        title={
          <>
            Sprich mit uns,{" "}
            <span className="text-petrol-700 italic">bevor du dich entscheidest.</span>
          </>
        }
        lead="Ob Frage zur Methode, zur Workshop-Reihe oder zum Zugang: Wir antworten dir ehrlich und ohne Verkaufsdruck. Am schnellsten erreichst du uns direkt in der Community."
        ekg={false}
      />

      {/* Sticky Mobile-CTA hier ausblenden, damit sie den Formular-Button nicht überdeckt */}
      <div data-mobilecta="hide">
      <Section tone="paper" className="pt-10 sm:pt-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Direkte Kontaktwege */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-4">
                <a
                  href={SKOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-card border border-line bg-paper-light p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                    <MedIcon name="community" className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-serif text-lg font-medium text-ink">
                      Community auf Skool
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                      Der schnellste Draht: Stell deine Frage direkt in der medIQ&nbsp;lab
                      Community, oft antworten dir auch andere Mitglieder.
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-copper-600">
                      Zur Community
                      <MedIcon name="arrowRight" className="h-4 w-4" />
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-start gap-4 rounded-card border border-line bg-paper-light p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600">
                    <MedIcon name="exam" className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-serif text-lg font-medium text-ink">E-Mail</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                      Lieber klassisch? Schreib uns direkt.
                    </span>
                    <span className="mt-2 block text-sm font-medium text-petrol-700">
                      {CONTACT_EMAIL}
                    </span>
                    {/* TODO: echte Kontakt-E-Mail in src/lib/config.ts bestätigen. */}
                  </span>
                </a>

                <p className="text-xs leading-relaxed text-ink-mute">
                  Wir antworten in der Regel innerhalb weniger Werktage. Für Anmeldung und
                  Zahlung geht es direkt über Skool, diese Seite wickelt keine Zahlung ab.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Kontaktformular (Netlify Forms) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <form
                name="kontakt"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="rounded-card border border-line bg-paper-light p-7 shadow-soft sm:p-8"
              >
                {/* Netlify: erforderlich für statische Formulare */}
                <input type="hidden" name="form-name" value="kontakt" />
                <p className="hidden">
                  <label>
                    Nicht ausfüllen: <input name="bot-field" />
                  </label>
                </p>

                <h2 className="font-serif text-2xl font-medium text-ink">Schreib uns</h2>
                <p className="mt-1.5 text-sm text-ink-soft">
                  Wir melden uns persönlich zurück.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
                  </div>
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      E-Mail
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="thema" className="mb-1.5 block text-sm font-medium text-ink">
                      Worum geht’s? <span className="text-ink-mute">(optional)</span>
                    </label>
                    <input id="thema" name="thema" type="text" placeholder="z. B. Frage zur Workshop-Reihe" className={inputClass} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="nachricht" className="mb-1.5 block text-sm font-medium text-ink">
                      Nachricht
                    </label>
                    <textarea id="nachricht" name="nachricht" rows={5} required className={inputClass} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-card bg-petrol-700 px-7 py-3.5 text-[15px] font-medium text-paper-light transition-all duration-200 hover:bg-petrol-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-px"
                >
                  Nachricht senden
                  <MedIcon name="arrowRight" className="h-4 w-4" />
                </button>

                <p className="mt-4 text-xs leading-relaxed text-ink-mute">
                  {/* TODO: Netlify Forms im Deploy aktivieren + Empfänger/Benachrichtigung
                      einrichten. Bis dahin ist das Formular nur auf Netlify aktiv. */}
                  [PLATZHALTER: Formular-Versand], läuft nach dem Deploy über Netlify Forms.
                  Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur
                  Bearbeitung deiner Anfrage zu (siehe Datenschutz).
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
      </div>
    </>
  );
}
