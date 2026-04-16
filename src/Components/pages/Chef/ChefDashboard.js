import React, { useEffect, useState } from "react";
import API from "../../../api";
import RatingChart from "../../pages/Chef/RatingChart";
import UserLocationMap from "../../Map/UserLocationMap";

const ChefDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");
  const [notification, setNotification] = useState("");

  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
    completedBookings: 0,
  });

  useEffect(() => {
    fetchBookings();
    fetchStats();
    const interval = setInterval(() => {
      fetchBookings();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/booking/chef/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Bookings:", res.data.data);

      setBookings(res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStats = async () => {
    try {
      const chefId = localStorage.getItem("chefId");

      const res = await API.get(`/review/chef-stats/${chefId}`);

      setStats(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = async (id, status) => {
    const confirmAction = window.confirm(
      `Do you really want to ${status} this booking?`,
    );

    if (!confirmAction) return;

    try {
      await API.put(
        `/booking/chef/status/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status } : b)),
      );

      setNotification(`Booking ${status} successfully`);
      setTimeout(() => setNotification(""), 3000);

      setSelectedBooking(null);
    } catch (error) {
      console.log(error);
    }
  };

  const completeService = async (id) => {
    const confirmAction = window.confirm(
      "Are you sure you want to mark service as completed?",
    );

    if (!confirmAction) return;

    try {
      await API.put(
        `/booking/complete/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setBookings((prev) =>
        prev.map((b) =>
          b._id === id
            ? { ...b, status: "completed", serviceStatus: "completed" }
            : b,
        ),
      );

      setNotification("✅ Service completed successfully");

      setTimeout(() => setNotification(""), 3000);

      setSelectedBooking(null);
    } catch (error) {
      console.log(error);
    }
  };

  const total = bookings.length;

  const pending = bookings.filter(
    (b) => b.status?.toLowerCase() === "pending",
  ).length;

  const accepted = bookings.filter(
    (b) => b.status?.toLowerCase() === "accepted",
  ).length;

  const rejected = bookings.filter(
    (b) => b.status?.toLowerCase() === "rejected",
  ).length;

  const earnings = bookings
    .filter((b) => b.status === "completed")
    .reduce((sum, b) => sum + (b.amount || 0), 0);

  const filteredBookings =
    activeTab === "pending"
      ? bookings.filter((b) => b.status?.toLowerCase() === "pending")
      : bookings.filter(
          (b) =>
            b.status?.toLowerCase() === "accepted" ||
            b.status?.toLowerCase() === "completed" ||
            b.status?.toLowerCase() === "rejected" ||
            b.status?.toLowerCase() === "cancelled",
        );

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-8 pb-32">
      <h1 className="text-3xl font-bold text-center mb-10">Chef Dashboard</h1>

      {notification && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Stats */}
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

      <RatingChart />

      {/* Tabs */}
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "pending"
              ? "bg-orange-500 text-white"
              : "bg-white shadow"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setActiveTab("history")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "history"
              ? "bg-orange-500 text-white"
              : "bg-white shadow"
          }`}
        >
          History
        </button>
      </div>

      {/* Booking Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBookings.map((b) => (
          <div
            key={b._id}
            onClick={() => setSelectedBooking(b)}
            className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {b.userId?.name?.charAt(0) || "U"}
              </div>

              <div className="ml-4">
                <h2 className="text-lg font-semibold">
                  {b.userId?.name || "Unknown"}
                </h2>
                <p className="text-gray-500 text-sm">
                  {b.userId?.phone || "No phone"}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              {b.userId?.addresses?.[0]?.street || "No address"}
            </p>

            {b.status === "completed" && (
              <button
                onClick={(e) => {
                  e.stopPropagation();

                  const confirmDelete = window.confirm(
                    "Remove this booking from history?",
                  );

                  if (!confirmDelete) return;

                  setBookings((prev) => prev.filter((x) => x._id !== b._id));
                }}
                className="mt-3 bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Booking Popup */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[450px] relative shadow-2xl">
            <button
              onClick={() => setSelectedBooking(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Booking Details</h2>

            <p>
              <b>User:</b> {selectedBooking.userId?.name}
            </p>
            <p>
              <b>Phone:</b> {selectedBooking.userId?.phone}
            </p>
            <p>
              <b>Address:</b> {selectedBooking.userId?.addresses?.[0]?.street}
            </p>

            <p>
              <b>Date:</b>{" "}
              {new Date(selectedBooking.visitDate).toLocaleDateString()}
            </p>

            <p>
              <b>Time:</b> {selectedBooking.visitTime}
            </p>

            <UserLocationMap
              lat={selectedBooking.userId?.addresses?.[0]?.latitude}
              lng={selectedBooking.userId?.addresses?.[0]?.longitude}
              name={selectedBooking.userId?.name}
            />

            {selectedBooking.status === "pending" && (
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => handleStatus(selectedBooking._id, "accepted")}
                  className="flex-1 bg-green-500 text-white py-2 rounded"
                >
                  Accept
                </button>

                <button
                  onClick={() => handleStatus(selectedBooking._id, "rejected")}
                  className="flex-1 bg-red-500 text-white py-2 rounded"
                >
                  Reject
                </button>
              </div>
            )}

            {selectedBooking.status === "accepted" && (
              <button
                onClick={() => completeService(selectedBooking._id)}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Mark Service Completed
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChefDashboard;
