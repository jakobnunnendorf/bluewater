import HesitateCard from "@/components/Home/HesitateCard/HesitateCard";
import ContactUsSection from "@/components/Layout/ContactUs/ContactUsSection";
import AchieveSection from "@/components/Services/AchieveSection";
import CoreServicesSection from "@/components/Services/CoreServicesSection";
import CustomerStorySection from "@/components/Services/CustomerStorySection";
import SeconderyHeroWithNav from "@/components/Shared/SeconderyHeroWithNav";

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
      <ContactUsSection />
    </main>
  );
};

export default page;
