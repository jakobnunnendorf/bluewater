"use client";

import Image from "next/image";
import ProcessCard from "./ProcessCard";
import TextWithBg from "../../UI/TextWithBg";
import { ProcessSectionList } from "./ProcessList";
import HeadingTextLg from "../../UI/HeadingTextLg";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {};

// TODO: animate mac

const FreeDivider = () => {
  return (
    <div className="Button A absolute left-1/2 h-48 border border-dashed border-orange-400">
      <div className="absolute bottom-0 -translate-x-1/2 translate-y-14 text-nowrap text-center text-orange-400">
        <div className="flex items-center justify-center gap-1">
          <p className="font-bold">Approve Design</p>
          <FaRegCheckCircle />
        </div>
        <p>Don't like it? Don't pay.</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const [activeCard, setActiveCard] = useState<number>(1); // Start with first card active

  return (
    <div className="relative flex flex-col items-center">
      <Image
        className="max-lg:px-6"
        src="/images/nautical-elegance.png"
        alt="nautical elegance"
        width={880}
        height={740}
      />
      <div
        className="container flex w-full flex-col items-center lg:gap-6"
        id="how-zero-risk-works"
      >
        <header className="mt-10 flex w-full max-w-[890px] flex-col items-center gap-[18px] text-center lg:mt-[140px]">
          <TextWithBg
            title="Great results or 100% money back"
            isRounded={false}
          />
          <HeadingTextLg title="How it works" />
        </header>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 2xl:justify-between">
          {ProcessSectionList.map((processData) => (
            <ProcessCard
              key={processData.id}
              id={processData.id}
              title={processData.title}
              points={processData.points}
              isActive={activeCard === processData.id}
              onHover={(hovering) => {
                if (hovering) {
                  setActiveCard(processData.id);
                }
              }}
            />
          ))}
          <FreeDivider />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
