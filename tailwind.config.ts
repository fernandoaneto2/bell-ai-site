import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#000000",
        "bg-secondary": "#0A0A0A",
        "bg-elevated": "#141414",
        "gold-primary": "#C9A24C",
        "gold-light": "#E5C580",
        "gold-deep": "#8B6F2E",
        "white-pure": "#FFFFFF",
        "white-soft": "#E8E8E8",
        "gray-muted": "#8A8A8A",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #8B6F2E 0%, #C9A24C 40%, #E5C580 70%, #C9A24C 100%)",
        "radial-gold-hero":
          "radial-gradient(ellipse 60% 60% at 90% 10%, rgba(201,162,76,0.07) 0%, transparent 70%)",
        "radial-gold-cta":
          "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,162,76,0.08) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
