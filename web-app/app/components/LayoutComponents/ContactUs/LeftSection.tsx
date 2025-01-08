import Image from "next/image";
import { BookACallBtn } from "../../HomePageComponents/HesitateCard/HesitateCard";

type Props = {};

const LeftSection = ({ formTitle }: { formTitle?: string }) => {
  return (
    <div className="h-[725px] w-full bg-[url('/images/contact-us.png')] bg-no-repeat px-9 py-7 max-lg:rounded-t-[40px] max-lg:bg-cover max-lg:bg-left-bottom max-sm:rounded-br-[20px] lg:max-w-[502px] lg:bg-contain">
      <article className="mb-12">
        <h2 className="mb-3.5 font-gilroy-bold text-3xl font-medium text-black sm:text-[46px]">
          {formTitle ? "Get In Touch" : "What you’ll get"}
        </h2>

        {formTitle ? (
          <div className="mt-10 flex flex-col gap-6">
            <LeadingIconWithText
              icon="phone-icon.svg"
              text="+1 (555) 123-4567"
            />
            <LeadingIconWithText
              icon="email-icon.svg"
              text="info@yachtdesign.com"
            />
            <LeadingIconWithText
              icon="location-icon.svg"
              text="123 Ocean Drive, Suite 456, Miami, FL 33139"
            />
          </div>
        ) : (
          <ul className="flex list-inside list-disc flex-col gap-5 font-gilroy-medium text-sm font-normal text-black sm:text-lg">
            {BulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </article>
      {!formTitle && <BookACallBtn isBorder={true} />}
    </div>
  );
};

export default LeftSection;

const BulletPoints = [
  "Free Consultation",
  "Free website (win-win portfolio porject)",
  "Video content of the process",
  "Free yacht brand website for your clients",
];

function LeadingIconWithText({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={`/images/contact-us/${icon}`}
        width={20}
        height={20}
        alt="icon"
      />
      <p className="font-gilroy-medium text-lg font-normal text-black">
        {text}
      </p>
    </div>
  );
}
