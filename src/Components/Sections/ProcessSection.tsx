import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ProcessItem from "@/Components/ProcessItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { CtaButton } from "@/Components/CtaButton";
import { getProcess } from "@/data/process-i18n";
import { type Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ProcessSectionProps {
  locale: Locale;
}

export default async function ProcessSection({ locale }: ProcessSectionProps) {
  const t = await getTranslations("sections.process");
  const process = getProcess(locale);
  return (
    <section id="process" className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center text-center mb-16">
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
          <h2 className="text-4xl md:text-5xl shaded text-center w-full inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="text-primary highlight">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h2>
        </AnimatedContent>
        <p className="text-paragraph text-xl leading-relaxed max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
      <AnimatedContent
        distance={100}
        direction="vertical"
        animateOpacity
        damping={10}
        stiffness={50}
        threshold={0.2}
        delay={100}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <ProcessItem key={index} index={index + 1} process={step}>
              {step.block}
            </ProcessItem>
          ))}
        </div>
      </AnimatedContent>
      <div className="mt-20">
        <CtaButton />
      </div>
    </section>
  );
}
