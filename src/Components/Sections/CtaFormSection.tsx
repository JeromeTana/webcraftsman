"use client";
import React from "react";
import QuoteForm from "@/Components/QuoteForm";
import { Check } from "lucide-react";
import PulsingDot from "../PulsingDot";
import ImageShowcaseSection from "./ImageShowcaseSection";

interface CtaFormSectionProps {
  onSubmitted?: () => void;
}

export default function CtaFormSection({ onSubmitted }: CtaFormSectionProps) {
  return (
    <section id="cta" className="!max-w-full !pb-0 ">
      <div className="relative md:overflow-hidden md:p-20 md:bg-primary rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="hidden md:block absolute -bottom-1/5 left-0 opacity-15">
          <ImageShowcaseSection />
        </div>
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <PulsingDot />{" "}
            <span className="text-primary md:text-white font-medium">
              พร้อมให้บริการสำหรับเดือน
              {new Date().toLocaleString("th-TH", { month: "long" })}
            </span>
          </div>
          <h2 className="text-5xl font-bold md:text-white">
            เริ่มต้นรับบริการง่าย ๆ ได้ทันที
          </h2>
          <p className="mt-4 text-xl text-paragraph md:text-white">
            กรอกแบบฟอร์มเพื่อขอใบเสนอราคาฟรี หรือปรึกษาเกี่ยวกับโปรเจกต์ของคุณ
          </p>
          <ul className="mt-8 text-xl space-y-4 text-paragraph md:text-white">
            <li className="flex items-center gap-4">
              <Check className="w-4 h-4" />
              ติดต่อกลับภายใน 24 ชั่วโมง
            </li>
            <li className="flex items-center gap-4">
              <Check className="w-4 h-4" />
              ไม่มีค่าใช้จ่าย
            </li>
            <li className="flex items-center gap-4">
              <Check className="w-4 h-4" />
              ไม่มีข้อผูกมัด
            </li>
          </ul>
        </div>
        <div className="relative bg-white p-8 rounded-3xl border-8 md:border border-primary md:border-gray-200">
          <QuoteForm onSubmitted={onSubmitted} />
        </div>
      </div>
    </section>
  );
}
