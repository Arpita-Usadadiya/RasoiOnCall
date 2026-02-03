import React, { useState } from "react";

const faqs = [
  {
    question: "How can I join RasoiOnClick?",
    answer:
      "To join RasoiOnClick, click on the “Join RasoiOnClick” button given above and fill out the form, or contact our support number for assistance."
  },
  {
    question: "Who can join RasoiOnClick?",
    answer:
      "Anyone who has experience in preparing home-cooked food and is above 18 years of age can join RasoiOnClick."
  },
  {
    question: "What documents are required to join RasoiOnClick?",
    answer:
      "To join RasoiOnClick, you will need an Aadhaar card, a smartphone, bank account details, and a passport-size photograph."
  },
];

const Faq2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-12 sm:py-16 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-24">
        <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-center text-orange-500 mb-10">
          વારંવાર પૂછાતા પ્રશ્નો
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg w-full"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-orange-500 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq2;
