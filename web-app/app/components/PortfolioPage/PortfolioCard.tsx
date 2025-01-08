type Props = {
  title: string;
  bgImg: string;
  text: string;
};

const PortfolioCard: React.FC<Props> = ({ title, bgImg, text }) => {
  return (
    <div
      className={`relative h-[350px] rounded-[45px] bg-cover bg-no-repeat sm:h-[400px] xl:h-[478px]`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute flex h-full w-full flex-col items-start justify-end gap-1 rounded-[45px] bg-gradient-to-t from-black/85 from-0% via-black/65 via-70% to-black/0 to-100% px-4 pb-4 sm:px-11 sm:pb-10">
        <h4
          className={`$ font-gilroy-medium text-lg font-normal text-white transition-all duration-500 max-sm:w-1/2 sm:text-3xl`}
        >
          {title}
        </h4>
        <p className="font-gilroy-regular text-lg font-normal text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;
