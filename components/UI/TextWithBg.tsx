import React from "react";

type Props = {
  title: string;
  isRounded?: boolean;
};

const TextWithBg: React.FC<Props> = ({ title, isRounded = true }) => {
  return (
    <div
      className={`w-fit bg-indigo-700 px-6 py-2.5 font-gilroy-medium text-xs font-normal uppercase !leading-none text-white min-[477px]:text-lg sm:text-xl ${isRounded ? "rounded-full" : ""}`}
    >
      {title}
    </div>
  );
};

export default TextWithBg;
