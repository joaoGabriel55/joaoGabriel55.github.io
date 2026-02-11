/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0a0a0a",
          light: "#141414",
          lighter: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#e5e5e5",
          muted: "#a3a3a3",
          subtle: "#525252",
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
