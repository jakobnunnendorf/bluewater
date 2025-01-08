import Image from "next/image";

type Props = {};

const CustomerStoryCard = (props: Props) => {
  return (
    <div className="flex min-w-[98%] flex-col items-center gap-[60px] rounded-[30px] bg-white p-5 shadow-[0_0_25px_rgba(0,0,0,0.15)] lg:h-[552px] lg:flex-row">
      <article className="lg:w-8/12">
        <h3 className="font-gilroy-medium text-4xl font-normal text-[#262626]">
          Transforming Luxury Spaces
        </h3>
        <div className="space-y-6 font-gilroy-regular text-sm font-normal sm:text-base md:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur. Laoreet quis amet quis
            aenean et. Quis morbi pellentesque ipsum in senectus faucibus.
            Faucibus semper amet sagittis aliquam enim. Mauris sit adipiscing
            nibh turpis sed vestibulum. Sodales euismod lorem viverra montes sit
            vulputatefull amet. Risus nulla pharetra proin mi at.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Laoreet quis amet quis
            aenean et. Quis morbi pellentesque ipsum in senectus faucibus.
            Faucibus semper amet sagittis aliquam enim. Mauris sit adipiscing
            nibh turpis sed vestibulum. Sodales euismod lorem viverra montes sit
            vulputate amet. Risus nulla pharetra proin mi at.
          </p>
        </div>
        <div className="mt-5">
          <h4 className="font-gilroy-bold text-lg leading-none text-primary-orange">
            Client
          </h4>
          <p className="font-gilroy-regular text-sm font-normal sm:text-base md:text-lg">
            The Beaumont Family
          </p>
        </div>
        <div className="mt-">
          <h4 className="font-gilroy-bold text-lg leading-none text-primary-orange">
            Yacht
          </h4>
          <p className="font-gilroy-regular text-sm font-normal sm:text-base md:text-lg">
            65-foot Luxury Cruiser
          </p>
        </div>
        <div className="mt-">
          <h4 className="font-gilroy-bold text-lg leading-none text-primary-orange">
            Design Focus
          </h4>
          <p className="font-gilroy-regular text-sm font-normal sm:text-base md:text-lg">
            Modern Elegance with Functional Spaces
          </p>
        </div>
      </article>
      <div className="lg:w-[37%]">
        <Image
          className="h-auto w-full"
          src="/images/client-story.png"
          alt="Profile"
          width={470}
          height={515}
        />
      </div>
    </div>
  );
};

export default CustomerStoryCard;
