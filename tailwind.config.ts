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
          mute: "#73807C",
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
        line: {
          DEFAULT: "rgba(24,33,31,0.12)", // feine Trennlinie auf hell
          strong: "rgba(24,33,31,0.20)",
          onDark: "rgba(246,242,234,0.16)", // auf Petrol
        },
      },
      fontFamily: {
        // Serif mit Charakter für Headlines
        serif: ["var(--font-serif)", "Georgia", "serif"],
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
        // dezent, editorial – Tiefe über Rahmen statt starker Schatten
        soft: "0 1px 2px rgba(24,33,31,0.04), 0 12px 28px -18px rgba(24,33,31,0.28)",
        lift: "0 2px 4px rgba(24,33,31,0.05), 0 28px 56px -28px rgba(24,33,31,0.4)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.21,0.47,0.32,0.98) both",
      },
    },
  },
  plugins: [],
};

export default config;
