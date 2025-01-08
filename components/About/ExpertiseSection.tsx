import Image from "next/image";

function ExpertiseSection() {
  return (
    <section className="my-16 flex items-center bg-primary-blue/30 max-lg:px-2 max-lg:py-10 lg:h-[569px] lg:pr-2">
      <article
        className={`flex flex-col-reverse items-center gap-12 max-lg:justify-center max-lg:text-center lg:flex-row`}
      >
        <div className="lg:self-start">
          <Image
            className="max-lg:rounded-[40px]"
            src="/images/expertise-bg.png"
            width={677}
            height={596}
            alt="model"
          />
        </div>
        <div className="w-full self-center lg:max-w-[684px]">
          <header className="flex flex-col gap-2.5">
            <h2 className="font-gilroy-regular text-3xl font-medium uppercase leading-none text-black min-[477px]:text-5xl sm:text-[56px]">
              Expertise and SpecializatioN{" "}
            </h2>
            <p className="font-gilroy-regular text-xs font-normal text-black sm:text-sm md:text-lg">
              At BlueWater Interiors, we don’t just design websites; we craft
              digital experiences that resonate with the luxury and
              sophistication of the yacht interior design industry. Our
              expertise is rooted in a deep understanding of both the aesthetic
              and functional requirements of high-end yacht design, allowing us
              to create websites that are as elegant and bespoke as the spaces
              they represent.{" "}
            </p>
          </header>
        </div>
      </article>
    </section>
  );
}

export default ExpertiseSection;
