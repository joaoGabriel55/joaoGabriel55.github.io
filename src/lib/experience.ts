// Career history, from the LinkedIn Experience section. Codeminer42 is the
// employer; client work ran through it as contracts.
export type Engagement = "employer" | "contract" | "volunteer";

export interface Role {
  company: string;
  title: string;
  engagement: Engagement;
  // "YYYY-MM". Omit `end` for a current role.
  start: string;
  end?: string;
  location: string;
  // One line a recruiter can skim, in Gabriel's own words.
  highlight: string;
  description: string;
  stack: string[];
}

export const PARENT_CLUB = "Codeminer42";

export const ROLES: Role[] = [
  {
    company: "Codeminer42",
    title: "Frontend Developer",
    engagement: "employer",
    start: "2021-01",
    location: "Natal, Brazil · Hybrid",
    highlight:
      "Specialised in React.js, contributing to back ends in Ruby on Rails and Node.js.",
    description:
      "Organised and led an internal company workshop on DevOps, covering containerisation and CI/CD pipelines, and contributed to widely used open-source projects including Rails and Axios. Also mentored colleagues in front-end development, supporting their skill growth and strengthening collaboration across the team.",
    stack: ["React", "Ruby on Rails", "Node.js"],
  },
  {
    company: "CrewAI",
    title: "Software Engineer",
    engagement: "contract",
    start: "2026-06",
    end: "2026-09",
    location: "United States · Remote",
    highlight:
      "Built the revamped automation builder for an agentic orchestration platform: canvas rendering, drag and drop, and an event bus.",
    description:
      "As part of the AI Studio team, I helped improve a no-code experience where users can visually create and delegate workflows to AI agents. My main contributions include developing the revamp of the automation builder UI, implementing canvas rendering and drag-and-drop interactions, integrating APIs, and introducing an Event Bus (publish-subscribe) architecture for scalable communication across UI components.",
    stack: ["React", "TypeScript"],
  },
  {
    company: "GoDaddy",
    title: "Software Developer",
    engagement: "contract",
    start: "2022-07",
    end: "2026-06",
    location: "United States · Remote",
    highlight:
      "Shipped ecommerce features end to end, including a customizable invoice tool with a real-time PDF preview.",
    description:
      "I worked across ecommerce areas such as ordering, invoicing, pay-links, and shipping, focusing primarily on front-end development with React.js, Next.js, and TypeScript, and using Apollo Client to manage GraphQL queries. Also contributed across the stack with Node.js (TypeScript), GraphQL, and DynamoDB. A key challenge was designing and implementing a customizable invoice tool that lets shoppers personalize their PDF invoices, adjusting color theme, store logo, and other branding with a real-time preview that reflects every change instantly.",
    stack: ["React", "Next.js", "TypeScript", "GraphQL", "Node.js", "DynamoDB"],
  },
  {
    company: "Grano Capital",
    title: "Frontend Developer",
    engagement: "contract",
    start: "2021-03",
    end: "2022-05",
    location: "São Paulo, Brazil · Remote",
    highlight:
      "Built interactive map interfaces for agricultural pre-financing, which I also designed in Figma.",
    description:
      "I developed pre-financing solutions for the agriculture sector, working with sensitive financial data, payment methods, and GeoJSON geospatial data. One of my main challenges involved building interactive map interfaces with React.js and Mapbox.js that let customers render interactive charts, draw and save custom areas directly on the map, and visualise their data spatially. Also contributed to back-end development in Ruby on Rails and supported colleagues in integrating external APIs.",
    stack: ["React", "Redux", "Mapbox", "Ruby on Rails", "Figma"],
  },
  {
    company: "FIWARE",
    title: "Volunteer Contributor",
    engagement: "volunteer",
    start: "2019-06",
    end: "2021-01",
    location: "Remote",
    highlight: "Developed features and unit tests for the Orion-LD Context Broker in C/C++.",
    description:
      "I was tasked with developing new features and writing unit tests for Orion-LD Context Broker using C/C++, supervised by Ken Zangelin, Senior Technical Expert & Evangelist.",
    stack: ["C++"],
  },
];

export function formatMonth(ym: string): string {
  const [y, m] = ym.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

// Months from `ym` to Jan of `fromYear`, for placing bars on the timeline.
export function monthIndex(ym: string, fromYear: number): number {
  const [y, m] = ym.split("-").map(Number);
  return (y - fromYear) * 12 + (m - 1);
}
