import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import fgallery1 from "../../assets/Party/fgallery1.jpg";
import fgallery2 from "../../assets/Party/fgallery2.jpg";
import fgallery3 from "../../assets/Party/fgallery3.jpg";

const cuisines = ["Indian", "Chinese", "Mexican", "Italian"];

const GalleryAutoSlideZoom = () => {
  const images = [fgallery1, fgallery2, fgallery3];

  const [currentCuisine, setCurrentCuisine] = useState(cuisines[0]);
  const [centerIndex, setCenterIndex] = useState(0);

  // cuisine text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCuisine((prev) => {
        const index = cuisines.indexOf(prev);
        return cuisines[(index + 1) % cuisines.length];
      });
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    slidesToShow: 3,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: 900,
    cssEase: "ease-in-out",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    swipeToSlide: true,

    afterChange: (current) => setCenterIndex(current),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="relative bg-white py-16 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-200 blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-14 leading-tight">
          Craving{" "}
          <span className="text-orange-500 transition-all duration-500">
            {currentCuisine}
          </span>{" "}
          food?
          <br className="hidden md:block" />
          Our Multi-Cuisine Experts Have Got You!
        </h1>

        {/* Slider */}
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-4 md:px-8">
              <div
                className={`relative rounded-2xl overflow-hidden
                transition-all duration-700 ease-in-out
                ${
                  index === centerIndex
                    ? "scale-110 shadow-2xl"
                    : "scale-95 opacity-60"
                }`}
              >
                {/* floating animation */}
                <div
                  className={`animate-[float_6s_ease-in-out_infinite]`}
                >
                  <img
                    src={img}
                    alt="food"
                    className="w-full h-[260px] md:h-[360px] object-contain bg-white rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>

      {/* animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

    </section>
  );
};

export default GalleryAutoSlideZoom;
