import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  text: string;
};

const TextLeadingIcon: React.FC<Props> = ({ icon = "", text }) => {
  return (
    <div className="flex items-center gap-2.5 font-gilroy-regular text-xs font-normal text-black sm:text-sm md:text-lg">
      <Image src={icon} width={28} height={28} alt="Leading Icon" />
      <p>{text}</p>
    </div>
  );
};

export default TextLeadingIcon;
