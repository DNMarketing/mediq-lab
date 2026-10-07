import { SKOOL_URL, CONTACT_EMAIL } from "@/lib/config";
import type { Locale } from "@/i18n/config";
import { getDict, Rich } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/ui/PageIntro";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MedIcon } from "@/components/ui/MedIcon";

const inputClass =
  "w-full rounded-card border border-line-strong bg-paper-light px-4 py-3 text-ink placeholder:text-ink-mute transition-colors focus:border-petrol-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";

export function kontaktMeta(lang: Locale) {
  const t = getDict(lang).pageKontakt;
  return pageMetadata(lang, "/kontakt", { title: t.title, description: t.description });
}

export function KontaktView({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const t = d.pageKontakt;
  const card =
    "group flex items-start gap-4 rounded-card border border-line bg-paper-light p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:shadow-glow-teal-sm";
  const icon =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-paper text-petrol-700 transition-colors group-hover:border-teal-400/40 group-hover:bg-teal-100 group-hover:text-teal-600";

  return (
    <>
      <PageIntro eyebrow={t.intro.eyebrow} title={<Rich text={t.intro.title} />} lead={t.intro.lead} ekg={false} />

      {/* Sticky Mobile-CTA hier ausblenden, damit sie den Formular-Button nicht überdeckt */}
      <div data-mobilecta="hide">
        <Section tone="paper" className="pt-10 sm:pt-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Direkte Kontaktwege */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="space-y-4">
                  <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer" className={card}>
                    <span className={icon}>
                      <MedIcon name="community" className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-serif text-lg font-medium text-ink">{t.community.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{t.community.body}</span>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-copper-600">
                        {t.community.cta}
                        <MedIcon name="arrowRight" className="h-4 w-4" />
                      </span>
                    </span>
                  </a>

                  <a href={`mailto:${CONTACT_EMAIL}`} className={card}>
                    <span className={icon}>
                      <MedIcon name="exam" className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-serif text-lg font-medium text-ink">{t.email.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{t.email.body}</span>
                      <span className="mt-2 block text-sm font-medium text-petrol-700">{CONTACT_EMAIL}</span>
                    </span>
                  </a>

                  <p className="text-xs leading-relaxed text-ink-mute">{t.note}</p>
                </div>
              </Reveal>
            </div>

            {/* Kontaktformular (Netlify Forms, ein Formular für alle Sprachen) */}
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
                  <input type="hidden" name="sprache" value={lang} />
                  <p className="hidden">
                    <label>
                      {t.form.honeypot} <input name="bot-field" />
                    </label>
                  </p>

                  <h2 className="font-serif text-2xl font-medium text-ink">{t.form.title}</h2>
                  <p className="mt-1.5 text-sm text-ink-soft">{t.form.sub}</p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                        {t.form.name}
                      </label>
                      <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                        {t.form.email}
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="thema" className="mb-1.5 block text-sm font-medium text-ink">
                        {t.form.topic} <span className="text-ink-mute">{t.form.optional}</span>
                      </label>
                      <input id="thema" name="thema" type="text" placeholder={t.form.topicPlaceholder} className={inputClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="nachricht" className="mb-1.5 block text-sm font-medium text-ink">
                        {t.form.message}
                      </label>
                      <textarea id="nachricht" name="nachricht" rows={5} required className={inputClass} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-card bg-petrol-700 px-7 py-3.5 text-[15px] font-medium text-paper-light transition-all duration-200 hover:bg-petrol-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-px"
                  >
                    {t.form.submit}
                    <MedIcon name="arrowRight" className="h-4 w-4" />
                  </button>

                  <p className="mt-4 text-xs leading-relaxed text-ink-mute">{t.form.consent}</p>
                </form>
              </Reveal>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
