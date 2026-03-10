import React, { useEffect, useState } from "react";
import API from "../../../api";
import RatingChart from "../Chef/RatingChart";

const ChefDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [stats, setStats] = useState({
  averageRating: 0,
  totalReviews: 0,
  completedBookings: 0,
});

  useEffect(() => {
    fetchBookings();
      fetchStats();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/booking/chef-notifications", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setBookings(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch chef bookings", err);
    }
  };

  const fetchStats = async () => {
  try {

    const chefId = localStorage.getItem("chefId");

    const res = await API.get(`/review/chef-stats/${chefId}`);

    setStats(res.data.data);

  } catch (err) {
    console.error("Failed to load stats", err);
  }
};

  const handleStatus = async (id, status) => {
  try {
    // 1️⃣ Update UI instantly
    setBookings((prev) =>
      prev.map((b) =>
        b._id === id ? { ...b, status: status } : b
      )
    );

    // 2️⃣ Call API
    await API.put(
      `/booking/chef/status/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

  } catch (err) {
    console.error("Failed to update status", err);
  }
};

  const getStatusColor = (status) => {
    const s = status?.toLowerCase();

    if (s === "accepted") return "bg-green-100 text-green-700";
    if (s === "rejected") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  /* -------- Dashboard Stats -------- */

  const total = bookings.length;

  const pending = bookings.filter(
    (b) => b.status?.toLowerCase() === "pending"
  ).length;

  const accepted = bookings.filter(
    (b) => b.status?.toLowerCase() === "accepted"
  ).length;

  const rejected = bookings.filter(
    (b) => b.status?.toLowerCase() === "rejected"
  ).length;

  const earnings = accepted * 500; // change price if needed

  /* -------- Filter Tabs -------- */

  const filteredBookings =
    activeTab === "pending"
      ? bookings.filter((b) => b.status?.toLowerCase() === "pending")
      : bookings.filter((b) => b.status?.toLowerCase() !== "pending");

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-8">

      <h1 className="text-3xl font-bold mb-8 text-center">
        👨‍🍳 Chef Dashboard
      </h1>

      {/* Stats Section */}

      <div className="grid md:grid-cols-5 gap-6 mb-10">

        <div className="bg-white shadow rounded-xl p-5 text-center">
          <p className="text-gray-500">Total</p>
          <h2 className="text-2xl font-bold">{total}</h2>
        </div>

        <div className="bg-yellow-50 shadow rounded-xl p-5 text-center">
          <p className="text-yellow-600">Pending</p>
          <h2 className="text-2xl font-bold">{pending}</h2>
        </div>

        <div className="bg-green-50 shadow rounded-xl p-5 text-center">
          <p className="text-green-600">Accepted</p>
          <h2 className="text-2xl font-bold">{accepted}</h2>
        </div>

        <div className="bg-red-50 shadow rounded-xl p-5 text-center">
          <p className="text-red-600">Rejected</p>
          <h2 className="text-2xl font-bold">{rejected}</h2>
        </div>

        <div className="bg-orange-50 shadow rounded-xl p-5 text-center">
          <p className="text-orange-600">Earnings</p>
          <h2 className="text-2xl font-bold">₹{earnings}</h2>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">

  <div className="bg-yellow-50 shadow rounded-xl p-5 text-center">
    <p className="text-yellow-600">⭐ Average Rating</p>
    <h2 className="text-2xl font-bold">
      {stats.averageRating}
    </h2>
  </div>

  <div className="bg-blue-50 shadow rounded-xl p-5 text-center">
    <p className="text-blue-600">💬 Total Reviews</p>
    <h2 className="text-2xl font-bold">
      {stats.totalReviews}
    </h2>
  </div>

  <div className="bg-green-50 shadow rounded-xl p-5 text-center">
    <p className="text-green-600">📅 Completed Bookings</p>
    <h2 className="text-2xl font-bold">
      {stats.completedBookings}
    </h2>
  </div>

</div>

      <RatingChart />

      {/* Tabs */}

      <div className="flex justify-center gap-6 mb-8">

        <button
          onClick={() => setActiveTab("pending")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "pending"
              ? "bg-orange-500 text-white"
              : "bg-white shadow"
          }`}
        >
          Pending Bookings
        </button>

        <button
          onClick={() => setActiveTab("history")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "history"
              ? "bg-orange-500 text-white"
              : "bg-white shadow"
          }`}
        >
          Booking History
        </button>

      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center text-gray-500 text-lg">
          No bookings found
        </div>
      )}

      {/* Booking Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredBookings.map((b) => {
          const status = b.status?.toLowerCase();

          return (
            <div
              key={b._id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition border"
            >

              {/* User Info */}

              <div className="flex items-center mb-4">

                <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {b.userId?.name?.charAt(0) || "U"}
                </div>

                <div className="ml-4">
                  <h2 className="text-lg font-semibold">
                    {b.userId?.name || "Unknown User"}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {b.userId?.phone || "No phone"}
                  </p>
                </div>

              </div>

              {/* Booking Details */}

              <div className="space-y-2 text-gray-700 text-sm">

                <p>
                  📍 <b>Location:</b>{" "}
                  {b.userId?.addresses?.[0]
                    ? `${b.userId.addresses[0].city}, ${b.userId.addresses[0].state}`
                    : "No address provided"}
                </p>

                <p>
                  📅 <b>Date:</b>{" "}
                  {b.visitDate
                    ? new Date(b.visitDate).toLocaleDateString()
                    : "N/A"}
                </p>

                <p>
                  ⏰ <b>Time:</b> {b.visitTime || "N/A"}
                </p>

                <p>
                  📌 <b>Status:</b>{" "}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </p>

              </div>

              {status === "pending" && (
                <div className="mt-5 flex gap-3">

                  <button
                    onClick={() => handleStatus(b._id, "accepted")}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleStatus(b._id, "rejected")}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                  >
                    Reject
                  </button>

                </div>
              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default ChefDashboard;