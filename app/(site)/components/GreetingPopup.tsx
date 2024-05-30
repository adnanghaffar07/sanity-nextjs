"use client";
import React, { useEffect, useState } from "react";

const GreetingPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsVisible(true);

        setTimeout(() => {
          setIsAnimating(true);
        }, 100);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("hasVisited", "true");
    }, 500);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("popup-overlay")) {
      closePopup();
    }
  };

  return isVisible ? (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[1000] popup-overlay transition-all duration-700 ease-in-out ${
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      onClick={handleClickOutside}
    >
      <div
        className={`flex flex-col sm:flex-row justify-center relative transform transition-all duration-700 ease-in-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="w-[270px] md:w-[340px] -mr-20 z-30 hidden sm:block">
          <img
            loading="lazy"
            srcSet={"/greetingPopupImage.png"}
            className="object-cover"
          />
        </div>

        <div className="flex overflow-scroll sm:overflow-hidden relative flex-col justify-center text-3xl font-light capitalize text-neutral-600 text-opacity-90 w-[300px] sm:w-[420px] md:w-[500px] pl-0 sm:pl-20">
          <button
            className="absolute top-[2px] sm:top-1 right-2 sm:right-4 text-4xl font-bold text-gray-800 transition-transform transform hover:rotate-90 z-10 duration-500 ease-in-out"
            onClick={closePopup}
          >
            &times;
          </button>
          <div className="w-[210px] z-30 block sm:hidden pt-4 mx-auto">
            <img
              loading="lazy"
              srcSet={"/greetingPopupImage.png"}
              className="object-cover"
            />
          </div>
          <img
            loading="lazy"
            srcSet={"/greetingPopup-bg.png"}
            className="object-cover absolute inset-0 rounded-bl-3xl sm:rounded-bl-0 rounded-tl-3xl sm:rounded-tl-0 rounded-br-3xl rounded-tr-3xl h-[530px] sm:h-[310px] md:h-[391px] w-[300px] sm:w-[500px]"
          />
          <div className="flex relative flex-col gap-4 items-center">
            <img
              loading="lazy"
              srcSet={"/greetingPopupIcon.png"}
              className="w-[120px] md:w-[174px] hidden sm:block"
            />
            <div className="text-xl md:text-2xl text-center text-black mt-2 sm:mt-0">
              Join us for your tech growth
            </div>
            <div className="flex flex-col gap-3 w-[260px] md:w-[300px]">
              <input
                type="text"
                placeholder="Full Name"
                className="text-base px-2 py-[2px] md:py-1 bg-white border-2 border-gray-400 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="text-base px-2 py-[2px] md:py-1 bg-white border-2 border-gray-400 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="text-base px-2 py-[2px] md:py-1 bg-white border-2 border-gray-400 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="text-base px-2 py-[2px] md:py-1 bg-white border-2 border-gray-400 rounded-md outline-none"
              />

              <button className="text-base text-center text-white bg-[#007ae7] hover:bg-[#1d92fb] shadow-sm rounded-md py-1 transition-colors delay-100 ease-in-out">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default GreetingPopup;
