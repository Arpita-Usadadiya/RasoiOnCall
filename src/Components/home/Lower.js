import React from "react";
import { useNavigate } from "react-router-dom";

const Lower = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center bg-orange-200 py-12 px-4">
      <section className="text-gray-600 body-font max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center">

          {/* Text */}
          <h2 className="leading-tight md:leading-[4rem] tracking-wide font-bold 
                         text-3xl sm:text-4xl md:text-5xl text-gray-900 
                         mb-6 md:mb-0 md:w-2/5 text-center md:text-left">
            RasoiOnCall के{" "}
            <span className="text-orange-500 tracking-wide">
              4500 से भी ज़्यादा कुक्स
            </span>{" "}
            का हिस्सा बनें।
          </h2>

          {/* Button */}
          <div className="md:w-3/5 md:pl-10 ml-96flex justify-center md:justify-start">
            <button
              onClick={() => navigate("/join-chef")}
              className="text-white h-12 sm:h-14 w-64 sm:w-72 
                         rounded-lg bg-orange-500 text-xl sm:text-2xl font-bold
                         hover:bg-orange-600 transition-all duration-300
                         active:scale-95"
            >
              Join RasoiOnCall
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Lower;
