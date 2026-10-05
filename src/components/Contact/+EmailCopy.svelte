<script lang="ts">
  import { EMAIL } from "../../lib/contact";

  // "page" on the paper ground, "turf" inside the green contact field.
  export let tone: "page" | "turf" = "page";
  export let size: "md" | "lg" = "md";

  let address: HTMLAnchorElement;
  let status: "idle" | "copied" | "manual" = "idle";
  let resetTimer: ReturnType<typeof setTimeout>;

  async function copy() {
    clearTimeout(resetTimer);
    try {
      await navigator.clipboard.writeText(EMAIL);
      status = "copied";
    } catch {
      // Clipboard blocked: select the address so a manual copy is one keystroke.
      const range = document.createRange();
      range.selectNodeContents(address);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      status = "manual";
    }
    resetTimer = setTimeout(() => (status = "idle"), 2500);
  }
</script>

<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
  <a
    bind:this={address}
    href="mailto:{EMAIL}"
    class="font-semibold break-all underline underline-offset-[6px] decoration-2 transition-[text-decoration-color] duration-300
      {size === 'lg' ? 'text-xl md:text-3xl' : 'text-lg md:text-xl'}
      {tone === 'turf'
      ? 'text-chalk decoration-[rgb(242_246_239/0.45)] hover:decoration-chalk'
      : 'text-ink decoration-[var(--turf-ink)] hover:decoration-[var(--ink)]'}"
  >
    {EMAIL}
  </a>
  <button
    type="button"
    on:click={copy}
    class="caps text-xs inline-flex items-center gap-1.5 px-3 h-8 rounded-sm border transition-colors duration-300
      relative before:absolute before:-inset-y-1.5 before:inset-x-0 before:content-['']
      {tone === 'turf'
      ? 'border-[rgb(242_246_239/0.45)] text-chalk hover:bg-chalk hover:text-turf'
      : 'border-line-strong text-text hover:border-ink hover:text-ink'}"
  >
    {#if status === "copied"}
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
      Copied
    {:else}
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="8.5" y="8.5" width="11" height="11" rx="2" stroke-width="1.75" />
        <path stroke-linecap="round" stroke-width="1.75" d="M15.5 8.5V6.5a2 2 0 00-2-2h-7a2 2 0 00-2 2v7a2 2 0 002 2h2" />
      </svg>
      Copy
    {/if}
  </button>
  <span class="sr-only" aria-live="polite">
    {#if status === "copied"}Email address copied{:else if status === "manual"}Address selected; press Ctrl+C or Cmd+C to copy{/if}
  </span>
</div>
