"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import proj1 from "@/assets/proj1.webp";
// import proj2 from "@/assets/proj2.webp";
// import proj3 from "@/assets/proj3.webp";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

export default () => {
  const slides = ["", "", "", "", "", "", "", ""];
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={5000}
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 0.8,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 16,
        },
      }}
      grabCursor={true}
      className="swiper-free-mode"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-foreground w-full h-64 rounded-3xl overflow-clip">
            {/* <img
              src={slide.src}
              alt={`Slide ${index}`}
              loading="eager"
              width={700}
              height={467}
              className="object-cover w-full h-full"
            /> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
