import React from "react";
import ShowTableFlex from "./ShowTableFlex";

const StartBanner = () => {
  return (
    <div className="bg-gray-100 py-10 md:py-16">

      <section className="text-orange-600 body-font">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-20 py-12 md:py-24 flex flex-col md:flex-row items-center">

          {/* Left */}
          <div className="w-full md:w-1/2 md:pr-12 md:border-r border-orange-500 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 text-orange-500">
              Why Choose?
            </h1>

            <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
              QuickRasoi: One-Time Cook
            </h1>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <p className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800 leading-relaxed">
              Get a certified cook for one-time to prepare delicious food in your kitchen.
            </p>
          </div>

        </div>
      </section>

      {/* Table / cards */}
      <div className="mt-6 md:mt-0">
        <ShowTableFlex />
      </div>

    </div>
  );
};

export default StartBanner;