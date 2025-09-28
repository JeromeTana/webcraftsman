"use client";
import React from "react";
import QuoteForm from "@/Components/QuoteForm";
import { Check } from "lucide-react";

interface CtaFormSectionProps {
  onSubmitted?: () => void;
}

export default function CtaFormSection({ onSubmitted }: CtaFormSectionProps) {
  return (
    <section id="cta" className="!max-w-full !pb-0">
      <div className="p-20 bg-primary rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-5xl font-bold text-white">
            เริ่มต้นรับบริการง่าย ๆ ได้ทันที
          </h2>
          <p className="mt-4 text-xl text-white">
            กรอกแบบฟอร์มเพื่อขอใบเสนอราคาฟรี หรือปรึกษาเกี่ยวกับโปรเจกต์ของคุณ
          </p>
          <ul className="mt-8 space-y-4 text-white">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              ติดต่อกลับภายใน 24 ชั่วโมง
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              ไม่มีค่าใช้จ่าย
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              ไม่มีข้อผูกมัด
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-200">
          <QuoteForm onSubmitted={onSubmitted} />
        </div>
      </div>
    </section>
  );
}
