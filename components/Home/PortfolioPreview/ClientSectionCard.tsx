import React from "react";

type Props = {
  title: string;
  bgImg: string;
  isActive?: boolean;
  inactiveClass?: string;
};

const ClientSectionCard: React.FC<Props> = ({
  title,
  bgImg,
  isActive,
  inactiveClass,
}) => {
  return (
    <div
      className={`relative rounded-[45px] bg-cover bg-no-repeat transition-all duration-500 ${isActive ? "h-[235px] min-w-[300px] max-w-[300px] sm:h-[335px] sm:min-w-[550px] sm:max-w-[550px] lg:h-[556px] lg:min-w-[925px] lg:max-w-[925px]" : `h-[180px] min-w-[280px] max-w-[280px] opacity-50 sm:h-[225px] sm:min-w-[350px] sm:max-w-[350px] lg:h-[443px] lg:min-w-[743px] lg:max-w-[743px] ${inactiveClass}`}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute flex h-full w-full items-end justify-between rounded-[45px] bg-gradient-to-t from-black to-black/0 px-4 pb-4 sm:px-11 sm:pb-10">
        <h4
          className={`font-gilroy-medium font-normal text-white transition-all duration-500 max-sm:w-1/2 lg:w-full lg:max-w-[366px] ${isActive ? "text-lg sm:text-3xl lg:text-5xl" : "sm:ext-xl lg:text-5xl"}`}
        >
          {title}
        </h4>
        <div
          className={`flex items-center justify-center rounded-full bg-primary-orange transition-all duration-500 ${isActive ? "size-10 sm:size-20 lg:size-[110px]" : "size-8 sm:size-16 lg:size-[110px]"}`}
        >
          <svg
            className="size-3 transition-all duration-500 sm:size-4 lg:size-6"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.26035 2.30605L23.6918 2.30605M23.6918 2.30605L23.6918 20.7375M23.6918 2.30605L2.18845 23.8094"
              stroke="white"
              strokeWidth="3.68396"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ClientSectionCard;
