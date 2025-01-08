import CaseStudyVideo from "@/components/Home/CaseStudy/CaseStudyVideo";
import HeadingTextLg from "../../UI/HeadingTextLg";

// TODO: insert real case study

function CaseStudy() {
  return (
    <section className="mt-24 bg-gray-light-2 py-12 lg:mb-52 lg:h-[665px] lg:pt-9">
      <div className="flex w-full flex-col gap-11 max-xl:container xl:mx-auto xl:max-w-[1233px]">
        <header className="!text-left">
          <HeadingTextLg title="A fictional case study" />
          <h4 className="font-gilroy-light text-[30px] font-normal text-black">
            Nautical Elegance
          </h4>
        </header>
        <CaseStudyVideo />
      </div>
    </section>
  );
}

export default CaseStudy;
