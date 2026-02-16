<script lang="ts">
  import { link, push } from "svelte-spa-router";
  import { viewingPost, closePost } from "../../lib/stores/blogStore";

  function goHome() {
    if ($viewingPost) {
      closePost();
    }
    push("/");
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-neutral-900">
  <nav class="section-container py-4">
    <div class="flex items-center justify-between">
      <!-- Logo / Home Link -->
      <button
        on:click={goHome}
        class="text-sm md:text-base font-light tracking-wide text-neutral-300 hover:text-white transition-colors duration-300"
      >
        Gabriel Quaresma
      </button>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6 md:gap-8">
        <a
          href="/blog"
          use:link
          class="text-sm font-light tracking-wide text-neutral-500 hover:text-white transition-colors duration-300"
        >
          Blog
        </a>
      </div>
    </div>
  </nav>
</header>