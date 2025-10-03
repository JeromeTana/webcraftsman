import type { Locale } from '@/lib/i18n';

interface FAQ {
  question: string;
  answer: string;
}

interface LocalizedFAQ {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

const localizedFaqs: LocalizedFAQ[] = [
  {
    question: {
      en: "What types of businesses do you work with?",
      th: "เหมาะกับธุรกิจแบบไหนบ้าง?"
    },
    answer: {
      en: "We serve businesses of all sizes, from small shops and SMEs to large corporations. Whether you're online, offline, or both, we customize solutions to meet your specific needs.",
      th: "เราให้บริการธุรกิจทุกขนาด ตั้งแต่ร้านค้าเล็ก SME ไปจนถึงบริษัทขนาดใหญ่ ไม่ว่าจะเป็นธุรกิจออนไลน์ ออฟไลน์ หรือทั้งสองแบบ เราจะปรับแต่งโซลูชันให้เข้ากับความต้องการเฉพาะของคุณ"
    }
  },
  {
    question: {
      en: "What are your starting prices?",
      th: "ราคาเริ่มต้นเท่าไหร่?"
    },
    answer: {
      en: "Pricing depends on the services selected and project complexity. We offer free initial consultations and will propose fair pricing based on your budget, starting from tens of thousands.",
      th: "ราคาขึ้นอยู่กับบริการที่เลือกและความซับซ้อนของโครงการ เราให้คำปรึกษาเบื้องต้นฟรี และจะเสนอราคาที่เหมาะสมตามงบประมาณของคุณ โดยเริ่มต้นจากหลักหมื่น"
    }
  },
  {
    question: {
      en: "How long before I see results?",
      th: "ใช้เวลานานแค่ไหนถึงจะเห็นผล?"
    },
    answer: {
      en: "Results depend on the service type. For websites and advertising, you'll see initial results within 1-2 weeks. SEO and automation systems show clear results in 1-3 months. We provide regular progress reports.",
      th: "ผลลัพธ์ขึ้นอยู่กับประเภทบริการ สำหรับเว็บไซต์และโฆษณา ผลเริ่มเห็นได้ภายใน 1-2 สัปดาห์ ส่วน SEO และระบบอัตโนมัติจะเห็นผลชัดเจนใน 1-3 เดือน เราจะติดตามและรายงานผลให้ดูประจำ"
    }
  },
  {
    question: {
      en: "Do I need technical knowledge?",
      th: "ต้องมีความรู้ด้านเทคโนโลยีไหม?"
    },
    answer: {
      en: "No technical knowledge required. We handle everything from installation and setup to training. You just focus on sales and customer service while we manage all the technology.",
      th: "ไม่ต้องมีความรู้เทคโนโลยีเลย เราดูแลทุกอย่างตั้งแต่การติดตั้ง ตั้งค่า ไปจนถึงการสอนใช้งาน คุณแค่โฟกัสที่การขายและบริการลูกค้า เราจัดการเรื่องเทคโนโลยีให้หมด"
    }
  },
  {
    question: {
      en: "How do I get started?",
      th: "จะเริ่มต้นได้อย่างไร?"
    },
    answer: {
      en: "Simply click 'Get Started' and fill out the form below. We'll contact you back, discuss your needs, analyze requirements, and propose a suitable plan for your business within 24 hours.",
      th: "เพียงคลิก เริ่มต้นรับบริการ และกรอกแบบฟอร์มด้านล่าง เราจะติดต่อกลับและพูดคุย วิเคราะห์ความต้องการ และเสนอแผนที่เหมาะกับธุรกิจคุณภายใน 24 ชั่วโมง"
    }
  }
];

export function getFaqs(locale: Locale): FAQ[] {
  return localizedFaqs.map(faq => ({
    question: faq.question[locale] || faq.question.en,
    answer: faq.answer[locale] || faq.answer.en
  }));
}

// Keep the old export for backward compatibility
export const faqs = getFaqs('th'); // Default to Thai for existing code