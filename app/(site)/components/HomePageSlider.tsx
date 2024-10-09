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
    speed: 3500,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: false,

    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...swiperSettings}>
      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h1 className="title capitalize" style={{ lineHeight: "1" }}>
            Leading Software Development Company{" "}
          </h1>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          Transform your ideas into reality with a top software development
          company dedicated to delivering innovative solutions and committed to
          your long-term success and growth.
        </p>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            Custom Software Development for Your Needs
          </h2>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          Enhance your business with custom digital solutions and innovative
          technologies crafted by CodeAutomation.ai to drive success and growth.
        </p>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            Automate Your QA Testing
          </h2>
        </div>
        <p
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          Streamline your software quality with expert QA testing services
          designed to automate and enhance every step of the process.
        </p>
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
