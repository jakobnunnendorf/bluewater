import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

function Footer({ marginTop = "-mt-36 pt-[245px]" }: { marginTop?: string }) {
  return (
    <footer
      className={`relative z-0 bg-black pb-10 text-white ${marginTop ? marginTop : "pt-20"}`}
    >
      <section className="container flex flex-wrap justify-between gap-10 border-b border-white pb-20 *:w-full *:max-w-[282px]">
        <div className="flex flex-col gap-4 font-gilroy-regular text-lg text-white">
          <Link href={"/"}>
            <Image
              src={"/images/logo-golden.png"}
              width={115}
              height={62}
              alt="logo"
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dui id molestie at vel.{" "}
            {/* TODO replace with real text */}
            Massa sagittis semper at augue at leo nullam tellus Adipiscing.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-gilroy-bold text-2xl font-medium">
            Quick Links
          </h3>
          <ul className="space-y-7 font-gilroy-regular text-lg">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-gilroy-bold text-2xl font-medium">
            Contact Us
          </h3>
          <ul className="space-y-7 font-gilroy-regular text-lg">
            <li>
              <Link
                href="/services"
                className="flex items-center gap-2.5 hover:underline"
              >
                <svg
                  width="21"
                  height="17"
                  viewBox="0 0 21 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3887 2.5752C20.3887 1.4752 19.4887 0.575195 18.3887 0.575195H2.38867C1.28867 0.575195 0.388672 1.4752 0.388672 2.5752V14.5752C0.388672 15.6752 1.28867 16.5752 2.38867 16.5752H18.3887C19.4887 16.5752 20.3887 15.6752 20.3887 14.5752V2.5752ZM18.3887 2.5752L10.3887 7.5752L2.38867 2.5752H18.3887ZM18.3887 14.5752H2.38867V4.5752L10.3887 9.5752L18.3887 4.5752V14.5752Z"
                    fill="#F17121"
                  />
                </svg>
                jakob@bluewater-studios.de
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="flex items-center gap-2.5 hover:underline"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.00867 8.3652C5.44867 11.1952 7.76867 13.5052 10.5987 14.9552L12.7987 12.7552C13.0687 12.4852 13.4687 12.3952 13.8187 12.5152C14.9387 12.8852 16.1487 13.0852 17.3887 13.0852C17.9387 13.0852 18.3887 13.5352 18.3887 14.0852V17.5752C18.3887 18.1252 17.9387 18.5752 17.3887 18.5752C7.99867 18.5752 0.388672 10.9652 0.388672 1.5752C0.388672 1.0252 0.838672 0.575195 1.38867 0.575195H4.88867C5.43867 0.575195 5.88867 1.0252 5.88867 1.5752C5.88867 2.8252 6.08867 4.0252 6.45867 5.1452C6.56867 5.4952 6.48867 5.8852 6.20867 6.1652L4.00867 8.3652Z"
                    fill="#F17121"
                  />
                </svg>
                +65 842 505 80
              </Link>
            </li>
          </ul>
        </div>
        <SocialIcons />
      </section>

      <div className="pt-9 text-center font-gilroy-regular text-lg text-white">
        &copy; {new Date().getFullYear()} BlueWater Interiors Agency. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
