import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ContactUsSection = ({ formTitle }: { formTitle?: string }) => {
  return (
    <section
      className={`container relative z-20 ${formTitle ? "-mt-20 px-10 xl:px-12 2xl:px-20" : "mt-20 md:mt-28 lg:mt-[211px]"}`}
    >
      <div className="flex items-center gap-14 rounded-[40px] bg-white p-6 shadow-[0_0_25px_rgba(0,0,0,0.15)] max-lg:flex-col">
        <LeftSection formTitle={formTitle} />
        <RightSection formTitle={formTitle} />
      </div>
    </section>
  );
};

export default ContactUsSection;
