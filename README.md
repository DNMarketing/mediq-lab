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
- [ ] **Authority/Gründer-Story** befüllen → `sections/Authority.tsx` (Foto, Name, Story).
- [ ] **Echte Stats** einsetzen → `sections/Stats.tsx` (nur ehrlich belegbare Zahlen!).
- [ ] **Echte Testimonials** einsetzen → `sections/Testimonials.tsx`
      (Name, Uni/Semester, Ergebnis – **keine erfundenen Erfolge**, mit Einverständnis).
- [ ] **Workshop-Module** final beschreiben → `sections/Modules.tsx`.
- [ ] **Preise** setzen (Abo monatlich / Workshop einmalig) → `sections/Pricing.tsx`.
- [ ] **Garantie/Ratenzahlung-FAQ** ehrlich befüllen → `sections/FAQ.tsx`.
- [ ] **VSL-Video** einbinden → `sections/VSL.tsx` (Embed statt Platzhalter).
- [ ] **Hero-Visual** ersetzen → `sections/Hero.tsx` (Mockup/Foto/Screenshot).
- [ ] **Impressum & Datenschutz** rechtskonform befüllen →
      `app/impressum/page.tsx`, `app/datenschutz/page.tsx` (**DSGVO-Pflicht**, anwaltlich prüfen).
- [ ] **Domain** in `layout.tsx` (`metadataBase`) und Footer-Jahr final setzen.
- [ ] Nach dem Befüllen alle `<PlaceholderBadge>` entfernen.

## Design & Guardrails

- Dunkle, edle Basis (tiefes Nachtblau/Anthrazit) mit **einem** elektrischen Akzent (Cyan),
  sparsamer Violett-Glow. Premium/seriös – Referenzen: Linear, Apple Health, Notion.
- Respektiert `prefers-reduced-motion`, semantisches HTML, Tastatur-Fokus, Skip-Link.
- **Keine** unrealistischen/rechtlich heiklen Versprechen, **keine** Fake-Verknappung.
  Preis-Einwand wird ehrlich entkräftet (verlorenes Semester kostet mehr).
```
