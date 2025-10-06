import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import ServiceCard from "../ServiceCard";
import { getServices } from "@/data/services";
import { type Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

interface ServiceSectionProps {
  locale: Locale;
}

export default async function ServiceSection({ locale }: ServiceSectionProps) {
  const t = await getTranslations("sections.service");
  const services = getServices(locale);
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
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
