interface review {
  title: string;
  serial: string;
  text: string;
  isBlurred?: boolean;
}

const CollaborativeCard: React.FC<review> = ({ title, serial, text }) => {
  return (
    <div
      className={`min-w-[300px] max-w-[300px] rounded-[40px] bg-white px-7 py-5 shadow-[0_4px_25px_rgba(0,0,0,0.15)] md:h-[373px] md:min-w-[400px] md:max-w-[400px]`}
    >
      <h2 className="font-gilroy-heavy text-2xl font-normal text-primary-orange sm:text-3xl md:text-4xl lg:text-[50px]">
        {serial}
      </h2>
      <div>
        <h4 className="mt-4 max-w-[250px] font-gilroy-medium text-lg font-normal uppercase text-black md:text-2xl">
          {title}
        </h4>
        <p className="mt-0.5 font-gilroy-regular text-sm text-[#656565] md:text-lg">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CollaborativeCard;
