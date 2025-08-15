import React from "react";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { CtaPopup, openCtaPopup } from "@/Components/CtaPopup";
import Image from "next/image";
import ProcessSection from "@/Components/Sections/ProcessSection";
import CtaSection from "../CtaSection";
import AnimatedSuccessIcon from "../Icons/AnimatedSeccessIcon";
import AdHeader from "./AdHeader";
import AdHeroSection from "./AdHeroSection";
import AdProblemSection from "./AdProblemSection";
import AdBenefitsSection from "./AdBenefitsSection";
import AdWhatYouGetSection from "./AdWhatYouGetSection";
import AdFAQSection from "./AdFAQSection";
import AdFooter from "./AdFooter";
import { LucideArrowRight } from "../Icons/LucideArrowRight";

const AdLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CtaPopup />
      <AdHeader />
      <AdHeroSection />
      <AdProblemSection />
      <AdBenefitsSection />
      <AdWhatYouGetSection />

      <ProcessSection
        pillText="กระบวนการทำงาน"
        title="ของเรา"
        highlightText="3 ขั้นตอน"
        subtitle=""
        sectionId="process"
        showCta={true}
        gridCols="3"
        process={[
          {
            title: "นัดพูดคุยรายละเอียด",
            description:
              "ในการนัดพูดคุยนี้เราจะทำความเข้าใจธุรกิจของคุณ และวางแผนแนวทางการทำงานเบื้องต้น",
            block: (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>วิเคราะห์เว็บไซต์ปัจจุบัน</p>
                </div>
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>ศึกษากลุ่มลูกค้าเป้าหมาย</p>
                </div>
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>วางกลยุทธ์การปิดการขาย</p>
                </div>
                <button
                  onClick={openCtaPopup}
                  className="cta flex items-center gap-2 w-full mt-8"
                >
                  นัดพูดคุยรายละเอียด
                  <LucideArrowRight />
                </button>
                <Image
                  src="/DE_Call.png"
                  alt="intro call"
                  width={500}
                  height={500}
                  className="rounded-xl w-full mt-8 object-cover border border-neutral-200"
                />
              </div>
            ),
          },
          {
            title: "ออกแบบและพัฒนา",
            description:
              "สร้าง Landing Page ที่ออกแบบมาเพื่อเพิ่มอัตราการปิดการขายโดยเฉพาะ",
            block: (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>เขียน Copy ที่โน้มน้าวใจ</p>
                </div>
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>ออกแบบ UI/UX เพื่อการขาย</p>
                </div>
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>ปรับให้ใช้งานง่ายบนมือถือ</p>
                </div>
                <Image
                  src="/DE_figma_shot.png"
                  alt="intro call"
                  width={500}
                  height={500}
                  className="rounded-xl w-full mt-8 object-cover border border-neutral-200"
                />
              </div>
            ),
          },
          {
            title: "เปิดใช้งาน วัดผล และปรับปรุง",
            description:
              "เปิดใช้งาน Landing Page และติดตามผลเพื่อปรับปรุงให้ได้ผลดียิ่งขึ้น",
            block: (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>เปิดใช้งาน Landing Page</p>
                </div>
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>ติดตามผลการทำงาน</p>
                </div>
                <div className="flex items-center gap-3">
                  <LucideCheck className="w-4 h-4 text-primary" />
                  <p>ปรับปรุงอย่างต่อเนื่อง</p>
                </div>
                <div className="bg-background mt-8 rounded-2xl px-8 py-16 md:py-4 text-center flex flex-col gap-4 items-center justify-center">
                  <AnimatedSuccessIcon size={80} />
                  <p>Your site has been published</p>
                </div>{" "}
              </div>
            ),
          },
        ]}
      />

      <AdFAQSection />
      <CtaSection />
      <AdFooter />
    </div>
  );
};

export default AdLandingPage;
