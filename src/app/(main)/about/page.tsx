import Logo from "@/Components/Icons/Logo";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";
import { ComparisonSection, ProcessSection } from "@/Components/Sections";
import { PROCESS } from "@/data/pageData";
import React from "react";

export default function AboutPage() {
  return (
    <main>
      <ComparisonSection
        pillText="We're Who You Looking For"
        title="ทำไมเราถึง"
        highlightText="ดีกว่า"
        subtitle="Agency ทั่วไป"
        leftComparison={{
          title: "Agency ทั่วไป",
          items: [
            "ใช้เวลานาน 4 - 6 สัปดาห์",
            "ไม่เข้าใจกลุ่มเป้าหมายและธุรกิจ",
            "ราคาสูงเกินหลักแสน",
            "ไม่ดูแลหลังส่งมอบ",
          ],
          Icon: <LucideX />,
          className: "text-neutral-500",
        }}
        rightComparison={{
          title: "WEBCRAFTSMAN",
          logo: <Logo className="w-16 h-16 fill-primary text-primary" />,
          items: [
            "จัดการทุกอย่างภายใน 7 วัน",
            "เน้นทำงานเฉพาะกลุ่มทำการตลาดออนไลน์",
            "ให้คำปรึกษาอย่างมืออาชีพ",
            "จ่ายเริ่มต้นหลักพัน",
            "ดูแลอย่างใกล้ชิด ไว้ใจได้ตลอด 24 ชั่วโมง",
          ],
          Icon: <LucideCheck className="text-primary" />,
          isHighlighted: true,
          className: "!bg-primary/10",
        }}
        sectionId="Why Us"
      />
      <ProcessSection
        pillText="How We Work"
        title="ในการร่วมงานกับเรา"
        highlightText="3 ขั้นตอน"
        subtitle=""
        process={PROCESS}
      />
    </main>
  );
}
