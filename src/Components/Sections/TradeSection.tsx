"use client";

import { useRef, useEffect, useState } from "react";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { getTrades } from "@/data/trades";
import type { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface TradeSectionProps {
  locale: Locale;
}

export default function TradeSection({ locale }: TradeSectionProps) {
  const tradesData = getTrades(locale);
  const t = useTranslations("sections.trade");
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height + window.innerHeight);
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split businesses into two rows
  const midpoint = Math.ceil(tradesData.businesses.length / 2);
  const firstRow = tradesData.businesses.slice(0, midpoint);
  const secondRow = tradesData.businesses.slice(midpoint);

  // Duplicate items for seamless loop
  const firstRowItems = [...firstRow, ...firstRow];
  const secondRowItems = [...secondRow, ...secondRow];

  return (
    <section
      className="flex flex-col items-center gap-8 !max-w-full"
      ref={containerRef}
    >
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

      <div className="w-full h-full overflow-x-hidden space-y-8">
        {/* First Row - Moves Left */}
        <div className="relative">
          <div
            className="flex gap-6 transition-transform duration-75 ease-linear"
            style={{
              transform: `translateX(${scrollY * -200}px)`,
            }}
          >
            {firstRowItems.map((business: string, index: number) => (
              <div
                key={index}
                className="bg-foreground rounded-full px-12 py-6 flex-shrink-0 "
              >
                <h3 className="text-2xl  font-semibold whitespace-nowrap">
                  {business}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moves Right */}
        <div className="relative">
          <div
            className="flex gap-6 transition-transform duration-75 ease-linear"
            style={{
              transform: `translateX(${scrollY * 200}px)`,
            }}
          >
            {secondRowItems.map((business: string, index: number) => (
              <div
                key={index}
                className="bg-foreground rounded-full px-12 py-6 flex-shrink-0 "
              >
                <h3 className="text-2xl  font-semibold whitespace-nowrap">
                  {business}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
