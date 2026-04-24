import { writable } from "svelte/store";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

function createThemeStore() {
  const initial = getInitialTheme();
  const { subscribe, set, update } = writable<Theme>(initial);

  applyTheme(initial);

  return {
    subscribe,
    set: (value: Theme) => {
      localStorage.setItem(STORAGE_KEY, value);
      applyTheme(value);
      set(value);
    },
    toggle: () =>
      update((current) => {
        const next: Theme = current === "dark" ? "light" : "dark";
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
        return next;
      }),
  };
}

export const theme = createThemeStore();
