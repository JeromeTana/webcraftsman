"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { openCtaPopup } from "@/Components/CtaPopup";
import Accordion from "@/Components/Accordion";

const AdFAQSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-lg text-gray-600">
            คำตอบสำหรับคำถามที่ลูกค้าถามเราบ่อยที่สุด
          </p>
        </div>

        <div className="space-y-4 pt-8">
          {/* FAQ Item 1 */}
          <div>
            <Accordion
              question="Landing Page ต่างจากเว็บไซต์ทั่วไปยังไง?"
              answer="Landing Page คือหน้าเว็บไซต์ที่ออกแบบมาเพื่อ 'ปิดการขาย' โดยเฉพาะ มุ่งเน้นให้ลูกค้าทำ action เดียว (เช่น กรอกฟอร์ม โทรหา) แต่เว็บไซต์ทั่วไปมักมีหลายหน้า หลาย menu ทำให้ลูกค้าเสียสมาธิและไม่ปิดการขาย"
            />
          </div>

          {/* FAQ Item 2 */}
          <div>
            <Accordion
              question="ใช้เวลานานแค่ไหนถึงจะเห็นผล?"
              answer="คุณจะเห็นผลทันทีหลังจากเปิดใช้ Landing Page (ประมาณ 7-14 วัน) เนื่องจากหน้าเว็บไซต์ใหม่จะมีอัตราการปิดการขายที่สูงกว่าเดิม ส่วนการปรับปรุง Google Ads จะใช้เวลาประมาณ 2-4 สัปดาห์"
            />
          </div>

          {/* FAQ Item 3 */}
          <div>
            <Accordion
              question="ทำไมต้องใช้ Landing Page แทน?"
              answer="เว็บไซต์เดิมของคุณอาจมี menu หลายหน้า ข้อมูลเยอะ ทำให้ลูกค้าเลือกไม่ถูก แต่ Landing Page จะพาลูกค้าเดินทางเดียว คือ 'ปิดการขาย' ทำให้อัตราการปิดการขายสูงขึ้น 2-5 เท่า"
            />
          </div>

          {/* FAQ Item 4 */}
          <div>
            <Accordion
              question="ถ้าไม่ได้ผลจะทำยังไง?"
              answer="เรารับประกันผลลัพธ์ หากไม่สามารถเพิ่มจำนวนลีดขั้นต่ำ 50% ภายใน 60 วัน เราจะคืนเงินให้ 100% ไม่มีข้อแม้ใดๆ (เงื่อนไข: ต้องใช้งานตามคำแนะนำของเราอย่างสม่ำเสมอ)"
            />
          </div>

          {/* FAQ Item 5 */}
          <div>
            <Accordion
              question="ต้องมีความรู้ด้านเทคนิคไหม?"
              answer="ไม่ต้องเลย! เราจัดการทุกอย่างให้ ตั้งแต่การออกแบบ พัฒนา ติดตั้ง จนถึงการฝึกใช้งาน คุณแค่ให้ข้อมูลธุรกิจ และรอรับผลลัพธ์ พร้อมทีมซัพพอร์ตตลอด 24/7"
            />
          </div>

          {/* FAQ Item 6 */}
          <div>
            <Accordion
              question="ราคาเท่าไหร่? มีแพ็คเกจแบบไหนบ้าง?"
              answer="เราไม่มีราคาตายตัว เพราะแต่ละธุรกิจมีความต้องการไม่เหมือนกัน ราคาจะขึ้นอยู่กับความซับซ้อนและขอบเขตงาน ควรนัดคุยเพื่อประเมินหามูลค่าและแพ็คเกจที่เหมาะสมกับคุณมากที่สุด"
            />
          </div>

          {/* FAQ Item 7 */}
          <div>
            <Accordion
              question="ธุรกิจประเภทไหนที่เหมาะสม?"
              answer="ทุกธุรกิจที่ขายออนไลน์ หรือต้องการลูกค้าจากออนไลน์ เช่น คอร์สออนไลน์, บริการรับเหมา, ผลิตภัณฑ์ B2B, คลินิก, ร้านอาหาร, อสังหาฯ รวมถึงธุรกิจใหม่ที่ต้องการสร้างยอดขายเร็ว"
            />
          </div>

          {/* FAQ Item 8 */}
          <div>
            <Accordion
              question="มีการดูแลอย่างไรหลังส่งมอบ?"
              answer="เรามี Support ตลอด 3 เดือนหลังส่งมอบ รวมถึงการอัพเดทเนื้อหา แก้ไขปัญหาเล็กๆ น้อยๆ และให้คำปรึกษาการใช้งาน หลังจากนั้นมี Maintenance Package ให้เลือกใช้"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium text-gray-700 mb-6">
            ยังมีคำถามอื่นๆ อีกไหม? พูดคุยกับเราได้เลย
          </p>
          <button
            onClick={openCtaPopup}
            className="cta flex items-center gap-2 mx-auto"
          >
            นัดพูดคุยรายละเอียด
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdFAQSection;
