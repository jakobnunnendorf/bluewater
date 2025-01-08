import HeadingTextLg from "../UI/HeadingTextLg";
import PortfolioCard from "./PortfolioCard";

interface PortfolioCardProps {
  title: string;
  bgImg: string;
  text: string;
}

type Props = {
  title: string;
  text: string;
  data: PortfolioCardProps[];
};

const PortfolioSection = ({ title, text, data }: Props) => {
  return (
    <section className="container mt-20 sm:mt-28 md:mt-40">
      <article className="mx-auto mb-10 w-full max-w-[818px] text-center">
        <HeadingTextLg title={title} />
        <p className="font-gilroy-regular text-black sm:text-lg">{text}</p>
      </article>
      <div className="flex flex-col gap-16">
        <div className="grid gap-5 lg:grid-cols-2">
          {data.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              bgImg={item.bgImg}
              text={item.text}
            />
          ))}
        </div>
        <button className="divide-purple-400 font-gilroy-medium text-2xl text-black underline transition-transform hover:scale-105">
          See More
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
