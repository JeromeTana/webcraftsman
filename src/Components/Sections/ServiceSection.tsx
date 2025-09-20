import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import ServiceCard from "../ServiceCard";
import { SERVICES } from "@/data";

export default function ComparisonSection() {
  return (
    <section className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text="บริการของเรา" speed={5} />
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
          มากกว่าแค่เว็บไซต์ เราโฟกัสในการ<br />
          <span className="highlight">เพิ่มการเติบโต</span> ของธุรกิจคุณ
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
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
