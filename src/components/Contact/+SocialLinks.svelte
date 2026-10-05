<script lang="ts">
  import { SOCIAL_LINKS } from "../../lib/contact";

  export let tone: "page" | "turf" = "page";
</script>

<nav aria-label="Social networks">
  <ul class="flex flex-wrap items-center gap-x-6 gap-y-1">
    {#each SOCIAL_LINKS as { label, href, iconPath } (label)}
      <li>
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class="hit-area inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300
            {tone === 'turf' ? 'text-chalk-quiet hover:text-chalk' : 'text-quiet hover:text-ink'}"
        >
          <svg class="w-4 h-4" viewBox="0 0 52 52" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d={iconPath} />
          </svg>
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
