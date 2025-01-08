import React from "react";
import Image from "next/image";

function Argument({ text, src }: { text: string; src: string }) {
  return (
    <div className="flex h-20 w-28 flex-col items-center justify-center gap-2 rounded-xl border shadow-lg">
      <h6 className="text-center">{text}</h6>
      <Image src={src} alt={src} height={30} width={30} />
    </div>
  );
}

function Arguments() {
  const sellingPoints = [
    {
      text: "+ leads",
      src: "/arguments/ringing.svg",
    },
    {
      text: "+ projects",
      src: "/arguments/yacht-icon.png",
    },
    {
      text: "+ trust",
      src: "/arguments/mac-icon.png",
    },
    {
      text: "+ spotlight",
      src: "/arguments/spotlight-icon.png",
    },
  ];
  return (
    <ul className="mx-auto grid w-fit grid-cols-2 gap-4 pt-6 font-bold text-gray-400 md:hidden">
      {sellingPoints.map((sellingPoint, index) => (
        <li key={index}>
          <Argument text={sellingPoint.text} src={sellingPoint.src} />
        </li>
      ))}
    </ul>
  );
}

export default Arguments;
