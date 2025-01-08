import React from "react";
import Socials from "./HeroText/Socials";
import HeroHeading from "./HeroText/HeroHeading";
import HeroSubHeading from "./HeroText/HeroSubHeading";
import ReviewBadge from "@/app/components/LayoutComponents/Hero/ReviewBadge";
import Arguments from "@/app/components/LayoutComponents/Hero/Arguments";
import BookCall from "@/app/components/LayoutComponents/Hero/BookCall";

function HeadLine() {
  return (
    <div className="mt-28 flex h-full w-full flex-col justify-center md:absolute md:mt-0 md:grid md:grid-rows-5 md:justify-normal">
      <div className="h-full w-full md:row-span-3 md:row-start-2 md:grid md:grid-rows-5">
        <div></div>
        <HeroHeading />
        <Arguments />
        <HeroSubHeading />
        <div className="items-center py-16 md:mt-8 md:flex md:w-1/2 md:justify-around">
          <ReviewBadge />
          <BookCall />
        </div>
      </div>
      <div className="row-start-5 ml-auto mr-0 hidden w-fit px-16 py-8 md:flex md:items-end md:justify-end">
        <Socials />
      </div>
    </div>
  );
}

export default HeadLine;
