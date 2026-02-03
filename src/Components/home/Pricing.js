import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const pricingData = [
    {
      title: "Cook for a Month",
      description:
        "Hire a professional cook for your daily meals on a monthly basis",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Customized Monthly Plans",
      ],
      buttonText: "Know More",
      note: "Starting from ₹6,999/month",
      path: "/cook-for-month",
    },
    {
      title: "One-time Cook",
      description:
        "Get a professional cook for one-time within 60 minutes",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste",
      ],
      buttonText: "Know More",
      note: "Starting from ₹299/visit",
      path: "/one-time-cook",
    },
    {
      title: "Chef for Party",
      description:
        "Hire an expert chef for parties, events & special occasions",
      features: [
        "Experienced Party Chefs",
        "Multi-Cuisine Options",
        "Hassle-Free Service",
      ],
      buttonText: "Know More",
      note: "Starting from ₹1,999/event",
      path: "/chef-for-party",
    },
  ];

  return (
    <section className="text-black bg-[#E8EAF0] body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl font-bold title-font mb-4 text-black">
            Discover your perfect service
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap -m-4">
          {pricingData.map((plan, index) => (
            <div key={index} className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 bg-white flex flex-col relative overflow-hidden transition-transform duration-300 hover:scale-105">
                
                <h2 className="text-sm tracking-widest title-font mb-2 font-medium text-gray-500">
                  {plan.title}
                </h2>

                <h1 className="text-xl text-black leading-snug pb-4 mb-4 border-b border-gray-200">
                  {plan.description}
                </h1>

                {/* Features */}
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-black mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </p>
                ))}

                {/* Button */}
                <button
                  onClick={() => navigate(plan.path)}
                  className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded"
                >
                  {plan.buttonText}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>

                <p className="text-xs text-gray-500 mt-3">{plan.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
