interface ProcessSection {
  id: number;
  title: string;
  points: string[];
}

export const ProcessSectionList: ProcessSection[] = [
  {
    id: 1,
    title: "Start",
    points: [
      "Fully understand & capture your design philosophy",
      "Measure traffic",
    ],
  },
  {
    id: 2,
    title: "1st Month",
    points: [
      "Deploy your website as a stunning extension of your portfolio",
      "Boost SEO",
    ],
  },
  {
    id: 3,
    title: "2nd Month",
    points: [
      "Offer your clients free yacht branding websites",
      "Monitor SEO results",
    ],
  },
  {
    id: 4,
    title: "Finale",
    points: [
      "Launch marketing campaign with videos from the process",
      "Review experience",
    ],
  },
];
