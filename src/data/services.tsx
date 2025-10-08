import { IconParkOutlineGoogleAds } from "@/Components/Icons/GoogleAdsIcon";
import {
  Code,
  MapPin,
  MessageCircle,
  TrendingUp,
  UserRound,
  Workflow,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";

export interface Service {
  icon: React.ReactNode;
  title: string;
  thumbnail?: string;
  headline: string;
  description: string;
  url: string;
  problems: string[];
  benefits: { headline: string; description: string; image: string }[];
  process: string[];
}

interface LocalizedService
  extends Omit<
    Service,
    "title" | "headline" | "description" | "problems" | "benefits" | "process"
  > {
  title: Record<Locale, string>;
  headline: Record<Locale, string>;
  description: Record<Locale, string>;
  problems: Record<Locale, string[]>;
  benefits: Record<
    Locale,
    { headline: string; description: string; image: string }[]
  >;
  process: Record<Locale, string[]>;
}

const services: LocalizedService[] = [
  {
    icon: <Code />,
    title: {
      en: "Website Development",
      th: "Website Development",
    },
    thumbnail: "/Website_Development_Service.png",
    headline: {
      en: "Build high-quality websites to drive growth and credibility",
      th: "รับพัฒนาเว็บไซต์คุณภาพ เพื่อเพิ่มยอดขาย และสร้างความน่าเชื่อถือ",
    },
    description: {
      en: "Professional websites designed to increase sales, enhance brand credibility, and help your business grow sustainably in the digital marketplace.",
      th: "เว็บไซต์มืออาชีพที่ออกแบบมาเพื่อเพิ่มยอดขาย เสริมสร้างความน่าเชื่อถือของแบรนด์ และช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืนในตลาดดิจิทัล",
    },
    url: "/service/web-development",
    benefits: {
      en: [
        {
          headline: "High Converting Design",
          description: "Our websites are designed with a focus on user experience and conversion optimization, ensuring that visitors are guided towards taking desired actions, such as making a purchase or filling out a contact form.",
          image: "/Website_Development_Service.png"
        },
        {
          headline: "Best Structure for SEO",
          description: "We build websites with clean code and proper structure, making it easier for search engines to crawl and index your site, improving your chances of ranking higher in search results and attracting organic traffic.",
          image: "/Local_SEO_Service.png"
        },
        {
          headline: "Mobile Friendly & High Performance",
          description: "Our websites are fully responsive and optimized for performance, ensuring that they look great and load quickly on all devices, providing a seamless experience for your users.",
          image: "/Conversion_Rate_Optimization_Service.png"
        }
      ],
      th: [
        {
          headline: "การออกแบบที่เน้นยอดขาย",
          description: "เว็บไซต์ของเราได้รับการออกแบบโดยเน้นที่ประสบการณ์ของผู้ใช้และการเพิ่มประสิทธิภาพการขาย เพื่อให้มั่นใจว่าผู้เยี่ยมชมจะได้รับการชี้แนะให้ดำเนินการตามที่ต้องการ เช่น การซื้อสินค้าหรือการกรอกแบบฟอร์มติดต่อ",
          image: "/Website_Development_Service.png"
        },
        {
          headline: "โครงสร้างที่ดีที่สุดสำหรับ SEO",
          description: "เราสร้างเว็บไซต์ด้วยโค้ดที่สะอาดและโครงสร้างที่เหมาะสม ทำให้ search engine สามารถ crawl และ index เว็บไซต์ของคุณได้ง่ายขึ้น ปรับปรุงโอกาสในการจัดอันดับที่สูงขึ้นในผลการค้นหาและดึงดูดการเข้าชมแบบออร์แกนิก",
          image: "/Local_SEO_Service.png"
        },
        {
          headline: "รองรับมือถือและประสิทธิภาพสูง",
          description: "เว็บไซต์ของเรารองรับการใช้งานบนอุปกรณ์ทุกประเภทและเพิ่มประสิทธิภาพ เพื่อให้มั่นใจว่าจะดูดีและโหลดเร็วบนอุปกรณ์ทุกชนิด มอบประสบการณ์ที่ราบรื่นสำหรับผู้ใช้ของคุณ",
          image: "/Conversion_Rate_Optimization_Service.png"
        }
      ]
    },
    problems: {
      en: [
        "Old website loads slowly, losing customers to competitors",
        "No website makes you look unreliable and unable to compete",
        "Missing mobile customers because your website doesn't support mobile devices",
      ],
      th: [
        "เว็บไซต์เก่า โหลดช้า ทำให้เสียลูกค้าให้กับคู่แข่ง",
        "ไม่มีเว็บไซต์ ทำให้ดูไม่น่าเชื่อถือและแข่งขันกับคู่แข่งไม่ได้",
        "เสียโอกาสลูกค้าส่วนใหญ่บนมือถือ เพราะเว็บไซต์ไม่รองรับ",
      ],
    },
    process: {
      en: [
        "Consultation and requirement analysis",
        "Design mockups and wireframes",
        "Development and testing",
        "Launch and ongoing support",
      ],
      th: [
        "ปรึกษาและวิเคราะห์ความต้องการ",
        "ออกแบบและสร้าง mockup",
        "พัฒนาและทดสอบ",
        "เปิดตัวและดูแลต่อเนื่อง",
      ],
    },
  },
  {
    icon: <MapPin />,
    title: {
      en: "Local SEO",
      th: "Local SEO",
    },
    thumbnail: "/Local_SEO_Service.png",
    headline: {
      en: "Get your business found on Google Maps to attract nearby customers",
      th: "รับปรับปรุง Google Maps ให้ติดอันดับ เพื่อดึงดูดลูกค้าในบริเวณใกล้เคียง",
    },
    description: {
      en: "Strategic local SEO optimization that puts your business on Google Maps and attracts nearby customers actively searching for your services.",
      th: "การปรับปรุง Local SEO อย่างมีกลยุทธ์ที่ทำให้ธุรกิจของคุณขึ้น Google Maps และดึงดูดลูกค้าใกล้เคียงที่กำลังค้นหาบริการของคุณอย่างแข็งขัน",
    },
    url: "/service/local-seo",
    problems: {
      en: [
        "Invisible in local search results",
        "Competitors appear first when customers search nearby",
        "Missing out on local foot traffic and phone calls",
      ],
      th: [
        "ไม่ปรากฏในผลการค้นหาในพื้นที่",
        "คู่แข่งขึ้นก่อนเมื่อลูกค้าค้นหาใกล้ๆ",
        "เสียโอกาสลูกค้าเดินเข้าร้านและโทรมา",
      ],
    },
    benefits: {
      en: [
        {
          headline: "Dominate Local Search Results",
          description: "Get your business visible when customers search for services in your area. Our local SEO strategies ensure you appear in Google's local pack and Maps results, driving more foot traffic and phone calls to your business.",
          image: "/Local_SEO_Service.png"
        },
        {
          headline: "Increased Customer Trust & Credibility",
          description: "Build trust with potential customers through positive reviews, accurate business information, and strong local presence. Local SEO helps establish your business as a trusted authority in your community.",
          image: "/Google_Ads_Service.png"
        },
        {
          headline: "Cost-Effective Marketing",
          description: "Local SEO provides long-term results without the ongoing costs of paid advertising. Once optimized, your local presence continues to attract customers organically, providing excellent return on investment.",
          image: "/Conversion_Rate_Optimization_Service.png"
        }
      ],
      th: [
        {
          headline: "ครองอันดับการค้นหาในพื้นที่",
          description: "ทำให้ธุรกิจของคุณปรากฏเมื่อลูกค้าค้นหาบริการในพื้นที่ของคุณ กลยุทธ์ Local SEO ของเราช่วยให้คุณปรากฏใน Google local pack และผลลัพธ์ Maps ดึงดูดลูกค้าเดินเข้าร้านและโทรติดต่อมากขึ้น",
          image: "/Local_SEO_Service.png"
        },
        {
          headline: "เพิ่มความไว้วางใจและความน่าเชื่อถือ",
          description: "สร้างความไว้วางใจกับลูกค้าที่มีศักยภาพผ่านรีวิวเชิงบวก ข้อมูลธุรกิจที่ถูกต้อง และการปรากฏตัวในท้องถิ่นที่แข็งแกร่ง Local SEO ช่วยสร้างธุรกิจของคุณให้เป็นผู้มีอำนาจที่น่าเชื่อถือในชุมชน",
          image: "/Google_Ads_Service.png"
        },
        {
          headline: "การตลาดที่คุ้มค่า",
          description: "Local SEO ให้ผลลัพธ์ระยะยาวโดยไม่มีต้นทุนต่อเนื่องของการโฆษณาแบบจ่ายเงิน เมื่อปรับให้เหมาะสมแล้ว การปรากฏตัวในท้องถิ่นของคุณจะยังคงดึงดูดลูกค้าแบบออร์แกนิก ให้ผลตอบแทนการลงทุนที่ยอดเยี่ยม",
          image: "/Conversion_Rate_Optimization_Service.png"
        }
      ]
    },
    process: {
      en: [
        "Local market analysis and competitor research",
        "Google My Business setup and optimization",
        "Local citation building and management",
        "Review generation and reputation management",
      ],
      th: [
        "วิเคราะห์ตลาดในพื้นที่และศึกษาคู่แข่ง",
        "ตั้งค่าและปรับปรุง Google My Business",
        "สร้างและจัดการรายชื่อในไดเร็กทอรี่ต่างๆ",
        "สร้างรีวิวและจัดการชื่อเสียง",
      ],
    },
  },
  {
    icon: <TrendingUp />,
    title: {
      en: "Conversion Rate Optimization",
      th: "Conversion Rate Optimization",
    },
    thumbnail: "/Conversion_Rate_Optimization_Service.png",
    headline: {
      en: "Turn more website visitors into paying customers",
      th: "รับปรับปรุงเว็บไซต์เพื่อเพิ่มจำนวนผู้เยี่ยมชมให้กลายเป็นลูกค้ามากขึ้น",
    },
    description: {
      en: "Data-driven website optimization that transforms your existing traffic into paying customers through scientific testing and user experience improvements.",
      th: "การปรับปรุงเว็บไซต์อย่างมีข้อมูลรองรับที่เปลี่ยนการเข้าชมที่มีอยู่ให้เป็นลูกค้าที่จ่ายเงินผ่านการทดสอบทางวิทยาศาสตร์และการปรับปรุงประสบการณ์ผู้ใช้",
    },
    url: "/service/conversion-optimization",
    problems: {
      en: [
        "High website traffic but low sales conversions",
        "Visitors leave without taking action",
        "Unclear calls-to-action confuse potential customers",
      ],
      th: [
        "มีคนเข้าเว็บเยอะแต่ขายไม่ได้",
        "ผู้เยียมชมออกไปโดยไม่ได้ทำอะไร",
        "ปุ่มและข้อความเรียกร้องไม่ชัดเจน ทำให้ลูกค้าสับสน",
      ],
    },
    benefits: {
      en: [
        {
          headline: "Maximize Revenue from Existing Traffic",
          description: "Transform your website visitors into paying customers without needing more traffic. Our optimization strategies focus on improving conversion rates, meaning you'll generate more sales from the same number of visitors.",
          image: "/Conversion_Rate_Optimization_Service.png"
        },
        {
          headline: "Data-Driven Decision Making",
          description: "Every change we make is backed by real user data and A/B testing. This scientific approach ensures that improvements are measurable and effective, eliminating guesswork from your marketing strategy.",
          image: "/Website_Development_Service.png"
        },
        {
          headline: "Improved User Experience",
          description: "Our optimization process naturally improves the overall user experience on your website. Visitors will find it easier to navigate, understand your offers, and complete desired actions, leading to higher satisfaction and loyalty.",
          image: "/Local_SEO_Service.png"
        }
      ],
      th: [
        {
          headline: "เพิ่มรายได้สูงสุดจากการเข้าชมที่มีอยู่",
          description: "เปลี่ยนผู้เยี่ยมชมเว็บไซต์ของคุณให้เป็นลูกค้าที่จ่ายเงินโดยไม่ต้องการการเข้าชมมากขึ้น กลยุทธ์การปรับปรุงของเราเน้นการปรับปรุงอัตราการแปลง หมายความว่าคุณจะสร้างยอดขายมากขึ้นจากผู้เยี่ยมชมจำนวนเดียวกัน",
          image: "/Conversion_Rate_Optimization_Service.png"
        },
        {
          headline: "การตัดสินใจขับเคลื่อนด้วยข้อมูล",
          description: "ทุกการเปลี่ยนแปลงที่เราทำมีข้อมูลผู้ใช้จริงและการทดสอบ A/B รองรับ วิธีการทางวิทยาศาสตร์นี้ช่วยให้มั่นใจว่าการปรับปรุงสามารถวัดได้และมีประสิทธิภาพ กำจัดการเดาจากกลยุทธ์การตลาดของคุณ",
          image: "/Website_Development_Service.png"
        },
        {
          headline: "ปรับปรุงประสบการณ์ผู้ใช้",
          description: "กระบวนการปรับปรุงของเราปรับปรุงประสบการณ์ผู้ใช้โดยรวมบนเว็บไซต์ของคุณอย่างเป็นธรรมชาติ ผู้เยี่ยมชมจะพบว่าง่ายขึ้นในการนำทาง เข้าใจข้อเสนอของคุณ และดำเนินการตามที่ต้องการ นำไปสู่ความพึงพอใจและความภักดีที่สูงขึ้น",
          image: "/Local_SEO_Service.png"
        }
      ]
    },
    process: {
      en: [
        "Website audit and user behavior analysis",
        "A/B testing setup and execution",
        "Landing page optimization",
        "Continuous monitoring and improvement",
      ],
      th: [
        "ตรวจสอบเว็บไซต์และวิเคราะห์พฤติกรรมผู้ใช้",
        "ตั้งค่าและดำเนินการ A/B testing",
        "ปรับปรุงหน้า landing page",
        "ติดตามและปรับปรุงอย่างต่อเนื่อง",
      ],
    },
  },
  {
    icon: <IconParkOutlineGoogleAds />,
    title: {
      en: "Google Ads Management",
      th: "จัดการ Google Ads",
    },
    thumbnail: "/Google_Ads_Service.png",
    headline: {
      en: "Generate qualified leads with targeted Google advertising",
      th: "รับยิงโฆษณา Google Ads แบบเจาะจงเป้าหมาย เพื่อสร้างลีดที่มีคุณภาพ",
    },
    description: {
      en: "Expert Google Ads campaign management that delivers qualified leads with measurable ROI through strategic targeting and continuous optimization.",
      th: "การจัดการแคมเปญ Google Ads ระดับผู้เชี่ยวชาญที่ส่งมอบลีดที่มีคุณภาพพร้อม ROI ที่วัดได้ผ่านการกำหนดเป้าหมายเชิงกลยุทธ์และการปรับปรุงอย่างต่อเนื่อง",
    },
    url: "/service/google-ads",
    problems: {
      en: [
        "Wasting money on Google Ads with poor results",
        "No experience in managing ad campaigns effectively",
        "High cost per click with low conversion rates",
      ],
      th: [
        "เสียเงินโฆษณา Google แต่ผลออกมาไม่ดี",
        "ไม่มีประสบการณ์ในการจัดการแคมเปญโฆษณาอย่างมีประสิทธิภาพ",
        "ค่าคลิกแพงแต่แปลงเป็นลูกค้าได้น้อย",
      ],
    },
    benefits: {
      en: [
        {
          headline: "Immediate Targeted Traffic",
          description: "Get qualified leads and customers within hours of launching your campaign. Unlike SEO which takes months, Google Ads delivers immediate visibility to people actively searching for your products or services.",
          image: "/Google_Ads_Service.png"
        },
        {
          headline: "Precise Budget Control & ROI",
          description: "Know exactly where every dollar is spent and what return you're getting. Our expert management ensures your ad budget is optimized for maximum conversions while minimizing wasted spend on irrelevant clicks.",
          image: "/Conversion_Rate_Optimization_Service.png"
        },
        {
          headline: "Advanced Targeting Capabilities",
          description: "Reach your ideal customers based on location, demographics, interests, and search behavior. Our sophisticated targeting strategies ensure your ads are shown to people most likely to become customers.",
          image: "/Local_SEO_Service.png"
        }
      ],
      th: [
        {
          headline: "การเข้าชมเป้าหมายทันที",
          description: "รับลีดและลูกค้าที่มีคุณภาพภายในไม่กี่ชั่วโมงหลังจากเปิดแคมเปญ ต่างจาก SEO ที่ใช้เวลาหลายเดือน Google Ads ให้การมองเห็นทันทีกับผู้ที่กำลังค้นหาผลิตภัณฑ์หรือบริการของคุณอย่างแข็งขัน",
          image: "/Google_Ads_Service.png"
        },
        {
          headline: "การควบคุมงบประมาณที่แม่นยำและ ROI",
          description: "รู้ว่าทุกบาทถูกใช้ไปที่ไหนและได้ผลตอบแทนอะไรกลับมา การจัดการผู้เชี่ยวชาญของเราช่วยให้มั่นใจว่างบโฆษณาของคุณได้รับการปรับให้เหมาะสมสำหรับการแปลงสูงสุดในขณะที่ลดการใช้จ่ายที่เสียไปกับคลิกที่ไม่เกี่ยวข้อง",
          image: "/Conversion_Rate_Optimization_Service.png"
        },
        {
          headline: "ความสามารถในการกำหนดเป้าหมายขั้นสูง",
          description: "เข้าถึงลูกค้าในอุดมคติของคุณตามสถานที่ ข้อมูลประชากร ความสนใจ และพฤติกรรมการค้นหา กลยุทธ์การกำหนดเป้าหมายที่ซับซ้อนของเราช่วยให้มั่นใจว่าโฆษณาของคุณจะแสดงต่อผู้ที่มีแนวโน้มจะเป็นลูกค้ามากที่สุด",
          image: "/Local_SEO_Service.png"
        }
      ]
    },
    process: {
      en: [
        "Account audit and strategy development",
        "Keyword research and ad creation",
        "Campaign launch and optimization",
        "Performance monitoring and reporting",
      ],
      th: [
        "ตรวจสอบบัญชีและพัฒนากลยุทธ์",
        "ค้นคว้าคีย์เวิร์ดและสร้างโฆษณา",
        "เปิดตัวแคมเปญและปรับปรุง",
        "ติดตามผลและรายงาน",
      ],
    },
  },
  {
    icon: <UserRound />,
    title: {
      en: "AI Chatbot & Automation",
      th: "AI Chatbot และระบบอัตโนมัติ",
    },
    thumbnail: "/AI_Chatbot_and_Automation_Service.png",
    headline: {
      en: "Get AI-powered customer service and lead generation 24/7",
      th: "รับพัฒนาระบบบริการลูกค้าและสร้างลีดอัตโนมัติ 24 ชั่วโมง",
    },
    description: {
      en: "Advanced AI-powered automation systems that handle customer service, lead generation, and repetitive tasks 24/7 while you focus on growing your business.",
      th: "ระบบอัตโนมัติขั้นสูงขับเคลื่อนด้วย AI ที่จัดการบริการลูกค้า การสร้างลีด และงานซ้ำๆ ตลอด 24 ชั่วโมงในขณะที่คุณมุ่งเน้นการเติบโตธุรกิจ",
    },
    url: "/service/ai-chatbot-automation",
    problems: {
      en: [
        "Missing leads outside business hours",
        "Can't respond to all customer inquiries quickly",
        "Repetitive tasks taking up valuable time",
      ],
      th: [
        "เสียลีดนอกเวลาทำการ",
        "ตอบคำถามลูกค้าไม่ทันและไม่ครบทุกคน",
        "งานซ้ำๆ กินเวลาที่มีค่า",
      ],
    },
    benefits: {
      en: [
        {
          headline: "24/7 Customer Service Availability",
          description: "Never miss a potential customer again. Our AI chatbots work around the clock to answer questions, qualify leads, and capture contact information even when you're sleeping, ensuring you never lose business to competitors.",
          image: "/AI_Chatbot_and_Automation_Service.png"
        },
        {
          headline: "Increased Lead Generation & Qualification",
          description: "Automatically engage website visitors, answer their questions, and qualify them as potential customers. Our AI systems can identify high-value prospects and route them directly to your sales team for immediate follow-up.",
          image: "/Google_Ads_Service.png"
        },
        {
          headline: "Significant Time & Cost Savings",
          description: "Automate repetitive tasks and free up your team to focus on high-value activities. Our automation solutions can handle customer support, appointment booking, follow-ups, and data entry, dramatically reducing operational costs.",
          image: "/Conversion_Rate_Optimization_Service.png"
        }
      ],
      th: [
        {
          headline: "บริการลูกค้า 24/7",
          description: "ไม่พลาดลูกค้าที่มีศักยภาพอีกต่อไป AI chatbot ของเราทำงานตลอดเวลาเพื่อตอบคำถาม คัดกรองลีด และจับข้อมูลติดต่อแม้ในขณะที่คุณหลับ ช่วยให้มั่นใจว่าคุณจะไม่เสียธุรกิจให้กับคู่แข่ง",
          image: "/AI_Chatbot_and_Automation_Service.png"
        },
        {
          headline: "เพิ่มการสร้างลีดและการคัดกรอง",
          description: "มีส่วนร่วมกับผู้เยี่ยมชมเว็บไซต์โดยอัตโนมัติ ตอบคำถามของพวกเขา และคัดกรองพวกเขาในฐานะลูกค้าที่มีศักยภาพ ระบบ AI ของเราสามารถระบุผู้ที่มีโอกาสสูงและส่งต่อพวกเขาไปยังทีมขายของคุณโดยตรงเพื่อติดตามทันที",
          image: "/Google_Ads_Service.png"
        },
        {
          headline: "ประหยัดเวลาและต้นทุนอย่างมีนัยสำคัญ",
          description: "ทำงานซ้ำๆ โดยอัตโนมัติและปลดปล่อยทีมของคุณให้มุ่งเน้นกิจกรรมที่มีมูลค่าสูง โซลูชันอัตโนมัติของเราสามารถจัดการการสนับสนุนลูกค้า การจองนัดหมาย การติดตาม และการป้อนข้อมูล ลดต้นทุนการดำเนินงานอย่างมากมาย",
          image: "/Conversion_Rate_Optimization_Service.png"
        }
      ]
    },
    process: {
      en: [
        "Business process analysis",
        "Chatbot design and AI training",
        "Integration and testing",
        "Launch and continuous optimization",
      ],
      th: [
        "วิเคราะห์กระบวนการทำงาน",
        "ออกแบบ chatbot และฝึก AI",
        "เชื่อมต่อและทดสอบ",
        "เปิดใช้งานและปรับปรุงต่อเนื่อง",
      ],
    },
  },
];

export function getServices(locale: Locale): Service[] {
  return services.map((service) => ({
    ...service,
    title: service.title[locale] || service.title.en,
    headline: service.headline[locale] || service.headline.en,
    description: service.description[locale] || service.description.en,
    problems: service.problems[locale] || service.problems.en,
    benefits: service.benefits[locale] || service.benefits.en,
    process: service.process[locale] || service.process.en,
  }));
}
