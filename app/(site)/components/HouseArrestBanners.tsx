"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, Pagination } from "swiper/modules";

const HouseArrestBanner = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src="/HouseArrest-Old.png"></img>
        </SwiperSlide>

        <SwiperSlide>
          <img src="/HouseArrest-Hero.png"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HouseArrestBanner;
