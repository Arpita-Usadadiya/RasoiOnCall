import React from "react";

const Carousel4 = () => {
  return (
    <div className="relative bg-[#fff9f2] w-full h-screen">
      <div
        className="w-full h-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FChefit_Hero_banner_f573fdf12c.webp&w=1920&q=75')",
        }}
      >
        <div className="text-center p-6 md:p-16 rounded-lg bg-white/70 backdrop-blur-md">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black">
            No open positions
          </h1>

          <p className="text-black mt-5 text-xl md:text-3xl">
            We'll be accepting applications soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel4;
