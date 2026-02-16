/// <reference types="svelte" />
/// <reference types="vite/client" />

// Type declarations for raw markdown file imports
declare module "*.md?raw" {
  const content: string;
  export default content;
}

declare module "*.md" {
  const content: string;
  export default content;
}
