"use client";

import React from "react";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";
import Logo from "../Icons/Logo";
import { openCtaPopup } from "@/Components/CtaPopup";

const AdHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-gray-200 px-4">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <div className="inline-flex gap-4 items-center sm:text-2xl font-semibold tracking-tight">
          <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
          <span className="hidden sm:inline">WEBCRAFTSMAN</span>
        </div>
        {/* CTA Button */}
        <button
          onClick={openCtaPopup}
          className="cta hidden md:flex items-center gap-2"
        >
          นัดพูดคุยรายละเอียด
          <LucideArrowRight />
        </button>
      </div>
    </header>
  );
};

export default AdHeader;
