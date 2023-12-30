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
        primary: { main: "#0f766e", light: "#0d9488", dark: "#065f46" },
        secondary: {
          1: "#efedea",
          2: "#e7e5e4",
          3: "#d1d5db",
          4: "#9ca3af",
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
          2: "rgba(0,0,0,0.1)",
          3: "rgba(0,0,0,0.2)",
        },
        // primary: "#0f766e",
        // "primary-2": "#0d9488",
        // secondary: "#065f46",
        // tertiary: "#064e3b",
        // "primary-dark": "#01241A",
        // errorMain: "#dc2626",
        // errorSecondary: "#b91c1c",
        // errorTertiary: "#991b1b",
        // errorLight: "#ffd9d9",
        // successMain: "#d9ffdd",
        // successSecondary: "#41cc4f",
        // successTertiary: "#00750c",
        // warningMain: "#fff5cc",
        // warningSecondary: "#ffcf0d",
        // warningTertiary: "#997b00",
        // important: "#efedea",
        // subtext: "#9ca3af",
        // background: "#e7e5e4",
        // dark: "#1f2937", // gray-800
        // disabled: "#d1d5db", // gray-300
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
