import OfferCard from "../Home/Offer/OfferCard";
import HeadingTextLg from "../UI/HeadingTextLg";

type Props = {};

const AchieveSection: React.FC<Props> = ({}) => {
  return (
    <section className="container mt-[123px]">
      <header className="mx-auto max-w-[1030px] space-y-2 text-center">
        <HeadingTextLg title="How can we achieve this?" />
        <p className="text-[#6A6A6A font-gilroy-regular text-lg font-normal">
          Our process is designed to be seamless and client-focused. From our
          initial consultation to the final delivery and beyond, we work closely
          with you to ensure that every aspect of your project aligns with your
          vision and exceeds your expectations.
        </p>
      </header>
      <div className="mt-8 flex items-center justify-center gap-5 max-[1298px]:flex-wrap">
        {AchieveData.map((offer, index) => (
          <OfferCard key={index} image={offer.image} title={offer.title} />
        ))}
      </div>
    </section>
  );
};

export default AchieveSection;

const AchieveData = [
  {
    title: "One type of customer",
    image: "/images/achieve-section/achieve-2.png",
  },
  {
    title: "No reinventing the wheel",
    image: "/images/achieve-section/achieve-3.png",
  },
  {
    title: "Only improvement",
    image: "/images/achieve-section/achieve-1.png",
  },
];
