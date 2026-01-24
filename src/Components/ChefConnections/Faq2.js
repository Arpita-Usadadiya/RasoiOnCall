import React, { useState } from "react";

const faqs = [
  {
  question: "RasoiOnClick સાથે કેવી રીતે જોડાવું?",
  answer:
    "RasoiOnClick સાથે જોડાવા માટે ઉપર આપેલ “RasoiOnClick સાથે જોડાવો” બટન પર ક્લિક કરીને ફોર્મ ભરો અથવા મદદ માટે અમારા સપોર્ટ નંબર પર સંપર્ક કરો."
},
{
  question: "RasoiOnClick સાથે કોણ જોડાઈ શકે?",
  answer:
    "RasoiOnClick સાથે તે બધા લોકો જોડાઈ શકે છે જેઓને ઘરેલું ભોજન બનાવવાનો અનુભવ હોય અને જેમની ઉંમર 18 વર્ષથી વધુ હોય."
},
{
  question: "RasoiOnClick સાથે જોડાવા માટે કયા દસ્તાવેજોની જરૂર છે?",
  answer:
    "RasoiOnClick સાથે જોડાવા માટે તમારે આધાર કાર્ડ, સ્માર્ટફોન, બેંક ખાતાની વિગતો અને પાસપોર્ટ સાઇઝ ફોટો જરૂરી રહેશે."
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
