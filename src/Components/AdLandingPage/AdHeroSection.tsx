"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";
import { openCtaPopup } from "@/Components/CtaPopup";
import Image from "next/image";

const AdHeroSection: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      openCtaPopup();
    }, 7000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="!py-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src="/google-5-stars.png"
            alt="Display Website"
            width={180}
            height={100}
            className="mx-auto mb-6"
          />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          เพิ่มยอดขายให้โตเป็น 2 เท่า
          <br />
          ด้วย <span className="text-primary">"หน้าเว็บไซต์"</span>{" "}
          ที่ออกแบบมาเพื่อปิดการขาย
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          พวกเราช่วยให้คุณได้ลูกค้าเพิ่มขึ้นจากการยิง Google Ads ด้วย Landing
          Page ที่วางแผนออกแบบมาเพื่อปิดการขายโดยเฉพาะ
        </motion.p>
        <Image
          src="/display_website.png"
          alt="Display Website"
          width={600}
          height={400}
          className="w-full max-w-2xl mx-auto rounded-lg mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 gap-2 mb-12 max-w-3xl mx-auto"
        >
          <button
            onClick={openCtaPopup}
            className="cta flex items-center gap-2 !p-6 !text-xl"
          >
            รับคำแนะนำจากผู้เชี่ยวชาญ
            <LucideArrowRight />
          </button>
          <p className="text-gray-600">
            พร้อมวางกลยุทธ์ออนไลน์เพื่อคุณฟรี ไม่มีค่าใช้จ่าย
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdHeroSection;
