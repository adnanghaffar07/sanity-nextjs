"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  {
    title: "Leading Software Development Company",
    desc: "Transform your ideas into reality with a top software development company dedicated to delivering innovative solutions and committed to your long-term success and growth.",
  },
  {
    title: "AI Agent Developers for Next-Gen Automation",
    desc: "Leverage cutting-edge AI agents to automate tasks, boost productivity, and power intelligent decision-making with CodeAutomation.ai’s expert AI developers.",
  },
  {
    title: "Custom Software Development for Your Needs",
    desc: "Enhance your business with custom digital solutions and innovative technologies crafted by CodeAutomation.ai to drive success and growth.",
  },
  {
    title: "Automate Your QA Testing",
    desc: "Streamline your software quality with expert QA testing services designed to automate and enhance every step of the process.",
  },
];

const HomePageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      speed={900}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // 👈 modern UX upgrade
      }}
      modules={[Autoplay]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <SwiperSlide key={index}>
            <div className="min-h-[320px] flex items-center">
              
              <div className="w-full max-w-6xl mx-auto px-4">

                {/* ✨ Smooth active/inactive transition */}
                <div>

                  <div className="text-center lg:text-left">

                    {/* ✨ animated entry feel */}
                    <h2
                      className={`
                        text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight
                        transition-all duration-700
                        ${isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
                      `}
                    >
                      {slide.title}
                    </h2>

                    <p
                      className={`
                        mt-5 text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed
                        max-w-2xl md:max-w-3xl mx-auto md:mx-0
                        transition-all duration-700 delay-100
                        ${isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
                      `}
                    >
                      {slide.desc}
                    </p>

                  </div>
                </div>

              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomePageSlider;