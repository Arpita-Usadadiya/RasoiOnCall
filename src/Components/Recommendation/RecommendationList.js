import { useEffect, useState, useCallback } from "react";
import ChefCard from "../Chef/ChefCard";
import PreferenceForm from "./PreferenceForm";

const RecommendationList = () => {
  const [filters, setFilters] = useState({
    cuisine: "",
    spice: "",
    maxPrice: "",
    availability: false,
  });

  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  

  const fetchSmartChefs = useCallback(async () => {
    try {
      setLoading(true);

      const query = new URLSearchParams(filters).toString();

      const res = await fetch(
        `http://localhost:8000/chef/smart-match?${query}`
      );

      const data = await res.json();

      console.log("API Response:", data); // 🔎 check structure

      // ✅ SAFE SETTING
      if (data && Array.isArray(data.data)) {
        setChefs(data.data);
      } else {
        setChefs([]);
      }

    } catch (err) {
      console.error("Error fetching chefs:", err);
      setChefs([]); // fallback safe
    } finally {
      setLoading(false);
    }
  }, [filters]);

   useEffect(() => {
    fetchSmartChefs();
  }, [fetchSmartChefs]);

  return (
    <div className="mt-10">
      <PreferenceForm filters={filters} setFilters={setFilters} />

      {loading && <p className="mt-6 text-gray-500">Loading chefs...</p>}

      {!loading && chefs.length === 0 && (
        <p className="mt-6 text-red-500">No chefs found</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {chefs?.map((chef) => (
          <ChefCard key={chef._id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
