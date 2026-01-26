import React from "react";

const HearFromIt = () => {
  return (
    <section className="w-screen overflow-x-hidden py-20 bg-white">

      
      <h1 className="text-center text-black text-3xl md:text-5xl font-bold mb-16 px-4">
        Let's hear it from our customers
      </h1>

      
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center">

        
        <div className="w-full lg:w-1/2 px-6 lg:pl-24 lg:pr-16">
          <span className="text-6xl font-bold block mb-6">“</span>

          <p className="text-2xl font-bold md:text-4xl leading-snug text-gray-900 mr-10">
            This is a much-required service that is convenient and more affordable than ordering online.
          </p>

          <p className="mt-6 text-orange-500 font-bold text-lg md:text-xl">
            Rishi
          </p>
        </div>

        
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <video
            className="w-full h-[260px] sm:h-[340px] lg:h-[520px] object-cover"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>
    </section>
  );
};

export default HearFromIt;