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
import Image from "next/image";

// Optional: define TypeScript interface
interface Testimonial {
  name: string;
  designation: string;
  content: string;
  image: any;
}

const Testimonials = () => {
  const [data, setData] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const query = `*[_type == 'testimonial'] | order(_updatedAt desc)`;
        const result = await client.fetch(query);
        setData(result || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Swiper section */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: false,   // keep it moving
          disableOnInteraction: false, // resume autoplay immediately
        }}
        coverflowEffect={{
          depth: 0,
          rotate: 40,
          scale: 0.6,
          stretch: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center pt-20 md:pt-36"
          >
            <div className="flex flex-col relative w-full max-w-[530px] shadow-md backdrop-blur-[36px]">
              <div className="flex justify-center items-center px-1 xl:px-4 ml-5 w-16 xl:w-28 2xl:w-28 h-16 xl:h-28 2xl:h-28 bg-white rounded-full max-md:ml-2.5 absolute -top-8 md:-top-8 lg:-top-10 xl:-top-16 2xl:-top-20 left-2 lg:left-6 border border-gray-300">
                <img
                  role="img"
                  loading="lazy"
                  src={urlForImage(testimonial.image).toString()}
                  alt={`${testimonial.name}'s profile picture`}
                  className="w-full aspect-square rounded-full"
                />
              </div>
              <div className="flex flex-col justify-around px-4 2xl:px-8 pt-6 xl:pt-12 2xl:pt-12 pb-6 bg-transparent border border-gray-300 text-white rounded-3xl tracking-[2px] max-md:px-5 w-full h-auto text-xs lg:text-sm xl:text-base 2xl:text-xl">
                <p className="mt-4 leading-5 xl:leading-7 font-light">
                  {testimonial.content}
                </p>
                <div>
                  <p className="mt-6 font-semibold">{testimonial.name}</p>
                  <p className="mt-3 font-semibold">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Clutch and Trustpilot section */}
      <div className="flex justify-center items-center gap-8 mt-12">
        <a
          href="https://clutch.co/profile/codeautomationai#highlights"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <Image
            src="/Clutch.png"
            alt="Clutch icon"
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
          <Image
            src="/Trustpilot.png"
            alt="Trustpilot icon"
            width={130}
            height={40}
            className="mb-3"
          />
        </a>
        <a
          href="/adnan-ghaffar-forbes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <Image
            src="/forbes.png"
            alt="Forbes-icon"
            width={130}
            height={40}
            className="mb-3"
          />
        </a>
        <a
          href="/google-scholar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center"
        >
          <Image
            src="/Google_Scholar_logo.png"
            alt="Google_Scholar_logo-icon"
            width={60}
            height={10}
            className="mb-3"
          />
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
