import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import HeroImage2 from "../../assets/HeroImage2.jpg";

const ContactLower = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 grid gap-14 md:grid-cols-2 items-center">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-6">
            Our mission is to provide{" "}
            <span className="text-orange-500">at-home cooking</span> services in
            a way that has never been experienced before by empowering millions
            of cooks across India
          </h2>

          <div className="w-16 h-1 bg-orange-500 mb-10 mx-auto md:mx-0"></div>

          <div className="relative w-full max-w-lg mx-auto md:mx-0 h-[280px] sm:h-[360px] md:h-[420px]">
            <img
              src={HeroImage}
              alt="Chef"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-contain"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <img
            src={HeroImage2}
            alt="Food"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-lg mb-6"
          />

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-6">
            ChefKart is a platform that connects home chefs and households
            seamlessly by building an ecosystem. Our professionals are
            handpicked to serve you hygienic and wholesome meals catered to your
            taste!
          </h2>

          <p className="text-xl md:text-2xl text-orange-500 underline cursor-pointer font-medium">
            Read more about our story
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactLower;
