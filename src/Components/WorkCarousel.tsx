"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default () => {
  const slidesImg = [
    "/DevWhoLifts.png",
    "/IronLift.png",
    "/JeromeTana.png",
    "/FitDad.png",
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={10000}
      spaceBetween={24}
      breakpoints={
        {
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }
      }
      grabCursor={true}
      draggable={false}
      className="swiper-free-mode"
    >
      {slidesImg.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-foreground w-full aspect-video rounded-3xl overflow-clip">
            <Image
              src={slide}
              alt="work"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
