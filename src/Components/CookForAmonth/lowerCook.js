import React from "react";
import ChefImg3 from "../../assets/ChefImg3.png";

const LowerCook = () => {
  return (
    <section className="w-full h-[500px] flex flex-col md:flex-row">

      
      <div className="md:w-1/2 w-full h-full">
        <img
          src={ChefImg3}
          alt="Cooks"
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="md:w-1/2 w-full h-full bg-[#1f4d3a] flex items-center px-12">

        <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug max-w-xl">
          <span className="px-3 py-1 inline-block mb-2">
            Discover your ideal cook from
          </span>
          <br />
          <span className=" px-3 py-1 inline-block">
            a team of over 4500 experts.
          </span>
        </h2>

      </div>

    </section>
  );
};

export default LowerCook;