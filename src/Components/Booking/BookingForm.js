// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import API from "../../api";
// import ConfirmModal from "./ConfirmModal";

// const stripePromise = loadStripe(
//   "pk_test_51T9GM8D8BP9fCC7uHw91SJQagATA5fnG4DTQVUudm1SlxLbFiiNCPQppCaLactiF94IbuaJ7uoLxyhZfg1nxmkbP00LXjUi8mB",
// );

// const BookingForm = () => {
//   const { chefId } = useParams();
//   const navigate = useNavigate();

//   const [members, setMembers] = useState(1);
//   const [visitDate, setVisitDate] = useState("");
//   const [visitTime, setVisitTime] = useState("03:00 PM");
//   const [useCase, setUseCase] = useState("One Time Cooking");
//   const [paymentMethod, setPaymentMethod] = useState("online");
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const pricingConfig = {
//     "One Time Cooking": { base: 499, extra: 100 },
//     "Party Chef": { base: 999, extra: 150 },
//     "Cook For A Month": { base: 3999, extra: 0 },
//   };

//   console.log("Chef ID:", chefId);
//   const totalPrice =
//     pricingConfig[useCase].base +
//     (members > 1 ? (members - 1) * pricingConfig[useCase].extra : 0);

//   const today = new Date().toISOString().split("T")[0];

//   const handleConfirmClick = () => {
//     if (!visitDate) {
//       alert("Please select visit date");
//       return;
//     }
//     const now = new Date();
//     const selectedDateTime = new Date(`${visitDate} ${visitTime}`);

//     if (selectedDateTime < now) {
//       alert("You cannot book for past time.");
//       return;
//     }

//     setShowModal(true);
//   };

//   const handleFinalBooking = async () => {
//     const token = localStorage.getItem("token");

//     const bookingData = {
//       chefId,
//       visitDate,
//       visitTime,
//       useCase,
//       totalMembers: members,
//       amount: totalPrice,
//       paymentMethod,
//     };

//     if (!token) {
//       localStorage.setItem("pendingBooking", JSON.stringify(bookingData));
//       navigate("/login");
//       return;
//     }

//     try {
//       setLoading(true);

//       // 1️⃣ Create booking first
//       const bookingRes = await API.post(
//         "http://localhost:8000/booking/createBook",
//         bookingData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         },
//       );

//       const bookingId = bookingRes.data.data._id; // ⭐ VERY IMPORTANT

//       // 2️⃣ If COD
//       if (paymentMethod === "cod") {
//         alert("Booking Confirmed ✅ Pay After Service");
//         navigate("/");
//         return;
//       }

//       // 3️⃣ Create Stripe payment session
//       const paymentRes = await API.post("/payment/create-checkout-session", {
//         amount: totalPrice,
//         bookingId: bookingId,
//       });

//       // 4️⃣ Redirect to Stripe Checkout
//       window.location.href = paymentRes.data.url;
//     } catch (error) {
//       console.log(error);
//       alert("Payment Failed");
//     } finally {
//       setLoading(false);
//       setShowModal(false);
//     }
//   };

//  const timeSlots = [
//   "09:00 AM",
//   "12:00 PM",
//   "03:00 PM",
//   "06:00 PM",
//   "09:00 PM",
// ];
//   const filteredTimes = timeSlots.filter((time) => {
//     if (!visitDate) return true;

//     const now = new Date();
//     const selectedDateTime = new Date(`${visitDate} ${time}`);

//     return selectedDateTime > now;
//   });
//   return (
//     <>
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 space-y-6 border mx-auto">
//         <h2 className="text-2xl font-bold text-center">Book Your Chef</h2>

//         <div className="text-center">
//           <p className="text-3xl font-bold text-orange-500">₹ {totalPrice}</p>
//           <p className="text-sm text-gray-500">Total Amount</p>
//         </div>

//         <input
//           type="date"
//           min={today}
//           value={visitDate}
//           onChange={(e) => setVisitDate(e.target.value)}
//           className="w-full border p-2 rounded-lg"
//         />

//       <div className="mt-4">
//   <p className="font-semibold mb-2">Select Time</p>

//   <div className="grid grid-cols-3 gap-3">

//     {filteredTimes.map((time) => (

//       <button
//         key={time}
//         onClick={() => setVisitTime(time)}
//         className={`p-3 border rounded-lg transition
//         ${
//           visitTime === time
//             ? "bg-orange-500 text-white"
//             : "bg-white hover:bg-orange-100"
//         }`}
//       >
//         {time}
//       </button>

//     ))}

//   </div>
// </div>

//         <select
//           value={useCase}
//           onChange={(e) => {
//             setUseCase(e.target.value);
//             setMembers(1);
//           }}
//           className="w-full border p-2 rounded-lg"
//         >
//           <option>One Time Cooking</option>
//           <option>Party Chef</option>
//           <option>Cook For A Month</option>
//         </select>

//         <div className="flex justify-between items-center">
//           <span>Members</span>

//           <div className="flex gap-3">
//             <button onClick={() => setMembers(Math.max(1, members - 1))}>
//               -
//             </button>

//             <span>{members}</span>

//             <button onClick={() => setMembers(members + 1)}>+</button>
//           </div>
//         </div>

//         {/* Payment Method */}

//         <div className="space-y-2">
//           <label className="font-semibold">Payment Method</label>

//           <div className="flex gap-4">
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 value="online"
//                 checked={paymentMethod === "online"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Online Payment
//             </label>

//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 value="cod"
//                 checked={paymentMethod === "cod"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Pay After Service
//             </label>
//           </div>
//         </div>

//         <button
//           onClick={handleConfirmClick}
//           disabled={loading}
//           className="w-full bg-orange-500 text-white py-3 rounded-xl"
//         >
//           {loading ? "Processing..." : "Confirm Booking"}
//         </button>
//       </div>

//       <ConfirmModal
//         show={showModal}
//         onClose={() => setShowModal(false)}
//         onConfirm={handleFinalBooking}
//       />
//     </>
//   );
// };

// export default BookingForm;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api";
import { loadStripe } from "@stripe/stripe-js";
import ConfirmModal from "./ConfirmModal";

const stripePromise = loadStripe(
  "pk_test_51T9GM8D8BP9fCC7uHw91SJQagATA5fnG4DTQVUudm1SlxLbFiiNCPQppCaLactiF94IbuaJ7uoLxyhZfg1nxmkbP00LXjUi8mB",
);

const BookingForm = () => {
  const { chefId } = useParams();
  const navigate = useNavigate();

  const [members, setMembers] = useState(1);
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");
  const [useCase, setUseCase] = useState("One Time Cooking");
  const [paymentMethod, setPaymentMethod] = useState("online");

  const [extraUtensils, setExtraUtensils] = useState(false);
  const [ingredientsNeeded, setIngredientsNeeded] = useState(false);
  const [bbqSetup, setBbqSetup] = useState(false);
  const [waiters, setWaiters] = useState(0);
  const [deepCleaning, setDeepCleaning] = useState(false);
  const [groceryShopping, setGroceryShopping] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  const pricing = {
    "One Time Cooking": 499,
    "Party Chef": 999,
    "Cook For A Month": 3999,
  };

  let totalPrice = pricing[useCase];

  if (members > 1) {
    totalPrice += (members - 1) * 100;
  }

  if (extraUtensils) totalPrice += 300;
  if (ingredientsNeeded) totalPrice += 500;
  if (bbqSetup) totalPrice += 700;
  if (waiters > 0) totalPrice += waiters * 200;
  if (deepCleaning) totalPrice += 400;
  if (groceryShopping) totalPrice += 250;

  const timeSlots = [
    "09:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM",
    "09:00 PM",
  ];

 useEffect(() => {

  if (!visitDate) {
    setBookedSlots([]);
    return;
  }

  const fetchSlots = async () => {

    try {

      const res = await API.get(
        `/booking/booked-slots?chefId=${chefId}&date=${visitDate}`
      );

      setBookedSlots(res.data);

    } catch (error) {

      console.log(error);
      setBookedSlots([]);

    }

  };

  fetchSlots();

}, [visitDate, chefId]);

  const filteredTimes = timeSlots.filter((time) => {
    if (!visitDate) return true;

    const now = new Date();
    const selected = new Date(`${visitDate} ${time}`);

    return selected > now;
  });

  const handleConfirmClick = () => {
    if (!visitDate || !visitTime) {
      alert("Select date and time");
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
      extraUtensils,
      ingredientsNeeded,
      bbqSetup,
      waiters,
      deepCleaning,
      groceryShopping,
    };

     if (!token) {
      localStorage.setItem("pendingBooking", JSON.stringify(bookingData));
      navigate("/login");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Create booking first
      const bookingRes = await API.post(
        "http://localhost:8000/booking/createBook",
        bookingData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      const bookingId = bookingRes.data.data._id; // ⭐ VERY IMPORTANT

      // 2️⃣ If COD
      if (paymentMethod === "cod") {
        alert("Booking Confirmed ✅ Pay After Service");
        navigate("/");
        return;
      }

      // 3️⃣ Create Stripe payment session
      const paymentRes = await API.post("/payment/create-checkout-session", {
        amount: totalPrice,
        bookingId: bookingId,
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center">Book Your Chef 👨‍🍳</h2>

        <div className="text-center">
          <p className="text-3xl font-bold text-orange-500">₹ {totalPrice}</p>

          <p className="text-gray-500 text-sm">
            Dynamic price updates automatically
          </p>
        </div>

        <input
          type="date"
          min={today}
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
          className="w-full border p-3 rounded"
        />

        <div>
          <p className="font-semibold mb-2">Select Time</p>

          <div className="grid grid-cols-3 gap-3">
            {filteredTimes.map((time) => {
              const isBooked = bookedSlots.includes(time);

              return (
                <button
                  key={time}
                  disabled={isBooked}
                  onClick={() => setVisitTime(time)}
                  className={`p-3 border rounded text-sm
${visitTime === time ? "bg-orange-500 text-white" : ""}
${isBooked ? "bg-red-200 text-red-700 cursor-not-allowed" : "hover:bg-orange-100"}
`}
                >
                  {time} {isBooked && "❌"}
                </button>
              );
            })}
          </div>
        </div>

        <select
          value={useCase}
          onChange={(e) => {
            setUseCase(e.target.value);
            setMembers(1);
          }}
          className="w-full border p-3 rounded"
        >
          <option>One Time Cooking</option>
          <option>Party Chef</option>
          <option>Cook For A Month</option>
        </select>

        <div className="flex justify-between items-center">
          <span>Members</span>

          <div className="flex gap-3 items-center">
            <button
              className="px-3 py-1 bg-gray-200"
              onClick={() => setMembers(Math.max(1, members - 1))}
            >
              -
            </button>

            <span>{members}</span>

            <button
              className="px-3 py-1 bg-gray-200"
              onClick={() => setMembers(members + 1)}
            >
              +
            </button>
          </div>
        </div>

        {useCase === "Party Chef" && (
          <div className="border p-4 rounded space-y-3">
            <h3 className="font-semibold">Party Addons</h3>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={extraUtensils}
                onChange={(e) => setExtraUtensils(e.target.checked)}
              />
              Extra Utensils (+300)
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={bbqSetup}
                onChange={(e) => setBbqSetup(e.target.checked)}
              />
              BBQ Setup (+700)
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={ingredientsNeeded}
                onChange={(e) => setIngredientsNeeded(e.target.checked)}
              />
              Chef Brings Ingredients (+500)
            </label>

            <div className="flex justify-between">
              <span>Waiters</span>

              <div className="flex gap-2">
                <button onClick={() => setWaiters(Math.max(0, waiters - 1))}>
                  -
                </button>

                <span>{waiters}</span>

                <button onClick={() => setWaiters(waiters + 1)}>+</button>
              </div>
            </div>
          </div>
        )}

        {useCase === "One Time Cooking" && (
          <div className="border p-4 rounded space-y-3">
            <h3 className="font-semibold">Extra Services</h3>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={deepCleaning}
                onChange={(e) => setDeepCleaning(e.target.checked)}
              />
              Kitchen Deep Cleaning (+400)
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                checked={groceryShopping}
                onChange={(e) => setGroceryShopping(e.target.checked)}
              />
              Chef Buys Groceries (+250)
            </label>
          </div>
        )}

        <button
          onClick={handleConfirmClick}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600"
        >
          {loading ? "Processing..." : "Confirm Booking"}
        </button>

        <ConfirmModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={handleFinalBooking}
        />
      </div>
    </div>
  );
};

export default BookingForm;
