import React from "react";

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center">
        <h2 className="text-xl font-bold mb-4">Confirm Booking?</h2>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 border py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="w-1/2 bg-orange-500 text-white py-2 rounded"
          >
            Yes, Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
