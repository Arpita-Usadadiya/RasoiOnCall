import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import API from "../../api";
import ConfirmModal from "./ConfirmModal";

const stripePromise = loadStripe("pk_test_51T9GM8D8BP9fCC7uHw91SJQagATA5fnG4DTQVUudm1SlxLbFiiNCPQppCaLactiF94IbuaJ7uoLxyhZfg1nxmkbP00LXjUi8mB");

const BookingForm = () => {

  const { chefId } = useParams();
  const navigate = useNavigate();

  const [members, setMembers] = useState(1);
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("03:00 PM");
  const [useCase, setUseCase] = useState("One Time Cooking");
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pricingConfig = {
    "One Time Cooking": { base: 499, extra: 100 },
    "Party Chef": { base: 999, extra: 150 },
    "Cook For A Month": { base: 3999, extra: 0 },
  };

  
console.log("Chef ID:", chefId);
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

  const token = localStorage.getItem("token");

  const bookingData = {
    chefId,
    visitDate,
    visitTime,
    useCase,
    totalMembers: members,
    amount: totalPrice,
    paymentMethod,
  };

  if (!token) {
    localStorage.setItem("pendingBooking", JSON.stringify(bookingData));
    navigate("/login");
    return;
  }

  try {

    setLoading(true);

    // 1️⃣ Create booking first
    const bookingRes = await API.post("http://localhost:8000/booking/createBook", bookingData, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

    const bookingId = bookingRes.data.data._id;   // ⭐ VERY IMPORTANT

    // 2️⃣ If COD
    if (paymentMethod === "cod") {

      alert("Booking Confirmed ✅ Pay After Service");
      navigate("/");
      return;
    }

    // 3️⃣ Create Stripe payment session
    const paymentRes = await API.post("/payment/create-checkout-session", {
      amount: totalPrice,
      bookingId: bookingId
    });

    // 4️⃣ Redirect to Stripe Checkout
    window.location.href = paymentRes.data.url;

  } catch (error) {

    console.log(error);
    alert("Payment Failed");

  } finally {

    setLoading(false);
    setShowModal(false);

  }

};

  return (
    <>
    
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 border mx-auto">

        <h2 className="text-2xl font-bold text-center">
          Book Your Chef
        </h2>

        <div className="text-center">
          <p className="text-3xl font-bold text-orange-500">
            ₹ {totalPrice}
          </p>
          <p className="text-sm text-gray-500">
            Total Amount
          </p>
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
            <button onClick={() => setMembers(Math.max(1, members - 1))}>
              -
            </button>

            <span>{members}</span>

            <button onClick={() => setMembers(members + 1)}>
              +
            </button>
          </div>
        </div>

        {/* Payment Method */}

        <div className="space-y-2">

          <label className="font-semibold">
            Payment Method
          </label>

          <div className="flex gap-4">

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="online"
                checked={paymentMethod === "online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              Online Payment

            </label>

            <label className="flex items-center gap-2">

              <input
                type="radio"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />

              Pay After Service

            </label>

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