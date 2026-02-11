<script lang="ts">
  import Footer from "./components/Footer/+Footer.svelte";
  import MainInfo from "./components/MainInfo/+MainInfo.svelte";
  import OpenSource from "./components/OpenSource/+OpenSource.svelte";
  import Projects from "./components/Projects/+Projects.svelte";

  export const prerender = true;
</script>

<main class="min-h-screen bg-surface">
  <MainInfo />
  <Projects />
  <OpenSource />
</main>
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: #0a0a0a;
  }

  :global(body) {
    overflow-x: hidden;
  }
</style>
