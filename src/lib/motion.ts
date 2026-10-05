// Scroll reveal: marks the node `.is-in` once it enters the viewport. The
// hidden starting state lives in app.css behind `.js` and
// `prefers-reduced-motion: no-preference`, so content never depends on this.
export function reveal(node: HTMLElement, delay = 0) {
  node.dataset.reveal ??= "";
  if (delay) node.style.setProperty("--reveal-delay", `${delay}ms`);

  if (!("IntersectionObserver" in window)) {
    node.classList.add("is-in");
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add("is-in");
          observer.disconnect();
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
  );
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}

// Counts a number up from zero the first time it is seen.
export function countUp(node: HTMLElement, target: number) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return {};

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    observer.disconnect();
    node.textContent = "0";
    const start = performance.now();
    const duration = 1200;
    const step = (now: number) => {
      const t = Math.min(1, Math.max(0, now - start) / duration);
      const eased = 1 - Math.pow(2, -10 * t);
      node.textContent = String(Math.round(target * (t === 1 ? 1 : eased)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
