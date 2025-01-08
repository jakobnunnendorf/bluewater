"use client";

type Props = {
  name: string;
  onClick?  : () => void;
  bgColor?: string;
  padding?: string;
};

const Button: React.FC<Props> = ({
  name,
  onClick,
  bgColor = "bg-black text-white",
  padding = " py-2.5 md:py-3.5 ",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 font-gilroy-regular font-normal leading-none duration-300 hover:scale-105 active:scale-95 md:px-7 md:text-lg ${padding} ${bgColor}`}
    >
      {name}
    </button>
  );
};

export default Button;
