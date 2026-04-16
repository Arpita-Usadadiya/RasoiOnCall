import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../../../api"; // adjust path if needed
import axios from "axios";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const bookingId = searchParams.get("bookingId");

  useEffect(() => {
    const updatePayment = async () => {
      try {
        if (!bookingId) return;

        await API.put(
          `/booking/update/${bookingId}`,
          {
            paymentStatus: "paid",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
          console.log("Payment updated")
        )
      } catch (error) {
        console.log("Payment update failed:", error);
      }
    };

    if (bookingId) updatePayment();
  }, [bookingId]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Payment Successful
        </h1>

        <p className="text-gray-600 mb-4">
          Your chef booking payment has been completed.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          Booking ID: {bookingId}
        </p>

        <button
          onClick={() => navigate("/my-bookings")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
        >
          View My Bookings
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;