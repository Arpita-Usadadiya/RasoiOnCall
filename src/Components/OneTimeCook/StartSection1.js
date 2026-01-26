import React from 'react';
import { GiMeal, GiChefToque, GiHouse } from "react-icons/gi";

const StartSection1 = () => {
   return (
    <section className="w-full bg-white py-14 border-b">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-16">
          <div>
            <div className="flex justify-center items-center gap-2">
              <h2 className="text-5xl font-bold text-black">3M+</h2>
              <GiMeal className="text-gray-300 text-5xl" />
            </div>
            <p className="mt-2 text-gray-600 text-sm">Meals cooked with love</p>
          </div>

          <div>
            <div className="flex justify-center items-center gap-2">
              <h2 className="text-5xl font-bold text-black">4500+</h2>
              <GiChefToque className="text-gray-300 text-5xl" />
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              Verified & trained cooks
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center gap-2">
              <h2 className="text-5xl font-bold text-black">10K+</h2>
              <GiHouse className="text-gray-300 text-5xl" />
            </div>
            <p className="mt-2 text-gray-600 text-sm">Households served</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartSection1
