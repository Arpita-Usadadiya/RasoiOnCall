import { useState } from "react";

const PreferenceForm = ({ filters = {}, setFilters = () => {} }) => {

  const removeFilter = (key) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    setFilters(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      {/* SEARCH */}

      <input
        type="text"
        placeholder="Search chef by name..."
        className="border rounded-lg p-2 w-full"
        value={filters.search || ""}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />

      {/* FILTER GRID */}

      <div className="grid md:grid-cols-5 gap-4">

        {/* CUISINE */}

        <select
          className="border rounded-lg p-2"
          value={filters.cuisine || ""}
          onChange={(e) =>
            setFilters({ ...filters, cuisine: e.target.value })
          }
        >
          <option value="">All Cuisines</option>
          <option value="Gujarati">Gujarati</option>
          <option value="North Indian">North Indian</option>
          <option value="Punjabi">Punjabi</option>
          <option value="South Indian">South Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mughlai">Mughlai</option>
          <option value="Italian">Italian</option>
          <option value="Kathiyawadi">Kathiyawadi</option>
          <option value="Seafood">Seafood</option>
        </select>

        {/* SPICE LEVEL */}

        <select
          className="border rounded-lg p-2"
          value={filters.spiceLevel || ""}
          onChange={(e) =>
            setFilters({ ...filters, spiceLevel: e.target.value })
          }
        >
          <option value="">Spice Level</option>
          <option value="Mild">Mild</option>
          <option value="Medium">Medium</option>
          <option value="Spicy">Spicy</option>
        </select>

        {/* RATING */}

        <select
          className="border rounded-lg p-2"
          value={filters.rating || ""}
          onChange={(e) =>
            setFilters({ ...filters, rating: e.target.value })
          }
        >
          <option value="">Any Rating</option>
          <option value="4">⭐ 4+ Rating</option>
          <option value="3">⭐ 3+ Rating</option>
        </select>

        {/* SORT */}

        <select
          className="border rounded-lg p-2"
          value={filters.sort || ""}
          onChange={(e) =>
            setFilters({ ...filters, sort: e.target.value })
          }
        >
          <option value="">Sort</option>
          <option value="priceLow">Price Low → High</option>
          <option value="priceHigh">Price High → Low</option>
          <option value="ratingHigh">Rating High → Low</option>
        </select>

        {/* AVAILABILITY */}

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.availability || false}
            onChange={(e) =>
              setFilters({ ...filters, availability: e.target.checked })
            }
          />
          Available Today
        </label>

      </div>

      {/* FILTER CHIPS */}

      <div className="flex flex-wrap gap-2">

        {Object.entries(filters).map(([key, value]) => {

          if (!value || key === "search") return null;

          return (
            <span
              key={key}
              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {key}: {value}

              <button
                onClick={() => removeFilter(key)}
                className="font-bold"
              >
                ×
              </button>
            </span>
          );

        })}

      </div>

      {/* RESET BUTTON */}

      <button
        onClick={() => setFilters({})}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm"
      >
        Reset Filters
      </button>

    </div>
  );
};

export default PreferenceForm;