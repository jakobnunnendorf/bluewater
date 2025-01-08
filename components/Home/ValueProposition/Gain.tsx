import React from "react";

function Gain() {
  return (
    <div className="border p-8 md:rounded-lg md:bg-gray-200">
      <h3 className="pb-2 text-center text-2xl font-bold">
        Let&apos;s get you covered
      </h3>
      <h3 className="text-center text-lg opacity-50">
        or we return every penny
      </h3>
      <div className="mb-6 mt-2 flex items-center rounded-full border border-orange-400 px-2 text-[0.6rem] text-orange-400 opacity-60 md:mx-auto md:w-2/3 md:opacity-100">
        <p className="m-1 text-sm">ⓘ</p>
        <p>
          <span className="font-bold">Note:</span> Since we are new, some claims
          we cannot back with data yet - our services remain free of charge
          until we can.
        </p>
      </div>
      <ul className="flex flex-col gap-8">
        <li>
          <p>📈 Let&apos;s send your traffic cruising. </p>
        </li>
        <li className="flex items-center">
          <p>✨&nbsp;</p>
          <p>
            Keep your customers STUNNED through every click to your portfolio
          </p>
        </li>
        <li className="flex items-center">
          <p>🎯&nbsp;</p>
          <p>We aim to be a seamless extension of your design philosophy.</p>
        </li>
        <li className="flex items-center">
          <p>🥇&nbsp;</p>
          <p>
            All our customers are yacht interior designers, just like you -
            experience shows.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Gain;
