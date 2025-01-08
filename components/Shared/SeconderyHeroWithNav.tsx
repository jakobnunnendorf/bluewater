import HeaderBar from "../Home/HeaderBar/HeaderBar";
import TextWithBg from "../UI/TextWithBg";

type Props = {
  isShowTextBg?: boolean;
  title: string;
  desc: string;
  bgImgSrc: string;
};

const SeconderyHeroWithNav: React.FC<Props> = ({
  isShowTextBg = false,
  title,
  desc,
  bgImgSrc,
}) => {
  return (
    <section className="mx-auto max-w-[1440px] px-3 pt-3 md:px-6 md:pt-6">
      <div
        className="h-[515px] w-full rounded-[16px] bg-cover bg-no-repeat px-3 max-lg:bg-center sm:rounded-[20px] md:rounded-[30px] md:px-7 lg:rounded-[40px] lg:px-[73px]"
        style={{ backgroundImage: `url(${bgImgSrc})` }}
      >
        <HeaderBar dark />
        <div className="mx-auto flex h-[calc(100%-110px)] w-full max-w-[844px] flex-col items-center justify-center">
          {isShowTextBg && (
            <TextWithBg title="A Showcase of Mastery and Elegance" />
          )}
          <h2 className="mt-8 font-gilroy-medium text-xl font-semibold uppercase leading-loose text-white sm:text-3xl md:text-4xl lg:text-[65px]">
            {title}
          </h2>
          <p className="mt-2 text-center font-gilroy-medium text-sm text-white md:text-base lg:text-lg">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeconderyHeroWithNav;
