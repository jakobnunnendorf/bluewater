import React from "react";
import CustomerReviews from "@/app/components/HomePageComponents/CustomerReviews/CustomerReviews";

function CustomerStories() {
  return (
    <div className="pt-32">
      <h2 className="text-center text-4xl font-bold">
        Don&apos;t listen to us, <br /> listen to:
      </h2>
      <div className="relative bottom-28">
        <CustomerReviews />
      </div>
    </div>
  );
}

export default CustomerStories;
