import React from "react";
import foodImg from "../../assets/food.png";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    
     <section className="w-full h-[500px] flex flex-col md:flex-row">

      <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-orange-500 leading-tight mb-6 ml-10 mt-10">
            Homemade food that <br /> warms the soul
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-lg ml-10">
            Never have to worry about skipping meals or eating oily outside food.
          </p>

          <button
              onClick={() => navigate("/booking")}
              className="bg-orange-400 text-white font-bold px-6 py-3 mt-5 ml-10 rounded-lg border-2 border-orange-400 hover:bg-orange-50 transition"
          >
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

