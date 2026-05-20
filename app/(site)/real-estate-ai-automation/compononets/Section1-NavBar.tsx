"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const RealEstateNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.position = "relative";
      document.body.style.width = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "relative";
      document.body.style.width = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleAuditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const auditSection = document.querySelector("#audit");
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Results", href: "#results" },
  ];

  return (
    <>
      <nav
        className= "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95 backdrop-blur-xl border-b border-[#3498db]/20 py-4"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link 
              href="/real-estate-tech" 
              className="relative z-50"
            >
              <img 
                src="/logo.svg" 
                alt="CodeAutomation.ai Logo" 
                className="w-auto h-8 sm:h-10 md:h-12 transition-transform duration-300 hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveLink(link.name);
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`
                    relative text-sm font-medium tracking-wide transition-all duration-300 py-2
                    ${activeLink === link.name 
                      ? "text-[#3498db]" 
                      : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                  <span className={`
                    absolute -bottom-0 left-0 w-full h-0.5 bg-[#3498db] rounded-full transition-all duration-300
                    ${activeLink === link.name 
                      ? "scale-x-100 opacity-100" 
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }
                  `} />
                </a>
              ))}
            </div>

            {/* Desktop CTA - Hidden on mobile/tablet */}
            <div className="hidden md:block">
              <a
                href="#audit"
                onClick={handleAuditClick}
                className="group relative px-5 py-2 bg-[#f7e022] hover:bg-[#e6cd1a] text-black font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#f7e022]/25 active:scale-95 flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <span className="relative whitespace-nowrap">Get free audit</span>
                <svg 
                  className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button - Visible only on mobile/tablet */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative flex flex-col justify-between">
                <span className={`absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`} />
                <span className={`absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "top-2"}`} />
                <span className={`absolute w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Fixed position */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
            
            {/* Menu Content */}
            <div className="relative h-full overflow-y-auto pt-20 pb-8">
              <div className="flex flex-col px-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(link.name);
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      text-xl font-medium py-4 px-5 rounded-xl transition-all duration-300 text-center
                      ${activeLink === link.name 
                        ? "text-[#3498db] bg-[#3498db]/10" 
                        : "text-white/80 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="pt-6 px-4">
                  <a
                    href="#audit"
                    onClick={handleAuditClick}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#f7e022] hover:bg-[#e6cd1a] text-black font-semibold text-lg rounded-xl transition-all duration-300"
                  >
                    <span>Get free audit</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-[60px] sm:h-[68px] md:h-[76px] lg:h-[80px]" />
    </>
  );
};

export default RealEstateNavbar;