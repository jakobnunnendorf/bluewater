import Image from "next/image";
import Link from "next/link";
import React from "react";

function Laurel({
  side,
  className,
}: {
  side: "left" | "right";
  className?: string;
}) {
  const imageSrc = `/hero/laurel-leaves-${side === "left" ? "left" : "right"}.png`;
  return (
    <Image
      className={"absolute " + className}
      src={imageSrc}
      height={50}
      width={50}
      alt="Laurel Leave Image"
    />
  );
}
function ClaimNow() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full font-bold text-red-800">
      7 left
    </div>
  );
}

export default function ZeroRisk() {
  return (
    <Link href="/#how-zero-risk-works">
      <div className="bounce-animation absolute bottom-24 left-24 flex w-64 rounded-full bg-indigo-700 p-4 shadow-2xl">
        <Laurel
          side="left"
          className="left-0 top-0 -translate-x-2 -translate-y-2"
        />
        <div className="w-full text-center text-xl text-slate-50/80">
          <p className="font-bold">
            <span className="text-slate-50 underline underline-offset-2">
              Zero-Risk
            </span>
            &nbsp;Guarantee
          </p>
          <p className="text-xs">Only pay if you like the design</p>
        </div>
        {/* <ClaimNow /> */}
        <Laurel
          side="right"
          className="right-0 top-0 -translate-y-2 translate-x-2"
        />
      </div>
    </Link>
  );
}
