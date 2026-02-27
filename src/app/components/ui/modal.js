import React from "react";

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 text-center shadow-xl animate-fadeIn">
        <h2 className="text-xl font-bold text-cetacean-blue mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-secondary text-white px-6 py-2 rounded-md font-semibold hover:bg-cetacean-blue transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
