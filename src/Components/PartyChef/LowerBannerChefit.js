import React from "react";
import lowBanner from "../../assets/Party/lowBanner.png";

const LowerBannerChefit = () => {
  return (
    <section className="w-full flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="md:w-1/2 w-full h-[250px] sm:h-[320px] md:h-[500px]">
        <img
          src={lowBanner}
          alt="Cooks"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full bg-[#1f4d3a] 
        flex items-center
        px-6 py-10
        sm:px-10
        md:px-12
        md:h-[500px]"
      >
        <h2 className="text-white text-xl sm:text-2xl md:text-4xl 
          font-bold leading-relaxed max-w-xl">

          <span className="block mb-2 text-orange-400">
            The Taste of Luxury
          </span>

          Experience elevated culinary perfection, as our
          <span className="text-orange-400 mx-1">
            highly skilled chefs
          </span>
          take your party to new heights.
        </h2>
      </div>

    </section>
  );
};

export default LowerBannerChefit;
