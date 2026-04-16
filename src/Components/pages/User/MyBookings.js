import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "../../Review/ReviewForm";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [recommendedChefs, setRecommendedChefs] = useState([]);
  const [reviewBooking, setReviewBooking] = useState(null);

  useEffect(() => {
    fetchBookings();

    const interval = setInterval(() => {
      fetchBookings();
    }, 5000); // refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bookings.length === 0) return;

    getRecommendations();
  }, [bookings]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:8000/booking/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecommendations = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8000/chef/recommend-from-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setRecommendedChefs(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:8000/booking/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBookings(); // refresh table
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusBadge = (status) => {
    if (status === "pending") {
      return (
        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          Waiting for Chef
        </span>
      );
    }

    if (status === "accepted") {
      return (
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          Accepted
        </span>
      );
    }

    if (status === "rejected") {
      return (
        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
          Rejected
        </span>
      );
    }

    if (status === "completed") {
      return (
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          Completed
        </span>
      );
    }

    if (status === "cancelled") {
      return (
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
          Cancelled
        </span>
      );
    }

    return status;
  };

  const getPaymentBadge = (paymentStatus) => {
    if (paymentStatus === "paid") {
      return <span className="text-green-600 font-semibold">Paid</span>;
    }

    if (paymentStatus === "unpaid") {
      return <span className="text-red-600 font-semibold">Unpaid</span>;
    }

    return paymentStatus;
  };

  const getRefundBadge = (refundStatus) => {
    if (refundStatus === "initiated") {
      return (
        <span className="text-orange-600 font-semibold">Refund Initiated</span>
      );
    }

    if (refundStatus === "refunded") {
      return <span className="text-green-600 font-semibold">Refunded</span>;
    }

    return "-";
  };

  return (
    <div className="p-10 mt-2 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Chef</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Members</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Service</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Refund</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{b.chefId?.name || "Chef"}</td>

                <td className="p-3">
                  {new Date(b.visitDate).toLocaleDateString()}
                </td>

                <td className="p-3">{b.visitTime}</td>

                <td className="p-3">{b.totalMembers}</td>

                <td className="p-3">₹{b.amount}</td>

                <td className="p-3">{getStatusBadge(b.status)}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      b.serviceStatus === "completed"
                        ? "bg-green-100 text-green-700"
                        : b.serviceStatus === "upcoming"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {b.serviceStatus}
                  </span>
                </td>

                <td className="p-3">{getPaymentBadge(b.paymentStatus)}</td>

                <td className="p-3">{getRefundBadge(b.refundStatus)}</td>

                <td className="p-3 space-x-2">
                  {(b.status === "pending" || b.status === "accepted") && (
                    <button
                      onClick={() => cancelBooking(b._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  )}

                  {b.status === "completed" && (
                    <button
                      onClick={() => setReviewBooking(b)}
                      className="bg-orange-500 text-white px-3 py-1 rounded"
                    >
                      Rate Chef ⭐
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {reviewBooking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-[400px]">
              <button
                onClick={() => setReviewBooking(null)}
                className="float-right text-red-500"
              >
                ✕
              </button>

              <ReviewForm chefId={reviewBooking.chefId._id} />
            </div>
          </div>
        )}

        {bookings.length === 0 && (
          <div className="text-center text-gray-500 mt-6">
            No bookings found
          </div>
        )}

        {recommendedChefs.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">
              Recommended Chefs Based On Your Bookings 🍽
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {recommendedChefs.map((chef) => (
                <div
                  key={chef._id}
                  className="bg-white shadow-lg rounded-xl p-4"
                >
                  <img
                    src={chef.profilepic}
                    alt={chef.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />

                  <h3 className="text-lg font-semibold mt-3">{chef.name}</h3>

                  <p className="text-gray-500">{chef.cuisine}</p>

                  <p className="text-yellow-500">⭐ {chef.rating}</p>

                  <p className="font-semibold">₹{chef.pricePerDay} / day</p>

                  <a
                    href={`/chef/${chef._id}`}
                    className="block mt-3 bg-orange-500 text-white text-center py-2 rounded-lg"
                  >
                    View Chef
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
