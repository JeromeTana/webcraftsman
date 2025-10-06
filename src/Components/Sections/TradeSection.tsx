"use client";

import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { getTrades } from "@/data/trades-i18n";
import type { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

interface TradeSectionProps {
  locale: Locale;
}

export default function TradeSection({ locale }: TradeSectionProps) {
  const tradesData = getTrades(locale);
  const t = useTranslations("sections.trade");

  return (
    <section className="flex flex-col items-center gap-8 !max-w-full">
      <div className="max-w-6xl text-center flex flex-col items-center mb-16">
        <div className="pill">
          <ShinyText text={tradesData.sectionTitle} speed={5} />
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
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="highlight">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h2>
        </AnimatedContent>
        <p className="text-paragraph text-xl leading-relaxed max-w-2xl mx-auto">
          {t("description")}
        </p>
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
            {tradesData.businesses.map((business: string, index: number) => (
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
