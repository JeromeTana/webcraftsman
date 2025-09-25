import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Accordion from "@/Components/Accordion";
import { faqs } from "@/data/faqs";
import AnimatedQuestionIcon from "../Icons/AnimatedQuestionIcon";

export default function FAQSection() {
  return (
    <section id="faq" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
        <div className="pill">
          <ShinyText text="FAQ" speed={5} />
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
          <h2 className="inline-flex items-center justify-center gap-4 text-4xl md:text-6xl">
            <AnimatedQuestionIcon className="animate-bounce" />
            <span className={`highlight`}>คำถาม</span> ที่พบบ่อย
          </h2>
        </AnimatedContent>
      </div>
      <div className="grid grid-cols-1 gap-8 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
