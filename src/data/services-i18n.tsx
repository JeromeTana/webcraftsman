import { IconParkOutlineGoogleAds } from "@/Components/Icons/GoogleAdsIcon";
import {
  Code,
  MapPin,
  MessageCircle,
  TrendingUp,
  UserRound,
  Workflow,
} from "lucide-react";
import type { Locale } from '@/i18n/routing';

export interface Service {
  icon: React.ReactNode;
  title: string;
  thumbnail?: string;
  headline: string;
  description: string;
  url: string;
  problems: string[];
  benefits: { headline: string; description: string }[];
  process: string[];
}

interface LocalizedService extends Omit<Service, 'title' | 'headline' | 'description' | 'problems' | 'benefits' | 'process'> {
  title: Record<Locale, string>;
  headline: Record<Locale, string>;
  description: Record<Locale, string>;
  problems: Record<Locale, string[]>;
  benefits: Record<Locale, { headline: string; description: string }[]>;
  process: Record<Locale, string[]>;
}

const localizedServices: LocalizedService[] = [
  {
    icon: <Code />,
    title: {
      en: "Website Development",
      th: "พัฒนาเว็บไซต์"
    },
    thumbnail: "/Website_Development_Service.png",
    headline: {
      en: "Build high-quality websites to enhance your brand image and credibility",
      th: "สร้างเว็บไซต์คุณภาพ เพื่อเสริมสร้างภาพลักษณ์ และความน่าเชื่อถือ"
    },
    description: {
      en: "Websites designed to increase sales and help your business grow sustainably",
      th: "เว็บไซต์ที่ออกแบบมาเพื่อเพิ่มยอดขาย และช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน"
    },
    url: "/service/web-development",
    problems: {
      en: [
        "Old website loads slowly, losing customers to competitors",
        "No website makes you look unreliable and unable to compete",
        "Missing mobile customers because your website doesn't support mobile devices"
      ],
      th: [
        "เว็บไซต์เก่า โหลดช้า ทำให้เสียลูกค้าให้กับคู่แข่ง",
        "ไม่มีเว็บไซต์ ทำให้ดูไม่น่าเชื่อถือและแข่งขันกับคู่แข่งไม่ได้",
        "เสียโอกาสลูกค้าส่วนใหญ่บนมือถือ เพราะเว็บไซต์ไม่รองรับ"
      ]
    },
    benefits: {
      en: [
        {
          headline: "Increase sales by 3x",
          description: "Multi-device compatible website makes it easier for customers to buy and increases mobile sales opportunities"
        },
        {
          headline: "Customers won't leave due to slow site",
          description: "Website loads in 2 seconds, reducing customer abandonment by 70%"
        },
        {
          headline: "Rank on Google faster",
          description: "SEO-friendly website structure helps customers find you before competitors"
        }
      ],
      th: [
        {
          headline: "เพิ่มยอดขาย 3 เท่า",
          description: "เว็บไซต์ที่รองรับทุกอุปกรณ์ ทำให้ลูกค้าซื้อได้ง่ายขึ้น และเพิ่มโอกาสขายจากมือถือ"
        },
        {
          headline: "ลูกค้าไม่หนีเพราะเว็บช้า",
          description: "เว็บไซต์โหลดเร็วใน 2 วินาที ลดการหนีของลูกค้าไป 70%"
        },
        {
          headline: "ติดอันดับ Google ได้เร็วขึ้น",
          description: "โครงสร้างเว็บที่เป็นมิตรกับ SEO ช่วยให้ลูกค้าเจอคุณก่อนคู่แข่ง"
        }
      ]
    },
    process: {
      en: [
        "Consultation and requirement analysis",
        "Design mockups and wireframes",
        "Development and testing",
        "Launch and ongoing support"
      ],
      th: [
        "ปรึกษาและวิเคราะห์ความต้องการ",
        "ออกแบบและสร้าง mockup",
        "พัฒนาและทดสอบ",
        "เปิดตัวและดูแลต่อเนื่อง"
      ]
    }
  },
  {
    icon: <MapPin />,
    title: {
      en: "Local SEO",
      th: "Local SEO"
    },
    thumbnail: "/Local_SEO_Service.png",
    headline: {
      en: "Dominate local search results and attract nearby customers",
      th: "ครองอันดับค้นหาในพื้นที่ ดึงดูดลูกค้าใกล้เคียง"
    },
    description: {
      en: "Local SEO strategies that put your business on the map for local searches",
      th: "กลยุทธ์ Local SEO ที่ทำให้ธุรกิจของคุณขึ้นแผนที่ เมื่อลูกค้าค้นหาในพื้นที่"
    },
    url: "/service/local-seo",
    problems: {
      en: [
        "Invisible in local search results",
        "Competitors appear first when customers search nearby",
        "Missing out on local foot traffic and phone calls"
      ],
      th: [
        "ไม่ปรากฏในผลการค้นหาในพื้นที่",
        "คู่แข่งขึ้นก่อนเมื่อลูกค้าค้นหาใกล้ๆ",
        "เสียโอกาสลูกค้าเดินเข้าร้านและโทรมา"
      ]
    },
    benefits: {
      en: [
        {
          headline: "Top 3 local search rankings",
          description: "Dominate local search results and be the first choice for nearby customers"
        },
        {
          headline: "More phone calls and visits",
          description: "Increase local foot traffic and phone inquiries by 150%"
        },
        {
          headline: "Google My Business optimization",
          description: "Professional Google listing that builds trust and drives action"
        }
      ],
      th: [
        {
          headline: "ติดอันดับ 3 อันดับแรกในพื้นที่",
          description: "ครองผลการค้นหาในพื้นที่ เป็นตัวเลือกแรกของลูกค้าใกล้เคียง"
        },
        {
          headline: "โทรศัพท์และลูกค้าเดินเข้ามาเพิ่มขึ้น",
          description: "เพิ่มลูกค้าเดินเข้าร้านและโทรสอบถามมากขึ้น 150%"
        },
        {
          headline: "ปรับปรุง Google My Business",
          description: "รายชื่อ Google ที่ดูเป็นมืออาชีพ สร้างความน่าเชื่อถือและกระตุ้นให้ลูกค้าติดต่อ"
        }
      ]
    },
    process: {
      en: [
        "Local market analysis and competitor research",
        "Google My Business setup and optimization",
        "Local citation building and management",
        "Review generation and reputation management"
      ],
      th: [
        "วิเคราะห์ตลาดในพื้นที่และศึกษาคู่แข่ง",
        "ตั้งค่าและปรับปรุง Google My Business",
        "สร้างและจัดการรายชื่อในไดเร็กทอรี่ต่างๆ",
        "สร้างรีวิวและจัดการชื่อเสียง"
      ]
    }
  },
  {
    icon: <TrendingUp />,
    title: {
      en: "Conversion Rate Optimization",
      th: "ปรับปรุงอัตราการแปลง"
    },
    thumbnail: "/Conversion_Rate_Optimization_Service.png",
    headline: {
      en: "Turn more website visitors into paying customers",
      th: "เปลี่ยนผู้เยียมชมเว็บไซต์ให้กลายเป็นลูกค้าจ่ายเงินมากขึ้น"
    },
    description: {
      en: "Data-driven optimization that transforms your website into a powerful sales machine",
      th: "การปรับปรุงอย่างมีข้อมูลรองรับ ที่เปลี่ยนเว็บไซต์ของคุณให้เป็นเครื่องขายที่ทรงพลัง"
    },
    url: "/service/conversion-optimization",
    problems: {
      en: [
        "High website traffic but low sales conversions",
        "Visitors leave without taking action",
        "Unclear calls-to-action confuse potential customers"
      ],
      th: [
        "มีคนเข้าเว็บเยอะแต่ขายไม่ได้",
        "ผู้เยียมชมออกไปโดยไม่ได้ทำอะไร",
        "ปุ่มและข้อความเรียกร้องไม่ชัดเจน ทำให้ลูกค้าสับสน"
      ]
    },
    benefits: {
      en: [
        {
          headline: "Double your conversion rate",
          description: "Optimize your website to convert twice as many visitors into customers"
        },
        {
          headline: "Increase average order value",
          description: "Strategic improvements that encourage customers to spend more per purchase"
        },
        {
          headline: "Reduce cart abandonment",
          description: "Streamline the buying process to minimize lost sales opportunities"
        }
      ],
      th: [
        {
          headline: "เพิ่มอัตราการแปลงเป็น 2 เท่า",
          description: "ปรับปรุงเว็บไซต์ให้แปลงผู้เยียมชมเป็นลูกค้าได้มากขึ้น 2 เท่า"
        },
        {
          headline: "เพิ่มมูลค่าการสั่งซื้อเฉลี่ย",
          description: "การปรับปรุงเชิงกลยุทธ์ที่กระตุ้นให้ลูกค้าซื้อมากขึ้นต่อครั้ง"
        },
        {
          headline: "ลดการทิ้งตะกร้า",
          description: "ปรับปรุงกระบวนการซื้อให้ราบรื่น เพื่อลดโอกาสที่จะเสียการขาย"
        }
      ]
    },
    process: {
      en: [
        "Website audit and user behavior analysis",
        "A/B testing setup and execution",
        "Landing page optimization",
        "Continuous monitoring and improvement"
      ],
      th: [
        "ตรวจสอบเว็บไซต์และวิเคราะห์พฤติกรรมผู้ใช้",
        "ตั้งค่าและดำเนินการ A/B testing",
        "ปรับปรุงหน้า landing page",
        "ติดตามและปรับปรุงอย่างต่อเนื่อง"
      ]
    }
  },
  {
    icon: <IconParkOutlineGoogleAds />,
    title: {
      en: "Google Ads Management",
      th: "จัดการ Google Ads"
    },
    thumbnail: "/Google_Ads_Service.png",
    headline: {
      en: "Generate qualified leads with targeted Google advertising",
      th: "สร้างลีดที่มีคุณภาพด้วยการโฆษณา Google แบบกำหนดเป้าหมาย"
    },
    description: {
      en: "Professional Google Ads management that delivers measurable results and ROI",
      th: "การจัดการ Google Ads แบบมืออาชีพ ที่ให้ผลลัพธ์และผลตอบแทนที่วัดได้"
    },
    url: "/service/google-ads",
    problems: {
      en: [
        "Wasting money on Google Ads with poor results",
        "No experience in managing ad campaigns effectively",
        "High cost per click with low conversion rates"
      ],
      th: [
        "เสียเงินโฆษณา Google แต่ผลออกมาไม่ดี",
        "ไม่มีประสบการณ์ในการจัดการแคมเปญโฆษณาอย่างมีประสิทธิภาพ",
        "ค่าคลิกแพงแต่แปลงเป็นลูกค้าได้น้อย"
      ]
    },
    benefits: {
      en: [
        {
          headline: "Lower cost per acquisition",
          description: "Optimize ad campaigns to get more customers at lower cost"
        },
        {
          headline: "Higher quality leads",
          description: "Target the right audience to attract customers who are ready to buy"
        },
        {
          headline: "Transparent reporting",
          description: "Clear monthly reports showing exactly where your ad budget goes and what results you get"
        }
      ],
      th: [
        {
          headline: "ลดต้นทุนต่อการได้ลูกค้า",
          description: "ปรับปรุงแคมเปญโฆษณาให้ได้ลูกค้ามากขึ้นด้วยต้นทุนที่ลดลง"
        },
        {
          headline: "ลีดคุณภาพสูงขึ้น",
          description: "กำหนดเป้าหมายผู้ชมที่เหมาะสม เพื่อดึงดูดลูกค้าที่พร้อมซื้อ"
        },
        {
          headline: "รายงานโปร่งใส",
          description: "รายงานรายเดือนที่ชัดเจน บอกว่างบโฆษณาไปไหนบ้างและได้ผลอย่างไร"
        }
      ]
    },
    process: {
      en: [
        "Account audit and strategy development",
        "Keyword research and ad creation",
        "Campaign launch and optimization",
        "Performance monitoring and reporting"
      ],
      th: [
        "ตรวจสอบบัญชีและพัฒนากลยุทธ์",
        "ค้นคว้าคีย์เวิร์ดและสร้างโฆษณา",
        "เปิดตัวแคมเปญและปรับปรุง",
        "ติดตามผลและรายงาน"
      ]
    }
  },
  {
    icon: <UserRound />,
    title: {
      en: "AI Chatbot & Automation",
      th: "AI Chatbot และระบบอัตโนมัติ"
    },
    thumbnail: "/AI_Chatbot_and_Automation_Service.png",
    headline: {
      en: "Automate customer service and lead generation 24/7",
      th: "ระบบบริการลูกค้าและสร้างลีดอัตโนมัติ 24 ชั่วโมง"
    },
    description: {
      en: "AI-powered automation that works around the clock to serve customers and generate leads",
      th: "ระบบอัตโนมัติขับเคลื่อนด้วย AI ที่ทำงานตลอดเวลาเพื่อบริการลูกค้าและสร้างลีด"
    },
    url: "/service/ai-chatbot-automation",
    problems: {
      en: [
        "Missing leads outside business hours",
        "Can't respond to all customer inquiries quickly",
        "Repetitive tasks taking up valuable time"
      ],
      th: [
        "เสียลีดนอกเวลาทำการ",
        "ตอบคำถามลูกค้าไม่ทันและไม่ครบทุกคน",
        "งานซ้ำๆ กินเวลาที่มีค่า"
      ]
    },
    benefits: {
      en: [
        {
          headline: "24/7 customer service",
          description: "Never miss a potential customer with round-the-clock automated responses"
        },
        {
          headline: "Instant lead qualification",
          description: "Automatically identify and prioritize high-quality leads"
        },
        {
          headline: "Save 10+ hours per week",
          description: "Automate repetitive tasks so you can focus on growing your business"
        }
      ],
      th: [
        {
          headline: "บริการลูกค้า 24/7",
          description: "ไม่พลาดลูกค้าที่มีโอกาสด้วยระบบตอบกลับอัตโนมัติตลอดเวลา"
        },
        {
          headline: "คัดกรองลีดทันที",
          description: "ระบุและจัดลำดับความสำคัญของลีดคุณภาพสูงโดยอัตโนมัติ"
        },
        {
          headline: "ประหยัดเวลา 10+ ชั่วโมงต่อสัปดาห์",
          description: "ทำงานซ้ำๆ แบบอัตโนมัติ เพื่อให้คุณโฟกัสกับการขยายธุรกิจ"
        }
      ]
    },
    process: {
      en: [
        "Business process analysis",
        "Chatbot design and AI training",
        "Integration and testing",
        "Launch and continuous optimization"
      ],
      th: [
        "วิเคราะห์กระบวนการทำงาน",
        "ออกแบบ chatbot และฝึก AI",
        "เชื่อมต่อและทดสอบ",
        "เปิดใช้งานและปรับปรุงต่อเนื่อง"
      ]
    }
  }
];

export function getServices(locale: Locale): Service[] {
  return localizedServices.map(service => ({
    ...service,
    title: service.title[locale] || service.title.en,
    headline: service.headline[locale] || service.headline.en,
    description: service.description[locale] || service.description.en,
    problems: service.problems[locale] || service.problems.en,
    benefits: service.benefits[locale] || service.benefits.en,
    process: service.process[locale] || service.process.en
  }));
}

// Keep the old export for backward compatibility
export const services = getServices('th'); // Default to Thai for existing code