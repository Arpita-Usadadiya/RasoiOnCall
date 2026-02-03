import React from "react";


const Carousel3 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
        <source src="/bannerVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          What People Think About Us
        </h1>
      </div>

    </div>
  );
};

export default Carousel3;
