import HeadingTextLg from "../UI/HeadingTextLg";
import CollaborativeCard from "./CollaborativeCard";

type Props = {};

const CollaborativeSection = (props: Props) => {
  return (
    <section className="mt-[177px] bg-primary-orange/10 pb-24 pt-20">
      <div className="container">
        <header className="mx-auto mb-14 w-full max-w-[730px] text-center">
          <HeadingTextLg title="Collaborative Process" />
          <p className="font-gilroy-regular text-sm text-[#656565] md:text-lg">
            Our collaborative approach ensures that you are involved at every
            stage of the project, allowing for an iterative process that aligns
            with your expectations:
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {CollaborativeData.map((data, index) => (
            <CollaborativeCard
              key={index}
              title={data.title}
              serial={data.serial}
              text={data.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborativeSection;

const CollaborativeData = [
  {
    serial: "01",
    title: "Concept Development",
    text: "Our team conducts thorough research into your market and competitors, providing insights that help refine your digital strategy. We aim to identify opportunities and ensure that your website stands out in a crowded marketplace",
  },

  {
    serial: "02",
    title: "Ongoing Communication",
    text: "Once the design is in place, we conduct thorough reviews and make any final adjustments based on your feedback. Our goal is to ensure that every detail is perfect before the website goes live.",
  },

  {
    serial: "03",
    title: "Refinement and Finalization",
    text: "Once the design is in place, we conduct thorough reviews and make any final adjustments based on your feedback. Our goal is to ensure that every detail is perfect before the website goes live",
  },
];
