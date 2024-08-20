"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageSlider = () => {
  const swiperSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,

    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...swiperSettings}>
      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h1 className="title capitalize" style={{ lineHeight: "1" }}>
          Leading Software Development Company           </h1>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 max-md:max-w-full"
          style={{ lineHeight: "1.3" }}
        >
          Transform your Ideas to Reality through Top Software Development Company dedicated to Your Success.
        </div>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
          Custom Software Development for Your Needs
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 max-md:max-w-full"
          style={{ lineHeight: "1.3" }}
        >
         Empower your business with tailored digital solutions and innovations from CodeAutomation.ai
        </div>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
          Automate Your QA Testing
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          Streamline your software quality with expert QA testing services designed to automate and enhance every step of the process.
        </div>
      </div>

      {/* <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            Imagine, Code, Automate
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          We are not just a tech company but the architects of your digital
          success. Let&rsquo;s turn your ideas into reality together.
        </div>
      </div> */}
    </Slider>
  );
};

export default HomePageSlider;
