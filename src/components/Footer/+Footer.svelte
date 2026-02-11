<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="py-12 md:py-16 border-t border-neutral-900">
  <div class="section-container">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Left: Brand -->
      <div class="text-center md:text-left">
        <p class="text-sm text-neutral-500 font-light">
          © {currentYear} Gabriel Quaresma
        </p>
      </div>

      <!-- Center: Made with -->
      <p class="text-xs text-neutral-600 tracking-wide">Crafted with care</p>

      <!-- Right: Back to top -->
      <button
        type="button"
        on:click={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        class="group flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
      >
        Back to top
        <svg
          class="w-3 h-3 transform group-hover:-translate-y-0.5 transition-transform duration-300"
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
