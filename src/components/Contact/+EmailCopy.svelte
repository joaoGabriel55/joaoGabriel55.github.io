<script lang="ts">
  import { EMAIL } from "../../lib/contact";

  // "center" for the hero, "start" for left-aligned contexts like the footer.
  export let align: "center" | "start" = "start";

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

<div
  class="flex flex-wrap items-center gap-x-4 gap-y-2 {align === 'center'
    ? 'justify-center'
    : 'justify-start'}"
>
  <a
    bind:this={address}
    href="mailto:{EMAIL}"
    class="text-base md:text-lg font-light text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-colors duration-300 break-all"
  >
    {EMAIL}
  </a>
  <button
    type="button"
    on:click={copy}
    class="relative before:absolute before:-inset-y-1.5 before:inset-x-0 before:content-[''] inline-flex items-center gap-1.5 px-3 py-1 text-xs tracking-wide rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors duration-300"
  >
    {#if status === "copied"}
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
      Copied
    {:else}
      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="8.5" y="8.5" width="11" height="11" rx="2" stroke-width="1.5" />
        <path stroke-linecap="round" stroke-width="1.5" d="M15.5 8.5V6.5a2 2 0 00-2-2h-7a2 2 0 00-2 2v7a2 2 0 002 2h2" />
      </svg>
      Copy
    {/if}
  </button>
  <span class="sr-only" aria-live="polite">
    {#if status === "copied"}Email address copied{:else if status === "manual"}Address selected; press Ctrl+C or Cmd+C to copy{/if}
  </span>
</div>
