import React, { useState, useEffect } from "react";
import ChefImg4 from "../../assets/ChefImg4.png";
import ChefImg2 from "../../assets/ChefImg2.png";
import ChefImg1 from "../../assets/ChefImg1.png";

const slides = [
  {
    title: "RasoiOnCall નો ભાગ બનો",
    desc: "4500+થી વધુ રસોઈયાઓ સાથે જોડાઓ અને તમારી કુશળતાને આગળ વધારો.",
    btn: "RasoiOnCall સાથે જોડાઓ",
    image: ChefImg4,
  },
  {
    title: "સમાજનો દૃષ્ટિકોણ બદલો",
    desc: "દેશમાં રસોઈયાઓ અને તેમના પરિવાર માટે સન્માન અને ઓળખ બદલવામાં અમારી સાથે જોડાઓ.",
    btn: "RasoiOnCall સાથે જોડાઓ",
    image: ChefImg2,
  },
  {
    title: "સન્માન સાથે કમાણી કરો",
    desc: "તમારી રસોઈ કળાને એક નવી શરૂઆત આપો અને તેની મદદથી આવક મેળવો.",
    btn: "RasoiOnCall સાથે જોડાઓ",
    image: ChefImg1,
  },
];

const Carousel3 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:min-h-screen overflow-hidden  bg-black">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center md:bg-right bg-cover  transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24 h-full flex items-center">
        <div className="w-full md:w-1/2 text-white text-center md:text-left">

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            {slides[current].title}
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-md mx-auto md:mx-0">
            {slides[current].desc}
          </p>

          <button className="mt-6 sm:mt-8 bg-orange-500 hover:bg-orange-600 transition px-8 sm:px-10 py-3 rounded-md font-semibold shadow-lg">
            {slides[current].btn}
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 md:w-10 rounded-full transition-all ${
              current === index ? "bg-orange-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel3;