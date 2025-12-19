<script lang="ts">
  import Footer from "./components/Footer/+Footer.svelte";
  import GitStatsSection from "./components/GitStatsSection/+GitStatsSection.svelte";
  import MainInfo from "./components/MainInfo/+MainInfo.svelte";
  import OpenSource from "./components/OpenSource/+OpenSource.svelte";

  export const prerender = true;
</script>

<main class="grid">
  <MainInfo />
  <GitStatsSection />
  <OpenSource />
</main>
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme("colors.black");
  }
</style>
