"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const Testimonials = async () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const query = `*[_type == 'testimonial'] | order(_updatedAt desc)`;
      try {
        const fetchData = await client.fetch(query);
        return fetchData || [];
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    }

    const fetchTestimonials = async () => {
      const result = await getData();
      setData(result);
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Swiper section */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        coverflowEffect={{
          depth: 0,
          rotate: 40,
          scale: 0.6,
          stretch: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper w-full" // Full width
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
            coverflowEffect: {
              scale: 0.9,
            },
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((testimonial: any, index: any) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center pt-20 md:pt-36"
          >
            <div className="flex flex-col relative w-full max-w-[530px] shadow-md backdrop-blur-[36px]">
              <div className="flex justify-center items-center px-1 xl:px-4 ml-5 w-16 xl:w-28 2xl:w-28 h-16 xl:h-28 2xl:h-28 bg-white rounded-full max-md:ml-2.5 absolute -top-8 md:-top-8 lg:-top-10 xl:-top-16 2xl:-top-20 left-2 lg:left-6 border border-gray-300">
                <img
                  loading="lazy"
                  src={urlForImage(testimonial.image).toString()}
                  alt={`${testimonial.name}'s profile`}
                  className="w-full aspect-square rounded-full"
                />
              </div>
              <div className="flex flex-col justify-around px-4 2xl:px-8 pt-6 xl:pt-12 2xl:pt-12 pb-6 bg-transparent border border-gray-300 text-white rounded-3xl tracking-[2px] max-md:px-5 w-full h-auto text-xs lg:text-sm xl:text-base 2xl:text-xl">
                <p className="mt-4 leading-5 xl:leading-7 font-light">
                  {testimonial.content}
                </p>
                <div>
                  <p className="mt-6 font-semibold">{testimonial.name}</p>
                  <p className="mt-3 font-semibold ">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Clutch and Trustpilot section - displayed in a row */}
      <div className="flex justify-center items-center gap-8 mt-12">
        <a
          href="https://clutch.co/profile/codeautomationai#highlights"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <img
            src="/Clutch.png"
            alt="clutch-icon"
            width={130}
            height={40}
          />
        </a>
        <a
          href="https://www.trustpilot.com/review/codeautomation.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <img
            src="/Trustpilot.png"
            alt="Trustpilot-icon"
            width={130}
            height={40}
            className="mb-3"
          />
        </a>
      </div>

    </div>
  );
};

export default Testimonials;
