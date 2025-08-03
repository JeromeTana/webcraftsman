import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import WorkItem from "@/Components/WorkItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { ReactNode } from "react";

interface Work {
  img: string;
  pills: string[];
  title: string;
  description: string;
}

interface WorkShowcaseSectionProps {
  pillText: string;
  title: string;
  highlightText: string;
  subtitle?: string;
  works: Work[];
  titleIcon?: ReactNode;
  sectionId?: string;
  showCTACard?: boolean;
  ctaCardHref?: string;
}

export default function WorkShowcaseSection({
  pillText,
  title,
  highlightText,
  subtitle,
  works,
  titleIcon,
  sectionId = "showcase",
  showCTACard = true,
  ctaCardHref = "/booking",
}: WorkShowcaseSectionProps) {
  return (
    <section id={sectionId} className="flex flex-col items-center gap-8">
      <div className="pill">
        <ShinyText text={pillText} speed={5} />
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
            {titleIcon}
            <span className={`highlight`}>{highlightText}</span>
            {subtitle}
          </span>
        </h2>
      </AnimatedContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {works.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
        {showCTACard && (
          <a
            href={ctaCardHref}
            className="group min-h-[36rem] gap-6 w-full bg-foreground p-2 rounded-4xl shadow-lg"
          >
            <div className="relative h-full rounded-3xl overflow-hidden p-4 bg-background/50 group-hover:bg-background">
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-8 h-36 bg-slate-200"></div>
              <div className="absolute top-1/2 left-1/2 -translate-1/2 w-8 h-36 bg-slate-200 rotate-90"></div>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
