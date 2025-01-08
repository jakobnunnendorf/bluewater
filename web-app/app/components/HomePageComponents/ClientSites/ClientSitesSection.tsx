"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import HeadingTextLg from "../../UI/HeadingTextLg";
import ClientSectionCard from "./ClientSectionCard";

type Props = {};

const ClientSitesSection = (props: Props) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [cardWidth, setCardWidth] = useState(763);
  const carouselRef = useRef<HTMLDivElement>(null);

  const ClientSectionData = [
    {
      title: "Sunseeker 131 Yacht",
      bgImg: "/images/client-sites/client-sites.png",
    },
    {
      title: "Azimut Grande 35 Metri",
      bgImg: "/images/client-sites/client-sites.png",
    },
    {
      title: "Sunseeker 131 Yacht",
      bgImg: "/images/client-sites/client-sites.png",
    },
    {
      title: "Azimut Grande 35 Metri",
      bgImg: "/images/client-sites/client-sites.png",
    },
  ];

  const updateCardWidth = () => {
    if (carouselRef.current) {
      const cardElement =
        carouselRef.current.querySelector(".client-sites-card");
      if (cardElement) {
        setCardWidth(cardElement.getBoundingClientRect().width + 20);
      }
    }
  };

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const prevSlider = () =>
    setCurrentSlider((prevSlider) =>
      prevSlider === 0 ? ClientSectionData.length - 1 : prevSlider - 1,
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((prevSlider) =>
        prevSlider === ClientSectionData.length - 1 ? 0 : prevSlider + 1,
      ),
    [ClientSectionData.length],
  );

  useEffect(() => {
    const intervalId = setInterval(nextSlider, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider, prevSlider]);

  return (
    <section className="mt-20 md:mt-[193px]">
      <div className="container">
        <div className="w-full max-w-[945px]">
          <HeadingTextLg title="Free, beautifully tailored yacht sites for all of your clients" />
          <p className="mt-4 font-gilroy-regular text-sm font-light text-black sm:text-base lg:text-lg">
            We turn your portfolio into a fleet of branded websites with booking
            calendars
          </p>
        </div>
      </div>
      <div className="ml-auto mt-9 max-lg:pl-4 lg:w-[96%]">
        <div className="relative h-[235px] overflow-hidden sm:h-[335px] lg:h-[556px]">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex items-center gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlider * cardWidth}px)` }}
          >
            {/* Sliders */}
            {ClientSectionData.map((data, index) => (
              <ClientSectionCard
                key={index}
                title={data.title}
                bgImg={data.bgImg}
                isActive={index === currentSlider}
                inactiveClass="client-sites-card" // Added className for width calculation
              />
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="mt-11 flex w-full items-center gap-3.5 rounded-full">
          {ClientSectionData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlider(idx)}
              className={`rounded-full duration-500 ${currentSlider === idx ? "h-[15px] w-[148px] bg-primary-orange" : "size-[15px] bg-gray-mid"}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSitesSection;
