export const GITHUB_USER = "joaoGabriel55";

export interface Contribution {
  fullName: string;
  // Merged pull requests authored by GITHUB_USER, counted from GitHub search
  // (is:pr is:merged). Update when new PRs land.
  mergedPRs: number;
  // One representative merged PR, so the card names real work, not a number.
  highlight: { title: string; url: string };
}

// Counts and highlights verified 2026-10-04.
export const CONTRIBUTIONS: Contribution[] = [
  {
    fullName: "forem/forem",
    mergedPRs: 11,
    highlight: {
      title: "Made the minimum tag score configurable by admins",
      url: "https://github.com/forem/forem/pull/20233",
    },
  },
  {
    fullName: "grommet/grommet",
    mergedPRs: 5,
    highlight: {
      title: "Added max and threshold validation to FormField",
      url: "https://github.com/grommet/grommet/pull/6550",
    },
  },
  {
    fullName: "rails/rails",
    mergedPRs: 4,
    highlight: {
      title: "Fixed normalizes on enum attributes raising ArgumentError",
      url: "https://github.com/rails/rails/pull/57846",
    },
  },
  {
    fullName: "axios/axios",
    mergedPRs: 4,
    highlight: {
      title: "Clearer error when proxy authorization is empty",
      url: "https://github.com/axios/axios/pull/6314",
    },
  },
  {
    fullName: "marcoroth/herb",
    mergedPRs: 4,
    highlight: {
      title: "On-type formatting for ERB block closers in the language server",
      url: "https://github.com/marcoroth/herb/pull/2195",
    },
  },
];

export const TOTAL_MERGED_PRS = CONTRIBUTIONS.reduce((sum, c) => sum + c.mergedPRs, 0);

export function mergedPRsUrl(fullName: string): string {
  return `https://github.com/${fullName}/pulls?q=is%3Apr+is%3Amerged+author%3A${GITHUB_USER}`;
}
