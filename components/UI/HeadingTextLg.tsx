import React from "react";

type Props = {
  title: string;
};

const HeadingTextLg: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="font-gilroy-medium text-3xl font-normal uppercase leading-none min-[477px]:text-5xl sm:text-[56px]">
      {title}
    </h2>
  );
};

export default HeadingTextLg;
