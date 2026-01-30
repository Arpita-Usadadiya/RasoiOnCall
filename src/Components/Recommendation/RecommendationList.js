import ChefCard from "../Chef/ChefCard";

const dummyChefs = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Bangalore",
    rating: 4.6,
    hygieneScore: 8.5,
    tags: ["Punjabi", "Jain", "North Indian"],
    matchScore: 92,
    reasons: [
      "Matches your Punjabi preference",
      "High hygiene score",
      "Within your budget",
      "Previously booked by you"
    ]
  },
  {
    id: 2,
    name: "Sita Iyer",
    location: "Chennai",
    rating: 4.8,
    hygieneScore: 9.1,
    tags: ["South Indian", "Healthy Meals"],
    matchScore: 88,
    reasons: [
      "Expert in South Indian cuisine",
      "Excellent hygiene rating",
      "Highly rated by customers"
    ]
  }
];

const RecommendationList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dummyChefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  );
};

export default RecommendationList;
