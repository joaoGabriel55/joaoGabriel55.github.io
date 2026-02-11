<script lang="ts">
  import { viewingPost, closePost } from "../../lib/stores/blogStore";

  // Detect if we're on the blog page
  const isBlogPage = typeof window !== 'undefined' && window.location.pathname.includes('blog');

  function goToBlog() {
    if (isBlogPage) {
      // Already on blog page, just close any open post
      if ($viewingPost) {
        closePost();
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to blog page
      window.location.href = "./blog.html";
    }
  }

  function goHome() {
    if ($viewingPost) {
      closePost();
    }
    if (isBlogPage) {
      // Navigate to home page
      window.location.href = "./index.html";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
        <button
          on:click={goToBlog}
          class="text-sm font-light tracking-wide text-neutral-500 hover:text-white transition-colors duration-300"
        >
          Blog
        </button>
      </div>
    </div>
  </nav>
</header>