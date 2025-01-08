"use client";

import React, { useState } from "react";
import Carousel from "@/app/components/HomePageComponents/CustomerReviews/Carousel";

function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      visibleReviews.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visibleReviews;
  };

  return (
    <div className="relative w-full py-24">
      <h2 className="font-fat bg-gradient-to-r from-orange-200 via-orange-400 to-orange-600 bg-clip-text pb-4 pt-16 text-center text-6xl font-bold text-transparent">
        What our Customers say
      </h2>
      <h3 className="font-fat pb-16 text-center text-4xl font-bold opacity-65">
        (Currently still fictional)
      </h3>
      <div className="relative flex items-center justify-center overflow-hidden md:mx-auto md:w-1/2">
        <button
          className="absolute left-0 z-10 rounded-full bg-gray-800 p-2 text-white"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        {/* <Carousel review={getVisibleReviews()} /> */}
        <button
          className="absolute right-0 z-10 rounded-full bg-gray-800 p-2 text-white"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default CustomerReviews;

const reviews = [
  {
    name: "Sophie Lance",
    rating: 5,
    review: `As a yacht interior designer, I understand the importance of aesthetics, functionality, 
          and seamless luxury in my work. When it came to revamping my website, I knew I needed a partner 
          who could encapsulate these elements in a digital space.`,
  },
  {
    name: "James Harrington",
    rating: 4,
    review: `As a luxury yacht interior designer, the details of elegance and sophistication are crucial in my work. 
    When it came to creating a new website, I sought a partner who could translate these qualities into a digital format, 
    and I found exactly that with BlueWater Interiors.`,
  },
  {
    name: "Laura Bennett",
    rating: 5,
    review: `In my career as a yacht interior designer, presenting my work online with the same level of luxury 
    and precision I offer my clients is essential. BlueWater Interiors exceeded my expectations, 
    delivering a website that perfectly showcases the beauty and functionality of my designs.`,
  },
  {
    name: "Evelyn Carter",
    rating: 4,
    review: `The team at BlueWater Interiors has an exceptional eye for detail. Their design for my online portfolio 
    was both stunning and user-friendly. I highly recommend their services to anyone looking to enhance their digital presence.`,
  },
  {
    name: "Marcus Thompson",
    rating: 5,
    review: `Working with BlueWater Interiors was a fantastic experience. They understood my vision and transformed it 
    into a sleek and modern website. The project was completed on time, and their support was excellent throughout.`,
  },
  {
    name: "Olivia Martinez",
    rating: 3,
    review: `BlueWater Interiors delivered a good design but missed a few key features we discussed initially. 
    However, their customer service was top-notch, and they were quick to address the issues.`,
  },
  {
    name: "Nathan Brown",
    rating: 5,
    review: `I am extremely pleased with the outcome of my website. BlueWater Interiors not only met but exceeded my expectations. 
    The design is elegant, and the functionality is flawless. Worth every penny!`,
  },
  {
    name: "Isabella Wilson",
    rating: 4,
    review: `The professionalism and creativity of BlueWater Interiors made a significant difference in the way my brand 
    is presented online. They delivered a beautiful and responsive website that captures the essence of my business perfectly.`,
  },
  {
    name: "Daniel Kim",
    rating: 5,
    review: `From concept to completion, BlueWater Interiors handled every aspect of the project with expertise. 
    Their attention to detail and commitment to quality are truly impressive. Highly recommended for anyone looking for a high-quality web design.`,
  },
  {
    name: "Chloe Davis",
    rating: 4,
    review: `The design team at BlueWater Interiors was great to work with. They took the time to understand my needs and 
    provided a website that is both functional and aesthetically pleasing. A few minor revisions were needed, but overall, I’m satisfied.`,
  },
  {
    name: "Liam Anderson",
    rating: 5,
    review: `I can't speak highly enough about BlueWater Interiors. Their team delivered a top-notch website that aligns 
    perfectly with my business goals. The entire process was smooth, and the end result speaks for itself.`,
  },
  {
    name: "Ava Scott",
    rating: 3,
    review: `The final product was decent, but there were some delays in the project timeline. BlueWater Interiors eventually 
    delivered a satisfactory result, but communication could have been better.`,
  },
];
