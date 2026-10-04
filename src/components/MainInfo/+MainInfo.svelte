<script lang="ts">
  import profilePicture from "../../lib/assets/profile.webp";
  import MyName from "./+MyName.svelte";
  import EmailCopy from "../Contact/+EmailCopy.svelte";
  import SocialLinks from "../Contact/+SocialLinks.svelte";
  import { scrollToId } from "../../lib/contact";
  import { TOTAL_MERGED_PRS } from "../../lib/openSource";

  const yearsExperience = new Date().getFullYear() - 2021;

  // Resting hairline underline so the proof reads as clickable without hover.
  const credentialClass =
    "hit-area border-b border-neutral-300 dark:border-neutral-700 hover:border-current transition-colors duration-300";
</script>

<section class="pt-28 pb-20 md:pt-40 md:pb-28">
  <div class="section-container flex flex-col items-center text-center gap-8 md:gap-10">
    <!-- Profile Photo with Grayscale Filter -->
    <div class="relative">
      <div
        class="absolute -inset-1 bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-700 dark:to-neutral-900 rounded-full blur-sm opacity-50"
      ></div>
      <img
        src={profilePicture}
        alt="Portrait of Gabriel Quaresma"
        width="144"
        height="144"
        class="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out ring-1 ring-neutral-300 dark:ring-neutral-800"
      />
    </div>

    <!-- Name & Title -->
    <div class="space-y-4">
      <MyName />
      <p
        class="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base font-light tracking-[0.2em] md:tracking-widest uppercase"
      >
        <span class="block sm:inline whitespace-nowrap">Software Engineer @Codeminer42</span>
        <span class="block sm:inline whitespace-nowrap"><span class="hidden sm:inline" aria-hidden="true">· </span>Brazil</span>
      </p>
    </div>

    <!-- Proof, each item jumps to the evidence -->
    <ul
      class="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base text-neutral-800 dark:text-neutral-200"
      aria-label="Highlights"
    >
      <li>
        <button type="button" class={credentialClass} on:click={() => scrollToId("talks")}>
          RubyConf 2026 speaker
        </button>
      </li>
      <li aria-hidden="true" class="hidden sm:block text-neutral-400 dark:text-neutral-600">·</li>
      <li>
        <a
          href="https://rubygems.org/gems/notificare"
          target="_blank"
          rel="noopener noreferrer"
          class="{credentialClass} inline-flex items-center gap-1"
        >
          Notificare on RubyGems
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17L17 7M9 7h8v8" />
          </svg>
          <span class="sr-only">(opens RubyGems in a new tab)</span>
        </a>
      </li>
      <li aria-hidden="true" class="hidden sm:block text-neutral-400 dark:text-neutral-600">·</li>
      <li>
        <button type="button" class={credentialClass} on:click={() => scrollToId("open-source")}>
          {TOTAL_MERGED_PRS} merged PRs in Rails, axios & more
        </button>
      </li>
    </ul>

    <!-- Overview -->
    <div class="max-w-xl space-y-4">
      <p class="text-body">
        Full-stack engineer with {yearsExperience}+ years building web products in
        React, TypeScript, Node.js, and Ruby on Rails. I care about the experience
        people have and the code teammates inherit.
      </p>
      <p class="text-sm md:text-base font-light text-neutral-600 dark:text-neutral-400">
        Off the clock: Brazilian Jiu-Jitsu, Football Manager, and drawing.
      </p>
    </div>

    <!-- Contact -->
    <div class="flex flex-col items-center gap-4">
      <EmailCopy align="center" />
      <SocialLinks align="center" />
    </div>
  </div>
</section>
