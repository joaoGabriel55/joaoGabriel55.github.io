<script lang="ts">
  import Router from "svelte-spa-router";
  import Footer from "./components/Footer/+Footer.svelte";
  import Header from "./components/Header/+Header.svelte";
  import Home from "./routes/Home.svelte";
  import BlogPage from "./routes/BlogPage.svelte";
  import "./lib/stores/themeStore";

  const routes = {
    "/": Home,
    "/blog": BlogPage,
    "/blog/:slug": BlogPage,
  };

  export const prerender = true;
</script>

<Header />

<main class="min-h-screen bg-white dark:bg-surface transition-colors duration-300">
  <Router {routes} />
</main>

<Footer />

<style lang="postcss">
  :global(html) {
    background-color: #ffffff;
  }

  :global(html.dark) {
    background-color: #0a0a0a;
  }

  :global(body) {
    overflow-x: hidden;
  }
</style>