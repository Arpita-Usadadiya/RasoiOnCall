
import HygieneBadge from "./HygieneBadge";
import { Link } from "react-router-dom";


const ChefCard = ({ chef }) => {
 


  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
      <img
        src={chef.profilepic}
        alt={chef.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">{chef.name}</h2>
      <p className="text-gray-500">{chef.city}</p>
      <p className="text-yellow-500 font-bold">⭐ {chef.rating}</p>
<HygieneBadge score={chef.hygieneScore} />


      <Link
        to={`/book/${chef._id}`}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block mt-3"
      >
        Book Now
      </Link>
    </div>
  );
};

export default ChefCard;

