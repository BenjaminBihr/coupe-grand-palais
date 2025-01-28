import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          50: "#e5ebe9", // Très clair
          100: "#c4d1cc", // Clair
          200: "#a2b6ae", // Un peu plus saturé
          300: "#7f9c90", // Nuance intermédiaire
          400: "#5d8372", // Proche du 500 mais plus clair
          500: "#15201c", // Teinte principale
          600: "#111914", // Plus sombre
          700: "#0d1310", // Très sombre
          800: "#080d0b", // Presque noir
          900: "#040604", // Noir légèrement teinté
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
