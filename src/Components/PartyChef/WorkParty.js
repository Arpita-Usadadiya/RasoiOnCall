import React from "react";

const steps = [
  {
    id: 1,
    title: "Register on App",
    desc: "Download the RasoiOnCall App and register yourself",
    img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  },
  {
    id: 2,
    title: "Select Your Service",
    desc: "Choose from a range of available services",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
  },
  {
    id: 3,
    title: "Fill Details & Pay",
    desc: "Share your preferences and complete the payment",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  },
  {
    id: 4,
    title: "Get a Cook",
    desc: "Get a professionally trained and trusted cook on time",
    img: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
  },
];

const WorkParty = () => {
  return (
    <section className="w-full py-20 bg-white">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          How it <span className="text-orange-500">works</span>
        </h2>
      </div>

      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center relative"
            >
              
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {step.id}
              </div>

              
              <div className="w-32 h-32 mb-6 mt-10 flex items-center justify-center">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="mt-10 mb-10 mr-10 float-right px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default WorkParty;