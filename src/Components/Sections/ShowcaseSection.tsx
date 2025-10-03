import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShowcaseCard from "@/Components/ShowcaseCard";
import ShinyText from "@/Components/ShinyText/ShinyText";
import AnimatedCategoryIcon from "../Icons/AnimatedCategoryIcon";
import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ShowcaseSectionProps {
  locale: Locale;
}

export default async function ShowcaseSection(_: ShowcaseSectionProps) {
  const t = await getTranslations("sections.showcase");
  return (
    <section id="showcase" className="flex flex-col items-center gap-8">
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
          <span className="inline-flex items-center gap-2 md:gap-4">
            <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
            <span>
              {t.rich("headline", {
                highlight: (chunks) => <span className="highlight">{chunks}</span>,
                br: () => <br />,
              })}
            </span>
          </span>
        </h2>
      </AnimatedContent>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {portfolio.map((work, index) => (
          <Image
            key={index}
            src={work.img}
            alt="work"
            width={1000}
            height={1000}
            className="object-cover aspect-square object-top rounded-xl border border-gray-200"
          />
        ))}
      </div>
    </section>
  );
}
