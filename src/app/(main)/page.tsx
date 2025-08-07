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

export default async function Home() {
  // Fetch blog posts for the blog section
  const posts = await getAllPosts();

  return (
    <div>
      <main>
        <HeroSection
          title="รับออกแบบและพัฒนาเว็บไซต์"
          subtitle="สำหรับ"
          highlightText="ธุรกิจ B2B"
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
              "เน้นทำงานเฉพาะกลุ่มธุรกิจ B2B",
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
