"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 2500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 transition-all rounded-full duration-1000 shadow-2xl transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 focus:outline-none text-lg outline-none"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
