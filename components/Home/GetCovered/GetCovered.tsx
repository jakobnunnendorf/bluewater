"use client";
import Image from "next/image";
import TextLeadingIcon from "../../UI/TextLeadingIcon";

function GetCovered() {
  return (
    <section className="py-24">
      <article className="container flex flex-col-reverse items-center justify-between gap-12 xl:flex-row">
        <div className="w-full max-w-[684px]">
          <header className="flex flex-col gap-2.5">
            <h2 className="font-gilroy-regular text-3xl font-medium uppercase leading-none text-black min-[477px]:text-5xl sm:text-[56px]">
              <span className="text-primary-blue font-semibold">Let&apos;s get</span>{" "}
              you covered
            </h2>
            <p className="font-gilroy-regular text-lg font-semibold text-primary-orange sm:text-lg md:text-xl lg:text-2xl">
              Let&apos;s send your traffic cruising.
            </p>
          </header>
          <div className="mt-5 flex flex-col gap-3.5">
            {GetCoveredList.map((item, index) => (
              <TextLeadingIcon key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
        <div className="">
          <Image
            src="/images/get-covered/get-covered.png"
            width={505}
            height={563}
            alt="model"
          />
        </div>
      </article>
    </section>
  );
}

export default GetCovered;

const GetCoveredList = [
  {
    icon: "/images/get-covered/icon-1.png",
    text: "Let's send your traffic cruising.",
  },
  {
    icon: "/images/get-covered/icon-2.png",
    text: "Keep your customers STUNNED through every click to your portfolio",
  },
  {
    icon: "/images/get-covered/icon-3.png",
    text: "We aim to be a seamless extension of your design philosophy.",
  },
  {
    icon: "/images/get-covered/icon-1.png",
    text: "All our customers are yacht interior designers, just like you - experience shows.",
  },
];
