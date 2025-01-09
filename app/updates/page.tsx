import ThreeJS from "@/components/Experimental/ThreeJS";
import SeconderyHeroWithNav from "@/components/Shared/SeconderyHeroWithNav";
import HeadingTextLg from "@/components/UI/HeadingTextLg";

interface Milestone {
  date: string;
  achievement: string;
  significance: "major" | "normal" | "minor";
  last?: boolean;
}

const Milestone = ({ date, achievement, significance, last }: Milestone) => {
  return (
    <div
      className={`${significance === "major" ? "text-3xl" : significance === "normal" ? "text-2xl" : "text-lg"} flex h-full items-center gap-4`}
    >
      <div className="flex h-full flex-col items-center justify-center">
        {!last && <div className="h-full w-0 border border-black"></div>}
        <div className="h-8 w-8 flex-shrink-0 rounded-full bg-black"></div>
      </div>
      <div>
        <span className="font-bold">
          {date}: {achievement}
        </span>
      </div>
    </div>
  );
};

const milestones: Milestone[] = [
  {
    date: "January 8th, 2025",
    achievement: "Website online",
    significance: "major",
  },
  {
    date: "January 8th, 2026",
    achievement: "Website online",
    significance: "major",
  },
];

export default function Home() {
  return (
    <section className="min-h-screen">
      <SeconderyHeroWithNav
        title="Updates"
        desc="Innovation is never to stop chasing perfection in spite of never catching it."
        bgImgSrc="/updates/boat-blueprint.png"
      />
      <div className="mx-auto w-1/2 py-16">
        <HeadingTextLg title="Milestones" />
        <ul
          className={`grid grid-rows-${milestones.length.toString()} min-h-96`}
        >
          {milestones.reverse().map((milestone, index) => (
            <Milestone
              key={index}
              date={milestone.date}
              achievement={milestone.achievement}
              significance={milestone.significance}
              last={index < milestones.length - 1 ? true : false}
            />
          ))}
        </ul>
      </div>
      <ThreeJS />
    </section>
  );
}
