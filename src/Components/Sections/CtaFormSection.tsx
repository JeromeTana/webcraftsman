"use client";
import React from "react";
import QuoteForm from "@/Components/QuoteForm";

interface CtaFormSectionProps {
  onSubmitted?: () => void;
}

export default function CtaFormSection({ onSubmitted }: CtaFormSectionProps) {
  return (
    <section id="cta">
      <div className="p-20 bg-primary rounded-4xl grid grid-cols-1 md:grid-cols-1">
        <h2 className="text-3xl font-bold text-white">รับคำปรึกษาด้านเว็บไซต์ ฟรี!</h2>
        <QuoteForm onSubmitted={onSubmitted} />
      </div>
    </section>
  );
}