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
        // Biru Identitas Resmi Logo PrajaLinks (Clean Corporate, bukan warna AI)
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          500: "#2563EB",
          600: "#1D5BD8", // Biru Utama Logo
          700: "#1748B5", // Hover Biru
          800: "#14378A",
          900: "#0F265C",
        },
        // Emas Elegan (Aksen Logo PrajaLinks)
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          500: "#D97706",
          600: "#C88A23", // Emas Utama
          700: "#B47818", // Hover Emas
          800: "#92400E",
        },
        // Netral & Bersih (Clean White & Slate)
        neutral: {
          surface: "#FFFFFF",
          canvas: "#FAF9F6",
          border: "#E5E7EB",
          dark: "#111827",
          muted: "#5F6978",
          subtle: "#F8FAFC",
        },
      },
      borderRadius: {
        card: "8px",
        btn: "6px",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
