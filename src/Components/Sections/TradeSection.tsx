import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";

export default function TradeSection() {
  return (
    <section className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text="กลุ่มธุรกิจที่เราเชี่ยวชาญ" speed={5} />
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
        <h2 className="text-4xl md:text-5xl shaded text-center">
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
          <div className="grid md:grid-cols-3 items-center gap-8">
            <div className="card">ธุรกิจจัดสวน ดูแลต้นไม้</div>
            <div className="card">ธุรกิจโซล่าเซลล์</div>
            <div className="card">ธุรกิจรีโนเวทอาคาร</div>
            <div className="card">ธุรกิจสร้างสระว่ายน้ำ</div>
            <div className="card">ธุรกิจรับเหมา</div>
            <div className="card">ธุรกิจปูหลังคา</div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
