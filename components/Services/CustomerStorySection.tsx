import HeadingTextLg from "../UI/HeadingTextLg";
import CustomerStoryCarousel from "./CustomerStoryCarousel";

type Props = {};
// TODO insert real text
const CustomerStorySection: React.FC<Props> = ({}) => {
  return (
    <section className="mt-[123px]">
      <header className="mx-auto max-w-[1030px] space-y-2 text-center">
        <HeadingTextLg title="Customer Stories" />
        <p className="text-[#6A6A6A font-gilroy-regular text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur. Risus fermentum condimentum
          sem risus arcu morbi. Consequat eget diam venenatis tristique ac
          libero congue vel maecenas.
        </p>
      </header>
      <CustomerStoryCarousel />
    </section>
  );
};

export default CustomerStorySection;
