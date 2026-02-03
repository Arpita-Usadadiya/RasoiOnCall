import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";

const BookingForm = () => {
  const [members, setMembers] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const pricingConfig = {
    "One Time Cooking": {
      base: 499,
      extra: 100,
    },
    "Festive Feast at Home": {
      base: 999,
      extra: 150,
    },
    "House Party": {
      base: 999,
      extra: 150,
    },
    "Monthly Cook": {
      base: 3999,
      extra: 0,
    },
  };

  const [useCase, setUseCase] = useState("One Time Cooking");

  const basePrice = pricingConfig[useCase].base;
  const extraPerPerson = pricingConfig[useCase].extra;

  const totalPrice =
    basePrice + (members > 1 ? (members - 1) * extraPerPerson : 0);
  return (
    <>
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 space-y-6">
        {/* Amount */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-500">Payable Amount</p>
            <p className="text-2xl font-bold">₹{totalPrice}</p>

            {extraPerPerson > 0 && (
              <p className="text-xs text-orange-500">
                + ₹{extraPerPerson} per extra person
              </p>
            )}

            {useCase === "Monthly Cook" && (
              <p className="text-xs text-green-600">
                Monthly subscription pricing
              </p>
            )}
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Continue
          </button>
        </div>

        {/* Date */}
        <div>
          <label className="font-semibold">Select visit date</label>
          <input type="date" className="w-full mt-2 border rounded-lg p-3" />
        </div>

        {/* Time */}
        <div>
          <label className="font-semibold">Select time of visit</label>
          <select className="w-full mt-2 border rounded-lg p-3">
            <option>03:00 PM</option>
            <option>06:00 PM</option>
            <option>09:00 PM</option>
          </select>
        </div>

        {/* Use Case */}
        <div>
          <label className="font-semibold">Select your use case</label>
          <select
            value={useCase}
            onChange={(e) => {
              setUseCase(e.target.value);
              setMembers(1); // reset members on use-case change (UX best practice)
            }}
            className="w-full mt-2 border rounded-lg p-3"
          >
            <option>One Time Cooking</option>
            <option>House Party</option>
            <option>Monthly Cook</option>
          </select>
        </div>

        {/* Members */}
        <div className="border rounded-lg p-4">
          <p className="font-semibold mb-2">Total members</p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMembers(Math.max(1, members - 1))}
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span className="font-bold">{members}</span>
            <button
              onClick={() => setMembers(members + 1)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>
          <p className="text-sm text-orange-500 mt-2">
            Extra ₹100 per person after 1 member
          </p>
        </div>

        {/* Confirm */}
        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold"
        >
          Confirm Booking
        </button>
      </div>

      {showModal && <ConfirmModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default BookingForm;
