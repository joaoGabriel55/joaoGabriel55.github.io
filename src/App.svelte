<script lang="ts">
  import Router from "svelte-spa-router";
  import Footer from "./components/Footer/+Footer.svelte";
  import Header from "./components/Header/+Header.svelte";
  import Home from "./routes/Home.svelte";
  import BlogPage from "./routes/BlogPage.svelte";

  const routes = {
    "/": Home,
    "/blog": BlogPage,
    "/blog/:slug": BlogPage,
  };

  export const prerender = true;
</script>

<Header />

<main class="min-h-screen bg-surface">
  <Router {routes} />
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