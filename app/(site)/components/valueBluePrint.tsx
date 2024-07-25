'use client';

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

interface ScrollButtonProps {
  scrollContainerId: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ scrollContainerId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const savedIndex = localStorage.getItem('activeIndex');
    if (savedIndex !== null) {
      setActiveIndex(parseInt(savedIndex, 10));
    }

    const scrollContainer = document.getElementById(scrollContainerId);

    const updateScrollButtons = () => {
      if (scrollContainer) {
        const scrollLeft = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;
        const totalScrollWidth = scrollContainer.scrollWidth;

        // Calculate new index based on scroll position
        const newIndex = Math.round((scrollLeft / (totalScrollWidth - containerWidth)) * 3);
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
          localStorage.setItem('activeIndex', newIndex.toString());
        }

        // Show or hide the left button based on scroll position
        setShowLeftButton(scrollLeft > 0);

        // Show or hide the right button based on scroll position
        setShowRightButton(scrollLeft < totalScrollWidth - containerWidth);
      }
    };

    const handleScrollEvent = () => {
      updateScrollButtons();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScrollEvent);
      // Call this once to set initial button visibility
      updateScrollButtons();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScrollEvent);
      }
    };
  }, [scrollContainerId, activeIndex]);

  const handlePageClick = (data: { selected: number }) => {
    const newIndex = data.selected;
    setActiveIndex(newIndex);
    localStorage.setItem('activeIndex', newIndex.toString());

    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      const containerWidth = scrollContainer.clientWidth;
      const totalScrollWidth = scrollContainer.scrollWidth;
      const scrollLeft = (newIndex / 3) * (totalScrollWidth - containerWidth);

      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {showLeftButton && (
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 hidden lg:block"
          onClick={() => handlePageClick({ selected: activeIndex - 1 })}
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
      {showRightButton && (
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-3 hidden lg:block"
          onClick={() => handlePageClick({ selected: activeIndex + 1 })}
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
      )}
      <div className="hidden md:flex gap-1 self-center px-5 mt-12 w-[66px] max-md:mt-10">
        <div
          className={`shrink-0 w-full h-2 rounded-md transition-colors duration-300 ${activeIndex === 0 ? 'bg-black' : 'bg-black bg-opacity-10'}`}
        />
        <div
          className={`shrink-0 w-full h-2 rounded-md transition-colors duration-300 ${activeIndex === 1 ? 'bg-black' : 'bg-black bg-opacity-10'}`}
        />
        <div
          className={`shrink-0 w-full h-2 rounded-md transition-colors duration-300 ${activeIndex === 2 ? 'bg-black' : 'bg-black bg-opacity-10'}`}
        />
        <div
          className={`shrink-0 w-full h-2 rounded-md transition-colors duration-300 ${activeIndex === 3 ? 'bg-black' : 'bg-black bg-opacity-10'}`}
        />
      </div>
      <ReactPaginate
        previousLabel={null}
        nextLabel={null}
        breakLabel={null}
        pageCount={4}
        marginPagesDisplayed={0}
        pageRangeDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={'pagination hidden'}
        activeClassName={'active'}
      />
    </>
  );
};

export default ScrollButton;
