"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import CarouselCard from "./CarouselCard";

interface CarouselDataInterface {
  icon: string;
  title: string;
  desc: string;
}

export const CarouselContainer = ({
  title,
  description,
  slideData,
}: {
  title: string;
  description: string;
  slideData: CarouselDataInterface[];
}) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [cardWidth, setCardWidth] = useState(400);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? slideData.length - 1 : currentSlider - 1,
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === slideData.length - 1 ? 0 : currentSlider + 1,
      ),
    [slideData.length],
  );

  const updateCardWidth = () => {
    if (carouselRef.current) {
      const cardElement = carouselRef.current.querySelector(
        ".about-carousel-card",
      );
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
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, prevSlider]);

  /* TODO make infinite scroll */

  return (
    <section className="mt-20 sm:mt-28 md:mt-40 lg:mt-[230px]">
      <header className="mx-auto mb-6 flex w-full max-w-[79%] flex-col gap-2.5">
        <h2 className="font-gilroy-regular text-3xl font-medium uppercase leading-none text-black min-[477px]:text-5xl sm:text-[56px]">
          {title}
        </h2>
        <p className="font-gilroy-regular text-xs font-normal text-black sm:text-sm md:text-lg">
          {description}
        </p>
      </header>
      <div className="relative mx-auto w-full max-w-[88%]">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="absolute -left-3 top-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8"
        >
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2288 20.2292C11.5112 19.9467 11.6698 19.5636 11.6698 19.1642C11.6698 18.7648 11.5112 18.3818 11.2288 18.0993L3.77294 10.6435L11.2288 3.18758C11.5032 2.9035 11.655 2.52302 11.6516 2.12809C11.6482 1.73316 11.4897 1.35537 11.2105 1.0761C10.9312 0.796836 10.5534 0.638427 10.1585 0.634996C9.76356 0.631565 9.38308 0.783384 9.099 1.05776L0.578213 9.57855C0.295836 9.86101 0.137207 10.2441 0.137207 10.6435C0.137207 11.0429 0.295837 11.4259 0.578213 11.7084L9.099 20.2292C9.38146 20.5115 9.76451 20.6702 10.1639 20.6702C10.5633 20.6702 10.9464 20.5115 11.2288 20.2292Z"
              fill="black"
            />
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="absolute -right-3 top-1/2 z-50 flex h-6 w-6 items-center justify-center rounded-full md:h-8 md:w-8"
        >
          <svg
            className="rotate-180"
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2288 20.2292C11.5112 19.9467 11.6698 19.5636 11.6698 19.1642C11.6698 18.7648 11.5112 18.3818 11.2288 18.0993L3.77294 10.6435L11.2288 3.18758C11.5032 2.9035 11.655 2.52302 11.6516 2.12809C11.6482 1.73316 11.4897 1.35537 11.2105 1.0761C10.9312 0.796836 10.5534 0.638427 10.1585 0.634996C9.76356 0.631565 9.38308 0.783384 9.099 1.05776L0.578213 9.57855C0.295836 9.86101 0.137207 10.2441 0.137207 10.6435C0.137207 11.0429 0.295837 11.4259 0.578213 11.7084L9.099 20.2292C9.38146 20.5115 9.76451 20.6702 10.1639 20.6702C10.5633 20.6702 10.9464 20.5115 11.2288 20.2292Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="mx-auto h-[286px] w-full max-w-[90%] overflow-hidden md:h-[400px]">
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex transform-gpu gap-5 duration-500 ease-linear"
            style={{ transform: `translateX(-${currentSlider * cardWidth}px)` }}
          >
            {/* sliders */}
            {slideData.map((slide, idx) => (
              <CarouselCard
                key={idx}
                title={slide.title}
                desc={slide.desc}
                icon={slide.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
