import Image from "next/image";
import Link from "next/link";

const dir = "/images/social/";

const socialLinks = [
  {
    src: "fb.svg",
    alt: "Facebook button",
    color: "#1974EF",
    url: "https://www.facebook.com/profile.php?id=100070153217563",
  },
  {
    src: "insta.svg",
    alt: "Instagram button",
    color: "#000",
    url: "https://www.instagram.com/jakobnunnendorf",
  },
  {
    src: "linkedin.svg",
    alt: "LinkedIn button",
    color: "#0A66C2",
    url: "https://www.linkedin.com/in/jakobnunnendorf",
  },
  {
    src: "whatsapp.svg",
    alt: "WhatsApp button",
    color: "#4AC859",
    url: "https://wa.me/6584250580",
  },
  // {
  //   src: "X.png",
  //   alt: "Twitter button",
  //   color: "#fff",
  //   url: "https://x.com/jakobnunnendorf",
  // },
  {
    src: "youtube.svg",
    alt: "YouTube button",
    color: "#FE0000",
    url: "https://www.youtube.com/channel/UC_0A1bflBqq7thCJs8kjWHg",
  },
];

const SocialIcons = () => (
  <div>
    <h3 className="mb-4 font-gilroy-bold text-2xl font-medium">Follow Us On</h3>
    <ul className="flex items-center gap-2 font-gilroy-regular text-lg">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.url} passHref>
            <Image src={dir + link.src} height={41} width={41} alt={link.alt} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialIcons;
