# medIQ lab – Website: Übergabe

Live: **https://www.mediq-lab.de** (Netlify, Site-Name `mediq-lab`, Team „D&N Marketing")
Quellcode: GitHub `DNMarketing/mediq-lab`, Branch `main`

## Stack

- Next.js 15 (App Router), statischer Export (`output: "export"` → Ordner `out/`)
- TypeScript, Tailwind CSS, Framer Motion
- Kein Backend, keine Datenbank, keine externen Requests (Fonts, Bilder, Video, Siegel alle self-hosted → kein Cookie-Banner nötig)

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
```

## Produktion bauen & deployen (Netlify)

```bash
npm run build      # OHNE BASE_PATH! erzeugt ./out
netlify deploy --prod --site 38684f90-c9b3-49a2-92f4-f44463b6eb83 --dir out
```

Voraussetzung: `npm i -g netlify-cli` und `netlify login` mit einem Account, der im Team „D&N Marketing" ist.
Alternativ im Netlify-Dashboard: Site `mediq-lab` → Deploys → Ordner `out/` per Drag & Drop hochladen.

`BASE_PATH=/mediq-lab npm run build` war nur für die alte GitHub-Pages-Preview (Unterpfad). Für die echte Domain NIE setzen.

## Domain / DNS

- DNS liegt bei **STRATO** (Kunde). `mediq-lab.de`: A `@` → `75.2.60.5`, CNAME `www` → `mediq-lab.netlify.app`.
- MX (`smtp.google.com`) + TXT sind für Google Workspace Mail → nicht anfassen.
- SSL: Let's Encrypt über Netlify, automatische Verlängerung. `force_ssl` ist an.
- `mediq-lab.com` ist noch nicht umgestellt (zeigt auf STRATO). Wenn gewünscht: gleiche DNS-Einträge wie .de, dann in Netlify unter Domain management als Alias hinzufügen und Zertifikat erneuern.

## Kontaktformular

`src/app/kontakt/page.tsx` nutzt **Netlify Forms** (`data-netlify="true"`, Formularname `kontakt`, Honeypot `bot-field`).
Das Formular wird von Netlify erkannt (Felder name, email, thema, nachricht). Eingänge: Netlify-Dashboard → Site → Forms.

**Noch offen:** Benachrichtigung per E-Mail einrichten: Netlify → Site configuration → Forms → Form notifications → „Email notification" → Zieladresse eintragen.
Optional: nach dem Absenden auf eine Danke-Seite leiten (`action="/danke/"` am `<form>` + Seite `src/app/danke/page.tsx` anlegen).

## Mehrsprachigkeit

Deutsch liegt im Root (`/programm/`), Englisch/Französisch/Italienisch unter `/en/`, `/fr/`, `/it/`. Jede Seite wird statisch in allen Sprachen gebaut, mit `canonical` + `hreflang`.

- **Texte ändern:** `src/i18n/de.ts` (Deutsch), `en.ts`, `fr.ts`, `it.ts`. Alle vier haben dieselbe Struktur; fehlt ein Schlüssel, bricht der Build mit einem TypeScript-Fehler (gewollt).
- **Auszeichnung in Texten:** `*so*` = kursive Hervorhebung, `\n` = Zeilenumbruch, `{yearly}` / `{monthly}` / `{lost}` = Preise aus `money` derselben Sprache.
- **Sprache hinzufügen:** `src/i18n/config.ts` → `LOCALES` + `LOCALE_NAMES` + `LOCALE_TAGS` ergänzen, `src/i18n/<xx>.ts` nach Vorlage anlegen, in `src/i18n/index.ts` registrieren. Routen entstehen automatisch.
- **Video in anderer Sprache:** Dateien `public/video/vorstellung-en-1080.mp4`, `-720.mp4` und `public/img/vorstellung-en-poster.jpg` ablegen, dann in `src/lib/images.ts` bei `VIDEO_BY_LANG` die Zeile `en: videoSet("-en", <Sekunden>)` eintragen. Fehlt eine Sprache, läuft das deutsche Video.
- **Rechtstexte** (Impressum, Datenschutz) bleiben bewusst Deutsch; nicht-deutsche Seiten zeigen oben einen Hinweis (`legal.notice`).
- Technik: `src/app/(de)/` und `src/app/[lang]/` sind zwei Root-Layouts mit gemeinsamer `RootShell`. Seiteninhalte liegen in `src/views/`, die Routen sind nur dünne Wrapper.

## Wo steht was

| Was | Datei |
|---|---|
| Skool-URL, Preis (399 €), Navigation, Kontakt-E-Mail, Plätze-Pill | `src/lib/config.ts` |
| Alle Texte der Seite, je Sprache (Säulen, Formate, FAQ, Chatbot, …) | `src/i18n/{de,en,fr,it}.ts` |
| Bilder/Video-Pfade | `src/lib/images.ts` (Dateien in `public/img/`, `public/video/`) |
| Startseite | `src/app/page.tsx` + `src/components/home/*` |
| Programm (Video, Formate, Preis) | `src/app/programm/page.tsx`, `src/components/sections/{VSL,Modules,Pricing}.tsx` |
| Über uns (Faith & Hannah) | `src/app/ueber/page.tsx` |
| Team | `src/app/team/page.tsx` |
| FAQ | `src/components/sections/FAQ.tsx` (Startseiten-Kurzfassung: `home/FaqTeaser.tsx`) |
| Chatbot (rein scriptbasiert, kein Backend) | `src/components/MedIQChat.tsx` |
| Impressum | `src/app/impressum/page.tsx` |
| Datenschutz (eRecht24-HTML) | `src/lib/datenschutz-content.ts` |
| Design-Tokens | `tailwind.config.ts`, `src/app/globals.css` |

## Rechtliches

- Impressum + Datenschutz: schlenker advisory GmbH, Amtsgericht Ulm, HRB 751751, Geschäftsführerin Tanja Schlenker, USt-ID DE462052494.
- Datenschutz nennt YouTube (aktuell nicht eingebunden, Video ist self-hosted) sowie Netlify + Hetzner als Hoster.
- Testimonials in `src/components/sections/Testimonials.tsx` sind als Demo markiert und derzeit nicht eingebunden; nur mit echten, freigegebenen Stimmen verwenden (UWG).
