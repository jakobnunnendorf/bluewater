"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import HeadingTextLg from "../UI/HeadingTextLg";
import ClientSayCarousel from "./ClientSayCarousel";

type Props = {};

const WhatOurClientSay = (props: Props) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [cardWidth, setCardWidth] = useState(763);
  const carouselRef = useRef<HTMLDivElement>(null);

  const WhatOurClientSayData = [
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
    {
      name: "Laura Bennett",
      profile: "/images/avater.png",
      rating: 5,
      review: `In my career as a yacht interior designer, presenting my work online with the same level of luxury 
        and precision I offer my clients is essential. BlueWater Interiors exceeded my expectations, 
        delivering a website that perfectly showcases the beauty and functionality of my designs.`,
    },
    {
      name: "Evelyn Carter",
      profile: "/images/avater.png",
      rating: 4,
      review: `The team at BlueWater Interiors has an exceptional eye for detail. Their design for my online portfolio 
        was both stunning and user-friendly. I highly recommend their services to anyone looking to enhance their digital presence.`,
    },
    {
      name: "Marcus Thompson",
      profile: "/images/avater.png",
      rating: 5,
      review: `Working with BlueWater Interiors was a fantastic experience. They understood my vision and transformed it 
        into a sleek and modern website. The project was completed on time, and their support was excellent throughout.`,
    },
    {
      name: "Olivia Martinez",
      profile: "/images/avater.png",
      rating: 3,
      review: `BlueWater Interiors delivered a good design but missed a few key features we discussed initially. 
        However, their customer service was top-notch, and they were quick to address the issues.`,
    },
    {
      name: "Nathan Brown",
      profile: "/images/avater.png",
      rating: 5,
      review: `I am extremely pleased with the outcome of my website. BlueWater Interiors not only met but exceeded my expectations. 
        The design is elegant, and the functionality is flawless. Worth every penny!`,
    },
    {
      name: "Isabella Wilson",
      profile: "/images/avater.png",
      rating: 4,
      review: `The professionalism and creativity of BlueWater Interiors made a significant difference in the way my brand 
        is presented online. They delivered a beautiful and responsive website that captures the essence of my business perfectly.`,
    },
    {
      name: "Daniel Kim",
      profile: "/images/avater.png",
      rating: 5,
      review: `From concept to completion, BlueWater Interiors handled every aspect of the project with expertise. 
        Their attention to detail and commitment to quality are truly impressive. Highly recommended for anyone looking for a high-quality web design.`,
    },
    {
      name: "Chloe Davis",
      profile: "/images/avater.png",
      rating: 4,
      review: `The design team at BlueWater Interiors was great to work with. They took the time to understand my needs and 
        provided a website that is both functional and aesthetically pleasing. A few minor revisions were needed, but overall, I’m satisfied.`,
    },
    {
      name: "Liam Anderson",
      profile: "/images/avater.png",
      rating: 5,
      review: `I can't speak highly enough about BlueWater Interiors. Their team delivered a top-notch website that aligns 
        perfectly with my business goals. The entire process was smooth, and the end result speaks for itself.`,
    },
    {
      name: "Ava Scott",
      profile: "/images/avater.png",
      rating: 3,
      review: `The final product was decent, but there were some delays in the project timeline. BlueWater Interiors eventually 
        delivered a satisfactory result, but communication could have been better.`,
    },
  ];

  const updateCardWidth = () => {
    if (carouselRef.current) {
      const cardElement = carouselRef.current.querySelector(
        ".what-out-client-say-about",
      );
      if (cardElement) {
        setCardWidth(cardElement.getBoundingClientRect().width + 20);
      }
    }
  };

  // Center the active slide
  const calculateOffset = () => {
    if (!carouselRef.current) return 0;

    const containerWidth =
      carouselRef.current.parentElement?.getBoundingClientRect().width || 0;
    const centerPosition = (containerWidth - cardWidth) / 2;
    const offset = -currentSlider * cardWidth + centerPosition - 20;
    return offset;
  };

  useEffect(() => {
    updateCardWidth();
    calculateOffset();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const prevSlider = () =>
    setCurrentSlider((prevSlider) =>
      prevSlider === 0 ? WhatOurClientSayData.length - 1 : prevSlider - 1,
    );

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((prevSlider) =>
        prevSlider === WhatOurClientSayData.length - 1 ? 0 : prevSlider + 1,
      ),
    [WhatOurClientSayData.length],
  );

  useEffect(() => {
    const intervalId = setInterval(nextSlider, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <section className="mt-[177px] bg-primary-blue/20 pb-24 pt-20">
      <div className="">
        <header className="mx-auto mb-14 w-full max-w-[730px] text-center">
          <HeadingTextLg title="What Our Clients say" />
        </header>
        <div className="mt-9 w-full">
          <div className="relative h-[310px] overflow-hidden md:h-[400px]">
            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex items-center gap-5 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${calculateOffset()}px)`,
              }}
            >
              {/* Sliders */}
              {WhatOurClientSayData.map((data, index) => (
                <ClientSayCarousel
                  key={index}
                  name={data.name}
                  profile={data.profile}
                  rating={data.rating}
                  review={data.review}
                  isActive={currentSlider === index}
                />
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="mt-11 flex w-full flex-wrap items-center justify-center gap-3.5 rounded-full">
            {WhatOurClientSayData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlider(idx)}
                className={`rounded-full duration-500 ${currentSlider === idx ? "h-2.5 w-[67px] bg-primary-blue sm:h-3 md:h-[15px]" : "size-2.5 bg-gray-mid sm:size-3 md:size-[15px]"}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientSay;
