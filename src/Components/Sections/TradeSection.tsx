"use client";

import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export default function TradeSection() {
  const tradeBusinesses = [
    "ธุรกิจจัดสวน ดูแลต้นไม้",
    "ธุรกิจโซล่าเซลล์",
    "ธุรกิจรีโนเวทอาคาร",
    "ธุรกิจสร้างสระว่ายน้ำ",
    "ธุรกิจรับเหมา",
    "ธุรกิจปูหลังคา",
    "ธุรกิจอสังหาริมทรัพย์",
    "ธุรกิจซ่อมแซมบ้าน",
    "ธุรกิจตกแต่งภายใน",
  ];

  return (
    <section className="flex flex-col items-center gap-8 !max-w-full">
      <div className="max-w-6xl text-center flex flex-col items-center gap-8">
        <div className="pill">
          <ShinyText text="กลุ่มธุรกิจที่เราเชี่ยวชาญ" speed={5} />
        </div>
        <AnimatedContent
          distance={100}
          direction="vertical"
          initialOpacity={0.05}
          animateOpacity
          damping={10}
          stiffness={50}
          scale={0.9}
          threshold={0.2}
        >
          <h2 className="text-4xl md:text-5xl shaded text-center">
            พวกเรา เชี่ยวชาญ ในการทำงานกับ <br />
            <span className="highlight">ธุรกิจท้องถิ่นและ SME</span> โดยเฉพาะ
          </h2>
        </AnimatedContent>
      </div>

      <div className="w-full">
        <AnimatedContent
          distance={100}
          direction="vertical"
          animateOpacity
          damping={10}
          stiffness={50}
          threshold={0.2}
          delay={100}
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            loop={true}
            freeMode={{
              enabled: true,
              sticky: false,
            }}
            speed={3000}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 32,
              },
            }}
          >
            {tradeBusinesses.map((business, index) => (
              <SwiperSlide key={index}>
                <div className="bg-foreground rounded-3xl p-8 h-full flex items-end aspect-video">
                  <h3 className="text-3xl font-semibold">{business}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedContent>
      </div>
    </section>
  );
}
