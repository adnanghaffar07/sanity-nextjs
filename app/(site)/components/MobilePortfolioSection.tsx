'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const images = [
  '/portfolio-1.png',
  '/portfolio-2.png',
  '/portfolio-3.png',
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  // Clone slides
  const sliderImages = [
    images[images.length - 1], // last clone at beginning
    ...images,
    images[0], // first clone at end
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite effect
  useEffect(() => {
    if (currentIndex === sliderImages.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 700);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(images.length);
      }, 700);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <section
      className="py-10 md:py-20 bg-cover bg-center text-center px-4"
      style={{ backgroundImage: "url('/bg-portfolio.png')" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Our Portfolio
      </h2>

      <div className="relative max-w-3xl mx-auto overflow-hidden">
        
        {/* Slider Track */}
    <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transition ? 'transform 0.7s ease-in-out' : 'none',
        }}
      >
        {sliderImages.map((img, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={img}
              alt={`Slide ${index}`}
              width={850}
              height={500}
              className="object-cover w-full h-[290px] md:h-[570px]"
            />
          </div>
        ))}
      </div>
        {/* Left Button */}
        {/* <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/left-btn.png"
            alt="Previous"
            width={40}
            height={40}
            className="h-6 w-6 md:h-10 md:w-10"
          />
        </button> */}

        {/* Right Button */}
        {/* <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <Image
            src="/right-btn.png"
            alt="Next"
            width={40}
            height={40}
            className="h-6 w-6 md:h-10 md:w-10"
          />
        </button> */}
      </div>

      <div className="mt-10">
        <a
          href="tel:+18505584691"
          className="bg-[#1D92FB] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition duration-300 inline-block"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}