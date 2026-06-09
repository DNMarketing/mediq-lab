import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Dunkle, edle Basis (tiefes Nachtblau/Anthrazit)
        ink: {
          950: "#05080F", // tiefster Hintergrund
          900: "#070B14",
          800: "#0B1120", // Surface
          700: "#111A2E", // Card
          600: "#1C2740", // Card hover / Border-stark
        },
        // EIN elektrischer Akzent: Cyan
        accent: {
          DEFAULT: "#22D3EE",
          soft: "#67E8F9",
          deep: "#06B6D4",
          glow: "#0891B2",
        },
        // Sparsamer Sekundär-Akzent (Violett) für Verläufe/Glow
        violet: {
          DEFAULT: "#8B5CF6",
          soft: "#A78BFA",
        },
        line: "rgba(148, 163, 184, 0.12)",
        "line-strong": "rgba(148, 163, 184, 0.22)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.15), 0 12px 48px -12px rgba(34,211,238,0.35)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
