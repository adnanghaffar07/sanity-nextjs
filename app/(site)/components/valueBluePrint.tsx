"use client";

import React, { useState, useEffect } from "react";

interface ScrollButtonProps {
  scrollContainerId: string;
  totalItems: number;
  itemsPerPage: number;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  scrollContainerId,
  totalItems,
  itemsPerPage,
}) => {
  const [activeRound, setActiveRound] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const totalRounds = Math.ceil(totalItems / itemsPerPage); // Total number of dots

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId);

    const updateScrollButtons = () => {
      if (scrollContainer) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;
        const newRound = Math.round(
          (scrollLeft / (scrollWidth - clientWidth)) * (totalRounds - 1)
        );
        setActiveRound(newRound);

        // Show/hide buttons based on scroll position
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Set initial visibility
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [scrollContainerId, totalItems, itemsPerPage]);

  const handleRoundClick = (newRound: number) => {
    if (newRound < 0 || newRound >= totalRounds) return;

    setActiveRound(newRound);
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      const { clientWidth, scrollWidth } = scrollContainer;
      const scrollLeft = (newRound / (totalRounds - 1)) * (scrollWidth - clientWidth);

      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Left Scroll Button */}
      {showLeftButton && (
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-[#1D92FB] text-white rounded-full p-3 hidden lg:block"
          onClick={() => handleRoundClick(activeRound - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right Scroll Button */}
      {showRightButton && (
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-[#1D92FB] text-white rounded-full p-3 hidden lg:block"
          onClick={() => handleRoundClick(activeRound + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Pagination Dots (Representing Rounds) */}
      <div className="hidden md:flex gap-1 self-center mt-12 bg-[#1D92FB] py-2.5 px-3 rounded-2xl">
        {Array.from({ length: totalRounds }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleRoundClick(idx)}
            className={`cursor-pointer shrink-0 h-2 rounded-md transition-all duration-300 ${
              activeRound === idx ? "w-10 bg-white" : "w-2 bg-white bg-opacity-20"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollButton;
