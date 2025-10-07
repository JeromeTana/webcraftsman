import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import { CtaButton } from "@/Components/CtaButton";
import { type Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { getServices } from "@/data";

interface BenefitSectionProps {
  locale: Locale;
}

export default async function BenefitSection({ locale }: BenefitSectionProps) {
  const t = await getTranslations("sections.benefit");
  const services = getServices(locale);
  
  // Define static benefits data that can be overridden by services
  const defaultBenefits = [
    {
      headline: "High Converting Design",
      description: "Our websites are designed with a focus on user experience and conversion optimization, ensuring that visitors are guided towards taking desired actions, such as making a purchase or filling out a contact form.",
      image: "/Website_Development_Service.png",
    },
    {
      headline: "Best Structure for SEO", 
      description: "We build websites with clean code and proper structure, making it easier for search engines to crawl and index your site, improving your chances of ranking higher in search results and attracting organic traffic.",
      image: "/Local_SEO_Service.png",
    },
    {
      headline: "Mobile Friendly & High Performance",
      description: "Our websites are fully responsive and optimized for performance, ensuring that they look great and load quickly on all devices, providing a seamless experience for your users.", 
      image: "/Conversion_Rate_Optimization_Service.png",
    },
  ];

  // Get benefits from the first service (Website Development) if available
  const webDevService = services.find(service => service.url === "/service/web-development");
  const benefits = webDevService?.benefits && webDevService.benefits.length > 0 
    ? webDevService.benefits 
    : defaultBenefits;
  return (
    <section id="benefits" className="flex flex-col items-center gap-8">
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
      <div className="w-full space-y-16">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-foreground rounded-3xl grid md:grid-cols-2 overflow-clip">
            {index % 2 === 0 ? (
              <>
                <div className="p-12 mb-32">
                  <h3 className="text-2xl font-semibold mb-4">
                    {benefit.headline}
                  </h3>
                  <p className="text-paragraph/90">
                    {benefit.description}
                  </p>
                </div>
                <div 
                  className="bg-cover bg-center bg-no-repeat min-h-[300px]" 
                  style={{ 
                    backgroundImage: `url(${benefit.image})`
                  }} 
                />
              </>
            ) : (
              <>
                <div 
                  className="bg-cover bg-center bg-no-repeat min-h-[300px]" 
                  style={{ 
                    backgroundImage: `url(${benefit.image})`
                  }} 
                />
                <div className="p-12 mb-32">
                  <h3 className="text-2xl font-semibold mb-4">
                    {benefit.headline}
                  </h3>
                  <p className="text-paragraph/90">
                    {benefit.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-20">
        <CtaButton />
      </div>
    </section>
  );
}
