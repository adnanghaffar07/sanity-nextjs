'use client';

import { useState } from 'react';
import Image from 'next/image';

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

      {/* Image Slider with side buttons */}
      <div className="relative max-w-3xl mx-auto">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-10"
          aria-label="Previous Slide"
        >
          ←
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
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition z-10"
          aria-label="Next Slide"
        >
          →
        </button>
      </div>

      {/* Contact Button */}
      <div className="mt-10">
        <a
          href="#contact-box"
          className="bg-[#F7E022] hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
