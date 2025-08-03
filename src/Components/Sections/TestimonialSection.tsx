import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { MaterialSymbolsStarRounded } from "@/Components/Icons/MaterialStar";
import Image from "next/image";
import { ReactNode } from "react";

interface TestimonialData {
  quote: string;
  description?: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    companyLogo?: string;
  };
  image?: string;
  rating?: number;
}

interface TestimonialSectionProps {
  pillText: string;
  title: string;
  highlightText: string;
  subtitle: string;
  titleIcon?: ReactNode;
  testimonial: TestimonialData;
  sectionId?: string;
  maxWidth?: string;
}

export default function TestimonialSection({
  pillText,
  title,
  highlightText,
  subtitle,
  titleIcon,
  testimonial,
  sectionId = "testimonial",
  maxWidth = "!max-w-5xl",
}: TestimonialSectionProps) {
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: rating }, (_, index) => (
      <MaterialSymbolsStarRounded key={index} className="text-(--accent-yellow)" />
    ));
  };

  return (
    <section className={`flex flex-col items-center gap-8 ${maxWidth}`} id={sectionId}>
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
            {title} <span className={`highlight`}>{highlightText}</span>
          </span>
          <span className="inline-flex items-center gap-2 md:gap-4">
            {titleIcon} {subtitle}
          </span>
        </h2>
      </AnimatedContent>
      
      {testimonial.image && (
        <Image
          src={testimonial.image}
          alt="Testimonial comparison"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-3xl mb-16 border border-neutral-200"
        />
      )}
      
      {testimonial.rating && (
        <div className="flex scale-150">
          {renderStars(testimonial.rating)}
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-5xl mb-2 leading-snug">
          "{testimonial.quote}"
        </h3>
        {testimonial.description && <p>{testimonial.description}</p>}
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Image
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          {testimonial.author.companyLogo && (
            <Image
              src={testimonial.author.companyLogo}
              alt="Company logo"
              width={40}
              height={40}
              className="rounded-full absolute -bottom-2 -right-4 border-2 border-background"
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <p className="!text-black">{testimonial.author.name}</p>
          <p className="!text-sm">{testimonial.author.title}</p>
        </div>
      </div>
    </section>
  );
}
