import Image from "next/image";
import HeadingTextLg from "../../UI/HeadingTextLg";
import ClientResultCard from "./ClientResultCard";

// TODO: insert real results

function ClientResult() {
  return (
    <>
      <section className="bg-primary-blue/20">
        <div className="mx-auto w-full max-w-[1046px] py-16 text-center max-xl:px-4">
          <HeadingTextLg title="Our average client's results" />
          <div className="mt-14 flex items-center justify-between gap-6 max-[839px]:flex-col">
            <ClientResultCard title="SEO Ranking" percentage="+785%" />
            <svg
              width="2"
              height="192"
              viewBox="0 0 2 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24316 0.978027V191.132"
                stroke="url(#paint0_linear_85_392)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_85_392"
                  x1="1.74316"
                  y1="0.978027"
                  x2="1.74316"
                  y2="191.132"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0" />
                  <stop offset="0.215" />
                  <stop offset="0.78" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <ClientResultCard title="SEO Ranking" percentage="+785%" />{" "}
            <svg
              width="2"
              height="192"
              viewBox="0 0 2 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24316 0.978027V191.132"
                stroke="url(#paint0_linear_85_392)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_85_392"
                  x1="1.74316"
                  y1="0.978027"
                  x2="1.74316"
                  y2="191.132"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0" />
                  <stop offset="0.215" />
                  <stop offset="0.78" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <ClientResultCard title="SEO Ranking" percentage="+785%" />
          </div>
        </div>
      </section>
      <Image
        className="h-auto w-full"
        src="/images/bringing-visions.png"
        width={1440}
        height={815}
        alt="SEO Result"
      />
    </>
  );
}

export default ClientResult;
