"use client";
import React from "react";
import QuoteForm from "@/Components/QuoteForm";
import { Check } from "lucide-react";
import PulsingDot from "../PulsingDot";
import ImageShowcaseSection from "./ImageShowcaseSection";
import { type Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface CtaFormSectionProps {
  locale: Locale;
  onSubmitted?: () => void;
}

export default function CtaFormSection({ locale, onSubmitted }: CtaFormSectionProps) {
  const t = useTranslations("sections.ctaForm");
  const monthLocale = locale === "th" ? "th-TH" : "en-US";
  const monthName = new Date().toLocaleString(monthLocale, { month: "long" });
  const bullets = t.raw("bullets") as string[];

  return (
    <section id="cta" className="!max-w-full !pb-0 ">
      <div className="relative md:overflow-hidden md:p-20 md:bg-primary rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="hidden md:block absolute -bottom-1/5 left-0 opacity-15">
          <ImageShowcaseSection locale={locale} />
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <PulsingDot />{" "}
            <span className="text-primary md:text-white font-medium">
              {t("availability", { month: monthName })}
            </span>
          </div>
          <h2 className="text-5xl font-bold md:text-white">
            {t("title")}
          </h2>
          <p className="mt-4 text-xl text-paragraph md:text-white">
            {t("description")}
          </p>
          <ul className="mt-8 text-xl space-y-4 text-paragraph md:text-white">
            {bullets.map((bullet, index) => (
              <li key={`${bullet}-${index}`} className="flex items-center gap-4">
                <Check className="w-4 h-4" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative bg-white p-8 rounded-3xl border-8 md:border border-primary md:border-gray-200">
          <QuoteForm locale={locale} onSubmitted={onSubmitted} />
        </div>
      </div>
    </section>
  );
}
