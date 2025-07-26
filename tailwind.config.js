/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        "m3-body-medium": "var(--m3-body-medium-font-family)",
      },
      colors: {
        primary: {
          DEFAULT: "#3c3c3c", // texto principal, títulos
          light: "#b2b2b2", // bordas, detalhes
          dark: "#202020", // fundo escuro, cards
          contrast: "#fff", // texto em fundo escuro
        },
        secondary: {
          DEFAULT: "#1e1e1e", // footer, áreas secundárias
          dark: "#0e0e0e", // fundo contato
          overlay: "#00000080", // overlays, cards
        },
        accent: {
          green: "#16a34a", // green-600
          greenDark: "#15803d", // green-700
        },
        neutral: {
          DEFAULT: "#393939", // ícones, detalhes
          light: "#f5f5f5", // fundo claro
          dark: "#000", // preto puro
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll 60s linear infinite",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
