import TextWithBg from "@/components/UI/TextWithBg";
import Image from "next/image";
function Hero() {
  return (
    <div className="flex flex-col gap-3.5 py-16">
      <article className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3.5">
          <TextWithBg title="Boutique Web Design" />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-center font-gilroy-medium text-4xl font-normal leading-none text-black min-[477px]:text-5xl sm:text-[65px]">
              Bringing <span className="text-indigo-700">Yachting</span> <br />{" "}
              To Life On Screen{" "}
            </h2>
            <p className="font-gilroy-regular text-xs font-normal leading-none text-gray-light min-[477px]:text-base sm:text-lg">
              Bespoke Digital Experiences That Reflect The Luxury Of Your Fleet.
            </p>
          </div>
        </div>
      </article>
      <Image
        src="/images/hero-bg.png"
        className="h-fit w-full"
        alt="portfolio"
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default Hero;
