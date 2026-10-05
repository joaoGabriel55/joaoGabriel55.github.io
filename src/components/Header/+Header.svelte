<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import { theme } from "../../lib/stores/themeStore";
  import { scrollToTop } from "../../lib/route";
  import { goToSection } from "../../lib/contact";

  const sections = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "talks", label: "Talks" },
    { id: "open-source", label: "Open source" },
  ];

  let menuOpen = false;

  function go(id: string) {
    menuOpen = false;
    goToSection(id);
  }

  // Already on the home page: the link would be a no-op, so return to the top.
  function onHomeClick() {
    if ($location === "/") scrollToTop();
  }
</script>

<header class="fixed top-0 inset-x-0 z-50 bg-page border-b border-line transition-colors duration-300">
  <nav class="container-wide h-16 flex items-center justify-between gap-6" aria-label="Main">
    <a href="/" use:link on:click={onHomeClick} class="group flex items-center gap-3 text-ink">
      <!-- Squad number badge: 55, from the GitHub handle. -->
      <span
        class="kit grid place-items-center w-9 h-9 rounded-full bg-turf text-chalk text-[0.95rem] leading-none motion-safe:group-hover:rotate-[-8deg] transition-transform duration-500 ease-out-expo"
        aria-hidden="true">55</span
      >
      <span class="caps text-[0.9375rem] tracking-[0.04em] text-ink max-sm:sr-only">Gabriel Quaresma</span>
    </a>

    <div class="flex items-center gap-1 md:gap-2">
      <ul class="hidden lg:flex items-center">
        {#each sections as { id, label } (id)}
          <li>
            <button
              type="button"
              on:click={() => goToSection(id)}
              class="caps px-3 h-11 text-quiet hover:text-ink transition-colors duration-300"
            >
              {label}
            </button>
          </li>
        {/each}
      </ul>
      <button
        type="button"
        class="lg:hidden caps px-3 h-11 inline-flex items-center gap-1.5 text-ink"
        aria-expanded={menuOpen}
        aria-controls="section-menu"
        on:click={() => (menuOpen = !menuOpen)}
      >
        Menu
        <svg class="w-3.5 h-3.5 transition-transform duration-300 {menuOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <a
        href="/blog"
        use:link
        aria-current={$location.startsWith("/blog") ? "page" : undefined}
        class="max-lg:hidden caps px-3 h-11 inline-flex items-center text-quiet hover:text-ink aria-[current=page]:text-ink aria-[current=page]:underline decoration-2 decoration-[var(--turf-ink)] underline-offset-[6px] transition-colors duration-300"
      >
        Writing
      </a>

      <button type="button" on:click={() => goToSection("contact")} class="btn-turf h-9 px-4 ml-1">
        Contact
      </button>

      <button
        type="button"
        on:click={theme.toggle}
        aria-label={$theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        title={$theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        class="ml-1 grid place-items-center w-11 h-11 rounded-full text-quiet hover:text-ink transition-colors duration-300"
      >
        {#if $theme === "dark"}
          <svg class="w-[18px] h-[18px]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 3v1.5M12 19.5V21M5.636 5.636l1.061 1.061M17.303 17.303l1.061 1.061M3 12h1.5M19.5 12H21M5.636 18.364l1.061-1.061M17.303 6.697l1.061-1.061M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        {:else}
          <svg class="w-[18px] h-[18px]" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  </nav>

  <!-- Small screens: the sections behind one Menu button, ruled like a team sheet. -->
  {#if menuOpen}
    <ul id="section-menu" class="lg:hidden container-wide pb-4 border-t border-line">
      {#each sections as { id, label } (id)}
        <li class="border-b border-line">
          <button type="button" on:click={() => go(id)} class="kit w-full text-left text-3xl text-ink py-3">{label}</button>
        </li>
      {/each}
      <li>
        <a href="/blog" use:link on:click={() => (menuOpen = false)} class="kit block text-3xl text-ink py-3">Writing</a>
      </li>
    </ul>
  {/if}
</header>

<svelte:window on:keydown={(e) => e.key === "Escape" && (menuOpen = false)} />
