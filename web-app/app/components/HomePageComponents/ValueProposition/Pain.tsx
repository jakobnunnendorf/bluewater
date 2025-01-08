import React from "react";

function Pain() {
  return (
    <div className="border p-8 md:rounded-lg md:bg-gray-200">
      <h3 className="pb-6 text-center text-2xl font-bold">
        Ever felt like projects are passing you by?
      </h3>
      <ul className="flex flex-col gap-8">
        <li>
          <span className="text-xl">👀</span> Does your portfolio get the&nbsp;
          <span className="font-bold">spotlight</span> it deserves?
        </li>
        <li>
          <span className="text-xl">🚫</span> Does your website do{" "}
          <span className="font-bold">your portfolio</span> justice?
        </li>
        <li>
          <span className="text-xl">🧠</span> Did your old web agency truly
          understand your <span className="font-bold">design philosophy?</span>
        </li>
        <li>
          <span className="text-xl">😓</span> You want a better website but
          nobody has&nbsp;
          <span className="font-bold">experience</span> working with a&nbsp;
          <span className="font-bold">yacht interior designer</span>?
        </li>
      </ul>
    </div>
  );
}

export default Pain;
