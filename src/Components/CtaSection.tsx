import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";
import { CtaButtonHighlighted } from "./CtaButton";
import AnimatedCalendarIcon from "./Icons/AnimatedCalendarIcon";
import { CtaPopup } from "./CtaPopup";
import PulsingDot from "./PulsingDot";

export default function CtaSection() {
  return (
    <>
      <section id="cta" className="cta-section">
        <div className="relief relative overflow-clip bg-primary border-2 border-primary m-auto pt-16 pb-72 lg:pb-96 rounded-4xl flex flex-col gap-8 items-center justify-center">
          <div className="pill flex items-center gap-4">
            <PulsingDot />
            <p className="!text-white">เริ่มต้นพูดคุยรับคำปรึกษา</p>
          </div>
          <div className="flex flex-col gap-4 px-8">
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
              <h2 className="text-4xl md:text-6xl !mb-0 text-white text-center">
                <span className="inline-flex items-center gap-4">
                  <span className="inline-flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    รับคำปรึกษาด้านเว็บไซต์ ฟรี!
                  </span>
                </span>
                {/* <span className="hidden md:inline-flex items-center gap-4">
                  with{" "}
                  <span className="inline-flex items-center gap-4">
                    <Image
                      src="/jerome_pfp.png"
                      alt="Jerome pfp"
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-white"
                    />{" "}
                    Jerome
                  </span>
                </span> */}
              </h2>
            </AnimatedContent>
            <p className="!text-white text-xl max-w-lg mx-auto font-medium text-center leading-10">
              นัดพูดคุยกับเราฟรี!เราจะช่วยคุณวางแผนกลยุทธ์ด้านเว็บไซต์ที่เหมาะสมกับธุรกิจของคุณ
            </p>
            {/* <ul className="flex flex-col gap-2">
            {features.map((feature, index) => (
              <li key={index} className="text-white flex items-center gap-2">
                <LucideCheck />
                <p className="text-white font-medium">{feature}</p>
              </li>
            ))}
          </ul> */}
          </div>
          <div className="relative w-full mx-auto flex justify-center mt-4">
            <CtaButtonHighlighted />
            <div className="absolute md:w-4xl top-64 md:top-48 z-0 grid grid-cols-3 gap-4 max-w-7xl m-auto px-4">
              <Image
                src="/showcase2.png"
                alt="work"
                width={500}
                height={500}
                className="w-80 object-cover object-top group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 md:hover:-rotate-1 md:hover:scale-105"
              />
              <Image
                src="/showcase1.webp"
                alt="work"
                width={500}
                height={500}
                className="w-80 object-cover object-top group-hover:scale-105 duration-300 rounded md:rounded-lg scale-200 md:scale-125 md:hover:-rotate-1 md:hover:scale-[1.3] z-10"
              />
              <Image
                src="/showcase3.png"
                alt="work"
                width={500}
                height={500}
                className="w-80 object-cover object-top group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 md:hover:-rotate-1 md:hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <CtaPopup />
    </>
  );
}
