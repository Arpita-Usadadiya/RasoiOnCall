import React, { useState } from "react";
import ChefImg3 from "../../assets/ChefImg3.png";
import ChefLoginModal from "./ChefLoginModal";

const Lower1 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <section className="text-gray-600 body-font  w-full h-full ">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded"
              src={ChefImg3}
            />
            <div className="lg:w-1/2 bg-[#f1f1f1] w-full mt-20 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-md font-bold mt-24 text-red-500 tracking-widest">
                We believe
              </h2>
              <h1 className="text-gray-900 text-6xl title-font font-bold mb-1">
                The taste of the food you create will now be enjoyed by the
                whole world.
              </h1>
              <h2 className=" title-font text-1xl text-black font-bold mt-4 ">
                Go above
              </h2>
              <button
                onClick={() => setOpen(true)}
                className="flex text-white mt-6 text-2xl bg-black border-0 py-2 px-6 rounded-lg"
              >
                Join RasoiOnCall
              </button>
            </div>
          </div>
        </div>
      </section>
      <ChefLoginModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Lower1;
