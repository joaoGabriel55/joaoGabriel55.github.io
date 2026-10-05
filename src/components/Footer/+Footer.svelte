<script lang="ts">
  import { scrollToTop } from "../../lib/route";
  import { reveal } from "../../lib/motion";
  import EmailCopy from "../Contact/+EmailCopy.svelte";
  import SocialLinks from "../Contact/+SocialLinks.svelte";

  const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-turf text-chalk overflow-hidden">
  <!-- Halfway line and centre circle, chalked across the field. -->
  <svg
    class="pointer-events-none absolute -right-40 md:right-[-6rem] top-1/2 -translate-y-1/2 h-[140%] w-auto opacity-[0.16]"
    viewBox="0 0 400 400"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="150" />
    <circle cx="200" cy="200" r="5" fill="currentColor" />
    <path d="M200 -200 V600" />
  </svg>

  <div class="container-wide relative">
    <!-- Closing contact: every page ends on a way to reach out. -->
    <section id="contact" aria-labelledby="contact-heading" class="py-24 md:py-32 max-w-4xl" use:reveal>
      <h2 id="contact-heading" class="kit text-chalk text-[clamp(3rem,8vw,6rem)]">
        Contact me.
      </h2>
      <div class="mt-10 md:mt-12 space-y-4">
        <EmailCopy tone="turf" size="lg" />
        <SocialLinks tone="turf" />
      </div>
    </section>

    <div class="flex items-center justify-between gap-6 py-6 border-t border-[rgb(242_246_239/0.2)]">
      <p class="text-sm text-chalk-quiet">© {currentYear} Gabriel Quaresma</p>

      <button
        type="button"
        on:click={scrollToTop}
        class="hit-area group caps text-xs flex items-center gap-2 text-chalk-quiet hover:text-chalk transition-colors duration-300"
      >
        Back to top
        <svg
          aria-hidden="true"
          class="w-3.5 h-3.5 motion-safe:group-hover:-translate-y-0.5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  </div>
</footer>
