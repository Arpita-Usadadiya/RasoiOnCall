// import React from "react";
// import { FiShield, FiUserCheck, FiRefreshCw, FiClock } from "react-icons/fi";

// const CookMonthFeatures = () => {
//   return (
//     <section className="w-full bg-gray-100 pt-15 pb-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* WHITE CONTAINER */}
//         <div className="relative bg-white rounded-xl px-20 py-12">

//           {/* CENTER VERTICAL DIVIDER */}
//           <div className="hidden md:block absolute top-10 bottom-10 left-1/2 w-px bg-gray-200" />

//           {/* GRID */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-16">

//             {/* ITEM */}
//             <div className="flex gap-5">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl shrink-0">
//                 <FiShield />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-lg">
//                   30 Days of Assured Service
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   Free substitute cook or service extension in case of leaves.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-5">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl shrink-0">
//                 <FiUserCheck />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-lg">
//                   Trained & Verified Cooks
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   Professionally trained & background verified cooks for quality service.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-5">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl shrink-0">
//                 <FiRefreshCw />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-lg">
//                   Effortless Replacements
//                 </h3>
//                 <p className="text-gray-600 text-sm mt-1 max-w-sm">
//                   One free, no-questions-asked cook replacement.
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-5">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl shrink-0">
//                 <FiClock />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 text-lg">
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

// export default CookMonthFeatures;

import React from "react";
import { FiShield, FiUserCheck, FiRefreshCw, FiClock } from "react-icons/fi";

// Sample data array
const cardData = [
  {
    id: 1,

    title: "30 Days of Assured Service",
    description: "Free substitute cook or service extension in case of leaves.",
    // image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/30_days_assured_1aa2f3eb64.svg",
    image: FiShield,
  },
  {
    id: 2,
    title: "Trained & Verified Cooks",
    description:
      "Professionally trained & background verified cooks for quality service.",
    // image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FGroup_625783_1_16e923de80.png&w=1920&q=75",
    image: FiUserCheck,
  },
  {
    id: 3,
    title: "Effortless Replacements",
    description: "One free, no-questions-asked cook replacement..",
    // image: "https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/effortless_ae968a4dea.svg",
    image: FiRefreshCw,
  },
  {
    id: 4,
    title: "Quick Service",
    description:
      "Find a skilled cook for your kitchen in as little as 24 hours.",
    // image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2Ftime_management_4_2_20dc3c1815.png&w=1920&q=75",
    image: FiClock,
  },
];

const ShowCard = () => {
  return (
    <section className=" py-14 bg-white ml-10 mr-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardData.map((card) => {

            return (
              <div
                key={card.id}
                className="border rounded-xl p-6 flex items-center gap-5 bg-white shadow-sm"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
                  <card.image />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowCard;
