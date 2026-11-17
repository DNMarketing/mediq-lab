import type { Config } from "tailwindcss";

/**
 * Design-Sprache: seriöse medizinische Professionalität – edel & vertrauensvoll.
 * Helle, warme Basis · Petrol/Teal als Primärfarbe · Kupfer als sparsamer Akzent.
 * KEIN Dark-Mode-Default, keine Neon-/Glow-/Grid-Motive.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warme, helle Papier-Basis
        paper: {
          DEFAULT: "#F6F2EA", // Haupt-Hintergrund (warmes Off-White)
          light: "#FBF8F2", // hellere Variante
          sand: "#EFE9DC", // dezent tiefere Sektion
          deep: "#E7DFCE", // Rahmen/Felder
        },
        // Tiefe, warme Tinte für Text (Teal-Unterton)
        ink: {
          DEFAULT: "#18211F",
          soft: "#46524F",
          mute: "#646F6A", // WCAG-AA-tauglich auf heller Papier-Basis (≥4.5:1)
        },
        // Primärfarbe: edles Petrol/Teal
        petrol: {
          50: "#E8F0ED",
          100: "#CADCD6",
          300: "#7FA8A0",
          500: "#2C6F66",
          600: "#1E5A53",
          700: "#164A44", // Standard-Primär
          800: "#103833",
          900: "#0B2826", // dunkle Sektionen
        },
        // Akzent: warmes Kupfer/Gold – sparsam, nur Highlights/CTA-Details
        copper: {
          100: "#F1E2D3",
          300: "#D9AC83",
          400: "#C68B55",
          500: "#B0703B", // Standard-Akzent
          600: "#955B2C",
        },
        // Klinischer dritter Akzent: sauberes medizinisches Teal/Mint (KEIN Neon)
        teal: {
          100: "#D9EFEA",
          300: "#86CABD",
          400: "#46B3A2", // Tech-Highlights / Glow auf Dunkel
          500: "#1E9E8F", // Standard
          600: "#147A6E",
          700: "#0E5C53",
        },
        line: {
          DEFAULT: "rgba(24,33,31,0.12)", // feine Trennlinie auf hell
          strong: "rgba(24,33,31,0.20)",
          onDark: "rgba(246,242,234,0.16)", // auf Petrol
        },
      },
      fontFamily: {
        // Überschriften: Schibsted Grotesk
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Wortmarke „medIQ“ (Logo, Cover)
        logo: ["var(--font-logo)", "Georgia", "serif"],
        // Seriöse, klare Sans für Fließtext
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "65ch",
      },
      borderRadius: {
        card: "4px",
      },
      boxShadow: {
        // mehrstufige, weiche Tiefe – editorial & premium
        soft: "0 1px 2px rgba(24,33,31,0.04), 0 12px 28px -18px rgba(24,33,31,0.28)",
        lift: "0 2px 4px rgba(24,33,31,0.05), 0 18px 36px -20px rgba(24,33,31,0.28), 0 40px 72px -36px rgba(24,33,31,0.4)",
        // feiner klinischer Teal-Glow für Hover/Highlights
        "glow-teal":
          "0 0 0 1px rgba(70,179,162,0.30), 0 10px 28px -10px rgba(70,179,162,0.30), 0 30px 60px -28px rgba(24,33,31,0.45)",
        "glow-teal-sm": "0 0 0 1px rgba(70,179,162,0.25), 0 8px 22px -10px rgba(70,179,162,0.28)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // laufender Puls für die EKG-Signaturlinie (Start/Ende setzt EkgLine je Linienlänge)
        "ekg-run": {
          from: { strokeDashoffset: "var(--ekg-from, 0)" },
          to: { strokeDashoffset: "var(--ekg-to, -2400)" },
        },
        // Welle im Problem-Abschnitt („ein Fehlversuch zieht Kreise“)
        "ripple-out": {
          "0%": { transform: "scale(0.05)", opacity: "0.7" },
          "80%": { opacity: "0.1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.21,0.47,0.32,0.98) both",
        "ekg-run": "ekg-run 4s linear infinite",
        "ripple-out": "ripple-out 4.5s cubic-bezier(0.22,0.61,0.36,1) 2s infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
