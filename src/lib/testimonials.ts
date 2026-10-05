// LinkedIn recommendations, copied from the profile's Recommendations tab.
// Titles are the recommender's LinkedIn headline when they wrote it, shortened.
export interface Testimonial {
  name: string;
  title: string;
  // How the two worked together, as LinkedIn states it.
  relationship: string;
  // ISO date of the recommendation.
  date: string;
  // Shown text, in English.
  quote: string;
  // The recommendation as written, when it was not in English.
  original?: { lang: string; languageName: string; quote: string };
}

export const LINKEDIN_RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/gabriel-quaresma-dev/details/recommendations/";

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fábio Henrique",
    title: "Tech Lead, Specialist II at Grupo Boticário",
    relationship: "Studied together",
    date: "2021-02-13",
    quote:
      "Gabriel, besides being a very effective guy, always worried about what would be delivered to users during our projects developed during the time we studied together! Thank you for all your support! Tmj",
  },
  {
    name: "Lucas Andrade",
    title: "System Analyst at CI&T",
    relationship: "Studied together",
    date: "2021-04-15",
    quote:
      "There's no challenge Gabriel can't overcome! He's an example of a professional who goes after it and doesn't give up until the problem is solved. He gives his all in everything he does, and his success is more than evident. Always after something new. Thank you for always helping me when I needed it, and for introducing me to Flutter.",
    original: {
      lang: "pt-BR",
      languageName: "Portuguese",
      quote:
        "Não tem desafio que Gabriel não consiga superar! Ele é um exemplo de profissional que vai atrás e não desiste até resolver os problemas. Esforçado ao máximo em tudo que faz, o seu sucesso é mais do que evidente. Sempre em busca do novo. Obrigado por sempre me ajudar quando precisei e por me apresentar o Flutter.",
    },
  },
];
