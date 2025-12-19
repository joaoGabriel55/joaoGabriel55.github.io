<script lang="ts" type="module">
  import { onMount } from "svelte";

  let repositories = [];

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

    console.log(response);

    return response.map((repo: any) => ({
      icon: repo.owner.avatar_url,
      name: repo.name,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
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
    });
  });
</script>

<div class="bg-app-color text-white flex flex-col items-center gap-8 p-8">
  <h2 class="text-3xl font-semibold">Contributed Open-Source Projects</h2>
  <div class="flex gap-8 justify-center align-center pb-8 flex-wrap">
    {#each repositories as { name, icon, stars, forks, url }}
      <div class="text-white w-64 bg-gray-800 p-4 rounded-lg grid gap-2">
        <header class="text-xl font-semibold">
          <img src={icon} alt={name} width="48px" />
          {name}
        </header>
        <p>⭐ {formatStarNumber(stars)}</p>
        <p>Forks: {forks}</p>
        <a
          class="text-blue-500 hover:text-blue-700"
          href={formatMyPRsUrl(url)}
          target="_blank"
        >
          My PRs
        </a>
      </div>
    {/each}
  </div>
</div>
