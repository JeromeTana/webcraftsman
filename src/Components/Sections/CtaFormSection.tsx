"use client";
import React from "react";
import QuoteForm from "@/Components/QuoteForm";
import { Check } from "lucide-react";
import PulsingDot from "../PulsingDot";
import ImageShowcaseSection from "./ImageShowcaseSection";
import { type Locale } from "@/lib/i18n";

interface CtaFormSectionProps {
  locale: Locale;
  onSubmitted?: () => void;
}

export default function CtaFormSection({ locale, onSubmitted }: CtaFormSectionProps) {
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
              {locale === 'th' ? (
                <>
                  พร้อมให้บริการสำหรับเดือน
                  {new Date().toLocaleString("th-TH", { month: "long" })}
                </>
              ) : (
                <>
                  Available for service in{" "}
                  {new Date().toLocaleString("en-US", { month: "long" })}
                </>
              )}
            </span>
          </div>
          <h2 className="text-5xl font-bold md:text-white">
            {locale === 'th' ? "เริ่มต้นรับบริการง่าย ๆ ได้ทันที" : "Get started with our service easily today"}
          </h2>
          <p className="mt-4 text-xl text-paragraph md:text-white">
            {locale === 'th' ? (
              "กรอกแบบฟอร์มเพื่อขอใบเสนอราคาฟรี หรือปรึกษาเกี่ยวกับโปรเจกต์ของคุณ"
            ) : (
              "Fill out the form to request a free quote or consult about your project"
            )}
          </p>
          <ul className="mt-8 text-xl space-y-4 text-paragraph md:text-white">
            <li className="flex items-center gap-4">
              <Check className="w-4 h-4" />
              {locale === 'th' ? "ติดต่อกลับภายใน 24 ชั่วโมง" : "Contact back within 24 hours"}
            </li>
            <li className="flex items-center gap-4">
              <Check className="w-4 h-4" />
              {locale === 'th' ? "ไม่มีค่าใช้จ่าย" : "No cost"}
            </li>
            <li className="flex items-center gap-4">
              <Check className="w-4 h-4" />
              {locale === 'th' ? "ไม่มีข้อผูกมัด" : "No commitment"}
            </li>
          </ul>
        </div>
        <div className="relative bg-white p-8 rounded-3xl border-8 md:border border-primary md:border-gray-200">
          <QuoteForm locale={locale} onSubmitted={onSubmitted} />
        </div>
      </div>
    </section>
  );
}
