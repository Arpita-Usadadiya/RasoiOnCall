import React from "react";
import foodImg from "../../assets/food.png";

const Hero = () => {
  return (
    
     <section className="w-full h-[500px] flex flex-col md:flex-row">

      <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-orange-500 leading-tight mb-6 ml-10 mt-10">
            Homemade food that <br /> warms the soul
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-lg ml-10">
            Never have to worry about skipping meals or eating oily outside food.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold ml-10">
            Book Now
          </button>
        </div>

      <div className="md:w-3/4 w-full h-full">
        <img
          src={foodImg}
          alt="Cooks"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

