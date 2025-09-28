"use client";

import React from "react";
import { ArrowRight, Users, X } from "lucide-react";
import { motion } from "framer-motion";
import { openCtaPopup } from "@/Components/CtaPopup";

const AdProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            หมดเงินยิง Google Ads แต่ไม่ได้ผลอย่างที่หวัง
          </h2>
          <p className="text-lg text-gray-600">
            ปัญหาเราได้ยินจากเจ้าของธุรกิจบ่อยที่สุด{" "}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-border"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <X className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              เสียเงินทุกวัน
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              เสียเงินยิง Google Ads ทุกวัน แต่ไม่มีใครติดต่อ ไม่มีใครแอดไลน์
              หรือกรอกฟอร์ม
            </p>
          </motion.div>

          {/* Problem 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-border"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              แพ้คู่แข่ง
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              คนเข้าเว็บไซต์เยอะแต่สุดท้ายไปซื้อกับคู่แข่ง
            </p>
          </motion.div>

          {/* Problem 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 border border-border"
          >
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <ArrowRight className="w-6 h-6 text-red-600 transform rotate-45" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
              ไม่รู้ต้องแก้ยังไง
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              ไม่รู้ว่าต้องแก้ปัญหาจากตรงไหน โฆษณา, คีย์เวิร์ด หรือเว็บไซต์?
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
            แต่ไม่ต้องกังวล เราช่วยคุณเริ่มต้นแก้ปัญหาได้เลยวันนี้
          </p>
          <button
            onClick={openCtaPopup}
            className="cta flex items-center gap-2 mx-auto"
          >
            นัดพูดคุยรายละเอียด
            <ArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdProblemSection;
