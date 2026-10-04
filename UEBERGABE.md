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

## Wo steht was

| Was | Datei |
|---|---|
| Skool-URL, Preis (399 €), Navigation, Kontakt-E-Mail, Plätze-Pill | `src/lib/config.ts` |
| Die 4 Säulen (Lernsystem, Prüfungsstrategie, Stress & Resilienz, Netzwerk) | `src/lib/pillars.ts` |
| Formate (Workshops, Videoreihen, Live Events, Downloads) | `src/lib/formats.ts` |
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
