"use client";

// Coverflow carousel of client testimonials (content from the Home Page document).

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { urlForImage } from "@/sanity/lib/image";
import type { HomeTestimonial } from "@/sanity/lib/home";

// Swiper's loop mode needs slidesPerView plus the looped slides on each side
// (5 for 3 centred slides); with fewer it switches looping off and warns.
const MIN_LOOP_SLIDES = 6;

// Repeats the list until there are enough slides to loop.
function loopable(testimonials: HomeTestimonial[]) {
  if (testimonials.length === 0) return [];
  const copies = Math.ceil(MIN_LOOP_SLIDES / testimonials.length);
  return Array.from({ length: copies }, (_, copy) => testimonials.map((t) => ({ ...t, slideKey: `${t._key}-${copy}` }))).flat();
}

export default function TestimonialsCarousel({ testimonials }: { testimonials: HomeTestimonial[] }) {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={3}
        loop
        speed={1500}
        autoplay={{ delay: 2500, pauseOnMouseEnter: false, disableOnInteraction: false }}
        coverflowEffect={{ depth: 0, rotate: 40, scale: 0.6, stretch: 100, modifier: 1, slideShadows: false }}
        modules={[EffectCoverflow, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {loopable(testimonials).map((testimonial) => (
          <SwiperSlide key={testimonial.slideKey} className="flex justify-center items-center pt-20 md:pt-36">
            <figure className="flex flex-col relative w-full max-w-[530px] shadow-md backdrop-blur-[36px]">
              <div className="flex justify-center items-center px-1 xl:px-4 ml-5 w-16 xl:w-28 2xl:w-28 h-16 xl:h-28 2xl:h-28 bg-white rounded-full max-md:ml-2.5 absolute -top-8 md:-top-8 lg:-top-10 xl:-top-16 2xl:-top-20 left-2 lg:left-6 border border-gray-300">
                {testimonial.photo?.asset && (
                  // eslint-disable-next-line @next/next/no-img-element -- small profile photo served by the Sanity image CDN
                  <img
                    loading="lazy"
                    src={urlForImage(testimonial.photo)}
                    alt={testimonial.photo.alt || `${testimonial.name}'s profile picture`}
                    className="w-full aspect-square rounded-full"
                  />
                )}
              </div>
              <div className="flex flex-col justify-around px-4 2xl:px-8 pt-6 xl:pt-12 2xl:pt-12 pb-6 bg-transparent border border-gray-300 text-white rounded-3xl tracking-[2px] max-md:px-5 w-full h-auto text-xs lg:text-sm xl:text-base 2xl:text-xl">
                <blockquote className="mt-4 leading-5 xl:leading-7 font-light">{testimonial.quote}</blockquote>
                <figcaption>
                  <p className="mt-6 font-semibold">{testimonial.name}</p>
                  {testimonial.role && <p className="mt-3 font-semibold">{testimonial.role}</p>}
                </figcaption>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
