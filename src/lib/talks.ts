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
  },
];

export function getTalks(): Talk[] {
  return [...talks].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function thumbnailUrl(talk: Talk, size: "large" | "small"): string {
  const file = size === "large" ? "maxresdefault" : "hqdefault";
  return `https://i.ytimg.com/vi/${talk.youtubeId}/${file}.jpg`;
}

export function embedUrl(talk: Talk): string {
  return `https://www.youtube-nocookie.com/embed/${talk.youtubeId}?autoplay=1&rel=0`;
}
