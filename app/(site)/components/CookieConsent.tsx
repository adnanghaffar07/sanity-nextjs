"use client"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div style={{ position: "fixed", bottom: 0, background: "#2B373B", color: "white", padding: "10px", width: "100%", textAlign: "center" }}>
        <p>This website uses cookies to improve your experience.</p>
        <button onClick={acceptCookies} style={{ margin: "0 10px" }}>
          Accept
        </button>
      </div>
    )
  );
};

export default CookieConsent;
