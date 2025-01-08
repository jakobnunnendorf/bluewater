import React from "react";
import Image from "next/image";
import Grid from "@/app/components/HomePageComponents/Portfolio/Grid";

function NotConvinced() {
  return (
    <div>
      <h2 className="text-center text-4xl">Not Convinced?</h2>
      <h3 className="text-center text-xl">Your success is our success</h3>
      <h4 className="pb-6 text-center text-xl">
        We want your portfolio to shine just like:
      </h4>
      <Grid />
    </div>
  );
}

export default NotConvinced;
