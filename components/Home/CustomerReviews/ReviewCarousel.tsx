"use client";
import { useEffect, useState } from "react";
import HeadingTextLg from "../../UI/HeadingTextLg";
import Carousel from "./Carousel";

interface Slider {
  img: string;
  title: string;
  des: string;
}

// TODO: insert real testimonials

const ReviewCarousel: React.FC = () => {
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    // This function will be called on mount and whenever the screen size changes
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prevSlider = () =>
    setCurrentSlider((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  const nextSlider = () =>
    setCurrentSlider((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const intervalId = setInterval(nextSlider, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider, prevSlider]);

  return (
    <div className="relative mt-20 flex h-[720px] w-full transform flex-col items-center gap-5 overflow-hidden duration-1000 ease-linear lg:mt-96 lg:h-[540px] lg:flex-row lg:gap-10">
      {/* Text container */}
      <div className="flex flex-col pl-6 2xl:ml-24">
        <div className="container w-full rounded-lg text-black lg:max-w-[520px] lg:px-4">
          <HeadingTextLg title="What our Customers say" />
          <p className="mt-2 font-gilroy-light text-xs font-normal text-black sm:text-sm lg:text-lg">
            Lorem ipsum dolor sit amet consectetur. Integer suspendisse bibendum
            dignissim lectus non tortor venenatis ipsum dictumst.
          </p>
        </div>
        <div className="lg;px-5 mt-5 flex gap-3">
          {/* Arrow left */}
          <svg
            className="cursor-pointer stroke-black hover:fill-black hover:stroke-white"
            onClick={prevSlider}
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="34.5323" cy="34.8795" r="34.0323" stroke="black" />
            <path
              d="M33.6124 40.3999L28.0918 34.8793M28.0918 34.8793L33.6124 29.3586M28.0918 34.8793L40.9733 34.8793"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="rotate-180 cursor-pointer stroke-black hover:fill-black hover:stroke-white"
            onClick={nextSlider}
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="34.5323" cy="34.8795" r="34.0323" stroke="black" />
            <path
              d="M33.6124 40.3999L28.0918 34.8793M28.0918 34.8793L33.6124 29.3586M28.0918 34.8793L40.9733 34.8793"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Slider container */}
      <div className="w-full overflow-hidden px-4 py-10 lg:absolute lg:-right-16 lg:z-50 lg:ml-auto lg:w-7/12">
        <div
          className="flex items-center gap-5 duration-300 ease-linear"
          style={{
            transform: `translateX(-${currentSlider * (isSmallScreen ? 316 + 20 : 400 + 20)}px)`,
          }}
        >
          {reviews.map((review, idx) => (
            <Carousel
              key={idx}
              isBlurred={currentSlider !== idx}
              review={review.review}
              rating={review.rating}
              name={review.name}
              profile={review.profile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;

const reviews = [
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
