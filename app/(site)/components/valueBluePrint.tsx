'use client';

import React, { useState, useEffect } from 'react';

interface ScrollButtonProps {
  scrollContainerId: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollContainerId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);

  useEffect(() => {
    const savedIndex = localStorage.getItem('activeIndex');
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10));
    }

    const scrollContainer = document.getElementById(scrollContainerId);

    const handleScrollEvent = () => {
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;
        const totalScrollWidth = scrollContainer.scrollWidth;

        // Check if the scroll is at the very beginning
        if (scrollLeft === 0) {
          setActiveIndex(0);
        } else {
          // Calculate new index based on scroll position
          const newIndex = Math.round((scrollLeft / (totalScrollWidth - containerWidth)) * 3);
          if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            localStorage.setItem('activeIndex', newIndex.toString());
          }
        }

        // Show or hide the left button based on scroll position
        setShowLeftButton(scrollLeft > 0);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScrollEvent);
      }
    };
  }, [scrollContainerId, activeIndex]);

  const handleRightScroll = () => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 700,
        behavior: 'smooth',
      });
    }
  };

  const handleLeftScroll = () => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -700,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {showLeftButton && (
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 hidden lg:block"
          onClick={handleLeftScroll}
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 hidden lg:block"
        onClick={handleRightScroll}
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
      <div className="hidden md:flex gap-1 self-center px-5 mt-12 w-[66px] max-md:mt-10">
  <div className={`shrink-0 w-full h-2 rounded-md ${activeIndex === 0 ? 'bg-black' : 'bg-black bg-opacity-10'}`} />
  <div className={`shrink-0 w-full h-2 rounded-md ${activeIndex === 1 ? 'bg-black' : 'bg-black bg-opacity-10'}`} />
  <div className={`shrink-0 w-full h-2 rounded-md ${activeIndex === 2 ? 'bg-black' : 'bg-black bg-opacity-10'}`} />
  <div className={`shrink-0 w-full h-2 rounded-md ${activeIndex === 3 ? 'bg-black' : 'bg-black bg-opacity-10'}`} />
</div>

    </>
  );
};

export default ScrollButton;
