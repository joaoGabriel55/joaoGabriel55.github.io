import rubyconf2026Poster from "./assets/talks/rubyconf-2026.webp";

export interface Talk {
  title: string;
  event: string;
  city?: string;
  // ISO date used for ordering (newest first). Shown only as the event year.
  date: string;
  youtubeId: string;
  durationMinutes?: number;
  summary: string;
  // Slug of a blog post that covers the same material.
  relatedPostSlug?: string;
  // Self-hosted poster frame, used instead of YouTube's default thumbnail
  // (e.g. when the uploader's title card carries outdated details).
  poster?: string;
}

const talks: Talk[] = [
  {
    title:
      "Why a 1990s Machine Learning Algorithm Destroys LLMs at Predicting House Prices",
    event: "RubyConf 2026",
    city: "Las Vegas",
    date: "2026-09-01",
    youtubeId: "xIDJnAXadmQ",
    durationMinutes: 21,
    summary:
      "A Random Forest trained in Ruby with Rumale goes four rounds against an LLM at estimating house prices: accuracy, latency, consistency, and real-world usability. Actual numbers, not vibes.",
    relatedPostSlug: "random-forest-vs-llm-house-prices",
    // On-stage frame; the YouTube title card shows a different affiliation than the site.
    poster: rubyconf2026Poster,
  },
];

export function getTalks(): Talk[] {
  return [...talks].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function thumbnailUrl(talk: Talk, size: "large" | "small"): string {
  if (talk.poster) return talk.poster;
  const file = size === "large" ? "maxresdefault" : "hqdefault";
  return `https://i.ytimg.com/vi/${talk.youtubeId}/${file}.jpg`;
}

export function embedUrl(talk: Talk): string {
  return `https://www.youtube-nocookie.com/embed/${talk.youtubeId}?autoplay=1&rel=0`;
}
