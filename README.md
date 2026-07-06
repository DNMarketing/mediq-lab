# medIQ lab – Marketing-Website

Conversion-optimierte **Multipage-Website** für **medIQ lab**, das Online-Lern-Ökosystem
für Medizinstudierende. Die Seite informiert, baut Vertrauen auf und leitet zur Community
und Workshop-Reihe auf **Skool** weiter. **Es findet keine Zahlung auf dieser Seite statt** –
alle CTAs verlinken nach Skool.

Seiten: **/** (Home, conversion-fokussiert), **/methode** (wissenschaftliche Lernmethode –
zentraler Trust-Anker), **/programm** (Workshop-Reihe + Preise), **/ueber** (Mission/Story),
**/faq**, **/kontakt** (inkl. Netlify-Forms-Formular), **/impressum**, **/datenschutz**.

> **Kein Personenfoto:** Es wird bewusst kein Gründer-/Gesichtsfoto verwendet. Das Vertrauen
> tragen die Methode/Wissenschaft (dunkle Authority-Sektion), konkrete Zahlen (als Platzhalter)
> und abstrakte Markenelemente (anatomische Line-Art, EKG). Der Gründer wird nur textlich
> genannt (Name + LinkedIn) auf **/ueber**.

## Tech-Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (Design-Tokens in `tailwind.config.ts`)
- **Framer Motion** (Scroll-Reveals, Entrance-Animationen, animierte Counter)
- **Statischer Export** (`output: "export"`) → deploy-ready für Netlify
- Modular: eine Komponente pro Section, mobile-first, voll responsive

## Lokale Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (statischer Export)

```bash
npm run build    # erzeugt ./out (statisches HTML/JS/CSS)
```

Der Export landet im Ordner `out/` und kann auf jedem Static-Host laufen.

## Deployment auf Netlify

Die `netlify.toml` ist bereits konfiguriert:

- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Node-Version:** 20

**Variante A – Git-Anbindung (empfohlen):**
1. Repo zu GitHub/GitLab pushen.
2. In Netlify „Add new site → Import an existing project“.
3. Build-Einstellungen werden aus `netlify.toml` übernommen → Deploy.

**Variante B – Drag & Drop / CLI:**
```bash
npm run build
npx netlify deploy --prod --dir=out
```

## Projektstruktur

```
src/
  app/
    layout.tsx            # Root-Layout: Fonts, Metadata (title-Template), Header + Footer, Skip-Link
    page.tsx              # Home (/): Hero, Stats, Problem-Teaser, Methode-Teaser, Testimonials, CTA
    methode/page.tsx      # /methode – Trust-Anker: Intro, Problem, MethodPrinciples (dunkel), Praxis
    programm/page.tsx     # /programm – VSL, Module, Pricing (20 €/800 €)
    ueber/page.tsx        # /ueber – Mission, Werte, Gründer NUR textlich (kein Foto)
    faq/page.tsx          # /faq
    kontakt/page.tsx      # /kontakt – Netlify-Forms-Formular + Kontaktkarten
    impressum/page.tsx    # /impressum – vollständig strukturiert (Pflichtangaben = Platzhalter)
    datenschutz/page.tsx  # /datenschutz – DSGVO-Struktur (Angaben = Platzhalter)
    globals.css           # Tailwind + Design-Utilities (Glow, Glass, Focus-Visible)
  components/
    Header.tsx            # Fixierter Header, Next-Link-Nav mit Active-States, Mobile-Menu
    Footer.tsx            # Footer mit EKG-Signatur + Routen
    Logo.tsx              # Wortmarke "medIQ lab"
    LegalShell.tsx        # Inhalts-Wrapper für Rechtstexte (nutzt Root-Header/-Footer)
    ui/                   # Container, Section, Reveal, Motion (Stagger), Counter, CTAButton,
                          # Badge, MedIcon, EditorialImage, Anatomy (Herz/Gehirn/DNA/EKG), PageIntro
    home/                 # ProblemTeaser, MethodTeaser (kompakte Home-Varianten)
    sections/             # Wiederverwendbare Sections:
      Hero  VSL  Stats  Problem  Modules  Testimonials  Pricing  FAQ
      MethodPrinciples (dunkle Methoden-Autorität)  CTABand (wiederkehrender dunkler CTA)
  lib/
    config.ts             # SKOOL_URL, CONTACT_EMAIL, Navigation, Kohorte, LinkedIn ← Stellschrauben
    cn.ts                 # Klassen-Merger
```

## ✅ TODO vor dem Go-Live

Alle Platzhalter sind im UI mit einem gelben **„⚠ Platzhalter“**-Badge markiert und im
Code mit `TODO`-Kommentaren versehen (`grep -rn "TODO" src`).

Offene Platzhalter sind im Code mit `TODO`/`[PLATZHALTER: …]` markiert (`grep -rn "TODO\|PLATZHALTER" src`).

- [ ] **Skool-URL einsetzen** → `src/lib/config.ts` (`SKOOL_URL`). Wirkt auf alle CTAs.
- [ ] **Kontakt-E-Mail bestätigen** → `CONTACT_EMAIL` in `config.ts` (aktuell `kontakt@mediqlab.de`,
      wird in `/kontakt`, Impressum & Datenschutz genutzt).
- [ ] **Kohorten-Datum** setzen oder Scarcity ausblenden → `NEXT_COHORT` in `config.ts`
      (auf `null` setzen, wenn keine echte Knappheit besteht – **keine Fake-Urgency**).
