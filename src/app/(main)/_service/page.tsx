import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import {
  HeroSection,
  ProcessSection,
  TestimonialSection,
  FAQSection,
} from "@/Components/Sections";
import PricingItem from "@/Components/PricingItem";
import CtaSection from "@/Components/CtaSection";
import AnimatedQuoteIcon from "@/Components/Icons/AnimatedQuoteIcon";
import AnimatedQuestionIcon from "@/Components/Icons/AnimatedQuestionIcon";
import { PLANS, PROCESS, TESTIMONIAL_DATA, FAQS } from "@/data/pageData";
import { Metadata } from "next";
import { description, siteUrl } from "../../global";
import Link from "next/link";
import { CodeIcon } from "@/Components/Icons/CodeIcon";
import { DesignIcon } from "@/Components/Icons/DesignIcon";
import { BriefcaseIcon } from "@/Components/Icons/BriefcaseIcon";
import { ToolIcon } from "@/Components/Icons/ToolIcon";
import { BookIcon } from "@/Components/Icons/BookIcon";

export const metadata: Metadata = {
  title: "บริการของเรา - WEBCRAFTSMAN",
  description:
    "ดูบริการครบวงจรของ WEBCRAFTSMAN Landing Page Website Audit SEO Conversion Rate Optimization และบริการดูแลเว็บไซต์",
  openGraph: {
    title: "บริการของเรา - WEBCRAFTSMAN",
    description:
      "ดูบริการครบวงจรของ WEBCRAFTSMAN Landing Page Website Audit SEO Conversion Rate Optimization และบริการดูแลเว็บไซต์",
    url: `${siteUrl}/services`,
    siteName: "WEBCRAFTSMAN",
    images: [
      {
        url: `${siteUrl}/OG_Home.png`,
        alt: "WEBCRAFTSMAN Services",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "บริการของเรา - WEBCRAFTSMAN",
    description:
      "ดูบริการครบวงจรของ WEBCRAFTSMAN Landing Page Website Audit SEO Conversion Rate Optimization และบริการดูแลเว็บไซต์",
    images: [`${siteUrl}/OG_Home.png`],
  },
};

const services = [
  {
    icon: <CodeIcon className="w-12 h-12 text-primary" />,
    title: "Landing Page & Website",
    description:
      "สร้างหน้าแลนดิ้งและเว็บไซต์ที่มีประสิทธิภาพสูง เพิ่มยอดขายและแปลงผู้เยี่ยมชมเป็นลูกค้า",
    features: [
      "ออกแบบ Landing Page สำหรับปิดการขาย",
      "เว็บไซต์ที่ responsive ทุกหน้าจอ",
      "ประสิทธิภาพสูง (90+ PageSpeed)",
      "SEO optimized",
      "ระบบ CMS ที่ใช้งานง่าย",
      "การวิเคราะห์และติดตาม",
    ],
    href: "/service/web-development",
    price: "เริ่มต้น ฿4,590",
  },
  {
    icon: <DesignIcon className="w-12 h-12 text-primary" />,
    title: "Website Audit",
    description:
      "วิเคราะห์เว็บไซต์ของคุณแบบฟรี เพื่อหาจุดที่ต้องปรับปรุงและเพิ่มประสิทธิภาพ",
    features: [
      "วิเคราะห์ Performance และ UX",
      "ตรวจสอบ SEO และ Technical Issues",
      "รายงานปัญหาแบบละเอียด",
      "คำแนะนำการปรับปรุง",
      "การประเมิน Conversion Rate",
      "แผนการพัฒนาต่อยอด",
    ],
    href: "/roast",
    price: "ฟรี!",
  },
  {
    icon: <BookIcon className="w-12 h-12 text-primary" />,
    title: "SEO",
    description:
      "เพิ่มการมองเห็นในผลการค้นหาและนำลูกค้าใหม่มาสู่เว็บไซต์ของคุณ",
    features: [
      "วิเคราะห์ keyword ที่ตรงกลุ่มเป้าหมาย",
      "ปรับปรุง on-page SEO",
      "สร้าง content strategy",
      "ติดตั้ง analytics และ tracking",
      "รายงานผลประจำเดือน",
      "แนะนำกลยุทธ์ marketing",
    ],
    href: "/service/seo",
    price: "เริ่มต้น ฿3,500/เดือน",
  },
  {
    icon: <ToolIcon className="w-12 h-12 text-primary" />,
    title: "Conversion Rate Optimization",
    description: "เพิ่มอัตราการแปลงเว็บไซต์ด้วยการทดสอบและปรับปรุงแบบมีหลักฐาน",
    features: [
      "A/B Testing และการทดลอง",
      "วิเคราะห์ User Behavior",
      "ปรับปรุง Funnel และ User Journey",
      "ออกแบบ Landing Page ใหม่",
      "การติดตาม Conversion Metrics",
      "รายงานผลและแนวทางต่อยอด",
    ],
    href: "/service/consulting",
    price: "เริ่มต้น ฿5,500/เดือน",
  },
  {
    icon: <ToolIcon className="w-12 h-12 text-primary" />,
    title: "Maintenance Support",
    description:
      "บริการดูแลและอัปเดตเว็บไซต์เพื่อให้ทำงานได้อย่างต่อเนื่องและปลอดภัย",
    features: [
      "อัปเดต security และ performance",
      "สำรองข้อมูลอัตโนมัติ",
      "ตรวจสอบและแก้ไข bug",
      "การสนับสนุนเทคนิค",
      "รายงานประจำเดือน",
      "การเพิ่มฟีเจอร์ใหม่",
    ],
    href: "/service/maintenance",
    price: "เริ่มต้น ฿1,500/เดือน",
  },
  {
    icon: <BriefcaseIcon className="w-12 h-12 text-primary" />,
    title: "E-Commerce",
    description:
      "สร้างร้านค้าออนไลน์ที่เพิ่มยอดขายและสร้างประสบการณ์การซื้อที่ยอดเยี่ยม",
    features: [
      "ระบบชำระเงินที่ปลอดภัย",
      "การจัดการสินค้าอัตโนมัติ",
      "ระบบสมาชิกและโปรโมชั่น",
      "การติดตามคำสั่งซื้อ",
      "รายงานการขายแบบ real-time",
      "เชื่อมต่อกับ marketplace",
    ],
    href: "/service/ecommerce",
    price: "Coming Soon",
    comingSoon: true,
  },
];
const additionalServices = [
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description: "ใช้ AI เพื่อลดต้นทุนและเพิ่มประสิทธิภาพในการทำงาน",
    comingSoon: true,
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-primary" />,
    title: "Google Ads",
    description: "บริหารโฆษณา Google Ads เพื่อเพิ่มการมองเห็นและยอดขาย",
    comingSoon: true,
  },
  {
    icon: <ToolIcon className="w-8 h-8 text-primary" />,
    title: "Analytics Setup",
    description: "ติดตั้งและปรับแต่งระบบวิเคราะห์เพื่อติดตามผลลัพธ์",
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-primary" />,
    title: "Performance Optimization",
    description: "ปรับปรุงความเร็วและประสิทธิภาพของเว็บไซต์",
  },
  {
    icon: <ToolIcon className="w-8 h-8 text-primary" />,
    title: "Migration Services",
    description: "ย้ายเว็บไซต์จาก platform เก่าสู่ระบบใหม่",
  },
  {
    icon: <BriefcaseIcon className="w-8 h-8 text-primary" />,
    title: "Custom Integration",
    description: "เชื่อมต่อกับระบบภายนอกและ third-party services",
  },
];

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WEBCRAFTSMAN Services",
    description:
      "บริการออกแบบและพัฒนาเว็บไซต์ครบวงจร UI/UX Design SEO และการดูแลเว็บไซต์",
    provider: {
      "@type": "Organization",
      name: "WEBCRAFTSMAN",
      url: siteUrl,
    },
    areaServed: "Thailand",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
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
        {/* Hero Section */}
        <HeroSection
          title="บริการของเรา"
          subtitle="ครบวงจร"
          highlightText="Digital Solutions"
          description="ตั้งแต่การออกแบบ พัฒนา ไปจนถึงการดูแลเว็บไซต์ เราให้บริการครบครันเพื่อช่วยให้ธุรกิจของคุณเติบโตในโลกดิจิทัล"
          showAvailableSpots={false}
          showCta={true}
        />

        {/* Main Services Grid */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 inline-block">
                Main Services
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                บริการหลักของเรา
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                เราเชี่ยวชาญในการสร้างเว็บไซต์ที่ไม่เพียงแค่สวยงาม
                แต่ยังช่วยเพิ่มยอดขายและสร้างผลลัพธ์ที่วัดได้จริง
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedContent key={index} delay={index * 0.1}>
                <div
                  className={`bg-white rounded-2xl p-8 border border-gray-100 hover: transition-all duration-300 group relative ${service.comingSoon ? "opacity-75" : ""}`}
                >
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  <div className="mb-6">{service.icon}</div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-lg">
                      {service.price}
                    </span>
                    {service.comingSoon ? (
                      <span className="text-gray-400 font-semibold">
                        เร็วๆ นี้
                      </span>
                    ) : (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        ดูรายละเอียด
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-24">
          <AnimatedContent>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                บริการเสริม
              </h2>
              <p className="text-lg text-gray-600">
                บริการอื่นๆ ที่ช่วยให้เว็บไซต์ของคุณทำงานได้อย่างเต็มประสิทธิภาพ
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedContent key={index} delay={index * 0.1}>
                <div
                  className={`bg-white rounded-xl p-6 text-center hover: transition-shadow relative ${service.comingSoon ? "opacity-75" : ""}`}
                >
                  {service.comingSoon && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 inline-block">
                Pricing
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                แพ็กเกจที่เหมาะกับทุกธุรกิจ
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                เลือกแพ็กเกจที่ตรงกับความต้องการของคุณ
                หรือปรึกษาเพื่อสร้างแพ็กเกจแบบ custom
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PLANS.map((plan, index) => (
              <AnimatedContent key={index} delay={index * 0.1}>
                <PricingItem plan={plan} />
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection
          pillText="How We Work"
          title="ในการร่วมงานกับเรา"
          highlightText="3 ขั้นตอน"
          subtitle=""
          process={PROCESS}
        />

        {/* Testimonial Section */}
        <TestimonialSection
          pillText="Testimonial"
          title="สิ่งที่"
          highlightText="ลูกค้าของเรา"
          subtitle="พูดถึงเรา"
          titleIcon={
            <AnimatedQuoteIcon className="bg-primary rounded-full p-2" />
          }
          testimonial={TESTIMONIAL_DATA}
        />

        {/* FAQ Section */}
        <FAQSection
          pillText="FAQ"
          title="ที่พบบ่อย"
          highlightText="คำถาม"
          subtitle=""
          titleIcon={
            <AnimatedQuestionIcon className="bg-primary rounded-full p-2" />
          }
          faqs={FAQS}
        />
      </main>
    </div>
  );
}
