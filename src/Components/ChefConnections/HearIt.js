import React from "react";

const HearIt = () => {
  return (
    <section className="w-screen overflow-x-hidden py-20 bg-white">

      {/* heading */}
      <h1 className="text-center text-black text-3xl md:text-5xl font-bold mb-16 px-4">
        Let's hear it from our customers
      </h1>

      {/* full width layout */}
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-24 lg:pr-16">
          <span className="text-6xl font-bold block mb-6">“</span>

          <p className="text-2xl md:text-4xl leading-snug text-gray-900">
            "RasoiOnCall તમને ક્યારેય એવા ઘરમાં નહીં મોકલે જ્યાં તમારું સન્માન ન થાય."
          </p>

          <p className="mt-6 text-orange-500 font-bold text-lg md:text-xl">
            અજનહર બીવી
          </p>
        </div>

        {/* RIGHT VIDEO */}
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

export default HearIt;