// Example usage of reusable sections for a different page
import {
  HeroSection,
  WorkShowcaseSection,
  FAQSection,
} from "@/Components/Sections";
import { WORKS, FAQS } from "@/data/pageData";
import AnimatedQuestionIcon from "@/Components/Icons/AnimatedQuestionIcon";

export default function ExamplePage() {
  // Custom data for this page
  const customHeroData = {
    title: "Custom Page Title",
    subtitle: "For",
    highlightText: "Your Business",
    description: "This is a custom description for a different page using the same reusable components.",
  };

  const customFAQs = [
    {
      question: "What makes this different?",
      answer: "This page uses the same reusable components but with different content.",
    },
    {
      question: "Can I customize the sections?",
      answer: "Yes, all sections are highly customizable through props.",
    },
  ];

  return (
    <div>
      <main>
        {/* Hero section with custom data */}
        <HeroSection
          title={customHeroData.title}
          subtitle={customHeroData.subtitle}
          highlightText={customHeroData.highlightText}
          description={customHeroData.description}
          showAvailableSpots={false} // Hide available spots for this page
        />

        {/* Work showcase with different configuration */}
        <WorkShowcaseSection
          pillText="Portfolio"
          title=""
          highlightText="Our Best Work"
          works={WORKS.slice(0, 3)} // Show only first 3 works
          showCTACard={false} // Don't show CTA card
        />

        {/* FAQ with custom data */}
        <FAQSection
          pillText="Help"
          title="to Your"
          highlightText="Quick Answers"
          subtitle="Questions"
          titleIcon={<AnimatedQuestionIcon className="animate-bounce" />}
          faqs={customFAQs}
        />
      </main>
    </div>
  );
}
