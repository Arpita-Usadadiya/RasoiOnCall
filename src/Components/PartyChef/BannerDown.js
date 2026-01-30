import React from "react";
import ShowChefBanner from "./ShowChefBanner";

const AboveBanner2 = () => {
  return (
    <div className="bg-gray-100 py-12 sm:py-16">
      <section className="text-orange-600 body-font">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20
          py-12 md:py-24 flex flex-col md:flex-row items-center text-center md:text-left"
        >
          
          {/* LEFT */}
          <div className="md:w-1/2 md:pr-12 md:border-r border-orange-500 mb-6 md:mb-0">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 text-orange-500">
              Why Choose?
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              Chef for Party
            </h1>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
            <p className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800 leading-relaxed max-w-xl mx-auto md:mx-0">
              Hire a professional Multi-cuisine expert chef to elevate your party hosting experience.
            </p>
          </div>

        </div>
      </section>

      <ShowChefBanner />
    </div>
  );
};

export default AboveBanner2;
