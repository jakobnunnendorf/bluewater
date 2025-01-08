import React from "react";

function InfoTag() {
  return (
    <div className="z-0 mx-auto my-1 flex w-2/3 justify-center rounded-full pt-1 text-center font-sans text-[0.6rem] text-slate-600/40 md:absolute md:mt-2 md:w-52 md:bg-white/40 md:py-1 md:text-black">
      <div className="relative flex w-fit items-center gap-1 px-0 md:px-1">
        <span className="grid h-3 w-3 place-content-center rounded-full border border-slate-600/40 p-2 md:border-black">
          i
        </span>
        <h6>
          We are building our portfolio so <br />
          the first 3 websites are 100% free
        </h6>
      </div>
    </div>
  );
}

export default InfoTag;
