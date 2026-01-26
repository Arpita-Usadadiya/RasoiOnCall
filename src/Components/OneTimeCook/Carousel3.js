import React from "react";
import chefImg from "../../assets/ChefinvibrantkitchenbackgroundImg.png";

const Carousel3 = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-black overflow-hidden">

      {/* Background image (NO CROP) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-contain bg-right -0"
        style={{
          backgroundImage: `url(${chefImg})`,
        }}
      />

      {/* Gradient to fill empty space */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[90vh] flex items-center px-6 md:px-16">
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get a Cook for One-Time <br />
            <span className="text-orange-500">Within 60 Minutes</span>
          </h1>

          <p className="mt-6 text-gray-300">
            Forget ordering online! Get fresh food cooked in your kitchen.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md font-semibold">
            Get Started
          </button>
        </div>
      </div>

    </section>
  );
};

export default Carousel3;