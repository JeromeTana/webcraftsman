"use client";
import React from "react";
import QuoteForm from "@/Components/QuoteForm";

interface CtaFormSectionProps {
  onSubmitted?: () => void;
}

export default function CtaFormSection({ onSubmitted }: CtaFormSectionProps) {
  return (
    <section id="cta" className="!max-w-full !pb-0">
      <div className="p-20 bg-primary rounded-4xl grid grid-cols-1 md:grid-cols-2">
        <h2 className="text-4xl font-bold text-white">รับคำปรึกษาด้านเว็บไซต์ ฟรี!</h2>
        <QuoteForm onSubmitted={onSubmitted} />
      </div>
    </section>
  );
}