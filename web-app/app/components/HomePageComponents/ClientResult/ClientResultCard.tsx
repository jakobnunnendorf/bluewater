import React from "react";

type Props = {
  title: string;
  percentage: string;
};

const ClientResultCard: React.FC<Props> = ({ title, percentage }) => {
  return (
    <div className="w-fit">
      <h3 className="text-primary-blue font-gilroy-medium text-[85px] font-medium">
        {percentage}
      </h3>
      <p className="font-regular text-center font-gilroy-regular text-xl text-black">
        {title}
      </p>
    </div>
  );
};

export default ClientResultCard;
