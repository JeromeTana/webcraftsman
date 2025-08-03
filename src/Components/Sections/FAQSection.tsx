import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Accordion from "@/Components/Accordion";
import { ReactNode } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  pillText: string;
  title: string;
  highlightText: string;
  subtitle: string;
  titleIcon?: ReactNode;
  faqs: FAQ[];
  sectionId?: string;
}

export default function FAQSection({
  pillText,
  title,
  highlightText,
  subtitle,
  titleIcon,
  faqs,
  sectionId = "faq",
}: FAQSectionProps) {
  return (
    <section id={sectionId} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
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
          <h2 className="text-4xl md:text-6xl">
            <span className={`highlight`}>{highlightText}</span> {title}
            <span className="flex items-center gap-2 md:gap-4">
              {titleIcon}
              {subtitle}
            </span>
          </h2>
        </AnimatedContent>
      </div>
      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
