import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ProcessItem from "@/Components/ProcessItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { CtaButton } from "@/Components/CtaButton";
import { ReactNode } from "react";

interface ProcessStep {
  title: string;
  description: string;
  block: ReactNode;
}

interface ProcessSectionProps {
  pillText: string;
  title: string;
  highlightText: string;
  subtitle: string;
  process: ProcessStep[];
  sectionId?: string;
  showCta?: boolean;
  gridCols?: "2" | "3";
}

export default function ProcessSection({
  pillText,
  title,
  highlightText,
  subtitle,
  process,
  sectionId = "process",
  showCta = true,
  gridCols = "3",
}: ProcessSectionProps) {
  const gridClass = gridCols === "2" 
    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

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
          <span>
            <span className={`highlight`}>{highlightText}</span>{" "}
            {title} {subtitle}
          </span>
        </h2>
      </AnimatedContent>
      <AnimatedContent
        distance={100}
        direction="vertical"
        animateOpacity
        damping={10}
        stiffness={50}
        threshold={0.2}
        delay={100}
      >
        <div className={gridClass}>
          {process.map((step, index) => (
            <ProcessItem key={index} index={index + 1} process={step}>
              {step.block}
            </ProcessItem>
          ))}
        </div>
      </AnimatedContent>
      {showCta && (
        <div className="mt-20">
          <CtaButton />
        </div>
      )}
    </section>
  );
}
