import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShowcaseCard from "@/Components/ShowcaseCard";
import ShinyText from "@/Components/ShinyText/ShinyText";
import AnimatedCategoryIcon from "../Icons/AnimatedCategoryIcon";
import { portfolio } from "@/data";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text="ผลงาน" speed={5} />
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
        <h2 className="text-4xl md:text-6xl shaded text-center w-full inline-flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="inline-flex items-center gap-2 md:gap-4">
            <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
            <span>
              <span className={`highlight`}>ผลงานล่าสุด</span>
              <span>ที่ผ่านมาของเรา</span>
            </span>
          </span>
        </h2>
      </AnimatedContent>
      <div className="grid grid-cols-1 gap-8">
        {portfolio.map((work, index) => (
          <ShowcaseCard key={index} work={work} />
        ))}
        {/* <a
            href={ctaCardHref}
            className="group min-h-[36rem] gap-8 w-full bg-foreground p-2 rounded-4xl shadow-lg"
          >
            <div className="relative h-full rounded-3xl overflow-hidden p-4 bg-background/50 group-hover:bg-background">
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-8 h-36 bg-slate-200"></div>
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-8 h-36 bg-slate-200 rotate-90"></div>
              <span>Your Project Here</span>
            </div>
          </a> */}
      </div>
    </section>
  );
}
