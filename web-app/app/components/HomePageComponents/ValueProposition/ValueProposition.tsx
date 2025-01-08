"use client";
import Image from "next/image";
import Button from "../../UI/Button";
import TextLeadingIcon from "../../UI/TextLeadingIcon";

function ValueProposition() {
  return (
    <section className="bg-primary-blue/20 pb-24 pt-6">
      <article className="container flex flex-col-reverse items-center justify-between gap-12 xl:flex-row">
        <div className="w-full max-w-[684px]">
          <header className="flex flex-col gap-5">
            <Button
              bgColor="bg-primary-blue text-white w-fit"
              padding="max-md:py-1"
              onClick={() => null}
              name="Tell us more"
            />
            <h2 className="font-gilroy-regular text-3xl font-medium uppercase leading-none text-black min-[477px]:text-5xl sm:text-[56px]">
              <span className="text-primary-blue font-semibold">
                Ever felt like
              </span>{" "}
              projects are passing you by?
            </h2>
          </header>
          <div className="mt-5 flex flex-col gap-3.5">
            {TellUsMorelist.map((item, index) => (
              <TextLeadingIcon key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>
        <div className="">
          <Image
            src="/images/tell-us-more/model.png"
            width={505}
            height={563}
            alt="model"
          />
        </div>
      </article>
    </section>
  );
}

export default ValueProposition;

const TellUsMorelist = [
  {
    icon: "/images/tell-us-more/icon-1.png",
    text: "Does your portfolio get the spotlight it deserves?",
  },
  {
    icon: "/images/tell-us-more/icon-2.png",
    text: "Does your website do your portfolio justice?",
  },
  {
    icon: "/images/tell-us-more/icon-3.png",
    text: "Did your old web agency truly understand your design philosophy?",
  },
  {
    icon: "/images/tell-us-more/icon-4.png",
    text: "You want a better website but nobody has experience working with a yacht interior designer?",
  },
];
