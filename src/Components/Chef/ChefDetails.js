import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
      //const res = await fetch(`${import.meta.env.VITE_API_URL}/chef/get/${id}`);
      const data = await res.json();
      setChef(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!chef) return <p className="text-center mt-20 text-lg">Loading chef...</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Profile Card */}

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">

          {/* Avatar */}

          <div className="flex flex-col items-center md:w-1/3">

            <img
              src={chef.profilepic || "https://api.dicebear.com/7.x/adventurer/svg?seed=Chef"}
              alt={chef.name}
              className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-orange-400"
            />

            <h1 className="text-2xl font-bold mt-4">{chef.name}</h1>

            <p className="text-gray-500">
              📍 {chef.city}, {chef.state}
            </p>

            <div className="mt-3 flex gap-2">
              <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm">
                ⭐ {chef.rating}
              </span>

              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                Hygiene {chef.hygieneScore}/10
              </span>
            </div>

          </div>

          {/* Details */}

          <div className="flex-1">

            <div className="grid md:grid-cols-2 gap-6 text-gray-700">

              <p>
                <b>Email:</b> {chef.email}
              </p>

              <p>
                <b>Phone:</b> {chef.phone}
              </p>

              <p>
                <b>Experience:</b> {chef.experience}
              </p>

              <p>
                <b>Price:</b>{" "}
                <span className="text-orange-500 font-bold">
                  ₹{chef.pricePerDay}/day
                </span>
              </p>

              <p>
                <b>Cuisine:</b>{" "}
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                  {chef.cuisine}
                </span>
              </p>

              <p>
                <b>Spice Level:</b>{" "}
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                  {chef.spiceLevel}
                </span>
              </p>

              <p>
                <b>Availability:</b>{" "}
                {chef.availability ? (
                  <span className="text-green-600 font-semibold">
                    Available
                  </span>
                ) : (
                  <span className="text-red-500 font-semibold">
                    Not Available
                  </span>
                )}
              </p>

              <p>
                <b>Area:</b> {chef.area}
              </p>

            </div>

            {/* Book Button */}

            <Link
              to={`/book/${chef._id}`}
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl shadow-md transition"
            >
              Book This Chef
            </Link>

          </div>

        </div>

        {/* Reviews Section */}

        <div className="bg-white shadow-lg rounded-2xl mt-10 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Customer Reviews
          </h2>

          <ReviewForm chefId={chef._id} />

          <div className="mt-6">
            <ReviewList chefId={chef._id} />
          </div>

        </div>

      </div>

    </div>
  );
};

export default ChefDetails;