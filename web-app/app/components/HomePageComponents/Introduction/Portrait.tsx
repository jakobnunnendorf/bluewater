import React from "react";
import Image from "next/image";

function Portrait() {
  return (
    <figure className="w-full px-4">
      <Image
        src="/portrait.jpg"
        height={400}
        width={400}
        alt="test"
        className="mx-auto rounded-lg"
      />
      <figcaption className="p-4 text-center font-bold">
        Dubai International Boat Show, 2024
      </figcaption>
    </figure>
  );
}

export default Portrait;
