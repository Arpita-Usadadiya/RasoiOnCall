import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "THSC राष्ट्रीय व्यावसायिक मानक",
    description:
      "THSC राष्ट्रीय व्यावसायिक मानक-आधारित ट्रेनिंग देने में गुणवत्ता को बनाए रखने के लिए समर्पित है।",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600",
  },
  {
    title: "Skill India Initiative",
    description:
      "ChefKart स्किल इंडिया के साथ जुड़कर अपने कुक्स को ट्रेनिंग दिलवाती है जिससे उन्हें प्रमाणपत्र मिलता है।",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
  },
  {
    title: "NCVET प्रमाणन",
    description:
      "NCVET व्यावसायिक ट्रेनिंग संस्थानों के लिए न्यूनतम गुणवत्ता मानक स्थापित करता है।",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-orange-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;