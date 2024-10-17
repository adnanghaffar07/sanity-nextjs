"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the cookie consent has already been given
    const consent = Cookies.get("cookieConsent");
    // Show the banner only if the cookie does not exist
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set the cookie to indicate consent
    Cookies.set("cookieConsent", "true", { expires: 365 }); // Cookie expires in 1 year
    setShowBanner(false); // Hide the banner after acceptance
  };

  const declineCookies = () => {
    setShowBanner(false); // Hide the banner when cookies are declined
    // Optionally, you could also set a cookie to remember the decline (e.g., Cookies.set("cookieConsent", "declined", { expires: 365 });)
  };

  return (
    showBanner && (
      <div
        className="flex-col md:flex-row gap-10"
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: "999",
          width: "100%",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          textAlign: "left",
        }}
      >
        <div className="max-w-4xl text-xl" style={{ flex: "1" }}>
          <h3 className="font-bold text-2xl my-4">We Use Cookies</h3>
          <p style={{ margin: 0, marginBottom: 6 }}>
            We use cookies to personalize content, to provide social media
            features, and to analyze our traffic. By clicking ‘Accept’, you
            agree to our use of cookies as described in our Cookie Policy. You
            can manage your preferences or decline at any time. For more
            information, please review our{" "}
            <Link href="/cookies-policy" className="cursor-pointer underline" target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <div
          className="flex-row md:flex-col"
          style={{ display: "flex", gap: "16px" }}
        >
          <button
            onClick={acceptCookies}
            style={{
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            I accept cookies
          </button>
          <button
            onClick={declineCookies}
            style={{
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            I refuse cookies
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
