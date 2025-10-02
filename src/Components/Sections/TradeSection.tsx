'use client';

import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    "ธุรกิจตกแต่งภายใน"
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
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {tradeBusinesses.map((business, index) => (
              <SwiperSlide key={index}>
                <div className="card h-full flex items-center justify-center text-center min-h-[120px]">
                  {business}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedContent>
      </div>
    </section>
  );
}
