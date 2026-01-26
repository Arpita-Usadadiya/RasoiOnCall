import React from "react";
import ShowCard from "./ShowCard";

const BannerDown = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <section className="text-orange-600 body-font">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 flex flex-wrap items-center">
            
            <div className="md:w-1/2 md:pr-12 md:border-r border-orange-500 mb-10 md:mb-0">
              <h1 className="text-3xl font-bold mb-2 text-orange-500">
                Why Choose?
              </h1>

              <h1 className="text-5xl font-bold text-black leading-tight">
                Cook For One Month
              </h1>
            </div>

            {/* RIGHT */}
            <div className="md:w-1/2 md:pl-12">
              <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
                Try our service with a quick trial. Love the experience? Keep
                the same cook for the entire month.
              </p>
            </div>

          </div>
        </section>
      <ShowCard />
      </div>

    </>
  );
};

export default BannerDown;