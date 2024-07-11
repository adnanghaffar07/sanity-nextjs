"use client"
// ScrollButton.tsx
import React from 'react';

interface ScrollButtonProps {
  scrollContainerId: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollContainerId }) => {
  const handleScroll = () => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 700,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3"
      onClick={handleScroll}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
