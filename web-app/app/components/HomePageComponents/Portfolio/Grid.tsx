import React from "react";
import Card from "@/app/components/HomePageComponents/Portfolio/Card";
import Link from "next/link";

function Grid() {
  return (
    <div className="grid h-fit w-fit grid-rows-3 gap-8 px-6 py-12 md:grid-cols-2 md:grid-rows-none md:px-40">
      {articles.map((article, index) => (
        <Article
          key={index}
          src={article.src}
          alt={article.alt}
          title={article.title}
          description={article.description}
          link={article.link}
        />
      ))}
    </div>
  );
}

export default Grid;

const articles = [
  {
    src: "/portfolio/pf2.png",
    alt: "Second version of the Nautical Elegance website",
    title: "Nautical Elegance",
    description: `Let us introduce you to Nautical Elegance, a fictional yacht interior
        design studio that we made up to showcase a few example website
        designs. It is led by the internationally renown fictional chief
        designer Sophie Lance.`,
    link: "https://nautical-elegance-v1.vercel.app/",
  },
  {
    src: "/portfolio/pf1.png",
    alt: "Website of the Lürssen Solandge luxury yacht",
    title: "Lürssen Solandge",
    description: `With us, all of your clients can get a branded website for their yacht
      with a booking/availability calendar. And the best part? Completely
      free of charge. The Lürssen Solandge project was particularly exciting as
      it allowed us to incorporate luxury design elements that highlight the 
      elegance and sophistication of the yacht.`,
    link: "https://landing-page-delta-brown-52.vercel.app/",
  },
  {
    src: "/portfolio/pf3.png",
    alt: "Nautical Elegance website",
    title: "Nautical Elegance v2",
    description: `This is the second version of Nautical Elegance, an upgraded and more refined
      design to better represent the prestigious yacht interior design studio. The project involved
      a complete overhaul of the user interface to enhance usability and aesthetic appeal.
      `,
    link: "https://nautical-elegance-v2.vercel.app/",
  },
];

function Article({
  src,
  alt,
  title,
  description,
  link,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <article className="h-full rounded-xl bg-gray-200 p-4 shadow-2xl">
      <Link href={link}>
        <Card src={src} alt={alt} />
      </Link>
      <h3 className="p-4 pb-2 text-center text-2xl font-bold">{title}</h3>
      <p className="pb-4">{description}</p>
    </article>
  );
}
