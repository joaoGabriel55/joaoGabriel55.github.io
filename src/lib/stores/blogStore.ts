import { writable } from 'svelte/store';
import type { BlogPost } from '../blog';
import { scrollToTop } from '../route';

// Store to track the currently selected blog post for viewing
export const currentPost = writable<BlogPost | null>(null);

// Store to track if we're viewing a single post or the list
export const viewingPost = writable<boolean>(false);

// Function to open a blog post
export function openPost(post: BlogPost): void {
  currentPost.set(post);
  viewingPost.set(true);

  // Scroll to top when opening a post
  scrollToTop();
}

// Function to close the current post and return to list
export function closePost(): void {
  currentPost.set(null);
  viewingPost.set(false);
}