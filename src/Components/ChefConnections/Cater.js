import React from "react";
import ChefImg2 from "../../assets/ChefImg2.png"

const Cater = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <h1 className="text-center text-black text-3xl md:text-5xl font-bold mb-16 px-4 w-full">Why Choose RasoiOnCall?</h1>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FEarn_Money_c09cff227a.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-center text-3xl font-bold text-black mb-3">
                    Regular Payments
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-xl text-black">
                    Receive your daily earnings regularly on the same day you complete your service. No delays, no hassles.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full  object-center"
                  src= {ChefImg2}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-center text-3xl font-bold text-black mb-3"> 
                    Work with Respect
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-xl text-black">
                    Gain respect and recognition in society as a professional cook. Showcase your skills and take advantage of a trusted platform to grow your profession.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_support_26823bc403.webp&w=1920&q=75"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-center text-3xl font-bold text-black mb-3">
                    Training and Support
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-xl text-black">
                    Learn to prepare new dishes through training from our expert chefs. Get instant assistance for any issue and receive guidance from our dedicated support team.
                  </p>       
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cater;
