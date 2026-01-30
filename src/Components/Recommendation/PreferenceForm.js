const PreferenceForm = ({ onSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-10 grid md:grid-cols-4 gap-4">
      
      <select className="border rounded-lg px-4 py-2">
        <option>Cuisine</option>
        <option>Punjabi</option>
        <option>South Indian</option>
        <option>Jain</option>
      </select>

      <select className="border rounded-lg px-4 py-2">
        <option>Spice Level</option>
        <option>Mild</option>
        <option>Medium</option>
        <option>Spicy</option>
      </select>

      <select className="border rounded-lg px-4 py-2">
        <option>Budget</option>
        <option>₹300 – ₹500</option>
        <option>₹500 – ₹800</option>
      </select>

      <button
        onClick={onSubmit}
        className="bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600"
      >
        Find Best Chef
      </button>
    </div>
  );
};

export default PreferenceForm;
