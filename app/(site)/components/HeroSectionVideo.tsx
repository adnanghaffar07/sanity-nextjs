"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    return (
      <Image
        src="/hero.jpg"
        alt="hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    );
  }

  return (
    <video
      className="top-0 left-0 object-cover absolute inset-0 w-full h-full"
      width="1920"
      height="1080"
      muted
      autoPlay
      loop
      playsInline
      preload="metadata" // ✅ Better than "none" for LCP
      poster="/hero.jpg"
    >
      <source src="/hero-sec-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
