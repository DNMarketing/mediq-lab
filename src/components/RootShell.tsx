import { serif, sans } from "@/lib/fonts";
import { getDict, LOCALE_TAGS, type Locale } from "@/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileCTABar } from "./MobileCTABar";
import { MedIQChat } from "./MedIQChat";
import { MotionProvider } from "./MotionProvider";

/**
 * Gemeinsames HTML-Gerüst für beide Root-Layouts (Deutsch im Root, andere
 * Sprachen unter /[lang]). Setzt <html lang>, Fonts, Header/Footer, Sticky-CTA
 * und Chat in der jeweiligen Sprache.
 */
export function RootShell({
  lang,
  children,
  langPath,
}: {
  lang: Locale;
  children: React.ReactNode;
  /** Fester Pfad für den Sprachumschalter (404-Seite). */
  langPath?: string;
}) {
  const d = getDict(lang);
  return (
    <html lang={LOCALE_TAGS[lang]} className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans">
        {/* Ohne JavaScript: Animationen nicht im Startzustand (unsichtbar) stehen lassen, FAQ-Antworten aufklappen */}
        <noscript dangerouslySetInnerHTML={{ __html: '<style>[style*="opacity:0"]{opacity:1!important;transform:none!important}[style*="height:0"]{height:auto!important}</style>' }} />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-card focus:bg-petrol-700 focus:px-4 focus:py-2 focus:text-paper-light"
        >
          {d.common.skip}
        </a>
        <MotionProvider>
          <Header lang={lang} nav={d.nav} common={d.common} langPath={langPath} />
          <main id="inhalt">{children}</main>
          <Footer lang={lang} t={d.footer} nav={d.nav} languageLabel={d.common.language} />
          <MobileCTABar lang={lang} t={d.mobileBar} join={d.common.join} />
          <MedIQChat lang={lang} t={d.chat} join={d.common.join} money={d.money} />
        </MotionProvider>
      </body>
    </html>
  );
}
