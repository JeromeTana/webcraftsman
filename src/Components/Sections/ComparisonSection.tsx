import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ComparisonItem from "@/Components/ComparisonItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { ReactNode } from "react";

interface ComparisonData {
  title: string;
  items: string[];
  Icon: ReactNode;
  logo?: ReactNode;
  isHighlighted?: boolean;
  className?: string;
}

interface ComparisonSectionProps {
  pillText: string;
  title: string;
  highlightText: string;
  subtitle: string;
  leftComparison: ComparisonData;
  rightComparison: ComparisonData;
  sectionId?: string;
}

export default function ComparisonSection({
  pillText,
  title,
  highlightText,
  subtitle,
  leftComparison,
  rightComparison,
  sectionId = "comparison",
}: ComparisonSectionProps) {
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
        <h2 className="text-4xl md:text-6xl shaded text-center">
          {title} <span className={`highlight`}>{highlightText}</span> {subtitle}
        </h2>
      </AnimatedContent>
      <div className="flex flex-col md:flex-row items-end gap-16 sm:gap-6 w-full">
        <AnimatedContent
          distance={100}
          direction="vertical"
          animateOpacity
          damping={10}
          stiffness={50}
          threshold={0.2}
          delay={100}
        >
          <div className="flex flex-col items-center gap-6">
            {leftComparison.logo ? (
              <div className="flex items-center gap-4">
                {leftComparison.logo}
                <h3 className="text-2xl">{leftComparison.title}</h3>
              </div>
            ) : (
              <h3 className="text-2xl">{leftComparison.title}</h3>
            )}
            <ComparisonItem
              item={leftComparison.items}
              Icon={leftComparison.Icon}
              className={leftComparison.className}
              isHighlighted={leftComparison.isHighlighted}
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
          <div className="flex flex-col items-center gap-6">
            {rightComparison.logo ? (
              <div className="flex items-center gap-4">
                {rightComparison.logo}
                <h3 className="text-2xl !font-semibold">{rightComparison.title}</h3>
              </div>
            ) : (
              <h3 className="text-2xl">{rightComparison.title}</h3>
            )}
            <ComparisonItem
              item={rightComparison.items}
              Icon={rightComparison.Icon}
              isHighlighted={rightComparison.isHighlighted}
              className={rightComparison.className}
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
