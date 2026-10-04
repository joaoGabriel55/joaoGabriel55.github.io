<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import { theme } from "../../lib/stores/themeStore";
  import { scrollToTop } from "../../lib/route";
  import { scrollToId } from "../../lib/contact";

  // Already on the home page: the link would be a no-op, so return to the top.
  function onHomeClick() {
    if ($location === "/") scrollToTop();
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-300"
>
  <nav class="section-container py-4">
    <div class="flex items-center justify-between">
      <!-- Logo / Home Link -->
      <a
        href="/"
        use:link
        on:click={onHomeClick}
        class="hit-area text-sm md:text-base font-light tracking-wide text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors duration-300"
      >
        Gabriel Quaresma
      </a>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6 md:gap-8">
        <a
          href="/blog"
          use:link
          aria-current={$location.startsWith("/blog") ? "page" : undefined}
          class="hit-area text-sm font-light tracking-wide text-pencil hover:text-neutral-900 dark:text-pencil-dark dark:hover:text-white aria-[current=page]:text-neutral-900 dark:aria-[current=page]:text-white transition-colors duration-300"
        >
          Blog
        </a>

        <!-- Contact stays at full ink weight: it is the action that matters most. -->
        <button
          type="button"
          on:click={() => scrollToId("contact")}
          class="hit-area text-sm font-light tracking-wide text-neutral-900 dark:text-white border-b border-transparent hover:border-current transition-colors duration-300"
        >
          Contact
        </button>

        <!-- Theme Toggle -->
        <button
          type="button"
          on:click={theme.toggle}
          aria-label={$theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          title={$theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          class="relative before:absolute before:-inset-1 before:content-[''] flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
        >
          {#if $theme === "dark"}
            <!-- Sun icon -->
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M12 3v1.5M12 19.5V21M5.636 5.636l1.061 1.061M17.303 17.303l1.061 1.061M3 12h1.5M19.5 12H21M5.636 18.364l1.061-1.061M17.303 6.697l1.061-1.061M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          {:else}
            <!-- Moon icon -->
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </nav>
</header>
