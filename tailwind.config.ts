import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A35",
          50: "#E9EEF6",
          100: "#C9D6E8",
          200: "#94AECF",
          300: "#5E80AE",
          400: "#365C8D",
          500: "#1E3F6B",
          600: "#102C52",
          700: "#0A2143",
          800: "#071A35",
          900: "#04101F",
        },
        royal: {
          DEFAULT: "#1565FF",
          50: "#EAF1FF",
          100: "#D0E0FF",
          200: "#A3C2FF",
          300: "#6E9AFF",
          400: "#3D7AFF",
          500: "#1565FF",
          600: "#0C4FD6",
          700: "#093CA6",
          800: "#072C7A",
          900: "#051E54",
        },
        emerald: {
          DEFAULT: "#00C48C",
          50: "#E2FBF3",
          100: "#BAF5E2",
          200: "#7DEBC6",
          300: "#3FDFAA",
          400: "#10D196",
          500: "#00C48C",
          600: "#009E71",
          700: "#007757",
          800: "#00553E",
          900: "#003626",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E6CB86",
          dark: "#A6822F",
        },
        ink: "#0B1524",
        mist: "#F6F8FB",
        cloud: "#EEF2F8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
      spacing: {
        "4.5": "1.125rem",
        "18": "4.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(7, 26, 53, 0.08), 0 8px 24px -8px rgba(7, 26, 53, 0.12)",
        card: "0 1px 2px rgba(7,26,53,0.04), 0 12px 32px -12px rgba(7,26,53,0.16)",
        float: "0 24px 64px -24px rgba(7, 26, 53, 0.35)",
        glow: "0 0 0 1px rgba(21,101,255,0.12), 0 20px 48px -16px rgba(21,101,255,0.30)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
