import React, { useState } from "react";
import websiteBanner from "../../assets/websiteBanner.png";

const Carousel3 = () => {
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
          <h1 className="text-2xl md:text-4xl font-bold leading-tight ">
            Hire the Best Chef for Party<br />
            <span className="text-orange-500">In Delhi-NCR, Bangalore &<br /> Mumbai</span>
          </h1>

          <p className="text-sm md:text-xl text-white pt-5 pb-5">Experience the taste from around the world without leaving the coziness of home.</p>

          <button className="mt-10 bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-md text-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>

    </section>
  );
};

export default Carousel3;