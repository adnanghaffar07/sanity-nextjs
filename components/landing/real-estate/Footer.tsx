import React from "react";
import Image from "next/image";
import Link from "next/link";

const RealEstateFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3498db 1px, transparent 0)`,
          backgroundSize: "50px 50px",
          opacity: 0.03,
        }}
      />

      {/* Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[200px] bg-[#3498db]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/real-estate-ai-automation" className="inline-block group">
            <Image src="/logo.svg" alt="CodeAutomation.ai Logo" width={240} height={48} className="w-auto h-10 sm:h-12 mx-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center max-w-xs sm:max-w-md mx-auto mb-8 sm:mb-10 px-4">
          Building AI automation for the businesses that run America.
        </p>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10">

          {/* Mobile Layout */}
          <div className="block sm:hidden space-y-4">

            {/* Address */}
            <div className="flex items-start justify-center gap-2 text-center px-4">
              <svg
                className="w-4 h-4 text-[#3498db] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="text-gray-400 text-xs text-left break-words">
                Office 254, 1755 Park St Suite 200, Naperville, IL 60563
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 text-[#3498db] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <a
                href="tel:8505584691"
                className="text-gray-400 hover:text-[#3498db] transition-colors text-xs"
              >
                850 558 4691
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 text-[#3498db] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <a
                href="mailto:info@codeautomation.ai"
                className="text-gray-400 hover:text-[#3498db] transition-colors text-xs break-all"
              >
                info@codeautomation.ai
              </a>
            </div>
          </div>

          {/* Tablet/Desktop Layout */}
          <div className="hidden sm:flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 md:gap-6 px-4">

            {/* Address */}
            <div className="flex items-center gap-2 max-w-full">
              <svg
                className="w-4 h-4 text-[#3498db] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="text-gray-400 text-sm break-words text-center">
                1755 Park St Suite 200, Naperville, IL 60563
              </span>
            </div>

            <span className="hidden md:inline text-white/10">|</span>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#3498db] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <a
                href="tel:8505584691"
                className="text-gray-400 hover:text-[#3498db] transition-colors text-sm"
              >
                850 558 4691
              </a>
            </div>

            <span className="hidden md:inline text-white/10">|</span>

            {/* Email */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[#3498db] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <a
                href="mailto:info@codeautomation.ai"
                className="text-gray-400 hover:text-[#3498db] transition-colors text-sm break-all"
              >
                info@codeautomation.ai
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-full mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6 sm:my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
          
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            © {currentYear} CodeAutomation.ai. All rights reserved.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <Link
              href="/privacypolicy"
              className="text-gray-500 hover:text-[#3498db] transition-colors text-xs sm:text-sm"
            >
              Privacy Policy
            </Link>

            <span className="text-white/10 text-xs">·</span>

            <Link
              href="/termsandconditions"
              className="text-gray-500 hover:text-[#3498db] transition-colors text-xs sm:text-sm"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RealEstateFooter;