import React from "react";
import { Users, Utensils, Leaf, MapPin } from "lucide-react";

const factors = [
  {
    title: "No. of People",
    icon: Users,
  },
  {
    title: "No. of Dishes",
    icon: Utensils,
  },
  {
    title: "Cuisine Preference",
    icon: Leaf,
  },
  {
    title: "Location",
    icon: MapPin,
  },
];

const PricingFactors = () => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      
      {/* subtle background blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our affordable prices <br />
            are based on{" "}
            <span className="text-orange-500">4 Factors</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Minimum prices guaranteed*
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {factors.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center
                transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              >
                {/* icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl 
                  bg-gradient-to-tr from-orange-400 to-orange-600 text-white mb-5
                  group-hover:scale-110 transition"
                >
                  <Icon size={32} />
                </div>

                {/* text */}
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingFactors;
