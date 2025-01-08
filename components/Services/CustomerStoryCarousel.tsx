"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import CustomerStoryCard from "./CustomerStoryCard";

type Props = {};

const CustomerStoryCarousel = (props: Props) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const CustomeStoryCarouselData = [
    {
      name: "Sophie Lance",
      profile: "/images/avater.png",
      rating: 5,
      review: `As a yacht interior designer, I understand the importance of aesthetics, functionality, 
              and seamless luxury in my work. When it came to revamping my website, I knew I needed a partner 
              who could encapsulate these elements in a digital space.`,
    },
    {
      name: "James Harrington",
      profile: "/images/avater.png",
      rating: 4,
      review: `As a luxury yacht interior designer, the details of elegance and sophistication are crucial in my work.
        When it came to creating a new website, I sought a partner who could translate these qualities into a digital format,
        and I found exactly that with BlueWater Interiors.`,
    },
    // {
    //   name: "Laura Bennett",
    //   profile: "/images/avater.png",
    //   rating: 5,
    //   review: `In my career as a yacht interior designer, presenting my work online with the same level of luxury
    //     and precision I offer my clients is essential. BlueWater Interiors exceeded my expectations,
    //     delivering a website that perfectly showcases the beauty and functionality of my designs.`,
    // },
    // {
    //   name: "Evelyn Carter",
    //   profile: "/images/avater.png",
    //   rating: 4,
    //   review: `The team at BlueWater Interiors has an exceptional eye for detail. Their design for my online portfolio
    //     was both stunning and user-friendly. I highly recommend their services to anyone looking to enhance their digital presence.`,
    // },
    // {
    //   name: "Marcus Thompson",
    //   profile: "/images/avater.png",
    //   rating: 5,
    //   review: `Working with BlueWater Interiors was a fantastic experience. They understood my vision and transformed it
    //     into a sleek and modern website. The project was completed on time, and their support was excellent throughout.`,
    // },
    // Add more data as needed
  ];

  // Function to calculate and set card and container widths
  const updateDimensions = () => {
    if (cardRef.current && carouselRef.current) {
      const cardWidth = cardRef.current.getBoundingClientRect().width;
      setCardWidth(cardWidth);
      setContainerWidth(cardWidth * CustomeStoryCarouselData.length);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const prevSlider = () =>
    setCurrentSlider((prevSlider) =>
      prevSlider === 0 ? CustomeStoryCarouselData.length - 1 : prevSlider - 1,
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((prevSlider) =>
        prevSlider === CustomeStoryCarouselData.length - 1 ? 0 : prevSlider + 1,
      ),
    [CustomeStoryCarouselData.length],
  );

  useEffect(() => {
    const intervalId = setInterval(nextSlider, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="container mt-9 w-full">
      <div className="relative w-full overflow-hidden lg:h-[580px]">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="m-4 flex w-full transform-gpu items-center gap-5 duration-500 ease-linear"
          style={{
            transform: `translateX(-${currentSlider * 100}%)`,
          }}
        >
          {CustomeStoryCarouselData.map((data, index) => (
            <CustomerStoryCard key={index} />
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="mt-11 flex w-full flex-wrap items-center justify-center gap-3.5 rounded-full">
        {CustomeStoryCarouselData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlider(idx)}
            className={`rounded-full duration-500 ${currentSlider === idx ? "h-2.5 w-[67px] bg-primary-orange sm:h-3 md:h-[15px]" : "size-2.5 bg-gray-mid sm:size-3 md:size-[15px]"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomerStoryCarousel;
