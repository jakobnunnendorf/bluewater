import React from "react";
import Image from "next/image";

function Card({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative w-full">
      <Image
        className="rounded-lg"
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={900}
        height={600}
        src={src}
        alt={alt}
      />
    </figure>
  );
}

export default Card;
