"use client";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper/modules";

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

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setTestimonials(data);
    }
    fetchData();
  }, []);

  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            shadow: false,
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        modules={[EffectCreative, Autoplay]}
        className="w-full h-full"
      >
        {groupedTestimonials.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center bg-[#F3F3F3] text-2xl rounded-3xl my-20 sm:my-4 lg:my-0">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-52 sm:gap-40 lg:gap-16 w-full h-[780px] sm:h-[740px] lg:h-[400px] pb-16">
                {pair.map((testimonial: any) => (
                  <div
                    className="flex flex-col ml-5 max-md:ml-0 relative min-h-[255px] sm:min-h-[255px] sm:min-w-[381px]"
                    key={testimonial._id}
                  >
                    <div className="flex flex-col grow pt-7 md:pr-20 px-10 rounded-2xl backdrop-blur-[6.5px] bg-[#1D92FB] w-fit">
                      <p className="self-end text-xl sm:text-3xl font-medium text-white">
                        Clients Speaking
                      </p>
                      {testimonial.link ? (
                        <a
                          href={testimonial.link}
                          target="_blank"
                          className="flex z-10 flex-col py-7 px-5 w-full bg-white rounded-2xl shadow-sm backdrop-blur-[6.5px] max-md:pr-5 absolute md:-bottom-20 md:top-auto top-20 -bottom-auto md:-left-20 -left-4 md:h-[270px]"
                        >
                          <div className="text-[12px] sm:text-sm leading-5 text-justify text-black">
                            {testimonial.content}
                          </div>
                          <div className="flex gap-3 justify-between mt-4 max-md:mr-1">
                            <div className="flex justify-center items-start px-1 rounded-xl aspect-square w-[68px] h-[68px] bg-[#00000033]">
                              <img
                                loading="lazy"
                                src={urlForImage(testimonial.image.asset)}
                                alt={testimonial.image.alt}
                                className="aspect-square rounded-full w-[62px] h-[62px]"
                              />
                            </div>
                            <div className="flex flex-col flex-1 self-start text-sky-950">
                              {testimonial.name && (
                                <div className="text-xl sm:text-2xl lg:text-3xl font-medium">
                                  {testimonial.name}
                                </div>
                              )}
                              <div className="text-sm sm:text-base lg:text-lg font-light leading-6">
                                {testimonial.designation}
                              </div>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex z-10 flex-col py-7 px-5 w-full bg-white rounded-2xl shadow-sm backdrop-blur-[6.5px] max-md:pr-5 absolute md:-bottom-20 md:top-auto top-20 -bottom-auto md:-left-20 -left-4 md:h-[270px]">
                          <div className="text-[12px] sm:text-sm leading-5 text-justify text-black">
                            {testimonial.content}
                          </div>
                          <div className="flex gap-3 justify-between mt-4 max-md:mr-1">
                            <div className="flex justify-center items-center px-1 rounded-xl aspect-square w-[68px] h-[68px] bg-[#00000033]">
                              <img
                                loading="lazy"
                                src={urlForImage(testimonial.image.asset)}
                                alt={testimonial.image.alt}
                                className="aspect-square rounded-full w-[62px] h-[62px]"
                              />
                            </div>
                            <div className="flex flex-col flex-1 self-start text-sky-950">
                              {testimonial.name && (
                                <div className="text-xl sm:text-2xl lg:text-3xl font-medium">
                                  {testimonial.name}
                                </div>
                              )}
                              <div className="text-sm sm:text-base lg:text-lg font-light leading-6">
                                {testimonial.designation}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
