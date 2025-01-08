import HesitateCard from "@/components/Home/HesitateCard/HesitateCard";
import { InteriorInnovationsData } from "@/components/Portfolio/InteriorInnovationsData";
import { LuxuryYachtsData } from "@/components/Portfolio/LuxuryYachtsData";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import SeconderyHeroWithNav from "@/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <SeconderyHeroWithNav
        isShowTextBg={true}
        bgImgSrc="/images/other-page-hero.png"
        title="Portfolio"
        desc="Our portfolio is a testament to our dedication to creating luxurious, bespoke interiors that are as functional as they are beautiful. Each project is a unique collaboration between our clients' visions and our design expertise, resulting in spaces that are truly one-of-a-kind."
      />
      <PortfolioSection
        title="Luxury Yachts"
        text="Explore our collection of luxury yacht interiors, where every detail has been meticulously crafted to provide an unparalleled experience at sea. From elegant salons to state-of-the-art galleys, our designs reflect the highest standards of comfort, style, and functionality."
        data={LuxuryYachtsData}
      />
      <PortfolioSection
        title="Interior Innovations"
        text="Our work extends beyond traditional yacht interiors. We pride ourselves on pushing the boundaries of design to create spaces that are not only luxurious but also innovative and forward-thinking."
        data={InteriorInnovationsData}
      />
      <HesitateCard />
    </main>
  );
};

export default page;
