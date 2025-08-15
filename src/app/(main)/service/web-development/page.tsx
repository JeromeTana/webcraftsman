import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import { HeroSection, ProcessSection, TestimonialSection, FAQSection, WorkShowcaseSection } from "@/Components/Sections";
import PricingItem from "@/Components/PricingItem";
import CtaSection from "@/Components/CtaSection";
import AnimatedQuoteIcon from "@/Components/Icons/AnimatedQuoteIcon";
import AnimatedQuestionIcon from "@/Components/Icons/AnimatedQuestionIcon";
import AnimatedCategoryIcon from "@/Components/Icons/AnimatedCategoryIcon";
import { CodeIcon } from "@/Components/Icons/CodeIcon";
import { PLANS, PROCESS, TESTIMONIAL_DATA, WORKS } from "@/data/pageData";
import { Metadata } from "next";
import { description, siteUrl } from "../../../global";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing Page & Website - สร้างเว็บไซต์ | WEBCRAFTSMAN",
  description: "รับสร้างหน้าแลนดิ้งและเว็บไซต์ที่เพิ่มยอดขาย มีประสิทธิภาพสูง ใช้เทคโนโลยีล่าสุด ด้วยการออกแบบที่แปลงผู้เยี่ยมชมเป็นลูกค้า",
  openGraph: {
    title: "Landing Page & Website - สร้างเว็บไซต์ | WEBCRAFTSMAN",
    description: "รับสร้างหน้าแลนดิ้งและเว็บไซต์ที่เพิ่มยอดขาย มีประสิทธิภาพสูง ใช้เทคโนโลยีล่าสุด ด้วยการออกแบบที่แปลงผู้เยี่ยมชมเป็นลูกค้า",
    url: `${siteUrl}/service/web-development`,
    siteName: "WEBCRAFTSMAN",
    images: [
      {
        url: `${siteUrl}/OG_Home.png`,
        alt: "Landing Page & Website Services - WEBCRAFTSMAN",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

const webDevFeatures = [
  {
    icon: "🚀",
    title: "Performance ที่เร็วสุด",
    description: "เว็บไซต์ที่โหลดเร็วด้วย Core Web Vitals Score 90+"
  },
  {
    icon: "🔒",
    title: "ความปลอดภัยสูง",
    description: "SSL Certificate, Security Headers และ DDoS Protection"
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "ใช้งานได้ลื่นในทุกอุปกรณ์ Mobile, Tablet, Desktop"
  },
  {
    icon: "🎯",
    title: "SEO Optimized",
    description: "เตรียมพร้อมสำหรับการค้นหาและติด Google หน้าแรก"
  },
  {
    icon: "⚡",
    title: "Modern Technology",
    description: "ใช้เทคโนโลยีล่าสุด Next.js, React, TypeScript"
  },
  {
    icon: "🔧",
    title: "Easy Management",
    description: "ระบบ CMS ที่ใช้งานง่าย อัปเดตเนื้อหาได้ด้วยตัวเอง"
  }
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Tools & Services", 
    technologies: ["Vercel", "AWS", "Figma", "Sanity CMS", "Analytics"]
  }
];

const webDevFAQs = [
  {
    question: "ใช้เวลาพัฒนานานแค่ไหน?",
    answer: "เว็บไซต์ทั่วไป 5-7 วัน, Landing Page 3-5 วัน ขึ้นอยู่กับความซับซ้อนและจำนวนหน้า"
  },
  {
    question: "สามารถแก้ไขเนื้อหาเองได้ไหม?",
    answer: "ได้ครับ เราจะติดตั้งระบบ CMS ที่ใช้งานง่าย และสอนการใช้งานให้ครบถ้วน"
  },
  {
    question: "มีการสำรองข้อมูลไหม?",
    answer: "มีครับ เราจะตั้งค่าระบบสำรองข้อมูลอัตโนมัติและมีการ backup หลายชั้น"
  },
  {
    question: "รองรับภาษาไทยไหม?",
    answer: "รองรับครับ รวมถึงการจัด SEO สำหรับภาษาไทยเป็นพิเศษ"
  },
  {
    question: "หลังส่งมอบมีการดูแลไหม?",
    answer: "มีการรับประกัน 30 วัน และสามารถสมัครแพ็กเกจดูแลรายเดือนได้"
  }
];

const webDevPackages = PLANS.filter(plan => plan.title === "Website" || plan.title === "Landing");

export default function WebDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development Services",
    "description": "รับพัฒนาเว็บไซต์ที่มีประสิทธิภาพสูง ใช้เทคโนโลยีล่าสุด เพิ่มยอดขายให้ธุรกิจ",
    "provider": {
      "@type": "Organization",
      "name": "WEBCRAFTSMAN",
      "url": siteUrl
    },
    "areaServed": "Thailand",
    "serviceType": "Web Development"
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
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <CodeIcon className="w-4 h-4" />
                Web Development
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                พัฒนา<span className="highlight">เว็บไซต์</span><br />
                ที่เพิ่มยอดขาย
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                สร้างเว็บไซต์ที่มีประสิทธิภาพสูงด้วยเทคโนโลยีล่าสุด เพิ่มการมองเห็นออนไลน์และแปลงผู้เยียมชมให้เป็นลูกค้าจริง
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/roast" className="cta inline-block text-center">
                  เริ่มต้นวิเคราะห์ฟรี
                </Link>
                <Link 
                  href="#pricing" 
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center"
                >
                  ดูราคา
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ทำไมต้องเลือกเรา?
              </h2>
              <p className="text-lg text-gray-600">
                เราไม่ได้แค่สร้างเว็บไซต์ แต่เราสร้างเครื่องมือที่ช่วยเพิ่มยอดขายให้คุณ
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevFeatures.map((feature, index) => (
              <AnimatedContent key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6   border border-gray-100 hover:   transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-50 rounded-3xl my-16">
          <AnimatedContent>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                เทคโนโลยีที่เราใช้
              </h2>
              <p className="text-lg text-gray-600">
                เครื่องมือและภาษาโปรแกรมล่าสุดเพื่อให้ได้เว็บไซต์ที่มีประสิทธิภาพสูงสุด
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((stack, index) => (
              <AnimatedContent key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </section>

        {/* Work Showcase */}
        <WorkShowcaseSection
          pillText="Our Work"
          title="ของเรา"
          highlightText="ผลงานล่าสุด"
          works={WORKS.slice(0, 4)}
          titleIcon={
            <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
          }
          showCTACard={false}
        />

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-4 max-w-7xl mx-auto">
          <AnimatedContent>
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 inline-block">
                Pricing
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                แพ็กเกจ Web Development
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                เลือกแพ็กเกจที่เหมาะกับขนาดและงบประมาณของธุรกิจคุณ
              </p>
            </div>
          </AnimatedContent>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {webDevPackages.map((plan, index) => (
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

        {/* FAQ Section */}
        <FAQSection
          pillText="FAQ"
          title="คำถามที่"
          highlightText="พบบ่อย"
          subtitle="เกี่ยวกับ Web Development"
          titleIcon={<AnimatedQuestionIcon className="bg-primary rounded-full p-2" />}
          faqs={webDevFAQs}
        />

        {/* Testimonial Section */}
        <TestimonialSection
          pillText="Testimonial"
          title="สิ่งที่"
          highlightText="ลูกค้าของเรา"
          subtitle="พูดถึงเรา"
          titleIcon={<AnimatedQuoteIcon className="bg-primary rounded-full p-2" />}
          testimonial={TESTIMONIAL_DATA}
        />

        {/* CTA Section */}
        <CtaSection />
      </main>
    </div>
  );
}
