"use client";

import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShowcaseCard from "@/Components/ShowcaseCard";
import ShinyText from "@/Components/ShinyText/ShinyText";
import AnimatedCategoryIcon from "../Icons/AnimatedCategoryIcon";
import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ShowcaseSectionProps {
  locale: Locale;
}

export default function ShowcaseSection(_: ShowcaseSectionProps) {
  const t = useTranslations("sections.showcase");
  return (
    <section id="showcase" className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="pill">
          <ShinyText text={t("label")} speed={5} />
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
          <h2 className="text-4xl md:text-5xl shaded text-center w-full inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-2 md:gap-4">
              <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
              <span>
                {t.rich("headline", {
                  highlight: (chunks) => (
                    <span className="highlight">{chunks}</span>
                  ),
                  br: () => <br />,
                })}
              </span>
            </span>
          </h2>
        </AnimatedContent>
        <p className="text-paragraph text-xl leading-relaxed max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
      <div className="!w-[95vw]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="showcase-swiper"
        >
          {portfolio.map((work, index) => (
            <SwiperSlide key={index}>
              <Image
                src={work.img}
                alt="work"
                width={1000}
                height={1000}
                className="object-cover aspect-square object-top rounded-xl border border-gray-200"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
