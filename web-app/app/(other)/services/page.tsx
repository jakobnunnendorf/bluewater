import HesitateCard from "@/app/components/HomePageComponents/HesitateCard/HesitateCard";
import AchieveSection from "@/app/components/ServicesPage/AchieveSection";
import CoreServicesSection from "@/app/components/ServicesPage/CoreServicesSection";
import CustomerStorySection from "@/app/components/ServicesPage/CustomerStorySection";
import SeconderyHeroWithNav from "@/app/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <SeconderyHeroWithNav
        bgImgSrc="/images/other-page-hero.png"
        title="Services"
        desc="At BlueWater Interiors, we offer a suite of specialized services designed to elevate your digital presence and showcase your yacht interior designs with unparalleled elegance and sophistication."
      />
      <CoreServicesSection />
      <AchieveSection />
      <CustomerStorySection />
      <HesitateCard />
    </main>
  );
};

export default page;
