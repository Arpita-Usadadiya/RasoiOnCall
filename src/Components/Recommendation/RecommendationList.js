// import ChefCard from "../Chef/ChefCard";

// const dummyChefs = [
//   {
//     id: 1,
//     name: "Ramesh Kumar",
//     location: "Bangalore",
//     rating: 4.6,
//     hygieneScore: 8.5,
//     tags: ["Punjabi", "Jain", "North Indian"],
//     matchScore: 92,
//     reasons: [
//       "Matches your Punjabi preference",
//       "High hygiene score",
//       "Within your budget",
//       "Previously booked by you"
//     ]
//   },
//   {
//     id: 2,
//     name: "Sita Iyer",
//     location: "Chennai",
//     rating: 4.8,
//     hygieneScore: 9.1,
//     tags: ["South Indian", "Healthy Meals"],
//     matchScore: 88,
//     reasons: [
//       "Expert in South Indian cuisine",
//       "Excellent hygiene rating",
//       "Highly rated by customers"
//     ]
//   }
// ];

// const RecommendationList = () => {
//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {dummyChefs.map((chef) => (
//         <ChefCard key={chef.id} chef={chef} />
//       ))}
//     </div>
//   );
// };

// export default RecommendationList;

import { useState } from "react";
import ChefCard from "../Chef/ChefCard";
import PreferenceForm from "./PreferenceForm";

