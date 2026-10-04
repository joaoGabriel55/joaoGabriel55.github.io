<script lang="ts">
  import { scrollToTop } from "../../lib/route";
  import EmailCopy from "../Contact/+EmailCopy.svelte";
  import SocialLinks from "../Contact/+SocialLinks.svelte";

  const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-neutral-200 dark:border-neutral-900">
  <div class="section-container">
    <!-- Closing contact: every page ends on a way to reach out. -->
    <section id="contact" aria-labelledby="contact-heading" class="py-20 md:py-28 space-y-8">
      <h2 id="contact-heading" class="heading-primary">Open to conversations about work.</h2>
      <div class="space-y-4">
        <EmailCopy />
        <SocialLinks />
      </div>
    </section>

    <div
      class="flex items-center justify-between gap-6 py-8 border-t border-neutral-200 dark:border-neutral-900"
    >
      <p class="text-sm text-meta font-light">
        © {currentYear} Gabriel Quaresma
      </p>

      <button
        type="button"
        on:click={scrollToTop}
        class="hit-area group flex items-center gap-2 text-xs text-meta hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors duration-300"
      >
        Back to top
        <svg
          aria-hidden="true"
          class="w-3 h-3 transform motion-safe:group-hover:-translate-y-0.5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</footer>
