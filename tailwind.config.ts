import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Abu kebiruan yang jauh lebih gelap, supaya teks terbaca tegas
        slate: {
          50: "#F3F7FF",
          100: "#E8EFFC",
          200: "#D6E0F2",
          300: "#B9C8E3",
          400: "#7C8DB0",
          500: "#44506B",
          600: "#1F2A44",
          700: "#141C31",
          800: "#0E1526",
          900: "#0A0F1E",
          950: "#05080F",
        },
        // Biru logo (primer)
        blue: {
          50: "#EEF4FF",
          100: "#DCE8FF",
          200: "#BCD3FF",
          300: "#8DB8FF",
          400: "#5C97F7",
          500: "#2F6FEA",
          600: "#1D5BD8",
          700: "#1748B5",
          800: "#14235F",
          900: "#0E1A47",
          950: "#0A1228",
        },
        // "emerald" dan "teal" dipetakan ke biru langit (pendukung)
        emerald: {
          50: "#EAF7FE",
          100: "#D3EFFC",
          400: "#4FB8F0",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          900: "#0C3B5C",
          950: "#082A42",
        },
        teal: {
          500: "#0EA5E9",
          600: "#0284C7",
        },
        // "amber" dan "purple": oranye logo, dipakai hemat
        amber: {
          50: "#FFF5E5",
          100: "#FFE6BF",
          400: "#FFA726",
          500: "#F28C00",
          600: "#C97000",
        },
        purple: {
          400: "#5C97F7",
          500: "#2F6FEA",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(14px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
