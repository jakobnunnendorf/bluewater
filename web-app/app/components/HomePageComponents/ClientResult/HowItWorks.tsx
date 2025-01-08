import React from "react";
import Image from "next/image";

function HowItWorks() {
  return (
    <div className="mx-auto flex flex-col gap-8 px-6 md:w-1/2 md:px-0">
      <h2 className="pb-4 text-center text-4xl font-bold">
        How can we achieve this?
      </h2>
      <figure className="mx-auto flex flex-col items-center">
        <Image src="/avatar.png" alt="Avatar Icon" height={100} width={100} />
        <figcaption className="text-center text-2xl">
          One type of customer
        </figcaption>
      </figure>
      <figure className="mx-auto flex flex-col items-center">
        <Image
          src="/reinventing-wheel.gif"
          alt="Avatar Icon"
          height={140}
          width={140}
        />
        <figcaption className="text-2xl">Not reinventing the wheel</figcaption>
      </figure>
      <figure className="mx-auto flex flex-col items-center">
        <Image
          src="/improvement.jpg"
          alt="Avatar Icon"
          height={100}
          width={100}
        />
        <figcaption className="text-2xl">Only improvement</figcaption>
      </figure>
    </div>
  );
}

export default HowItWorks;
