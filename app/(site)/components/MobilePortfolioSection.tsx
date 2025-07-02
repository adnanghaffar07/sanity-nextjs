'use client';

import { useState } from 'react';
import Image from 'next/image';
import ButtonScrollToSection from './ButtonScrollToSection';

const portfolioImages = [
  '/portfolio-1.png',
  '/portfolio-2.png',
  '/portfolio-3.png',
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#001E6B] mb-10">
        Our Portfolio
      </h2>

      {/* Image Slider Container */}
      <div className="relative max-w-3xl mx-auto flex items-center justify-center">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-[10px] md:left-[-60px] top-1/2 transform -translate-y-1/2 z-10"
          aria-label="Previous Slide"
        >
          <Image src="/left-btn.png" alt="Previous" width={40} height={40} />
        </button>

        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src={portfolioImages[currentIndex]}
            alt={`Portfolio ${currentIndex + 1}`}
            width={800}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-[10px] md:right-[-60px] top-1/2 transform -translate-y-1/2 z-10"
          aria-label="Next Slide"
        >
          <Image src="/right-btn.png" alt="Next" width={40} height={40} />
        </button>
      </div>

      {/* Contact Button */}
      <div className="mt-10">
        <a
          href="tel:+18505584691"
          className="bg-[#1D92FB] hover:bg-blue-700 cursor-pointer text-white font-semibold px-8 py-3 rounded-md transition duration-300 inline-block"
        >
          Contact Us
        </a>

      </div>
    </section>
  );
}
