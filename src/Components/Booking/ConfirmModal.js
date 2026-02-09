import React, { useState } from "react";
import axios from "axios";

const ConfirmModal = ({ onClose, bookingData }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:8000/booking/create",
        {
          chef: "Auto Assigned",
          bookingDate: bookingData.visitDate,
          status: "Pending",
          notes: `${bookingData.useCase} | Members: ${bookingData.members}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setShowSuccess(true);
    } catch (error) {
      alert("Booking failed. Please login again.");
    }
  };

  return (
    <>
      {!showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <h2 className="text-xl font-bold mb-4">Confirm Booking?</h2>
            <p className="text-gray-600 mb-6">
              Your cook will be booked for the selected date & time.
            </p>

            <div className="flex gap-4">
              <button onClick={onClose} className="w-1/2 border rounded-lg py-2">
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="w-1/2 bg-orange-500 text-white rounded-lg py-2"
              >
                Yes, Book
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <div className="text-green-500 text-5xl mb-4">✔</div>
            <h2 className="text-xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your cook has been successfully booked.
            </p>

            <button
              onClick={onClose}
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmModal;
