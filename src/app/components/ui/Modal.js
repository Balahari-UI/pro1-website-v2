"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  // Close on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-10 w-[92%] max-w-xl relative shadow-xl transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl text-xl cursor-pointer"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
