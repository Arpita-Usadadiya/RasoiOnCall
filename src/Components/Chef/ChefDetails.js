import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import ReviewForm from "../Review/ReviewForm";
import ReviewList from "../Review/ReviewList";

const ChefDetails = () => {
  const { id } = useParams();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    fetchChef();
  }, []);

  const fetchChef = async () => {
    try {
      const res = await fetch(`http://localhost:8000/chef/get/${id}`);
      const data = await res.json();
      setChef(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!chef) return <p className="text-center mt-20">Loading chef...</p>;

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="bg-white shadow-xl rounded-xl p-8">
        <img
          src={chef.profilepic}
          alt={chef.name}
          className="w-full h-72 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-6">{chef.name}</h1>

        <p className="text-gray-500 mt-1">
          {chef.city}, {chef.state}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <p>
            <b>Email:</b> {chef.email}
          </p>

          <p>
            <b>Phone:</b> {chef.phone}
          </p>

          <p>
            <b>Experience:</b> {chef.experience} years
          </p>

          <p>
            <b>Cuisine:</b> {chef.cuisine}
          </p>

          <p>
            <b>Spice Level:</b> {chef.spiceLevel}
          </p>

          <p>
            <b>Price Per Day:</b> ₹{chef.pricePerDay}
          </p>

          <p>
            <b>Rating:</b> ⭐ {chef.rating}
          </p>

          <p>
            <b>Hygiene Score:</b> {chef.hygieneScore}/10
          </p>
        </div>
        <ReviewForm chefId={chef._id} />

        <ReviewList chefId={chef._id} />

        <Link 
        to={`/book/${chef._id}`}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg mt-8">
          Book This Chef
        </Link>
      </div>
    </div>
  );
};

export default ChefDetails;
