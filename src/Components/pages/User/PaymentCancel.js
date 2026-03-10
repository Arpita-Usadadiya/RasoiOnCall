import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancel = () => {

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-red-50">

      <div className="bg-white shadow-xl rounded-xl p-8 text-center">

        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Payment Failed ❌
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment was not completed.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg"
        >
          Try Again
        </button>

      </div>

    </div>
  );
};

export default PaymentCancel;