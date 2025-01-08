import React from "react";
import BGVideo from "@/app/components/LayoutComponents/Hero/Background";
import HeadLine from "@/app/components/LayoutComponents/Hero/HeadLine";

function Hero() {
  return (
    <div id="hero-section" className="relative w-full md:h-fit">
      <HeadLine />
      <BGVideo />
    </div>
  );
}

export default Hero;
