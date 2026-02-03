import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import websiteBanner from "../../assets/websiteBanner.png";

const Carousel2 = () => {
  const slides = [
    {
      bgImage: websiteBanner,
    },
  ];
  const navigate = useNavigate();

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

          <button
              onClick={() => navigate("/booking")}
              className="bg-white text-orange-500 font-bold px-6 py-3 mt-10 rounded-lg border-2 border-orange-400 hover:bg-orange-50 transition"
          >
              Get Started
          </button>
        </div>
      </div>

    </section>
  );
};

export default Carousel2;