- [ ] **Demo-Testimonials ersetzen** → `sections/Testimonials.tsx`. Aktuell 3 als
      `DEMO-TESTIMONIAL`/`Demo-Inhalte` markierte Beispielstimmen. Vor Launch durch echte,
      mit Einverständnis veröffentlichte Testimonials ersetzen – **Pflicht (UWG Nr. 23c)**.
- [ ] **Bio Dirk Schlenker** befüllen → `app/ueber/page.tsx` (`[PLATZHALTER: Bio Dirk Schlenker]`).
      Bewusst **ohne Foto** – nur Text + LinkedIn-Link.
- [ ] **Echte Stats** einsetzen → `sections/Stats.tsx` (nur ehrlich belegbare Zahlen!).
- [ ] **Studien-Quellen verlinken** → `sections/MethodPrinciples.tsx`
      (`[PLATZHALTER: Studien-Quellen]`, macht die Methode belegbar).
- [ ] **Workshop-Module** final beschreiben → `sections/Modules.tsx`.
- [ ] **VSL-Video** einbinden → `sections/VSL.tsx` (Embed statt Poster-Platzhalter).
- [ ] **Kontaktformular scharf schalten** → `app/kontakt/page.tsx`: **Netlify Forms** im
      Deploy aktivieren + Empfänger/Benachrichtigung einrichten (funktioniert nur auf Netlify).
- [ ] **Echte Fotos lizenzieren / ersetzen** → `src/lib/images.ts` (kuratierte Unsplash-Fotos in
      VSL/Module/Pricing). Anatomie/EKG sind SVG – kein Foto nötig.
- [ ] **Vertrauenssignale / Logos** ergänzen → Uni-/Partner-Logos, Siegel.
- [ ] **Garantie/Ratenzahlung-FAQ** ehrlich befüllen → `sections/FAQ.tsx`.
- [ ] **Impressum & Datenschutz** finalisieren → `app/impressum/page.tsx`, `app/datenschutz/page.tsx`.
      Struktur ist vollständig; alle Pflichtangaben (`[PLATZHALTER]`) rechtssicher ergänzen
      (**DSGVO-Pflicht**, anwaltlich prüfen).
- [ ] **Domain** in `layout.tsx` (`metadataBase`) final setzen.
- [ ] Nach dem Befüllen alle `<PlaceholderBadge>` entfernen.

> **Bereits gesetzt (konkrete Inhalte):** Preise – Community-Abo **20 €/Monat**,
> Premium-Workshop-Reihe **800 € einmalig** (`sections/Pricing.tsx`, auch in FAQ);
> Gründer-Name **Dirk Schlenker** + LinkedIn (`app/ueber/page.tsx`, ohne Foto).

## Design & Guardrails

- **Visuelle Sprache:** High-Tech-Medizin, premium & seriös. Helle, warme Papier-Basis ·
  tiefes **Petrol/Tannengrün** (Primär) · **Kupfer** (sparsamer Akzent) · klares klinisches
  **Teal/Mint** als dritter Tech-Akzent (kein Neon). Serif-Headlines (**Fraunces**) + klare
  Sans (**IBM Plex Sans**). Editorial-/Magazin-Layout, durchnummerierte Sektionen.
- **Strategische dunkle Sektionen** (tiefes Petrol + Teal-Glow) für Drama: `MethodPrinciples`
  (auf /methode – der Trust-Anker), `Stats` und der wiederkehrende `CTABand`. Hell-Dunkel-
  Wechsel gibt Rhythmus.
- **Trust ohne Gesicht:** Es gibt bewusst **kein Personenfoto**. Die Vertrauensfunktion tragen
  (a) die Methode/Wissenschaft als Autoritätsanker, (b) konkrete Zahlen (als Platzhalter,
  nichts erfunden) und (c) abstrakte Markenelemente (Anatomie-Line-Art, EKG). Gründer nur
  textlich auf /ueber.
- **Medizinische Bildsprache statt Stock-Klischee:** animierte anatomische SVG-Line-Art
  (Herz auf Home, Gehirn auf /methode, DNA auf /programm) in `components/ui/Anatomy.tsx`, die
  sich beim Scrollen „zeichnet“; eine wiederkehrende **EKG-/Vitalkurve** mit laufendem Puls
  als Signatur-/Divider-Motiv (u. a. unter jedem `PageIntro` und im Footer).
- **Konsistente Seitenarchitektur:** gemeinsamer `PageIntro` (Seitenkopf) + `CTABand`
  (Abschluss-CTA auf jeder Seite) sorgen für einheitlichen Rhythmus; Header-Nav mit
  Active-States; Skool-CTA auf jeder Seite präsent.
- **Animation (Framer Motion):** Scroll-Reveals mit Stagger (`ui/Motion.tsx`), animierte
  Counter (`ui/Counter.tsx`), Draw-on-Scroll-Anatomie (`pathLength`), Hero-Parallax,
  Teal-Glow-Hover auf Cards. Alles `prefers-reduced-motion`-sicher, performant, kein Overkill.
- Design-Tokens zentral in `tailwind.config.ts`. **Bewusst NICHT:** Dark-Mode-Default,
  Neon, Grid-/Dot-Pattern, generische Sans als Headline, **Personenfotos**.
- **A11y:** sichtbarer Tastatur-Fokus (`:focus-visible`), semantisches HTML, Skip-Link,
  Alt-Texte, `aria-current` in der Nav. Lighthouse (Home, Desktop): **A11y 100 · Best
  Practices 100 · SEO 100**.
- **Keine** unrealistischen/garantierten Erfolgsversprechen, **keine** Fake-Verknappung.
  Preis-Einwand wird ehrlich entkräftet (verlorenes Semester kostet mehr).
```
