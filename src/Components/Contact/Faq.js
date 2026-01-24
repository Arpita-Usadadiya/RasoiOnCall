import React, { useState } from "react";

const faqs = [
  {
    question: "What is the main aim of the RasoiOnCall?",
    answer:
      "The primary aim of this platform is to provide a smart, web-based solution that allows users to easily discover, book, and manage verified home chefs while offering personalized recommendations based on user preferences and behavior."
  },
  {
    question: "How can users search and book home chefs?",
    answer:
      "Users can search and filter chefs based on cuisine, location, availability, budget, hygiene ratings, and special requirements. The booking process is simple, fast, and user-friendly."
  },
  {
    question: "What management features are available for chefs?",
    answer:
      "Chefs can create and manage profiles, update availability, accept or reject bookings, and track service history, enabling them to efficiently manage their services."
  },
  {
    question: "How does the smart recommendation system help users?",
    answer:
      "The recommendation system suggests suitable chefs using customer preferences, past bookings, ratings, location, skill tags, hygiene scores, and budget, ensuring a personalized experience."
  },
  {
    question: "How does the platform ensure secure payments and administration?",
    answer:
      "The platform includes secure payment integration, real-time booking tracking, notifications, and administrative tools for chef verification, user management, and secure data handling."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-12 sm:py-16 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-24">
        <h2 className="text-4xl sm:text-3xl lg:text-4xl font-bold text-center text-orange-500 mb-10">
          Frequently Asked Questions
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

export default Faq;
