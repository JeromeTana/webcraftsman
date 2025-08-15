"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideClock } from "@/Components/Icons/LucideClock";
import { LucideTrendingUp } from "@/Components/Icons/LucideTrendingUp";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";
import { openCtaPopup } from "@/Components/CtaPopup";

const AdBenefitsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ถึงเวลาต้องกลับมาปรับให้พื้นฐานแข็งแรง
          </h2>
          <p className="text-lg text-gray-600">
            ผลลัพธ์ที่จะได้รับจากการใช้ Landing Page
            ที่ออกแบบมาอย่างมีกลยุทธ์ของเรา
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-green-50 rounded-xl p-6 border border-green-500"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <LucideTrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              เพิ่มยอดขาย 2 เท่า
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              ออกแบบเพื่อเพิ่มอัตราการปิดการขายโดยเฉพาะ ด้วยกลยุทธ์ที่ได้ผลจริง
            </p>
          </motion.div>

          {/* Benefit 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-green-50 rounded-xl p-6 border border-green-500"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <LucideCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              ได้ผลตั้งแต่วันแรก
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              เห็นผลทันทีหลังจากเปิดใช้ เพิ่มจำนวนลูกค้าติดต่อและการปิดการขาย
            </p>
          </motion.div>

          {/* Benefit 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-green-50 rounded-xl p-6 border border-green-500"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <LucideClock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              ประหยัดค่าโฆษณา
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              ลดต้นทุนต่อลีด และเพิ่มประสิทธิภาพการใช้งบโฆษณาให้คุ้มค่าสูงสุด
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-medium text-gray-700 mb-6">
            พร้อมเริ่มเพิ่มยอดขายของคุณแล้วหรือยัง?
          </p>
          <button
            onClick={openCtaPopup}
            className="cta flex items-center gap-2 mx-auto"
          >
            นัดพูดคุยรายละเอียด
            <LucideArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdBenefitsSection;
