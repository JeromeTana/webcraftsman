import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ComparisonItem from "@/Components/ComparisonItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { LucideCheck } from "../Icons/LucideCheck";
import Logo from "../Icons/Logo";
import { LucideX } from "../Icons/LucideX";

export default function ComparisonSection() {
  return (
    <section className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text="สิ่งที่ทำให้เราไม่เหมือนใคร" speed={5} />
      </div>
      <AnimatedContent
        distance={100}
        direction="vertical"
        initialOpacity={0.05}
        animateOpacity
        damping={10}
        stiffness={50}
        scale={0.9}
        threshold={0.2}
      >
        <h2 className="text-4xl md:text-6xl shaded text-center">
          พวกเรา เชี่ยวชาญ ในการทำงานกับ <br />
          <span className="highlight">ธุรกิจท้องถิ่นและ SME</span> โดยเฉพาะ
        </h2>
      </AnimatedContent>
      <div className="flex flex-col md:flex-row items-end gap-16 sm:gap-8 w-full">
        <AnimatedContent
          distance={100}
          direction="vertical"
          animateOpacity
          damping={10}
          stiffness={50}
          threshold={0.2}
          delay={100}
        >
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-2xl">Agency ทั่วไป</h3>
            <ComparisonItem
              item={[
                "ใช้เวลานาน 4 - 6 สัปดาห์",
                "ไม่เข้าใจกลุ่มเป้าหมายและธุรกิจ",
                "ราคาสูงเกินหลักแสน",
                "ไม่ดูแลหลังส่งมอบ",
              ]}
              Icon={<LucideX />}
              className="text-neutral-500"
            />
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={100}
          direction="vertical"
          animateOpacity
          damping={10}
          stiffness={50}
          threshold={0.2}
          delay={200}
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <Logo className="w-16 h-16 fill-primary text-primary" />
              <h3 className="text-2xl !font-semibold">WEBCRAFTSMAN</h3>
            </div>
            <ComparisonItem
              item={[
                "จัดการทุกอย่างภายใน 14 วัน",
                "เข้าใจการตลาดสำหรับธุรกิจท้องถิ่นและ SME",
                "ให้คำปรึกษาอย่างมืออาชีพ",
                "จ่ายเริ่มต้นหลักพัน",
                "ดูแลอย่างใกล้ชิด ไว้ใจได้ตลอด 24 ชั่วโมง",
              ]}
              Icon={<LucideCheck className="text-primary" />}
              isHighlighted={true}
              className="!bg-primary/10"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
