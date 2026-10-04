/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          light: "#141414",
          lighter: "#1a1a1a",
        },
        // Meta text (dates, labels, counts): AA on every page and card surface.
        pencil: {
          DEFAULT: "#6b6b6b",
          dark: "#8a8a8a",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
