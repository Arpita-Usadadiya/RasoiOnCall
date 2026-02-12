import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HygieneBadge from "./HygieneBadge";

const ChefProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [chef, setChef] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/chef/get/${id}`)
      .then((res) => setChef(res.data.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleBook = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate(`/book/${id}`);
    }
  };

  if (!chef) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={chef.profilepic}
          alt={chef.name}
          className="rounded-xl w-full h-96 object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">{chef.name}</h1>
          <p className="text-gray-600 mt-2">
            {chef.city}, {chef.state}
          </p>

          <p className="mt-4 text-lg">
            <strong>Experience:</strong> {chef.experience} years
          </p>

          <p className="mt-2">
            <strong>Cuisine:</strong> {chef.cuisine}
          </p>

          <p className="mt-2">
            <strong>Price:</strong> ₹{chef.pricePerDay} / day
          </p>

          <HygieneBadge score={chef.hygieneScore} />

          <button
            onClick={handleBook}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Book This Chef
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;
