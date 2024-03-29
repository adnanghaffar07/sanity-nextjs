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
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            &quot;Transforming Businesses Through Generative AI&quot;
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 max-md:max-w-full"
          style={{ lineHeight: "1.3" }}
        >
          Explore with us, and let&rsquo;s pioneer the next era of innovation
          together.
        </div>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            &quot;Connecting Visions, Building Innovation&quot;
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          In the ever-evolving world, our technology solutions are
          revolutionizing healthcare, redefining education, or reshaping finance
          at the forefront of change.
        </div>
      </div>

      <div>
        <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-md:max-w-full">
          <h2 className="title capitalize" style={{ lineHeight: "1" }}>
            &quot;Imagine, Code, Automate&quot;
          </h2>
        </div>
        <div
          className="lg:text-2xl text-base text-center mt-5 xl:mt-5 xl:max-w-[1100px] 2xl:max-w-[1200px] xl:mx-auto"
          style={{ lineHeight: "1.3" }}
        >
          We are not just a tech company but the architects of your digital
          success. Let&rsquo;s turn your ideas into reality together.
        </div>
      </div>
    </Slider>
  );
};

export default HomePageSlider;
