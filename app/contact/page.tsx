import ContactUsSection from "@/components/Layout/ContactUs/ContactUsSection";
import VisitShowroom from "@/components/Layout/ContactUs/VisitShowroom";
import SeconderyHeroWithNav from "@/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <SeconderyHeroWithNav
        bgImgSrc="/images/other-page-hero.png"
        title="Contact Us"
        desc="Whether you're looking to start a new project or simply want to learn more about our services, we would love to hear from you. Our team is dedicated to providing exceptional service and is ready to assist you with any inquiries you may have."
      />
      <ContactUsSection formTitle="Schedule a Consultation" />
      <VisitShowroom /> {/* TODO remove */}
    </main>
  );
};

export default page;