const DUMMY_CHEFS = [
  {
    id: 1,
    name: "Ramesh Kumar",
    cuisine: "Punjabi",
    spice: "Spicy",
    price: 500,
    rating: 4.6,
    hygieneScore: 8.8,
    availability: true,
    location: "Bangalore",
    tags: ["Punjabi", "North Indian"],
    matchScore: 92,
    reasons: [
      "Matches your Punjabi preference",
      "High hygiene score",
      "Within your budget",
    ],
  },
  {
    id: 2,
    name: "Meena Joshi",
    cuisine: "South Indian",
    spice: "Medium",
    price: 400,
    rating: 4.4,
    hygieneScore: 9.2,
    availability: false,
    location: "Bangalore",
    tags: ["South Indian", "Jain"],
    matchScore: 85,
    reasons: ["Preferred spice level", "Excellent hygiene rating"],
  },
  {
    id: 3,
    name: "Harpreet Singh",
    cuisine: "Punjabi",
    spice: "Medium",
    price: 650,
    rating: 4.8,
    hygieneScore: 8.5,
    availability: true,
    location: "Bangalore",
    tags: ["Punjabi", "Tandoor"],
    matchScore: 88,
    reasons: ["Top-rated chef", "Punjabi specialist"],
  },
  {
    id: 4,
    name: "Anita Rao",
    cuisine: "South Indian",
    spice: "Mild",
    price: 350,
    rating: 4.2,
    hygieneScore: 9.0,
    availability: true,
    location: "Bangalore",
    tags: ["South Indian", "Home Style"],
    matchScore: 80,
    reasons: ["Low spice preference match", "Affordable pricing"],
  },
  {
    id: 5,
    name: "Suresh Iyer",
    cuisine: "South Indian",
    spice: "Spicy",
    price: 550,
    rating: 4.7,
    hygieneScore: 9.4,
    availability: true,
    location: "Bangalore",
    tags: ["South Indian", "Tamil Cuisine"],
    matchScore: 90,
    reasons: ["Excellent hygiene", "Highly rated"],
  },
  {
    id: 6,
    name: "Pooja Shah",
    cuisine: "Gujarati",
    spice: "Mild",
    price: 300,
    rating: 4.3,
    hygieneScore: 8.9,
    availability: false,
    location: "Bangalore",
    tags: ["Gujarati", "Jain"],
    matchScore: 78,
    reasons: ["Jain food expertise", "Budget friendly"],
  },
  {
    id: 7,
    name: "Rahul Verma",
    cuisine: "North Indian",
    spice: "Medium",
    price: 450,
    rating: 4.5,
    hygieneScore: 8.2,
    availability: true,
    location: "Bangalore",
    tags: ["North Indian", "Tandoor"],
    matchScore: 84,
    reasons: ["Balanced spice match", "Good availability"],
  },
  {
    id: 8,
    name: "Lakshmi Devi",
    cuisine: "South Indian",
    spice: "Spicy",
    price: 420,
    rating: 4.6,
    hygieneScore: 9.1,
    availability: true,
    location: "Bangalore",
    tags: ["Andhra", "South Indian"],
    matchScore: 89,
    reasons: ["Spicy food specialist", "Great hygiene"],
  },
  {
    id: 9,
    name: "Vikram Patel",
    cuisine: "Gujarati",
    spice: "Medium",
    price: 380,
    rating: 4.1,
    hygieneScore: 8.4,
    availability: true,
    location: "Bangalore",
    tags: ["Gujarati", "Vegetarian"],
    matchScore: 76,
    reasons: ["Vegetarian meals", "Affordable pricing"],
  },
  {
    id: 10,
    name: "Sunita Malhotra",
    cuisine: "Punjabi",
    spice: "Mild",
    price: 600,
    rating: 4.7,
    hygieneScore: 9.3,
    availability: false,
    location: "Bangalore",
    tags: ["Punjabi", "Home Style"],
    matchScore: 86,
    reasons: ["Premium hygiene", "Experienced chef"],
  },
  {
    id: 11,
    name: "Amit Chatterjee",
    cuisine: "Bengali",
    spice: "Medium",
    price: 480,
    rating: 4.4,
    hygieneScore: 8.6,
    availability: true,
    location: "Bangalore",
    tags: ["Bengali", "Seafood"],
    matchScore: 82,
    reasons: ["Authentic Bengali food"],
  },
  {
    id: 12,
    name: "Nisha Jain",
    cuisine: "North Indian",
    spice: "Mild",
    price: 350,
    rating: 4.3,
    hygieneScore: 9.0,
    availability: true,
    location: "Bangalore",
    tags: ["Jain", "North Indian"],
    matchScore: 87,
    reasons: ["Strict Jain cooking", "Clean kitchen"],
  },
  {
    id: 13,
    name: "Imran Khan",
    cuisine: "Mughlai",
    spice: "Spicy",
    price: 700,
    rating: 4.8,
    hygieneScore: 8.7,
    availability: true,
    location: "Bangalore",
    tags: ["Mughlai", "Biryani"],
    matchScore: 90,
    reasons: ["Biryani expert", "High ratings"],
  },
  {
    id: 14,
    name: "Kavita Deshmukh",
    cuisine: "Maharashtrian",
    spice: "Medium",
    price: 400,
    rating: 4.2,
    hygieneScore: 8.8,
    availability: false,
    location: "Bangalore",
    tags: ["Maharashtrian", "Home Food"],
    matchScore: 79,
    reasons: ["Homely meals", "Balanced spice"],
  },
  {
    id: 15,
    name: "Joseph Dsouza",
    cuisine: "Continental",
    spice: "Mild",
    price: 750,
    rating: 4.6,
    hygieneScore: 9.5,
    availability: true,
    location: "Bangalore",
    tags: ["Continental", "Italian"],
    matchScore: 88,
    reasons: ["Premium hygiene", "Continental specialist"],
  },
];


const RecommendationList = () => {
  const [filters, setFilters] = useState({
    cuisine: "",
    spice: "",
    maxPrice: "",
    availability: false,
  });

  const filteredChefs = DUMMY_CHEFS.filter((chef) => {
    return (
      (!filters.cuisine || chef.cuisine === filters.cuisine) &&
      (!filters.spice || chef.spice === filters.spice) &&
      (!filters.maxPrice || chef.price <= filters.maxPrice) &&
      (!filters.availability || chef.availability)
    );
  });

  return (
    <div className="mt-10">
      <PreferenceForm filters={filters} setFilters={setFilters} />

      {filteredChefs.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No chefs match your preferences 😔
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredChefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationList;
