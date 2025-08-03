import AnimatedCategoryIcon from "@/Components/Icons/AnimatedCategoryIcon";
import AnimatedQuestionIcon from "@/Components/Icons/AnimatedQuestionIcon";
import AnimatedQuoteIcon from "@/Components/Icons/AnimatedQuoteIcon";
import { FAQSection, ProcessSection, TestimonialSection, WorkShowcaseSection } from "@/Components/Sections";
import { FAQS, PROCESS, TESTIMONIAL_DATA, WORKS } from "@/data/pageData";
import React from "react";

export default function ShowcasePage() {
  return (
    <main>
      <WorkShowcaseSection
        pillText="Our Work"
        title="ของเรา"
        highlightText="ผลงานล่าสุด"
        works={WORKS}
        titleIcon={
          <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
        }
      />

      <ProcessSection
        pillText="How We Work"
        title="ในการร่วมงานกับเรา"
        highlightText="3 ขั้นตอน"
        subtitle=""
        process={PROCESS}
      />

  
          <TestimonialSection
            pillText="Testimonial"
            title="สิ่งที่"
            highlightText="ลูกค้าของเรา"
            subtitle="พูดถึงเรา"
            titleIcon={<AnimatedQuoteIcon className="bg-primary rounded-full p-2" />}
            testimonial={TESTIMONIAL_DATA}
          />

      <FAQSection
        pillText="FAQ"
        title="ที่พบบ่อย"
        highlightText="คำถาม"
        subtitle=""
        titleIcon={<AnimatedQuestionIcon className="animate-bounce" />}
        faqs={FAQS}
      />
    </main>
  );
}
