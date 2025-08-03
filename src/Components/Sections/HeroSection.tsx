import BlurText from "@/TextAnimations/BlurText/BlurText";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import AvailableSpots from "@/Components/AvailableSpots";
import { CtaButton } from "@/Components/CtaButton";
import AnimatedCartIcon from "@/Components/Icons/AnimatedCartIcon";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  highlightText: string;
  description: string;
  showAvailableSpots?: boolean;
  showCta?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  highlightText,
  description,
  showAvailableSpots = true,
  showCta = true,
}: HeroSectionProps) {
  return (
    <section id="hero" className="flex flex-col items-center gap-8 !py-16">
      {showAvailableSpots && <AvailableSpots />}
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
        <h1 className="text-4xl md:text-7xl text-center ">
          {title} <br /> {subtitle}{" "}
          <span className="inline-flex items-center gap-4">
            <AnimatedCartIcon className="hidden md:block bg-primary rounded-full p-2" />
            <span className={`highlight`}>
              {highlightText}
            </span>{" "}
          </span>
        </h1>
      </AnimatedContent>
      <BlurText
        text={description}
        delay={50}
        animateBy="words"
        direction="top"
        className="max-w-2xl md:text-xl! justify-center mb-8 text-center"
      />
      {showCta && <CtaButton />}
    </section>
  );
}
