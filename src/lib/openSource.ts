export const GITHUB_USER = "joaoGabriel55";

export interface Contribution {
  fullName: string;
  // Merged pull requests authored by GITHUB_USER, counted from GitHub search
  // (is:pr is:merged). Update when new PRs land.
  mergedPRs: number;
}

// Counts verified 2026-10-04.
export const CONTRIBUTIONS: Contribution[] = [
  { fullName: "rails/rails", mergedPRs: 4 },
  { fullName: "axios/axios", mergedPRs: 4 },
  { fullName: "grommet/grommet", mergedPRs: 5 },
  { fullName: "forem/forem", mergedPRs: 11 },
  { fullName: "marcoroth/herb", mergedPRs: 4 },
];

export const TOTAL_MERGED_PRS = CONTRIBUTIONS.reduce((sum, c) => sum + c.mergedPRs, 0);

export function mergedPRsUrl(fullName: string): string {
  return `https://github.com/${fullName}/pulls?q=is%3Apr+is%3Amerged+author%3A${GITHUB_USER}`;
}
