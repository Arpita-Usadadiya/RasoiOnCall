import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const TrendingCooks = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Ahmedabad"); // ✅ Default Gujarat city

  // Gujarat Cities List
  const gujaratCities = [
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Gandhinagar",
  "Bhavnagar",
  "Jamnagar",
  "Junagadh",
  "Anand",
  "Navsari",
  "Morbi",
  "Mehsana",
  "Porbandar",
  "Palanpur",
  "Vapi",
  "Bharuch",
  "Surendranagar",
  "Nadiad",
  "Godhra",
  "Veraval"
];


  useEffect(() => {
    const fetchChefs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/chef/near-me?city=${city}`
        );
        const data = await res.json();
        setChefs(data.data || []);
      } catch (error) {
        console.error("Failed to fetch chefs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChefs();
  }, [city]); // ✅ refetch when city changes

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header + City Select */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Trending cooks</h2>

        {/* ✅ City Dropdown */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {gujaratCities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center py-10">Loading chefs...</p>
      ) : (
        <div className="space-y-3">
          {chefs.length > 0 ? (
            chefs.map((chef) => (
              <div
                key={chef._id}
                className="flex items-center justify-between border rounded-lg p-4 hover:shadow-sm transition"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <img
                    src={
                      chef.profilepic ||
                      "https://dummyimage.com/80x80/eee/000"
                    }
                    alt={chef.name}
                    className="w-16 h-16 rounded-md object-cover bg-orange-100"
                  />

                  <div>
                    <h3 className="font-semibold text-sm">
                      {chef.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <FaMapMarkerAlt />
                      <span>
                        {chef.area}, {chef.city}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <FaBriefcase />
                      <span>
                        {chef.experience} years experience
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <Link
                  to={`/chef/${chef._id}`}
                  className="text-sm text-green-600 font-medium hover:underline"
                >
                  View Profile
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No chefs available in {city}
            </p>
          )}
        </div>
      )}

      {/* App Download Section */}
      <div className="mt-8 flex items-center justify-between border-t pt-6">
        <div>
          <h4 className="font-semibold">Download our App</h4>
          <p className="text-xs text-gray-500">
            Scan QR code to download our app
          </p>
        </div>

        <img
          src="https://dummyimage.com/100x100"
          alt="QR Code"
          className="w-20 h-20"
        />
      </div>
    </div>
  );
};

export default TrendingCooks;
