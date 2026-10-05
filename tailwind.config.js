/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Archivo Variable"',
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      // Every color is a paired role variable from app.css, so one utility
      // serves both themes.
      colors: {
        page: "var(--page)",
        raised: "var(--raised)",
        lifted: "var(--lifted)",
        ink: "var(--ink)",
        text: "var(--text)",
        quiet: "var(--quiet)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        turf: {
          DEFAULT: "var(--turf)",
          deep: "var(--turf-deep)",
          ink: "var(--turf-ink)",
        },
        chalk: {
          DEFAULT: "var(--chalk)",
          quiet: "var(--chalk-quiet)",
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  plugins: [],
};
