// Degrees, from the LinkedIn Education section.
export interface Paper {
  title: string;
  url?: string;
}

export interface Degree {
  school: string;
  degree: string;
  field: string;
  start: number;
  end: number;
  focus: string;
  description: string;
  skills: string[];
  papers: Paper[];
}

export const DEGREES: Degree[] = [
  {
    school: "Universidade Federal do Rio Grande do Norte",
    degree: "Master's degree",
    field: "Computer Systems",
    start: 2019,
    end: 2021,
    focus: "Research line in Embedded and Distributed Systems.",
    description:
      "Research covering cloud and edge computing, IoT, ubiquitous and mobile computing, middleware and distributed communication. My work focused on integrating heterogeneous data sources for smart cities.",
    skills: ["Distributed Systems", "Java"],
    papers: [
      { title: "A Linked Data-based Service for Integrating Heterogeneous Data Sources in Smart Cities" },
      { title: "Aqüeducte: A Service for Integrating Heterogeneous Data in Smart Cities" },
    ],
  },
  {
    school: "Universidade Federal do Rio Grande do Norte",
    degree: "Technologist",
    field: "Analysis and Systems Development",
    start: 2016,
    end: 2018,
    focus: "Systems analysis, software engineering, project management and databases.",
    description:
      "Trained across the full software lifecycle: conception, specification, design, implementation, evaluation and maintenance. Research work applied IoT to instrumentation and control of grain storage silos.",
    skills: ["RESTful architecture", "Embedded Systems"],
    papers: [
      { title: "On KNoT Meta-Platform for IoT-Based Control of Storage Grains" },
      {
        title:
          "Human-Machine Interface for Instrumentation and Control of Ambience in Grain Storage Silos in the Context of the Internet of Things",
      },
    ],
  },
];
