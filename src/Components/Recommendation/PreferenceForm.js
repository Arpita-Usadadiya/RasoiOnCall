

const PreferenceForm = ({ filters = {}, setFilters = () => {} }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow grid md:grid-cols-4 gap-4">
      
      <select
        className="border rounded-lg p-2"
        value={filters.cuisine || ""}
        onChange={(e) =>
          setFilters({ ...filters, cuisine: e.target.value })
        }
      >
        <option value="">All Cuisines</option>
        <option value="Punjabi">Punjabi</option>
        <option value="South Indian">South Indian</option>
      </select>

      <select
        className="border rounded-lg p-2"
        value={filters.spice || ""}
        onChange={(e) =>
          setFilters({ ...filters, spice: e.target.value })
        }
      >
        <option value="">Any Spice</option>
        <option value="Mild">Mild</option>
        <option value="Medium">Medium</option>
        <option value="Spicy">Spicy</option>
      </select>

      <select
        className="border rounded-lg p-2"
        value={filters.maxPrice || ""}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: e.target.value })
        }
      >
        <option value="">Any Price</option>
        <option value="400">Up to ₹400</option>
        <option value="500">Up to ₹500</option>
        <option value="700">Up to ₹700</option>
      </select>

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
  );
};

export default PreferenceForm;

