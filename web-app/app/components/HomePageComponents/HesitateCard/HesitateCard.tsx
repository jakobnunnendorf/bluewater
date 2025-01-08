import Link from "next/link";
import HeadingTextLg from "../../UI/HeadingTextLg";
import Image from "next/image";

type Props = {};

const HesitateCard = (props: Props) => {
  return (
    <section className="container mt-28 md:mt-[183px]">
      <div className="flex items-center justify-between gap-5 rounded-[40px] bg-primary-orange pt-10 max-lg:flex-col lg:h-[275px] lg:pt-0">
        <div className="max-w-[413px] max-sm:mx-2 lg:ml-[67px] lg:min-w-[413px]">
          <header className="mb-6 !text-white">
            <HeadingTextLg title="Don't hesitate" />
            <p className="font-gilroy-regular text-lg">
              Take your online presence to the next level
            </p>
          </header>
          <BookACallBtn />
        </div>
        <div className="self-end">
          <img src="/images/ship.png" className="h-auto w-full" alt="ship" />
        </div>
      </div>
    </section>
  );
};

export default HesitateCard;

export function BookACallBtn({ isBorder = false }) {
  return (
    <Link
      className={`rounded-full px-7 py-4 ${isBorder ? "border border-black text-black" : "bg-black text-white"}`}
      href="https://calendly.com/jakobnunnendorf/call"
      target="_blank"
    >
      Book A Call Now
    </Link>
  );
}
