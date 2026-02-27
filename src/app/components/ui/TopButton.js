// components/BackToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      className={`fixed cursor-pointer bottom-6 right-6 z-50 p-5 rounded-full bg-secondary text-white shadow-md transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaAnglesUp className="w-5 h-5" />
    </button>
  );
}
