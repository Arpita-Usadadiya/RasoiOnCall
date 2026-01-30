import React from "react";
import hygieneVideo from "../../assets/Party/hygiene.mp4";

const SafetyVideoBanner = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={hygieneVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your Safety, Our Top-Priority
          </h1>

          <p className="text-lg md:text-2xl font-medium">
            All our chefs follow the food safety guidelines and{" "}
            <span className="text-orange-400 font-semibold">
              adhere to hygienic practices.
            </span>
          </p>
        </div>
      </div>

      {/* CURVED BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 60"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path d="M0,0 C150,60 350,60 500,0 L500,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default SafetyVideoBanner;
