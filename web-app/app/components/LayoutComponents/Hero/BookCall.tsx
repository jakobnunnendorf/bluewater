import React from "react";
import Link from "next/link";
import InfoTag from "@/app/components/LayoutComponents/Hero/InfoTag";

function BookCall({ color }: { color?: string }) {
  return (
    <div className="relative flex flex-col py-8 md:block md:w-52">
      <div className="relative z-10 flex h-full items-center justify-center transition-all hover:scale-110">
        <Link href="https://calendly.com/jakobnunnendorf/call">
          <div
            className={`group mx-auto h-fit w-fit rounded-full border ${color ? ` border-${color} ` : `border-blue-400`} px-4 py-4 shadow-md hover:shadow-lg md:my-auto md:mt-0`}
          >
            <h3
              className={`font-fat leading-3 ${color ? "text-" + color : "text-blue-400"}`}
            >
              Book a call
            </h3>
          </div>
        </Link>
      </div>
      <InfoTag />
    </div>
  );
}

export default BookCall;
