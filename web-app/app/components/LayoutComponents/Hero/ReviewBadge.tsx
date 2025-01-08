import React from "react";
import Image from "next/image";

function ReviewBadge() {
  return (
    <div className="mx-auto w-fit rounded-full bg-gold/60 px-4 py-4 md:mx-0 md:my-20">
      <ul className="flex justify-center gap-1.5">
        <li>
          <Image src="/star.png" alt="star" height={15} width={15} />{" "}
        </li>
        <li>
          <Image src="/star.png" alt="star" height={15} width={15} />{" "}
        </li>
        <li>
          <Image src="/star.png" alt="star" height={15} width={15} />{" "}
        </li>
        <li>
          <Image src="/star.png" alt="star" height={15} width={15} />{" "}
        </li>
        <li>
          <Image src="/star.png" alt="star" height={15} width={15} />{" "}
        </li>
      </ul>
      <p className="pt-2 italic text-gray-600">
        &quot;Your Review will appear here&quot;
      </p>
    </div>
  );
}

export default ReviewBadge;
