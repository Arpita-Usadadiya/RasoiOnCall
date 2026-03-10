import HygieneBadge from "./HygieneBadge";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">

      {/* Chef Image */}
      <div className="relative">
        <img
          src={chef.profilepic}
          alt={chef.name}
          className="w-full h-52 object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-yellow-600">
          ⭐ {chef.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">
          {chef.name}
        </h2>

        {/* Location */}
        <p className="text-gray-500 text-sm mt-1">
          📍 {chef.city}, {chef.state}
        </p>

        {/* Experience */}
        <p className="text-gray-600 text-sm mt-2">
          👨‍🍳 {chef.experience} years experience
        </p>

        {/* Cuisine */}
        <p className="text-gray-600 text-sm">
          🍛 {chef.cuisine || "Multi Cuisine"}
        </p>

        {/* Hygiene */}
        <div className="mt-2">
          <HygieneBadge score={chef.hygieneScore} />
        </div>

        {/* Price */}
        <p className="text-orange-600 font-semibold mt-2">
          ₹{chef.pricePerDay} / day
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">

          <Link
            to={`/chef/${chef._id}`}
            className="flex-1 text-center border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50"
          >
            View Profile
          </Link>

          <Link
            to={`/book/${chef._id}`}
            className="flex-1 text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Book
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ChefCard;