/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: { main: "#64748b", light: "#94a3b8", dark: "#334155" },
        secondary: {
          1: "#efedea",
          2: "#e7e5e4",
          3: "#d1d5db",
          4: "#9ca3af", // subtext
          5: "#1f2937",
        },
        success: {
          main: "#41CC4F",
          dark: "#00750C",
          light: "#D9FFDD",
        },
        warning: {
          main: "#FFCF0D",
          dark: "#997B00",
          light: "#FFF5CC",
        },
        error: {
          main: "#dc2626",
          dark: "#9B0000",
          light: "#FFD9D9",
        },
        status: {
          green01: "#9AC301",
          green02: "#AEDC01",
          green03: "#CFF62D",
        },
        gray: {
          1: "rgba(0,0,0,0.05)",
          2: "rgba(0,0,0,0.1)", // disabled
          3: "rgba(0,0,0,0.2)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
