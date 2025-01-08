import HeadingTextLg from "../../UI/HeadingTextLg";
import OfferCard from "./OfferCard";

type Props = {};

const OfferSection: React.FC<Props> = ({}) => {
  return (
    <section className="container mt-[123px]">
      <header className="mx-auto max-w-[841px] text-center">
        <HeadingTextLg title="Imagine the website gets you one more client" />
      </header>
      <div className="mt-14 flex items-center justify-center gap-5 max-[1298px]:flex-wrap">
        {OfferData.map((offer, index) => (
          <OfferCard key={index} image={offer.image} title={offer.title} />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;

const OfferData = [
  {
    title: "First, we work upfront for free",
    image: "/images/offer/offer-icon-1.png",
  },
  {
    title: "Only pay if you like it",
    image: "/images/offer/offer-icon-2.png",
  },
  {
    title: "Finally,treat your clients to a site for free on top",
    image: "/images/offer/offer-icon-3.png",
  },
];
