import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Register_on_app from "../../assets/OneTimeCook/Register_on_app.svg";
import select_your_service from "../../assets/OneTimeCook/select_your_service.svg";
import make_payment from "../../assets/OneTimeCook/make_payment.svg";
import Get_a_cook from "../../assets/OneTimeCook/Get_a_cook.svg";

const Work = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="text-5xl mt-16 text-black text-center">
          <span className="text-black font-bold">How it </span>works?
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Step 1 */}
            <div className="p-4 lg:w-1/4 md:w-1/2 relative">
              <div className="h-full flex flex-col items-center text-center relative">
                <img
                  alt="Register"
                  className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                  src={Register_on_app}
                />
                <FaArrowRight className="absolute top-1/2  left-72 transform -translate-y-1/2 text-orange-500 w-8 h-8" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Register on app
                  </h2>
                  <p className="mb-4">
                    Download the RasoiOnCall App and register yourself.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 lg:w-1/4 md:w-1/2 relative">
              <div className="h-full flex flex-col items-center text-center relative">
                <img
                  alt="Select Service"
                  className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                  src={select_your_service}
                />
                <FaArrowRight className="absolute top-1/2 left-72 transform -translate-y-1/2 text-orange-500 w-8 h-8" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Select Chefit - Cook for One Meal
                  </h2>
                  <p className="mb-4">
                    Choose Chefit from the ‘Our Services’ section on homepage
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 lg:w-1/4 md:w-1/2 relative">
              <div className="h-full flex flex-col items-center text-center relative">
                <img
                  alt="Payment"
                  className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                  src={make_payment}
                />
                <FaArrowRight className="absolute top-1/2 left-64   ml-11 transform -translate-y-1/2 text-orange-500 w-8 h-8" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Fill requirements & pay
                  </h2>
                  <p className="mb-4">
                    Share your preferences and complete the payment.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 lg:w-1/4 md:w-1/2 relative">
              <div className="h-full flex flex-col items-center text-center relative">
                <img
                  alt="Get a Cook"
                  className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                  src={Get_a_cook}
                />
                <FaArrowRight className="absolute top-1/2 transform -translate-y-1/2 text-orange-500 w-8 h-8" />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Get a cook
                  </h2>
                  <p className="mb-4">
                    Get a trained & trusted cook at your doorstep within 60
                    minutes.
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/booking")}
                className="bg-white text-orange-500 font-bold px-6 py-3 rounded-lg border-2 border-orange-400 hover:bg-orange-50 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
