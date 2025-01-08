import React from "react";

type Props = {
  id: number;
  title: string;
  points: string[];
  isActive: boolean;
  onHover: (hovering: boolean) => void;
};

const ProcessCard: React.FC<Props> = ({
  id,
  title,
  points,
  isActive,
  onHover,
}) => {
  return (
    <div
      className={`group relative flex h-[304px] w-full max-w-[283px] cursor-pointer items-center justify-between ${
        isActive ? "text-gray-mid-2" : "text-gray-mid-2/50"
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <article className="relative z-20 flex w-full max-w-[187px] flex-col gap-3.5">
        <header>
          <h3
            className={`font-gilroy-medium text-2xl font-normal uppercase ${
              isActive ? "text-terquoise-blue" : "text-gray-mid-2/50"
            }`}
          >
            {title}
          </h3>
          <div className="flex items-center gap-3.5">
            {Array.from({ length: id }).map((_, index) => (
              <div className="w-4 border" key={index}></div>
            ))}
          </div>
        </header>
        <section className="flex flex-col gap-5">
          {points.map((point, index) => (
            <p
              key={index}
              className="flex gap-0.5 font-gilroy-regular text-base font-normal"
            >
              <svg
                className={`mt-1.5 max-h-2 min-w-2 ${
                  isActive ? "fill-terquoise-blue" : "fill-gray-mid-2/50"
                }`}
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2.27002"
                  cy="2.62183"
                  r="2.09814"
                  // fill="#636363"
                  // fillOpacity="0.5"
                />
              </svg>
              {point}
            </p>
          ))}
        </section>
      </article>
      <div className="absolute right-20 z-10 flex w-[158px] items-center">
        {id !== 4 && (
          <div
            className={`absolute -right-10 flex size-[88px] items-center justify-end rounded-3xl pr-6 font-gilroy-medium text-2xl text-white ${
              isActive
                ? "bg-terquoise-blue"
                : "bg-gray-mid group-hover:bg-terquoise-blue"
            }`}
          >
            {id}
          </div>
        )}
        <svg
          className="relative z-20 block group-hover:hidden"
          width="157"
          height="304"
          viewBox="0 0 170 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2001_2)">
            <path
              d="M151.161 145.845C151.161 200.686 118.186 245.143 99.126 245.143C80.0662 245.143 64.6152 200.686 64.6152 145.845C64.6152 91.0046 80.0662 46.5474 99.126 46.5474C118.186 46.5474 151.161 91.0046 151.161 145.845Z"
              fill="black"
              fillOpacity={0.05}
            />
          </g>
          <path
            d="M21.577 0H85.3884C97.3075 0 106.965 7.09123 106.965 15.8427L156.865 151.955L107.004 288.067C107.004 296.819 97.3458 303.91 85.4267 303.91H21.577C9.65793 303.91 0 296.819 0 288.067V15.8427C0 7.09123 9.65793 0 21.577 0Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_f_2001_2"
              x={40.6152}
              y={22.5474}
              width={134.546}
              height={246.596}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={12}
                result="effect1_foregroundBlur_2001_2"
              />
            </filter>
          </defs>
        </svg>
        <svg
          className="relative z-20 hidden group-hover:block"
          width="157"
          height="304"
          viewBox="0 0 170 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_2001_2)">
            <path
              d="M151.161 145.845C151.161 200.686 118.186 245.143 99.126 245.143C80.0662 245.143 64.6152 200.686 64.6152 145.845C64.6152 91.0046 80.0662 46.5474 99.126 46.5474C118.186 46.5474 151.161 91.0046 151.161 145.845Z"
              fill="black"
              fillOpacity="0.14"
            />
          </g>
          <path
            d="M21.577 0H85.3884C97.3075 0 106.965 7.09123 106.965 15.8427L156.865 151.955L107.004 288.067C107.004 296.819 97.3458 303.91 85.4267 303.91H21.577C9.65793 303.91 0 296.819 0 288.067V15.8427C0 7.09123 9.65793 0 21.577 0Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_f_2001_2"
              x={40.6152}
              y={22.5474}
              width={134.546}
              height={246.596}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12"
                result="effect1_foregroundBlur_2010_3"
              />
            </filter>
          </defs>
        </svg>

        {/* <svg
          className="relative z-30 hidden group-hover:inline-block"
          width="157"
          height="304"
          viewBox="0 0 170 304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="shadow" x="-10%" y="-10%" width="200%" height="200%">
              <feDropShadow
                className="filter-none"
                dx="5"
                dy="5"
                stdDeviation="3"
                flood-color="rgba(0, 0, 0, 0.14)"
              />
            </filter>
          </defs>

          <path
            d="M21.577 0H85.3884C97.3075 0 106.965 7.09123 106.965 15.8427L156.865 151.955L107.004 288.067C107.004 296.819 97.3458 303.91 85.4267 303.91H21.577C9.65793 303.91 0 296.819 0 288.067V15.8427C0 7.09123 9.65793 0 21.577 0Z"
            fill="white"
            filter="url(#shadow)"
          />
        </svg> */}
      </div>
    </div>
  );
};

export default ProcessCard;
