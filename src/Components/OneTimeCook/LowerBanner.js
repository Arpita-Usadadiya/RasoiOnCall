import React from "react";

const LowerBanner = () => {
  return (
    <section className="bg-[#FFF4EA] py-24 hidden md:block">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

        <div className="pr-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-[3.8rem] text-orange-400">
            Why order online <br /> when you can just <br /> QuickRasoi?
          </h2>
        </div>

        <div className="pt-2">
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            Enjoy your favourite comfort food cooked in your kitchen without burning your wallets.
            Get a cook for a one-time meal at an affordable price. Book now and relish homemade delicacies!
          </p>
        </div>

      </div>
    </section>
  );
};

export default LowerBanner;