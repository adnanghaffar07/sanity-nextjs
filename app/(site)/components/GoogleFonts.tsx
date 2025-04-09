"use client";

import { useEffect } from "react";

export default function GoogleFonts() {
  useEffect(() => {
    // Preload Font
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "style";
    preloadLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";

    // Load Stylesheet
    const stylesheetLink = document.createElement("link");
    stylesheetLink.rel = "stylesheet";
    stylesheetLink.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";
    stylesheetLink.media = "print";
    stylesheetLink.onload = () => {
      stylesheetLink.media = "all";
    };

    // Append elements to <head>
    document.head.appendChild(preloadLink);
    document.head.appendChild(stylesheetLink);
  }, []);

  return (
    <noscript>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      />
    </noscript>
  );
}
