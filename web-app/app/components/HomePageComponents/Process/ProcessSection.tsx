import Image from "next/image";
import ProcessCard from "./ProcessCard";
import TextWithBg from "../../UI/TextWithBg";
import { ProcessSectionList } from "./ProcessSectionList";
import HeadingTextLg from "../../UI/HeadingTextLg";

type Props = {};

const ProcessSection = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="max-lg:px-6"
        src="/images/nautical-elegance.png"
        alt="nautical elegance"
        width={880}
        height={740}
      />
      <div className="container flex w-full flex-col items-center lg:gap-6">
        <header className="mt-10 flex w-full max-w-[890px] flex-col items-center gap-[18px] text-center lg:mt-[140px]">
          <TextWithBg
            title="Great results or 100% money back"
            isRounded={false}
          />
          <HeadingTextLg title="What we would like to achieve with you & your website" />
        </header>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 2xl:justify-between">
          {ProcessSectionList.map((processData) => (
            <ProcessCard
              key={processData.id}
              id={processData.id}
              title={processData.title}
              points={processData.points}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
