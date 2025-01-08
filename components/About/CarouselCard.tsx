import Image from "next/image";
import React from "react";

const CarouselCard = ({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) => {
  return (
    <div
      className={`about-carousel-card min-w-[300px] max-w-[400px] rounded-[40px] border border-[#111827] px-7 py-5 md:h-[400px] md:min-w-[400px]`}
    >
      <div>
        <Image
          className="mb-3 size-8 md:size-[68px]"
          src={icon}
          alt="quote"
          width={68}
          height={68}
        />
        <h4 className="mb-1.5 font-gilroy-medium text-lg font-normal text-black md:text-2xl">
          {title}
        </h4>
        <p className="mt-3 font-gilroy-regular text-sm text-[#656565] md:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
