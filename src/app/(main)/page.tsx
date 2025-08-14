import {
  HeroSection,
  ImageShowcaseSection,
  ComparisonSection,
  WorkShowcaseSection,
  ProcessSection,
  TestimonialSection,
  FAQSection,
  BlogSection,
} from "@/Components/Sections";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";
import Logo from "@/Components/Icons/Logo";
import AnimatedQuestionIcon from "@/Components/Icons/AnimatedQuestionIcon";
import AnimatedCategoryIcon from "@/Components/Icons/AnimatedCategoryIcon";
import AnimatedQuoteIcon from "@/Components/Icons/AnimatedQuoteIcon";
import {
  WORKS,
  PROCESS,
  FAQS,
  SHOWCASE_IMAGES,
  TESTIMONIAL_DATA,
} from "@/data/pageData";
import { getAllPosts } from "@/sanity/lib/queries";
import { siteUrl } from "../global";

export default async function Home() {
  // Fetch blog posts for the blog section
  const posts = await getAllPosts();

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
        description: "รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่",
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
        description: "รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่",
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
        description: "เพิ่มช่องทางให้ลูกค้าหาใหม่เจอผ่าน Google ได้ง่าย และปิดยอดขายได้มากขึ้น",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Web Development & Landing Page Design",
        description: "รับออกแบบและพัฒนาเว็บไซต์ Landing Page สำหรับทำการตลาดออนไลน์",
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
        <HeroSection
          title="เปลี่ยนคนสนใจให้เป็นลูกค้า"
          subtitle="ด้วย "
          highlightText="เว็บไซต์คุณภาพ"
          description="เพิ่มช่องทางให้ลูกค้าหาใหม่เจอผ่าน Google ได้ง่าย และปิดยอดขายได้มากขึ้น"
        />

        <ImageShowcaseSection images={SHOWCASE_IMAGES} />

        <ComparisonSection
          pillText="We're Who You Looking For"
          title="ทำไมเราถึง"
          highlightText="ดีกว่า"
          subtitle="Agency ทั่วไป"
          leftComparison={{
            title: "Agency ทั่วไป",
            items: [
              "ใช้เวลานาน 4 - 6 สัปดาห์",
              "ไม่เข้าใจกลุ่มเป้าหมายและธุรกิจ",
              "ราคาสูงเกินหลักแสน",
              "ไม่ดูแลหลังส่งมอบ",
            ],
            Icon: <LucideX />,
            className: "text-neutral-500",
          }}
          rightComparison={{
            title: "WEBCRAFTSMAN",
            logo: <Logo className="w-16 h-16 fill-primary text-primary" />,
            items: [
              "จัดการทุกอย่างภายใน 7 วัน",
              "เน้นทำงานเฉพาะกลุ่มทำการตลาดออนไลน์",
              "ให้คำปรึกษาอย่างมืออาชีพ",
              "จ่ายเริ่มต้นหลักพัน",
              "ดูแลอย่างใกล้ชิด ไว้ใจได้ตลอด 24 ชั่วโมง",
            ],
            Icon: <LucideCheck className="text-primary" />,
            isHighlighted: true,
            className: "!bg-primary/10",
          }}
          sectionId="Why Us"
        />

        <WorkShowcaseSection
          pillText="Our Work"
          title="ของเรา"
          highlightText="ผลงานล่าสุด"
          works={WORKS}
          titleIcon={
            <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
          }
        />

        <ProcessSection
          pillText="How We Work"
          title="ในการร่วมงานกับเรา"
          highlightText="3 ขั้นตอน"
          subtitle=""
          process={PROCESS}
        />

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

        <BlogSection
          pillText="Blog"
          title=""
          highlightText="ความรู้และบทความ"
          subtitle="ล่าสุดจากเรา"
          posts={posts}
          titleIcon={<></>}
        />

        <FAQSection
          pillText="FAQ"
          title="ที่พบบ่อย"
          highlightText="คำถาม"
          subtitle=""
          titleIcon={<AnimatedQuestionIcon className="animate-bounce" />}
          faqs={FAQS}
        />
      </main>
    </div>
  );
}
