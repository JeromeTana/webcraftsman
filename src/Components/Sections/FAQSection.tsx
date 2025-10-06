import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Accordion from "@/Components/Accordion";
import { getFaqs } from "@/data/faqs-i18n";
import AnimatedQuestionIcon from "../Icons/AnimatedQuestionIcon";
import { type Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface FAQSectionProps {
  locale: Locale;
}

export default async function FAQSection({ locale }: FAQSectionProps) {
  const t = await getTranslations("sections.faq");
  const faqs = getFaqs(locale);
  return (
    <section id="faq" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <div className="pill">
          <ShinyText text={t("label")} speed={5} />
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
          <h2 className="inline-flex items-center justify-center gap-4 text-4xl md:text-5xl">
            {/* <AnimatedQuestionIcon className="animate-bounce" /> */}
            {t.rich("headline", {
              highlight: (chunks) => <span className="highlight">{chunks}</span>,
            })}
          </h2>
        </AnimatedContent>
        <p className="text-paragraph text-xl">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
