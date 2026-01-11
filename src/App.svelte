<script lang="ts">
  import Footer from "./components/Footer/+Footer.svelte";
  import MainInfo from "./components/MainInfo/+MainInfo.svelte";
  import OpenSource from "./components/OpenSource/+OpenSource.svelte";
  import Projects from "./components/Projects/+Projects.svelte";

  export const prerender = true;
</script>

<main class="grid">
  <MainInfo />
  <Projects />
  <OpenSource />
</main>
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.black");
  }
</style>
