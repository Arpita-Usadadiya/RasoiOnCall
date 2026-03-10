import React, { useEffect, useState } from "react";
import API from "../../../api";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await API.get("/booking/get", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setBookings(res.data.data);
  };

  const getStatusColor = (status) => {
    if (status === "accepted") return "text-green-600";
    if (status === "rejected") return "text-red-600";
    return "text-yellow-600";
  };

  const getStatusBadge = (status) => {
    if (status === "accepted")
      return "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm";

    if (status === "rejected")
      return "bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm";

    return "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm";
  };

  const getPaymentDisplay = (paymentStatus) => {
    if (paymentStatus === "paid")
      return <span className="text-green-600 font-semibold">✅ Paid</span>;

    return <span className="text-red-500 font-semibold">❌ Unpaid</span>;
  };

  const getServiceDisplay = (serviceStatus) => {
    if (serviceStatus === "completed")
      return <span className="text-green-600">✅ Completed</span>;

    if (serviceStatus === "upcoming")
      return <span className="text-blue-600">⏳ Upcoming</span>;

    if (serviceStatus === "cancelled")
      return <span className="text-red-500">❌ Cancelled</span>;

    return <span className="text-yellow-600">⌛ Waiting</span>;
  };

  return (
    <div className="p-10 mt-24 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <table className="w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Chef</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Accept/Reject</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Arrival</th>
              <th className="p-3">Service</th>
              <th className="p-3">Status</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="border-t hover:bg-gray-50 transition">
                <td className="p-3">{b.chefId?.name || "Chef"}</td>

                <td className="p-3">
                  {new Date(b.visitDate).toLocaleDateString()}
                </td>

                <td className="p-3">{b.visitTime}</td>

                <td className="p-3">
                  <span className={getStatusBadge(b.status)}>{b.status}</span>
                </td>

                <td className="p-3">{getPaymentDisplay(b.paymentStatus)}</td>

                <td
                  className={`p-3 font-semibold ${
                    b.paymentStatus === "paid"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {b.paymentStatus || "unpaid"}
                </td>

                <td className="p-3">{b.chefArrivalTime || "Not assigned"}</td>

                <td
                  className={`p-3 ${
                    b.serviceStatus === "completed"
                      ? "text-gray-600"
                      : "text-blue-600"
                  }`}
                >
                  {b.serviceStatus || "upcoming"}
                </td>

                <td className="p-3">₹{b.amount}</td>
                <td className="p-3">
                  {b.serviceStatus === "completed" && "✅ Completed"}
                  {b.serviceStatus === "upcoming" && "⏳ Upcoming"}
                  {b.serviceStatus === "pending" && "⌛ Waiting Chef"}
                  {b.serviceStatus === "cancelled" && "❌ Cancelled"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {bookings.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No bookings yet</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
