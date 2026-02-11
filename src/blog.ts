import "./app.css";
import BlogApp from "./BlogApp.svelte";

const app = new BlogApp({
  target: document.getElementById("app")!,
});

export default app;
