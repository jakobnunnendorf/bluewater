import React from "react";

function Background() {
  return (
    <div className="relative -z-50 h-fit w-full bg-white md:bg-transparent">
      <video autoPlay loop muted className="hidden h-fit w-full md:block">
        <source src="/yacht-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
