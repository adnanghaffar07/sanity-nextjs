'use client';

import { useEffect, useState } from 'react';

export default function FloatingConsultButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = () => {
    window.open('https://calendly.com/adnanghaffar', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-[9999] w-max transition-opacity duration-300">
      <button
        onClick={openCalendly}
        className="rotate-90 origin-top-right bg-[#1D92FB] text-white text-xl rounded-l-none rounded-r-full px-4 py-2 shadow-md hover:bg-blue-600 transition-all"
      >
        Get Your <span className="text-black">Free</span> Consultation
      </button>
    </div>
  );
}
