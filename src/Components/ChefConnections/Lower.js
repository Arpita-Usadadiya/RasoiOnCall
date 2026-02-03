import React from "react";

const Lower = () => {
  return (
    <section className="bg-[#FFF4EA] py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="pr-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-[3.8rem] text-gray-900">
            Be a part of RasoiOnCall{" "}
            <span className="text-orange-500">4,500+ cooks</span>{" "}
            community
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="pt-2">
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            Sign up today and take your kitchen to new heights!
            Connect with thousands of homes and families. With RasoiOnCall’s training and support, 
            transform your cooking skills into a new level of excellence and a strong, reliable source of income.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Lower;