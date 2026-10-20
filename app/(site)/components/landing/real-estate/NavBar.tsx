"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const RealEstateNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const handleAuditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("#audit");
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Results", href: "#results" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          bg-black/95 backdrop-blur-xl
          border-b border-[#3498db]/20
          ${isScrolled ? "py-3" : "py-4"}
        `}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LOGO */}
            <Link
              href="/real-estate-tech"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative z-20"
            >
              <img
                src="/logo.svg"
                alt="CodeAutomation.ai Logo"
                className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.name);
                    scrollToSection(link.href);
                  }}
                  className={`
                    group relative py-2 text-sm font-medium tracking-wide transition-all duration-300
                    ${
                      activeLink === link.name
                        ? "text-[#3498db]"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#3498db]
                      origin-left transition-all duration-300
                      ${
                        activeLink === link.name
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }
                    `}
                  />
                </a>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <a
                href="#audit"
                onClick={handleAuditClick}
                className="
                  group relative overflow-hidden
                  flex items-center gap-2
                  rounded-lg
                  bg-[#f7e022] px-5 py-2
                  text-sm font-semibold text-black
                  transition-all duration-300
                  hover:bg-[#e6cd1a]
                  hover:shadow-lg hover:shadow-[#f7e022]/25
                  active:scale-95
                "
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative whitespace-nowrap">
                  Get free audit
                </span>

                <svg
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="
                md:hidden relative z-20
                flex h-10 w-10 items-center justify-center
                rounded-lg
                bg-white/5 backdrop-blur-sm
                transition-all duration-300
                hover:bg-white/10 hover:scale-105
                active:scale-95
              "
              aria-label="Open menu"
            >
              <div className="relative h-4 w-5">
                <span className="absolute left-0 top-0 h-0.5 w-full rounded-full bg-white transition-all duration-300" />
                <span className="absolute left-0 top-2 h-0.5 w-full rounded-full bg-white transition-all duration-300" />
                <span className="absolute left-0 top-4 h-0.5 w-full rounded-full bg-white transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* PREMIUM MOBILE MENU OVERLAY */}
    {/* MOBILE MENU OVERLAY */}
{isMobileMenuOpen && (
  <div className="fixed inset-0 z-[999] md:hidden overflow-hidden bg-black text-white">
    
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-[-120px] right-[-80px] h-[300px] w-[300px] rounded-full bg-[#3498db]/20 blur-3xl" />
      <div className="absolute bottom-[-150px] left-[-100px] h-[300px] w-[300px] rounded-full bg-[#f7e022]/10 blur-3xl" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>

    {/* Main Content */}
    <div className="relative flex min-h-screen flex-col">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 pt-5">
        
        {/* Logo Container */}
        <Link
          href="/real-estate-tech"
          onClick={() => setIsMobileMenuOpen(false)}
          className="
            flex items-center
            rounded-2xl
            border border-white/10
            bg-white/5
            px-4 py-3
            backdrop-blur-xl
          "
        >
          <img
            src="/logo.svg"
            alt="CodeAutomation.ai Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="
            group
            flex h-12 w-12 items-center justify-center
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            transition-all duration-300
            hover:scale-105
            hover:bg-white/10
            active:scale-95
          "
          aria-label="Close menu"
        >
          <svg
            className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Menu Content */}
      <div className="flex flex-1 flex-col justify-center px-6 pb-10 pt-8">
        
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#3498db]">
            Navigation
          </p>

          <h2 className="max-w-[260px] text-2xl font-bold leading-tight">
            AI systems for modern real estate teams.
          </h2>
        </div>

        {/* Nav Links */}
        <div className="space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.name);
                scrollToSection(link.href);
              }}
              className="
                group relative overflow-hidden
                flex items-center justify-between
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-4 py-3
                backdrop-blur-xl
                transition-all duration-300
                hover:border-[#3498db]/40
                hover:bg-white/[0.06]
                hover:translate-x-1
              "
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3498db]/10 to-transparent" />
              </div>

              <div className="relative flex items-center gap-4">
                
                {/* Number */}
                <span className="text-sm font-medium text-white/30">
                  0{index + 1}
                </span>

                {/* Link Text */}
                <span
                  className={`
                    text-xl font-semibold transition-colors duration-300
                    ${
                      activeLink === link.name
                        ? "text-[#3498db]"
                        : "text-white"
                    }
                  `}
                >
                  {link.name}
                </span>
              </div>

              {/* Arrow */}
              <svg
                className="
                  relative h-5 w-5 text-white/40
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#3498db]
                "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-6-6l6 6-6 6"
                />
              </svg>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#audit"
            onClick={handleAuditClick}
            className="
              group relative overflow-hidden
              flex w-full items-center justify-center gap-3
              rounded-2xl
              bg-[#f7e022]
              px-4 py-3
              text-lg font-semibold text-black
              shadow-2xl shadow-[#f7e022]/20
              transition-all duration-300
              hover:scale-[1.02]
              hover:bg-[#ffe81a]
              active:scale-[0.98]
            "
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">Get free audit</span>

            <svg
              className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Bottom Text */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm leading-relaxed text-white/40">
            AI automation systems for brokers, property managers, and real estate operators across the USA.
          </p>
        </div>
      </div>
    </div>
  </div>
)}

      {/* SPACER */}
      <div className="h-[72px] sm:h-[76px] md:h-[84px]" />

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default RealEstateNavbar;