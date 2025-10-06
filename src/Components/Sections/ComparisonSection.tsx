import { Check, X } from "lucide-react";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ComparisonItem from "@/Components/ComparisonItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Logo from "../Icons/Logo";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ComparisonSectionProps {
  locale: Locale;
}

export default async function ComparisonSection(_: ComparisonSectionProps) {
  const t = await getTranslations("sections.comparison");
  const typicalItems = t.raw("typical.items") as string[];
  const webcraftsmanItems = t.raw("webcraftsman.items") as string[];

  return (
    <section className="flex flex-col items-center gap-8">
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
          <h2 className="text-4xl md:text-5xl shaded text-center">
            {t.rich("headline", {
              highlight: (chunks) => (
                <span className="highlight">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </h2>
        </AnimatedContent>
        <p className="text-paragraph text-xl leading-relaxed max-w-2xl mx-auto">
          {t("description")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-end gap-16 sm:gap-8 w-full">
        <AnimatedContent
          distance={100}
          direction="vertical"
          animateOpacity
          damping={10}
          stiffness={50}
          threshold={0.2}
          delay={100}
        >
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-2xl">{t("typical.title")}</h3>
            <ComparisonItem
              item={typicalItems}
              Icon={<X />}
              className="text-neutral-500"
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
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <Logo className="w-16 h-16 fill-primary text-primary" />
              <h3 className="text-2xl !font-semibold">WEBCRAFTSMAN</h3>
            </div>
            <ComparisonItem
              item={webcraftsmanItems}
              Icon={<Check className="text-primary" />}
              isHighlighted={true}
              className="!bg-primary/10"
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
