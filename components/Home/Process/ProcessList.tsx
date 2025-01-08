interface ProcessSection {
  id: number;
  title: string;
  points: string[];
}

export const ProcessSectionList: ProcessSection[] = [
  {
    id: 1,
    title: "The Vision",
    points: ["Understand your design philosophy"],
  },
  {
    id: 2,
    title: "Design",
    points: ["Turn your vision into a stunning design"],
  },
  {
    id: 3,
    title: "Development",
    points: ["Bring your vision to life online"],
  },
  {
    id: 4,
    title: "Launch",
    points: ["Launch marketing campaign"],
  },
];
