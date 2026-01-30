import React from "react";
import chefImage from "../../assets/chefImage.jpeg";

const LowerBannerChefit2 = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

       
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Let Food Do The <br /> Talking
          </h1>

          <p className="text-gray-700 mt-6 text-base leading-relaxed">
            Enjoy the spotlight with a chef for birthday, kitty <br/>
            party, anniversaries, house-warming, farewell, and <br/>
            any other party.
          </p>
        </div>

        
        <div className="md:w-1/2 w-full h-full flex justify-end">
          <img
            src={chefImage}
            alt="Chef"
            className="w-[420px] md:w-[480px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default LowerBannerChefit2;