# medIQ lab – Marketing-Landingpage

Conversion-optimierte One-Pager-Landingpage für **medIQ lab**, das Online-Lern-Ökosystem
für Medizinstudenten. Die Seite informiert, baut Vertrauen auf und leitet zur Community
und Workshop-Reihe auf **Skool** weiter. **Es findet keine Zahlung auf dieser Seite statt** –
alle CTAs verlinken nach Skool.

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
    layout.tsx            # Root-Layout, Fonts, Metadata, Skip-Link
    page.tsx              # One-Pager: setzt alle Sections zusammen
    globals.css           # Tailwind + Design-Utilities (Glow, Grid, Glass)
    impressum/page.tsx    # Legal-Gerüst (DSGVO)
    datenschutz/page.tsx  # Legal-Gerüst (DSGVO)
  components/
    Header.tsx            # Sticky Header + Mobile-Menu
    Footer.tsx
    Logo.tsx              # Wortmarke "medIQ lab"
    LegalShell.tsx        # Layout für Rechtstexte
    ui/                   # Container, Section, Reveal, Counter, CTAButton, Badge
    sections/             # Eine Datei pro Section
      Hero.tsx  VSL.tsx  Stats.tsx  Problem.tsx  Authority.tsx
      Modules.tsx  Testimonials.tsx  Pricing.tsx  FAQ.tsx  FinalCTA.tsx
  lib/
    config.ts             # SKOOL_URL, Navigation, Kohorten-Datum  ← zentrale Stellschrauben
    cn.ts                 # Klassen-Merger
```

## ✅ TODO vor dem Go-Live

Alle Platzhalter sind im UI mit einem gelben **„⚠ Platzhalter“**-Badge markiert und im
Code mit `TODO`-Kommentaren versehen (`grep -rn "TODO" src`).

- [ ] **Skool-URL einsetzen** → `src/lib/config.ts` (`SKOOL_URL`). Wirkt auf alle CTAs.
- [ ] **Kohorten-Datum** setzen oder Scarcity ausblenden → `NEXT_COHORT` in `config.ts`
      (auf `null` setzen, wenn keine echte Knappheit besteht – **keine Fake-Urgency**).
- [ ] **Demo-Testimonials ersetzen** → `sections/Testimonials.tsx`. Aktuell 3 als
      `DEMO-TESTIMONIAL`/`Demo-Inhalte` markierte Beispielstimmen. Vor Launch durch echte,
      mit Einverständnis veröffentlichte Testimonials ersetzen – **Pflicht (UWG Nr. 23c)**.
- [ ] **Bio Dirk Schlenker** befüllen → `sections/Authority.tsx` (`[TODO: Bio Dirk Schlenker]`).
- [ ] **Foto Dirk Schlenker** einsetzen → `sections/Authority.tsx`
      (Porträt-Platzhalter „ECHTES FOTO EINFÜGEN“ – bewusst KEIN Stockfoto).
- [ ] **Echte Stats** einsetzen → `sections/Stats.tsx` (nur ehrlich belegbare Zahlen!).
- [ ] **Workshop-Module** final beschreiben → `sections/Modules.tsx`.
- [ ] **VSL-Video** einbinden → `sections/VSL.tsx` (Embed statt Poster-Platzhalter).
- [ ] **Echte Fotos lizenzieren / ersetzen** → `src/lib/images.ts`. Aktuell kuratierte
      **Unsplash**-Stockfotos. Für eine Marke eigene/redaktionell lizenzierte Aufnahmen
      einsetzen. Die animierte Anatomie (Hero, Authority) ist SVG – kein Foto nötig.
- [ ] **Vertrauenssignale / Logos** ergänzen → Uni-/Partner-Logos, Siegel.
- [ ] **Garantie/Ratenzahlung-FAQ** ehrlich befüllen → `sections/FAQ.tsx`.
- [ ] **Impressum & Datenschutz** rechtskonform befüllen →
      `app/impressum/page.tsx`, `app/datenschutz/page.tsx` (**DSGVO-Pflicht**, anwaltlich prüfen).
- [ ] **Domain** in `layout.tsx` (`metadataBase`) und Footer-Jahr final setzen.
- [ ] Nach dem Befüllen alle `<PlaceholderBadge>` entfernen.

> **Bereits gesetzt (konkrete Inhalte):** Preise – Community-Abo **20 €/Monat**,
> Premium-Workshop-Reihe **800 € einmalig** (`sections/Pricing.tsx`, auch in FAQ);
> Gründer-Name **Dirk Schlenker** (`sections/Authority.tsx`).

## Design & Guardrails

- **Visuelle Sprache:** High-Tech-Medizin, premium & seriös. Helle, warme Papier-Basis ·
  tiefes **Petrol/Tannengrün** (Primär) · **Kupfer** (sparsamer Akzent) · klares klinisches
  **Teal/Mint** als dritter Tech-Akzent (kein Neon). Serif-Headlines (**Fraunces**) + klare
  Sans (**IBM Plex Sans**). Editorial-/Magazin-Layout, durchnummerierte Sektionen.
- **Strategische dunkle Sektionen** (tiefes Petrol + Teal-Glow) für Drama: Authority/Methode
  (Dirk Schlenker), Stats und Final-CTA. Der Hell-Dunkel-Wechsel gibt Rhythmus.
- **Medizinische Bildsprache statt Stock-Klischee:** animierte anatomische SVG-Line-Art
  (Herz, Gehirn, DNA) in `components/ui/Anatomy.tsx`, die sich beim Scrollen „zeichnet“;
  eine wiederkehrende **EKG-/Vitalkurve** mit laufendem Puls als Signatur-/Divider-Motiv.
  Fotos nur sehr gezielt (fokussierte Studierende, Anatomie-Modell, Mikroskop).
- **Animation (Framer Motion):** Scroll-Reveals mit Stagger (`ui/Motion.tsx`), animierte
  Counter (`ui/Counter.tsx`), Draw-on-Scroll-Anatomie (`pathLength`), Hero-Parallax,
  Teal-Glow-Hover auf Cards. Alles `prefers-reduced-motion`-sicher, performant, kein Overkill.
- Design-Tokens zentral in `tailwind.config.ts`. **Bewusst NICHT:** Dark-Mode-Default,
  Neon, Grid-/Dot-Pattern, generische Sans als Headline.
- Respektiert `prefers-reduced-motion`, semantisches HTML, Tastatur-Fokus, Skip-Link.
- **Keine** unrealistischen/garantierten Erfolgsversprechen, **keine** Fake-Verknappung.
  Preis-Einwand wird ehrlich entkräftet (verlorenes Semester kostet mehr).
```
