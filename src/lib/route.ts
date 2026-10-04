import { tick } from "svelte";

const SITE_TITLE = "Gabriel Quaresma";

let initialLoad = true;

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

// Title the document and, after client-side navigation, move focus to the
// new page's heading so keyboard and screen-reader users land on the content.
export async function announceRoute(title?: string): Promise<void> {
  document.title = title ? `${title} · ${SITE_TITLE}` : SITE_TITLE;

  if (initialLoad) {
    initialLoad = false;
    return;
  }

  await tick();
  const heading = document.querySelector<HTMLElement>("main h1");
  if (heading) {
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }
}
