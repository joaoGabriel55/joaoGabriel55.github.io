<script>
  import profilePicture from "../../lib/assets/profile.png";
  import MyName from "./+MyName.svelte";
  import Overview from "./+Overview.svelte";
  import SocialNetworks from "./+SocialNetworks.svelte";
</script>

<section
  class="min-h-screen flex items-center justify-center py-20 md:py-32 pt-24 md:pt-32"
>
  <div class="section-container flex flex-col items-center gap-8">
    <div class="flex flex-col items-center text-center gap-12 md:gap-16">
      <!-- Profile Photo with Grayscale Filter -->
      <div class="relative">
        <div
          class="absolute -inset-1 bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-700 dark:to-neutral-900 rounded-full blur-sm opacity-50"
        ></div>
        <img
          src={profilePicture}
          alt="Gabriel Quaresma"
          class="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out ring-1 ring-neutral-300 dark:ring-neutral-800"
        />
      </div>

      <!-- Name & Title -->
      <div class="space-y-4">
        <MyName />
        <p
          class="text-neutral-600 dark:text-neutral-500 text-sm md:text-base font-light tracking-widest uppercase"
        >
          Software Engineer @Codeminer42 · Brazil
        </p>
      </div>

      <!-- Overview -->
      <Overview />

      <!-- Social Networks -->
      <SocialNetworks />
    </div>
    <!-- Scroll Indicator -->
    <div class="hidden md:block">
      <div
        class="w-px h-16 bg-gradient-to-b from-neutral-400 dark:from-neutral-600 to-transparent animate-pulse"
      ></div>
    </div>
  </div>
</section>
