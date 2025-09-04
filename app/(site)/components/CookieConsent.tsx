"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 8000); // 👈 delay in ms (3 seconds)

      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    setShowBanner(false);
    // Optionally save decline choice:
    // Cookies.set("cookieConsent", "declined", { expires: 365 });
  };

  return (
    showBanner && (
      <div className="fixed bottom-0 z-[999] w-full bg-[#111827] text-white px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-6 transition-opacity duration-500">
        {/* Text Section */}
        <div className="max-w-3xl">
          <h2 className="font-bold text-xl md:text-2xl mb-2">We Use Cookies</h2>
          <p className="text-sm md:text-base leading-relaxed">
            We use cookies to personalize content, provide social media
            features, and analyze our traffic. By clicking{" "}
            <strong>‘Accept’</strong>, you agree to our use of cookies as
            described in our{" "}
            <Link
              href="/cookies-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#60A5FA] hover:text-[#3B82F6]"
            >
              Cookie Policy
            </Link>.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row md:flex-col gap-3">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 rounded-lg bg-[#1D92FB] text-white font-medium shadow-md hover:bg-[#1477d9] transition"
          >
            I accept cookies
          </button>
          <button
            onClick={declineCookies}
            className="px-6 py-2 rounded-lg border border-gray-400 text-white font-medium hover:bg-gray-100 transition hover:text-black"
          >
            I refuse cookies
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
