"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AdWhatYouGetSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ทั้งหมดนี้คือสิ่งที่คุณจะได้รับจากการร่วมงานกับเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ครบครันทุกสิ่งที่คุณต้องการเพื่อเพิ่มยอดขายออนไลน์ของคุณ
            ตั้งแต่หาลูกค้า ไปจนถึงหลังปิดการขาย
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6"
          >
            <Image
              src="/display_website.png"
              alt="Display Website"
              width={600}
              height={400}
              className="w-full max-w-2xl mx-auto rounded-lg my-8"
            />

            {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div> */}
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Landing Page สำหรับทำ Google Ads
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              หน้าเว็บไซต์ที่ออกแบบมาเพื่อเพิ่มอัตราการปิดการขายโดยเฉพาะ
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Copy
                ที่โน้มน้าวใจลูกค้า
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> ออกแบบ UI/UX
                เพื่อการขาย
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ใช้งานได้บนมือถือ
              </li>
            </ul>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              วิเคราะห์เว็บไซต์ฟรี
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              วิเคราะห์เว็บไซต์ปัจจุบันและแนะนำจุดปรับปรุง
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                รายงานผลการวิเคราะห์
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                จุดอ่อนที่ควรแก้ไข
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                แนวทางเพิ่มยอดขาย
              </li>
            </ul>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Google Ads ที่ได้ผลจริง
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ตั้งค่าและจูนโฆษณาให้ได้ลูกค้าคุณภาพสูง
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                คีย์เวิร์ดที่ใช่
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> ปรับ
                Targeting ให้แม่นยำ
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ลดต้นทุนต่อลีด
              </li>
            </ul>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              วางแผนกลยุทธ์สำหรับคุณ
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              คุยตัวต่อตัวเพื่อวางแผนกลยุทธ์ที่เหมาะกับธุรกิจคุณ
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                วิเคราะห์ตลาดเป้าหมาย
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                กำหนดกลยุทธ์การตลาด
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                แนะนำแผนการดำเนินงาน
              </li>
            </ul>
          </motion.div>

          {/* Item 5 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ติดตามผลลัพธ์สม่ำเสมอ
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ติดตามและวัดผลการทำงานของหน้าเว็บไซต์
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Google
                Analytics Setup
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                รายงานผลเป็นรายเดือน
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ปรับปรุงอย่างต่อเนื่อง
              </li>
            </ul>
          </motion.div>

          {/* Item 6 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              AI Chatbot อัจฉริยะ
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ตอบคำถามลูกค้าได้ 24/7 และช่วยเพิ่มอัตราการปิดการขาย
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ตอบคำถามได้ทันที
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                เก็บข้อมูลลูกค้าอัตโนมัติ
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ส่งต่อไปทีมขาย
              </li>
            </ul>
          </motion.div>

          {/* Item 7 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ระบบติดตามลูกค้าอัตโนมัติ
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              ส่งข้อความติดตามลูกค้าที่สนใจอัตโนมัติ เพื่อไม่ให้พลาดโอกาส
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Email
                Marketing อัตโนมัติ
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> Messenger
                Follow Up
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                แจ้งเตือนทีมขาย
              </li>
            </ul>
          </motion.div>

          {/* Item 8 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              ระบบจัดการรีวิวออนไลน์
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              เพิ่มความน่าเชื่อถือด้วยรีวิวดีๆ และจัดการชื่อเสียงออนไลน์
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ขอรีวิวลูกค้าอัตโนมัติ
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> จัดการ Google
                Reviews
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                ตอบกลับรีวิวทันที
              </li>
            </ul>
          </motion.div>

          {/* Item 9 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-xl p-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              การรับประกันผลลัพธ์
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              รับประกันผลลัพธ์ หรือคืนเงิน 100%
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />{" "}
                เพิ่มลีดขั้นต่ำ 50%
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> หรือคืนเงิน
                100%
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> ภายใน 60 วัน
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdWhatYouGetSection;
