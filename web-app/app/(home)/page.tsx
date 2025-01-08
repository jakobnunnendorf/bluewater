import ClientResult from "@/app/components/HomePageComponents/ClientResult/ClientResult";
import ProcessSection from "@/app/components/HomePageComponents/Process/ProcessSection";
import ValueProposition from "@/app/components/HomePageComponents/ValueProposition/ValueProposition";
import CaseStudy from "../components/HomePageComponents/CaseStudy/CaseStudy";
import ClientSitesSection from "../components/HomePageComponents/ClientSites/ClientSitesSection";
import CarouselTwo from "../components/HomePageComponents/CustomerReviews/Carousel2";
import GetCovered from "../components/HomePageComponents/GetCovered/GetCovered";
import OfferSection from "../components/HomePageComponents/OfferSection/OfferSection";
import Portfolio from "../components/HomePageComponents/Portfolio/Portfolio";
import HesitateCard from "../components/HomePageComponents/HesitateCard/HesitateCard";
import ContactUsSection from "../components/LayoutComponents/ContactUs/ContactUsSection";

export default function Home() {
  return (
    <section className="h-fit">
      <Portfolio />
      <ProcessSection />
      <CaseStudy />
      <CarouselTwo />
      <ValueProposition />
      <GetCovered />
      <ClientResult />
      <ClientSitesSection />
      <OfferSection />
      <HesitateCard />
      <ContactUsSection />
    </section>
  );
}
