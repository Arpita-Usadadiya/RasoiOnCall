// import HygieneBadge from "./HygieneBadge";
// import SkillTags from "./SkillTags";
// import WhyRecommended from "../Recommendation/WhyRecommended";

// const ChefCard = ({ chef }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-xl font-semibold">{chef.name}</h3>
//           <p className="text-sm text-gray-500">{chef.location}</p>
//         </div>

//         <span className="text-green-600 font-bold text-sm">
//           {chef.matchScore}% Match
//         </span>
//       </div>

//       <SkillTags tags={chef.tags} />

//       <div className="flex items-center justify-between mt-4">
//         <span className="text-sm">⭐ {chef.rating}</span>
//         <HygieneBadge score={chef.hygieneScore} />
//       </div>

//       <WhyRecommended reasons={chef.reasons} />

//       <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
//         Book Chef
//       </button>
//     </div>
//   );
// };

// export default ChefCard;

import WhyRecommended from "../Recommendation/WhyRecommended";

const ChefCard = ({ chef }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{chef.name}</h3>
        <span className="text-green-600 font-bold">
          {chef.matchScore}% Match
        </span>
      </div>

      <p className="text-sm text-gray-500">{chef.location}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {chef.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-sm">
        <span>⭐ {chef.rating}</span>
        <span>🧼 Hygiene {chef.hygieneScore}/10</span>
      </div>

      <WhyRecommended reasons={chef.reasons} />
    </div>
  );
};

export default ChefCard;
