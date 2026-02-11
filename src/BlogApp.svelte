<script lang="ts">
  import Footer from "./components/Footer/+Footer.svelte";
  import Header from "./components/Header/+Header.svelte";
  import BlogList from "./components/Blog/+BlogList.svelte";
</script>

<Header />

<main class="min-h-screen bg-surface">
  <BlogList />
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
