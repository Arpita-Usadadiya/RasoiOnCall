import React from "react";
import healthyhygienic from "../../assets/OTCbanner/healthyhygienic.svg";
import professionalcooks from "../../assets/OTCbanner/professionalcooks.svg";
import tailoredtotaste from "../../assets/OTCbanner/tailoredtotaste.svg";
import timely_service from "../../assets/OTCbanner/timely_service.svg";

const cardData = [
  {
    id: 1,
    title: "Healthy & Hygienic Food",
    description: "Healthy food cooked in your kitchen with utmost hygiene.",
    image: healthyhygienic,
  },
  {
    id: 2,
    title: "Trained & Verified Cooks",
    description:
      "Professionally trained & background verified cooks for quality service.",
    image: professionalcooks,
  },
  {
    id: 3,
    title: "Effortless Replacements",
    description: "One free, no-questions-asked cook replacement.",
    image: tailoredtotaste,
  },
  {
    id: 4,
    title: "Quick Service",
    description:
      "Find a skilled cook for your kitchen in as little as 24 hours.",
    image: timely_service,
  },
];

const ShowTableFlex = () => {
  return (
    <section className="py-14 bg-white ml-10 mr-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="border rounded-xl p-5 sm:p-6 flex items-start gap-4 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShowTableFlex;



// import React from "react";
// import healthyhygienic from "../../assets/OTCbanner/healthyhygienic.svg";
// import professionalcooks from "../../assets/OTCbanner/professionalcooks.svg";
// import tailoredtotaste from "../../assets/OTCbanner/tailoredtotaste.svg";
// import timely_service from "../../assets/OTCbanner/timely_service.svg";

// const ShowTableFlex = () => {
//   return (
//     <section className="w-full bg-gray-100 py-10 md:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         <div className="relative bg-white rounded-xl px-6 sm:px-10 md:px-20 py-8 md:py-12">

//           {/* center divider – desktop only */}
//           <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px bg-gray-200" />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-14 gap-x-10 md:gap-x-16">

//             {/* item 1 */}
//             <div className="flex gap-4 sm:gap-5">
//               <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
//                 <img src={healthyhygienic} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
//                   Healthy & Hygienic Food
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   Healthy food cooked in your kitchen with utmost hygiene.
//                 </p>
//               </div>
//             </div>

//             {/* item 2 */}
//             <div className="flex gap-4 sm:gap-5">
//               <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
//                 <img src={professionalcooks} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
//                   Trained & Verified Cooks
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   Professionally trained & background verified cooks for quality service.
//                 </p>
//               </div>
//             </div>

//             {/* item 3 */}
//             <div className="flex gap-4 sm:gap-5">
//               <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
//                 <img src={tailoredtotaste} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
//                   Effortless Replacements
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   One free, no-questions-asked cook replacement.
//                 </p>
//               </div>
//             </div>

//             {/* item 4 */}
//             <div className="flex gap-4 sm:gap-5">
//               <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-100 shrink-0">
//                 <img src={timely_service} alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
//                   Quick Service
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   Find a skilled cook for your kitchen in as little as 24 hours.
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShowTableFlex;