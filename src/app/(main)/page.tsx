import {
  HeroSection,
  ComparisonSection,
  ShowcaseSection,
  ProcessSection,
  TestimonialSection,
  FAQSection,
  BlogSection,
  ServiceSection,
  TradeSection,
  IntegrationSection,
} from "@/Components/Sections";
import CtaFormSection from "@/Components/Sections/CtaFormSection";
import { siteUrl } from "@/data";

export default function Home() {
  // Structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "WEBCRAFTSMAN",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.svg`,
        },
        description:
          "รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["Thai", "English"],
        },
        sameAs: [
          // Add your social media links here
          // "https://facebook.com/webcraftsman",
          // "https://twitter.com/webcraftsman",
          // "https://linkedin.com/company/webcraftsman",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "WEBCRAFTSMAN",
        description:
          "รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/posts?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "เปลี่ยนคนเข้าเว็บให้เป็นลูกค้า ด้วย Landing Page | WEBCRAFTSMAN",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        description:
          "เพิ่มช่องทางให้ลูกค้าหาใหม่เจอผ่าน Google ได้ง่าย และปิดยอดขายได้มากขึ้น",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Web Development & Landing Page Design",
        description:
          "รับออกแบบและพัฒนาเว็บไซต์ Landing Page สำหรับทำการตลาดออนไลน์",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        serviceType: "Web Development",
        areaServed: "Thailand",
      },
    ],
  };

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main>
        <HeroSection />
        <IntegrationSection />
        <TradeSection />
        <ServiceSection />
        {/* <ComparisonSection /> */}
        <ShowcaseSection />
        <ProcessSection />
        <TestimonialSection />
        <BlogSection />
        <FAQSection />
      </main>
    </div>
  );
}
