import React from "react";
import Register_on_app from "../../assets/OneTimeCook/Register_on_app.svg";
import select_your_service from "../../assets/OneTimeCook/select_your_service.svg";
import make_payment from "../../assets/OneTimeCook/make_payment.svg";
import Get_a_cook from "../../assets/OneTimeCook/Get_a_cook.svg";

const Arrow = () => (
  <svg
    width="140"
    height="20"
    viewBox="0 0 140 20"
    xmlns="http://www.w3.org/2000/svg"
    className="hidden md:block"
  >
    <defs>
      <style>
        {`
          .flow {
            stroke-dasharray: 6 6;
            animation: dash 1.5s linear infinite;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: -24;
            }
          }
        `}
      </style>
    </defs>

    <line
      x1="0"
      y1="10"
      x2="110"
      y2="10"
      stroke="#22c55e"
      strokeWidth="2"
      className="flow"
    />
    <polyline
      points="110,4 125,10 110,16"
      fill="none"
      stroke="#22c55e"
      strokeWidth="2"
    />
  </svg>
);

const Work1 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            How it <span className="text-gray-500 font-medium">works</span>
          </h1>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-14">

          {/* Step 1 */}
          <div className="md:w-1/5 text-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 font-semibold">
              1
            </span>
            <img src={Register_on_app} alt="" className="mx-auto h-40 md:h-44 mb-4" />
            <h2 className="font-bold text-lg text-gray-900">
              Register on App
            </h2>
            <p className="text-sm mt-2">
              Download the ChefKart App and register yourself
            </p>
          </div>

          <Arrow />

          {/* Step 2 */}
          <div className="md:w-1/5 text-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 font-semibold">
              2
            </span>
            <img src={select_your_service} alt="" className="mx-auto h-40 md:h-44 mb-4" />
            <h2 className="font-bold text-lg text-gray-900">
              Select Your Service
            </h2>
            <p className="text-sm mt-2">
              Choose from range of available services
            </p>
          </div>

          <Arrow />

          {/* Step 3 */}
          <div className="md:w-1/5 text-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 font-semibold">
              3
            </span>
            <img src={make_payment} alt="" className="mx-auto h-40 md:h-44 mb-4" />
            <h2 className="font-bold text-lg text-gray-900">
              Fill Details & Pay
            </h2>
            <p className="text-sm mt-2">
              Share your preferences and complete the payment
            </p>
          </div>

          <Arrow />

          {/* Step 4 */}
          <div className="md:w-1/5 text-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 font-semibold">
              4
            </span>
            <img src={Get_a_cook} alt="" className="mx-auto h-40 md:h-44 mb-4" />
            <h2 className="font-bold text-lg text-gray-900">
              Get a Cook
            </h2>
            <p className="text-sm mt-2">
              Get a professionally-trained and trusted cook on time
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work1;