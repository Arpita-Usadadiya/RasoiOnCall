import React from "react";
import thsc from "../../assets/thsc.png";
import skillIndia from "../../assets/skill-india.png";


const SkillIndiaSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto text-center">
        <div className="flex justify-center items-center gap-16 mb-8">
          {/* Skill India Logo */}
          <div className="flex flex-col items-center">
            <img
              src= {skillIndia}
              alt="Skill India"
              className="h-96  w-auto mb-4"
            />
         
          </div>
          {/* THSC Logo */}
          <div className="flex flex-col items-center">
            <img
              src= {thsc}
              alt="THSC Logo"
              className="h-96 w-auto mb-4"
            />
           
          </div>
        </div>
        {/* Text Content */}
        <h2 className="text-5xl font-bold text-gray-900 mb-2">
          Proud Partner with Skill India
        </h2>
        <p className="text-gray-500 text-2xl font-bold">
          All our professionals are certified by Govt. of India under Skill
          India Mission
        </p>
      </div>
    </section>
  );
};

export default SkillIndiaSection;
