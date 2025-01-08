import Image from "next/image";
import HeadingTextLg from "../UI/HeadingTextLg";
import { Fragment } from "react";

interface DoubleImgWithTextInterface {
  isSubHed?: boolean;
  subHed?: string;
  text: string;
}

type Props = {
  img: string;
  title: string;
  info: string;
  flexDir: string;
  data: DoubleImgWithTextInterface[];
};

const DoubleImgWithText: React.FC<Props> = ({
  img,
  title,
  info,
  flexDir,
  data,
}) => {
  return (
    <section className="container mt-20 sm:mt-24 md:mt-28 lg:mt-[185px]">
      <div
        className={`flex items-center gap-5 ${flexDir ? flexDir : "max-lg:flex-col-reverse"}`}
      >
        <article className="lg:w-1/2">
          <HeadingTextLg title="Client-Centric Approach" />
          <p className="mt-3 font-gilroy-regular text-sm text-[#656565] md:text-lg">
            {info}
          </p>
          <div className="">
            {data.map((item, index) => (
              <Fragment key={index}>
                {item.subHed && (
                  <h3
                    className={`font-gilroy-bold text-sm ${item.isSubHed ? "mt-4 text-base text-[#111827] sm:text-lg md:text-xl lg:text-2xl" : "mt-5 text-primary-orange md:text-lg"}`}
                  >
                    {item.subHed}
                  </h3>
                )}
                <p
                  className={`font-gilroy-regular text-sm text-[#656565] md:text-lg ${item.subHed ? "" : "mt-3"} ${item.isSubHed ? "mt-1.5" : ""}`}
                >
                  {item.text}
                </p>
              </Fragment>
            ))}
          </div>
        </article>
        <div className="lg:w-1/2">
          <Image src={img} width={619} height={741} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default DoubleImgWithText;
