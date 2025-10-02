import BlurText from "@/TextAnimations/BlurText/BlurText";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import { CtaButton } from "@/Components/CtaButton";
import AnimatedCartIcon from "@/Components/Icons/AnimatedCartIcon";
import ImageShowcaseSection from "./ImageShowcaseSection";
import PulsingDot from "../PulsingDot";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-8 !py-16 !max-w-full !px-0 max-h-screen overflow-clip"
    >
      <div className="!space-y-6">
        <div className="pill text-accent-green flex items-center gap-4 m-auto">
          <PulsingDot />
          <h1 className="text-base md:text-2xl text-primary !leading-6 !tracking-wide">
            รับออกแบบและพัฒนาเว็บไซต์ สำหรับธุรกิจท้องถิ่นและ SME
          </h1>
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
          <h2 className="text-4xl md:text-7xl md:text-center max-w-5xl mx-auto">
            <span>เว็บไซต์ที่ออกแบบอย่างตรงจุดเพื่อ</span>{" "}
            <span>
              <AnimatedCartIcon className="hidden md:inline-block bg-primary rounded-full p-2 mx-4" />
              <span className="highlight">เพิ่มยอดขายและการเติบโต</span>
            </span>
          </h2>
        </AnimatedContent>
        {/* <BlurText
        text={
          "พวกเราเพิ่มยอดขาย ให้กับธุรกิจท้องถิ่นและ SME โดยเฉพาะ ด้วยเว็บไซต์ที่ออกแบบมาสำหรับทำการตลาด และเพิ่มการเติบโตธุรกิจ"
        }
        delay={50}
        animateBy="words"
        direction="top"
        className="max-w-2xl text-gray-600 md:!text-xl justify-center mb-8 leading-8"
      /> */}
        <p className="max-w-2xl text-gray-600 md:text-xl md:m-auto justify-center !mb-8 leading-8 md:text-center">
          พวกเราเพิ่มยอดขาย ให้กับธุรกิจท้องถิ่นและ SME โดยเฉพาะ
          ด้วยเว็บไซต์ที่ออกแบบมาสำหรับทำการตลาด และเพิ่มการเติบโตธุรกิจ
        </p>
      </div>
      <div className="z-10">
        <CtaButton />
      </div>
      <ImageShowcaseSection />
    </section>
  );
}
