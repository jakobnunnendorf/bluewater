import HeadingTextLg from "../UI/HeadingTextLg";
import CoreServicesCard from "./CoreServicesCard";

type Props = {};

const CoreServicesSection = (props: Props) => {
  return (
    <section className="container mt-20 flex flex-col items-center gap-12 sm:mt-24 md:mt-28 lg:mt-[141px]">
      <header>
        <HeadingTextLg title="Core services" />
      </header>
      <div className="grid gap-5 lg:grid-cols-2">
        {CoreServicesData.map((data, index) => (
          <CoreServicesCard
            key={index}
            title={data.title}
            desc={data.desc}
            listTitle={data.listTitle}
            listItems={data.listItems}
            gridColsStyle={index === 4 ? "lg:col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreServicesSection;

const CoreServicesData = [
  {
    title: "Custom Website Design and Development",
    desc: "Our custom website design and development services are crafted to reflect the unique aesthetics of your yacht interior designs. From initial concept to final launch, we create websites that are not only visually stunning but also functionally flawless.",
    listTitle: "Features",
    listItems: [
      "Bespoke design tailored to your brand and vision",
      "High-quality, responsive design for seamless viewing on all devices",
      "Advanced functionality to showcase your portfolio and attract high-end clients",
    ],
  },
  {
    title: "Luxury Branding and Visual Identity",
    desc: "We specialize in luxury branding and visual identity, ensuring that your digital presence reflects the sophistication and exclusivity of your designs. From logo design to color palettes and typography, we create a cohesive brand identity that sets you apart in the luxury market.",
    listTitle: "Features",
    listItems: [
      "Brand strategy and development",
      "Custom logo and visual identity design",
      "Comprehensive brand guidelines",
    ],
  },
  {
    title: "Interactive Portfolio and Virtual Tours",
    desc: "Our interactive portfolio and virtual tour solutions provide an immersive way for potential clients to explore your yacht interiors. We use advanced technology to create engaging experiences that highlight the details and craftsmanship of your designs.",
    listTitle: "Features",
    listItems: [
      "Interactive galleries and image sliders",
      "360-degree virtual tours of yacht interiors",
      "Detailed project pages with high-resolution imagery",
    ],
  },
  {
    title: "Search Engine Optimization (SEO) for Luxury Markets",
    desc: "Our SEO services are designed to enhance your online visibility and attract high-end clients. We implement targeted strategies that align with the luxury market, ensuring your website ranks well for relevant searches.",
    listTitle: "Features",
    listItems: [
      "Keyword research and optimization",
      "On-page SEO and technical SEO",
      "Regular performance tracking and reporting",
    ],
  },
  {
    title: "Ongoing Maintenance and Support",
    desc: "We offer comprehensive ongoing maintenance and support to ensure that your website remains in peak condition. Our services include regular updates, security monitoring, and technical support to keep your site running smoothly.",
    listTitle: "Features",
    listItems: [
      "Regular updates and security patches",
      "Technical support and troubleshooting",
      "Performance monitoring and optimization",
    ],
  },
];
