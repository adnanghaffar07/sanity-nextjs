'use client';
import React, { useRef, useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function HeroSlider() {
  // Create a ref to the Swiper instance
  const swiperRef = useRef(null);

  // Initialize Swiper when the component mounts
  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.swiper.autoplay.start(); // Start autoplay
  //   }
  // }, []);

  return (
    <Swiper
      className="mySwiper"
      ref={swiperRef} // Attach the ref to the Swiper component
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }} // Adjust autoplay delay as needed
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}


// 'use client'
// import React from 'react';
// import SwiperCore, { Autoplay } from 'swiper/core';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/bundle'; // Import the main styles from the bundle



// SwiperCore.use([Autoplay]);

// const HeroSlider = () => {
//   return (
//     <div className="lg:absolute lg:top-[250px]">
//       <Swiper
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 5000 }}
//       >
//         {/* Slide 1 */}
//         <SwiperSlide key="slider1">
//           <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
//             <h4 className="title capitalize">
//               &quot;Transforming Businesses Through Generative AI&quot;
//             </h4>
//           </div>
//           <div className="lg:text-2xl text-base text-center max-md:mt-10 max-md:max-w-full">
//             Explore with us, and let&rsquo;s pioneer the next era of innovation together.
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 - Add more slides as needed */}

//         <SwiperSlide key="slider2">
//           <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
//             <h2 className="title capitalize">
//               &quot;Transforming&quot;
//             </h2>
//           </div>
//           <div className="lg:text-2xl text-base text-center max-md:mt-10 max-md:max-w-full">
//             Explore with us, and let&rsquo;s pioneer the ne
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 - Add more slides as needed */}
//         <SwiperSlide key="slider3">
//           <div className="lg:text-4xl text-2xl font-bold text-center capitalize max-lg:mt-36 max-md:max-w-full">
//             <h2 className="title capitalize">
//               &quot; AI&quot;
//             </h2>
//           </div>
//           <div className="lg:text-2xl text-base text-center max-md:mt-10 max-md:max-w-full">
//             Explore with us, and let&rsquo;s
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default HeroSlider;

