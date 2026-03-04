'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function MobileAppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneNumber = '+1-850-558-4691';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-[#001E6B] backdrop-blur-md shadow-lg' : 'bg-[#001E6B] backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          <Image
            src="/logo.svg"
            alt="CodeAutomation Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-yellow-400 transition-colors text-sm font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('industries')}
            className="text-white hover:text-yellow-400 transition-colors text-sm font-medium"
          >
            Industries We Serve
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-white hover:text-yellow-400 transition-colors text-sm font-medium"
          >
            Our Portfolio
          </button>
        </nav>

        {/* Phone CTA - Desktop */}
        <a
          href={`tel:${phoneNumber}`}
          className="hidden sm:flex items-center space-x-2 bg-[#F7E022] hover:bg-yellow-400 text-black font-bold px-4 py-2 rounded-md transition-colors text-sm md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.16 3.49a1 1 0 01-.27 1.09l-1.47 1.47a16.018 16.018 0 006.36 6.36l1.47-1.47a1 1 0 011.09-.27l3.49 1.16a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
            />
          </svg>
          <span>{phoneNumber}</span>
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center bg-[#F7E022] hover:bg-yellow-500 text-black font-bold p-2 rounded-md transition-colors"
            aria-label="Call us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.16 3.49a1 1 0 01-.27 1.09l-1.47 1.47a16.018 16.018 0 006.36 6.36l1.47-1.47a1 1 0 011.09-.27l3.49 1.16a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
              />
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#001E6B] border-t border-blue-400/20">
          <nav className="flex flex-col px-4 sm:px-6 py-6">
            {/* Services Item */}
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-all duration-200 text-left font-medium py-4 px-3 rounded-lg hover:bg-blue-800/50 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-yellow-400 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15a23.931 23.931 0 01-9-1.745M12 9a3 3 0 100-6 3 3 0 000 6zm-16 9a9 9 0 0118 0v6h-2v-6a7 7 0 00-14 0v6H0v-6z"
                />
              </svg>
              <span>Services</span>
            </button>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-blue-400/20 via-blue-400/10 to-transparent my-2" />

            {/* Industries Item */}
            <button
              onClick={() => scrollToSection('industries')}
              className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-all duration-200 text-left font-medium py-4 px-3 rounded-lg hover:bg-blue-800/50 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-yellow-400 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m0 0H9m0 0h5.5m0 0V9.413c0-.894.5-1.69-1.5-2.271m0 0L9 9m0 0l-.5-.729m0 0C7.5 6.84 6 6 6 4.413V4"
                />
              </svg>
              <span>Industries We Serve</span>
            </button>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-blue-400/20 via-blue-400/10 to-transparent my-2" />

            {/* Portfolio Item */}
            <button
              onClick={() => scrollToSection('portfolio')}
              className="flex items-center space-x-3 text-white hover:text-yellow-400 transition-all duration-200 text-left font-medium py-4 px-3 rounded-lg hover:bg-blue-800/50 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 group-hover:text-yellow-400 transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Our Portfolio</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
