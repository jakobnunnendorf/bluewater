import React from "react";
import Image from "next/image";

function Review({
  name,
  rating,
  review,
}: {
  name: string;
  rating: number;
  review: string;
}) {
  const array: null[] = new Array(rating).fill(null);
  return (
    <div className="h-96 w-64 rounded-lg border">
      <h3 className="px-1 py-4 text-center text-xl">{name}</h3>
      <ul className="mx-auto flex w-fit">
        {array.map((star, index) => (
          <li key={index}>
            <Image src="/star.png" alt="star" height={15} width={15} />
          </li>
        ))}
      </ul>
      <p className="px-4 py-8">{review}</p>
    </div>
  );
}

export default Review;
