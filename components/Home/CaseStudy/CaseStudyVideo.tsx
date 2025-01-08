import React from "react";

function CaseStudyVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      className="w-full rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.15)]"
    >
      <source src="/case study.mp4" type="video/mp4" />
    </video>
  );
}

export default CaseStudyVideo;
