// import React from "react";
// import banner from "../../assets/family.png"

// const Carousel2 = () => {
  
//   return (
//     <div className="relative w-full h-screen">
//       {/* Slide */}
//       <div
//         className="w-full h-full flex items-center text-white bg-cover bg-center transition-all duration-500"
//         style={{
//           backgroundImage: {banner}
//         }}
        
//       >
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 p-10 md:p-16 rounded-r-lg ml-4">
//           <h1 className="text-5xl  font-bold mt-3">Most Trusted Platform for At-Home Cooking Services</h1>
//           <p className="text-3xl text-orange-500 font-bold  mt-10">Find your perfect cook</p>

//           <button className="bg-orange-500 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-md mt-5 shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300">
//            Download Our App
//           </button>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default Carousel2;

import { useEffect, useState } from "react";
import banner from "../../assets/websiteBanner.png"

const slides = [
  {
    badge: "Operational in Delhi NCR, Bengaluru and Mumbai.",
    title: "Most Trusted Platform for\nAt-Home Cooking Services",
    subtitle: "Find your perfect cook",
    cta: "Download App",
    image: banner,
  },
  // you can add more slides here
];

const Carousel2 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt="Hero"
            className="absolute right-0 top-0 h-full w-full  "
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6">
            <div className="max-w-xl text-white">
              {/* Badge */}
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/20 text-sm">
                🍳 {slide.badge}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 whitespace-pre-line">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-orange-400 font-medium mb-6">
                {slide.subtitle}
              </p>

              {/* CTA */}
              <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

    </section>
  );
};

export default Carousel2;
