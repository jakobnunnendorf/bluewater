import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const OfferCard: React.FC<Props> = ({ image, title }) => {
  return (
    <div className="flex h-[299px] w-full max-w-[400px] flex-col items-center gap-12 rounded-[30px] border border-black pb-7 pt-14 hover:border-primary-orange min-[478px]:min-w-[400px]">
      <Image src={image} alt={title} width={100} height={100} />
      <h2 className="w-full max-w-[295px] px-2 text-center font-gilroy-medium text-2xl uppercase text-black">
        {title}
      </h2>
    </div>
  );
};

export default OfferCard;
