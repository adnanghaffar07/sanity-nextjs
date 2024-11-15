"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const HomePageSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true} // Enables infinite looping
      autoplay={{
        delay: 5000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
      }}
      modules={[Autoplay]} // Add Autoplay module
      speed={3500} // Transition speed
    >
      <SwiperSlide>
        <div>
          <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
            <h1 className="title capitalize" style={{ lineHeight: "1" }}>
              Leading Software Development Company
            </h1>
          </div>
          <p
            className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
            style={{ lineHeight: "1.3" }}
          >
            Transform your ideas into reality with a top software development
            company dedicated to delivering innovative solutions and committed
            to your long-term success and growth.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
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
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
            <h3 className="title capitalize" style={{ lineHeight: "1" }}>
              Automate Your QA Testing
            </h3>
          </div>
          <p
            className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
            style={{ lineHeight: "1.3" }}
          >
            Streamline your software quality with expert QA testing services
            designed to automate and enhance every step of the process.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomePageSlider;
