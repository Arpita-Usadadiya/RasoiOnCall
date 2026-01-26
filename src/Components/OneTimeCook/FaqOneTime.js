import React, { useState } from "react";

const FaqOneTime = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is QuickRasoi?",
      answer:
        "QuickRasoi is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen.",
    },
    {
      question: "What is the price for QuickRasoi?",
      answer:
        "The base price for the QuickRasoi service is ₹499. For each additional person, there is an extra charge of ₹100 per person.",
    },
    {
      question:
        "How can I find out if this service is available in my area?",
      answer:
        "Enter your address and select your area. The home page on the mobile app will show services available at your location.",
    },
    {
      question:
        "Will QuickRasoi provide groceries along with the service?",
      answer:
        "No, groceries are not provided. You need to manage the groceries yourself.",
    },
    {
      question: "What can I expect my cook to do post cooking?",
      answer:
        "The cook will tidy the cooking area, transfer food to serving bowls, and place used utensils in the sink with water. Utensil washing is not included.",
    },
    {
      question: "How many dishes can the cook prepare?",
      answer:
        "The cook can prepare up to 4 dishes including Dal, Chawal, Roti, and Sabzi.",
    },
    {
      question: "How long will a cook stay at my booking?",
      answer:
        "The cook stays until the booked dishes are prepared as per service guidelines.",
    },
    {
      question: "Can I cancel my trial?",
      answer:
        "Yes. Full refund before cook assignment. After assignment, a 20% cancellation fee applies.",
    },
    {
      question: "Can I stop my monthly service?",
      answer:
        "Yes, you can discontinue and receive a pro-rata refund for remaining days.",
    },
    {
      question: "How can I get support?",
      answer:
        "You can reach support via the Help & Support section on the RasoiOnCall app between 6:00 AM – 9:30 PM.",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-orange-400 font-bold text-center mb-8 md:mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ list */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left text-base sm:text-lg md:text-xl font-medium text-gray-800"
              >
                <span className="pr-4">{faq.question}</span>

                <span
                  className={`transition-transform duration-300 text-orange-500 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-4 sm:px-6 pb-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
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

export default FaqOneTime;