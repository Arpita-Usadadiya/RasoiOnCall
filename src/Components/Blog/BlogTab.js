import React, { useEffect, useState } from "react";
import axios from "axios";

const TabSwitch = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/blog/getAll");

        // 🔒 Prevent duplicate blogs using _id
        setData((prevData) => {
          const map = new Map();
          [...prevData, ...res.data].forEach((item) => {
            map.set(item._id, item);
          });
          return Array.from(map.values());
        });

        // set default tab safely
        if (res.data.length > 0 && res.data[0].category.length > 0) {
          setActiveTab((prev) => prev || res.data[0].category[0]);
        }
      } catch (err) {
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const fetchBlogDetails = async (id) => {
    setModalLoading(true);
    try {
      const res = await axios.get(`https://rasoioncallbackend.onrender.com/blog/get/${id}`);
      setSelectedBlog(res.data);
      setModalOpen(true);
    } catch (err) {
      console.error("Failed to fetch blog details", err);
    } finally {
      setModalLoading(false);
    }
  };

  // 🔹 Unique categories
  const categories = [
    "All",
    ...new Set(data.flatMap((item) => item.category)),
  ];

  // 🔹 Filter logic
  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.category.includes(activeTab));

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex gap-3 justify-center flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === cat
                  ? "bg-purple-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item._id}
            onClick={() => fetchBlogDetails(item._id)}
            className="bg-white shadow rounded-lg cursor-pointer hover:scale-105 transition"
          >
            <img
              src={`data:image/jpeg;base64,${item.image}`}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.content.slice(0, 90)}...
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span>{new Date(item.updatedAt).toLocaleDateString()}</span>
                <span>~3 min</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-4 text-2xl"
            >
              &times;
            </button>

            {modalLoading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <>
                <img
                  src={`data:image/jpeg;base64,${selectedBlog.image}`}
                  alt={selectedBlog.title}
                  className="w-full h-60 object-cover rounded"
                />
                <h2 className="text-2xl font-bold mt-4">
                  {selectedBlog.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {new Date(selectedBlog.updatedAt).toLocaleDateString()}
                </p>
                <p className="mt-4 text-gray-800">
                  {selectedBlog.content}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabSwitch;
