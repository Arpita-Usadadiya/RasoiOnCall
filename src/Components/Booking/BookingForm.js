import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api";
import ConfirmModal from "./ConfirmModal";

const BookingForm = () => {
  const { chefId } = useParams();
  const navigate = useNavigate();

  const [members, setMembers] = useState(1);
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("03:00 PM");
  const [useCase, setUseCase] = useState("One Time Cooking");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pricingConfig = {
    "One Time Cooking": { base: 499, extra: 100 },
    "Party Chef": { base: 999, extra: 150 },
    "Cook For A Month": { base: 3999, extra: 0 },
  };
  

  const totalPrice =
    pricingConfig[useCase].base +
    (members > 1 ? (members - 1) * pricingConfig[useCase].extra : 0);

  const today = new Date().toISOString().split("T")[0];

  const handleConfirmClick = () => {
    if (!visitDate) {
      alert("Please select visit date");
      return;
    }
    setShowModal(true);
  };

  const handleFinalBooking = async () => {
  const token = localStorage.getItem("token"); // ✅ FIXED

  const bookingData = {
    chefId,
    visitDate,
    visitTime,
    useCase,
    totalMembers: members,
    amount: totalPrice,
  };

  if (!token) {
    localStorage.setItem("pendingBooking", JSON.stringify(bookingData));
    navigate("/login");
    return;
  }

  try {
    setLoading(true);

    await API.post("/booking/createBook", bookingData, {
    });

    setLoading(false);
    setShowModal(false);
    alert("Booking Confirmed ✅");
    navigate("/");
  } catch (error) {
    setLoading(false);
    alert(error.response?.data?.message || "Booking failed");
  }
};

  return (
    <>
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 border mx-auto">
        <h2 className="text-2xl font-bold text-center">Book Your Chef</h2>

        <div className="text-center">
          <p className="text-3xl font-bold text-orange-500">
            ₹ {totalPrice}
          </p>
          <p className="text-sm text-gray-500">Total Amount</p>
        </div>

        <input
          type="date"
          min={today}
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
          className="w-full border p-2 rounded-lg"
        />

        <select
          value={visitTime}
          onChange={(e) => setVisitTime(e.target.value)}
          className="w-full border p-2 rounded-lg"
        >
          <option>03:00 PM</option>
          <option>06:00 PM</option>
          <option>09:00 PM</option>
        </select>

        <select
          value={useCase}
          onChange={(e) => {
            setUseCase(e.target.value);
            setMembers(1);
          }}
          className="w-full border p-2 rounded-lg"
        >
          <option>One Time Cooking</option>
          <option>Party Chef</option>
          <option>Cook For A Month</option>
        </select>

        <div className="flex justify-between items-center">
          <span>Members</span>
          <div className="flex gap-3">
            <button onClick={() => setMembers(Math.max(1, members - 1))}>-</button>
            <span>{members}</span>
            <button onClick={() => setMembers(members + 1)}>+</button>
          </div>
        </div>

        <button
          onClick={handleConfirmClick}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded-xl"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>
      </div>

      <ConfirmModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleFinalBooking}
      />
    </>
  );
};

export default BookingForm;
