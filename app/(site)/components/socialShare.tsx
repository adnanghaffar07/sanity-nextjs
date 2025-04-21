"use client";

import React, { useEffect, useState } from "react";

const SocialShare = ({ title }: { title: string }) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href); // Set the current URL on the client side
    }
  }, []);

  return (
    <div className="flex flex-row items-center justify-end space-x-4">
      {/* WhatsApp */}
      <img
        src="/whatsapp.jpeg"
        alt="WhatsApp"
        className="h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?text=${encodeURIComponent(
              `${title}\n\n${currentUrl}`
            )}`,
            "_blank",
            "noopener noreferrer"
          )
        }
      />
      {/* Facebook */}
      <img
        src="/facebook.jpeg"
        alt="Facebook"
        className="h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() =>
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}&quote=${encodeURIComponent(
              `Check this out: ${title}. Visit here for more details!`
            )}`,
            "_blank",
            "noopener noreferrer"
          )
        }
      />
      {/* LinkedIn */}
      <img
        src="/linkedin.jpeg"
        alt="LinkedIn"
        className="h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() =>
          window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              currentUrl
            )}&title=${encodeURIComponent(
              title
            )}&summary=${encodeURIComponent(
              "Check out this blog on CodeAutomation.ai! A leading platform for custom software and mobile development solutions."
            )}&source=CodeAutomation.ai`,
            "_blank",
            "noopener noreferrer"
          )
        }
      />


      {/* Instagram */}
      {/* <img
  src="/instagram.jpeg"
  alt="Instagram"
  className="h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
  onClick={() =>
    window.open(
      `https://www.instagram.com/direct/inbox/?text=${encodeURIComponent(
        `${title}\n${currentUrl}`
      )}`,
      "_blank"
    )
  }
/> */}


      {/* Twitter */}
      <img
        src="/twitter.jpg"
        alt="Twitter"
        className="h-6 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-200"
        onClick={() =>
          window.open(
            `https://twitter.com/share?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(
              `Check out this blog: "${title}"! Read more at `
            )}`,
            "_blank",
            "noopener noreferrer"
          )
        }
      />



    </div>
  );
};

export default SocialShare;
