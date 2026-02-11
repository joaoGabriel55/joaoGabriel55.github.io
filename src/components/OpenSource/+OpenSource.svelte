<script lang="ts" type="module">
  import { onMount } from "svelte";

  let repositories: Array<{
    icon: string;
    name: string;
    stars: number;
    url: string;
    description: string;
  }> = [];

  let loading = true;

  async function fetchRepositories() {
    const response = await Promise.all([
      fetch("https://api.github.com/repos/axios/axios").then((res) =>
        res.json(),
      ),
      fetch("https://api.github.com/repos/grommet/grommet").then((res) =>
        res.json(),
      ),
      fetch("https://api.github.com/repos/forem/forem").then((res) =>
        res.json(),
      ),
    ]);

    return response.map((repo: any) => ({
      icon: repo.owner.avatar_url,
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url,
      description: repo.description || "",
    }));
  }

  function formatStarNumber(stars: number) {
    if (stars >= 1000000) {
      return `${(stars / 1000000).toFixed(1)}M`;
    } else if (stars >= 1000) {
      return `${(stars / 1000).toFixed(1)}K`;
    }
    return stars.toString();
  }

  function formatMyPRsUrl(url: string) {
    return `${url}/pulls?q=is%3Apr+author%3AjoaoGabriel55+is%3Aclosed`;
  }

  onMount(() => {
    fetchRepositories().then((data) => {
      repositories = data;
      loading = false;
    });
  });
</script>

<section class="py-24 md:py-32 border-t border-neutral-900">
  <div class="section-container">
    <!-- Section Header -->
    <header class="mb-16 md:mb-20">
      <span
        class="text-xs uppercase tracking-widest text-neutral-600 mb-4 block"
      >
        Community
      </span>
      <h2 class="heading-primary">Open Source Contributions</h2>
      <p class="text-body mt-4 max-w-2xl">
        Contributing to projects that make a difference in the developer
        ecosystem.
      </p>
    </header>

    <!-- Repository Grid -->
    {#if loading}
      <div class="grid md:grid-cols-3 gap-6">
        {#each [1, 2, 3] as _}
          <div
            class="p-6 rounded-lg border border-neutral-800 bg-surface-light animate-pulse"
          >
            <div class="flex items-center gap-4 mb-4">
              <div class="w-10 h-10 rounded-full bg-neutral-800"></div>
              <div class="h-5 w-24 bg-neutral-800 rounded"></div>
            </div>
            <div class="h-4 w-full bg-neutral-800 rounded mb-2"></div>
            <div class="h-4 w-2/3 bg-neutral-800 rounded"></div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="grid md:grid-cols-3 gap-6">
        {#each repositories as { name, icon, stars, url }}
          <article
            class="group p-6 rounded-lg border border-neutral-800 bg-surface-light hover:border-neutral-700 hover:bg-surface-lighter transition-all duration-300"
          >
            <!-- Header -->
            <div class="flex items-center justify-between mb-5">
              <div class="flex items-center gap-3">
                <img
                  src={icon}
                  alt={name}
                  class="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <h3
                  class="font-medium text-neutral-200 group-hover:text-white transition-colors duration-300"
                >
                  {name}
                </h3>
              </div>
              <div class="flex items-center gap-1.5 text-neutral-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-sm">{formatStarNumber(stars)}</span>
              </div>
            </div>

            <!-- Link -->
            <a
              href={formatMyPRsUrl(url)}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-300 group/link"
            >
              <span
                class="w-6 h-px bg-neutral-700 group-hover/link:w-10 group-hover/link:bg-white transition-all duration-300"
              ></span>
              View my contributions
              <svg
                class="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</section>
