import React, { useState } from "react";
import websiteBanner from "../../assets/websiteBanner.png";

const Carousel2 = () => {
  const slides = [
    {
      bgImage: websiteBanner,
    },
  ];

  const [currentSlide] = useState(0);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      
      
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-right"
        style={{
          backgroundImage: `url(${slides[currentSlide].bgImage})`,
        }}
      />

     
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-16">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Trusted By 10K+ <br />
            Households <br />
            <span className="text-orange-500">To Hire a Cook</span>
          </h1>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-md text-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>

    </section>
  );
};

export default Carousel2;