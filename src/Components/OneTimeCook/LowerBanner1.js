import React from "react";
import chefImage from "../../assets/chefImage.jpeg";
import { useNavigate } from "react-router-dom";

const LowerBanner1 = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-white py-10 md:py-0">

      {/* Image */}
      <div className="w-full md:w-1/2 px-6 md:px-10 mb-8 md:mb-0">
        <img
          src={chefImage}
          alt="Cooks"
          className="w-full h-[260px] md:h-[500px] object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 px-6 md:px-10 text-center md:text-left">

        <p className="text-lg md:text-xl font-bold text-orange-400 mb-3">
          Running on a tight schedule?
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
          No time to cook? <br />
          RasoiOnCall Got You <br />
          Covered!!
        </h1>

        <p className="text-lg md:text-xl font-semibold text-black mb-6">
          Get a professional cook within 60 minutes
        </p>

        <button
            onClick={() => navigate("/booking")}
            className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md font-semibold"
          >
            Book Now
          </button>

      </div>
    </section>
  );
};

export default LowerBanner1;