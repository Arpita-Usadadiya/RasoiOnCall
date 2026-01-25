import React from "react";
import ShowCard from "./ShowCard";

const BannerDown = () => {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <section className="text-orange-600 body-font">
          <div className="container flex flex-wrap px-19 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-orange-500">
              <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-orange-500">
                Why Choose?
              </h1>
              <h1 className="leading-relaxed font-bold text-5xl text-black">
                Cook For One Month
              </h1>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
              <h2 className="title-font font-semibold text-gray-800 tracking-wider text-2xl mb-3">
                Try our service with a quick trial. Love the experience? Keep
                the same cook for the entire month.
              </h2>
            </div>
          </div>
        </section>
      </div>

      <ShowCard />
    </>
  );
};

export default BannerDown;
