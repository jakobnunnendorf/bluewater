import { CarouselContainer } from "@/components/About/CarouselContainer";
import { CarouselData } from "@/components/About/CarouselData";
import { ClientCentricData } from "@/components/About/ClientCentricData";
import CollaborativeSection from "@/components/About/CollaborativeSection";
import DoubleImgWithText from "@/components/About/DoubleImgWithText";
import { ExceptionalResultData } from "@/components/About/ExceptionalResultData";
import ExpertiseSection from "@/components/About/ExpertiseSection";
import StatementContainer from "@/components/About/StatementContainer";
import WhatOurClientSay from "@/components/About/WhatOurClientSay";
import ContactUsSection from "@/components/Layout/ContactUs/ContactUsSection";
import SeconderyHeroWithNav from "@/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <SeconderyHeroWithNav
        bgImgSrc="/images/about-us/about-hero.png"
        title="ABOUT US"
        desc="At BlueWater Interiors, we believe that yacht interior design represents the pinnacle of luxury—where dreams, born long ago, of freedom, excellence, and feeling at home across the seven seas finally converge. We see your online presence as a testament to elegance, beauty, and, most importantly, a canvas where your customer's vision springs to life."
      />
      {/* TODO rewrite copy */}
      <StatementContainer
        imgSrc="/images/get-covered/get-covered.png"
        title="Mission StatemenT"
        desc={[
          "Our mission is to be the vessel that carries your design philosophy across digital waters, transforming your clients' visions into stunning digital experiences. We are dedicated to ensuring that every element of your design is beautifully reflected on screen, capturing the essence of luxury and sophistication in every pixel.",
        ]}
      />
      <StatementContainer
        imgSrc="/images/about-us/portrait.png"
        flexDir="items-end lg:flex-row-reverse"
        title="Founder Story"
        desc={[
          "My passion for the sea was ignited during a family vacation aboard a sailing yacht when I was 13 years old. The craftsmanship and the feeling of 'home' at sea left a lasting impression that inspired me to employ my experience in design and technology to work on something I love. Throughout my liberal arts and STEM education in the humanities, physics and computer science I was fascinated by the intersection between logic, story telling and art.",
          "In 2020 I learned web development and got my first fiew clients by walking into their store and pitching my services. After years of working with diverse clients, a collaboration with a yacht designer revealed the passion of doing web design for yachts. This realization inspired me to focus exclusively on translating the luxury and sophistication of yacht design into digital experiences. Driven by this vision, I founded BlueWater Interiors, with the mission to ensure yacht designers' philosophies are reflected in every pixel, bridging the gap between exquisite design and digital innovation.",
        ]}
      />
      <ExpertiseSection />
      <CarouselContainer
        slideData={CarouselData}
        title="Core Expertise"
        description="Our team excels in translating the refined and often intricate design
          philosophies of yacht interiors into a digital format. We understand
          that in the world of luxury yachts, every detail matters—from the
          choice of materials to the flow of space—and we bring that same
          meticulous attention to detail to every website we create"
      />
      <CarouselContainer
        slideData={CarouselData}
        title="Specialization in Yacht Interiors"
        description="Our specialization in yacht interiors is what sets BlueWater Interiors apart. We understand that the yacht interior design industry is unique, with its own set of challenges and expectations. The designs you create are more than just interiors—they are expressions of art, luxury, and personal style, meant to enhance the experience of life at sea"
      />
      <DoubleImgWithText
        title="Client-Centric Approach"
        info="At BlueWater Interiors, our client-centric approach is the cornerstone of everything we do. We understand that your work is not just a profession but a passion, and we are dedicated to ensuring that your digital presence reflects the true essence of your design philosophy. Our goal is to build a partnership where your vision drives the process, resulting in a website that perfectly encapsulates your brand and engages your clients."
        data={ClientCentricData}
        flexDir=""
        img="/images/about-us/client-centric.png"
      />
      <CollaborativeSection />
      <DoubleImgWithText
        title="Delivering Exceptional Results"
        info="Our client-centric approach is focused on delivering results that exceed your expectations"
        data={ExceptionalResultData}
        flexDir="flex-row-reverse max-lg:flex-col-reverse"
        img="/images/about-us/client-centric.png"
      />
      <WhatOurClientSay />
      <ContactUsSection />
    </main>
  );
};

export default page;
