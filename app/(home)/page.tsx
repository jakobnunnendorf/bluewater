import ClientResult from "@/components/Home/ClientResult/ClientResult";
import Process from "@/components/Home/Process/Process";
import ValueProposition from "@/components/Home/ValueProposition/ValueProposition";
import CaseStudy from "@/components/Home/CaseStudy/CaseStudy";
import PortfolioPreview from "@/components/Home/PortfolioPreview/PortfolioPreview";
import ReviewCarousel from "@/components/Home/CustomerReviews/ReviewCarousel";
import GetCovered from "@/components/Home/GetCovered/GetCovered";
import Offer from "@/components/Home/Offer/Offer";
import Hero from "@/components/Home/Hero/Hero";
import HesitateCard from "@/components/Home/HesitateCard/HesitateCard";
import ContactUsSection from "@/components/Layout/ContactUs/ContactUsSection";
import HeaderBar from "@/components/Home/HeaderBar/HeaderBar";

export default function Home() {
  return (
    <section className="h-fit">
      <HeaderBar />
      <Hero />
      <Process />
      <CaseStudy />
      <ReviewCarousel />
      <ValueProposition />
      <GetCovered />
      <ClientResult />
      <PortfolioPreview />
      <Offer />
      <HesitateCard />
      <ContactUsSection />
    </section>
  );
}
