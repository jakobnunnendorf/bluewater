import React from "react";
import MobileVersion from "@/app/components/LayoutComponents/Hero/HeroText/MobileVersion";

function HeroHeading() {
  return (
    <div className="md:row-span-2">
      <div className="font-fat z-10 hidden text-4xl font-extrabold text-white md:block md:w-fit md:px-16 md:text-7xl md:text-opacity-75">
        <h1>Boutique Websites</h1>
        <h1 className="z-10 text-[#FDEBBD]/75 md:text-6xl">for world-class</h1>
        <h1>Yacht Interior Designers</h1>
      </div>
      <MobileVersion />
    </div>
  );
}

export default HeroHeading;
