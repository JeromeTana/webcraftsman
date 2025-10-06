import { IconParkOutlineGoogleAds } from "@/Components/Icons/GoogleAdsIcon";
import {
  Code,
  MapPin,
  MessageCircle,
  TrendingUp,
  UserRound,
  Workflow,
} from "lucide-react";

export interface Service {
  icon: React.ReactNode;
  title: string;
  thumbnail?: string;
  headline: string;
  description: string;
  content?: React.ReactNode;
  url: string;
  problems: string[];
  benefits: { headline: string; description: string }[];
  process: string[];
}

export const services: Service[] = [
  {
    icon: <Code />,
    title: "Website Development",
    thumbnail: "/Website_Development_Service.png",
    headline: "สร้างเว็บไซต์คุณภาพ เพื่อเสริมสร้างภาพลักษณ์ และความน่าเชื่อถือ",
    description:
      "เว็บไซต์ที่ออกแบบมาเพื่อเพิ่มยอดขาย และช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน",
    url: "/service/web-development",
    content: <div></div>,
    problems: [
      "เว็บไซต์เก่า โหลดช้า ทำให้เสียลูกค้าให้กับคู่แข่ง",
      "ไม่มีเว็บไซต์ ทำให้ดูไม่น่าเชื่อถือและแข่งขันกับคู่แข่งไม่ได้",
      "เสียโอกาสลูกค้าส่วนใหญ่บนมือถือ เพราะเว็บไซต์ไม่รองรับ",
    ],
    benefits: [
      {
        headline: "เพิ่มยอดขาย 3 เท่า",
        description:
          "เว็บไซต์ที่รองรับทุกอุปกรณ์ ทำให้ลูกค้าซื้อได้ง่ายขึ้น และเพิ่มโอกาสขายจากมือถือ",
      },
      {
        headline: "ลูกค้าไม่หนีเพราะเว็บช้า",
        description: "เว็บไซต์โหลดเร็วใน 2 วินาที ลดการหนีของลูกค้าไป 70%",
      },
      {
        headline: "ติดอันดับ Google ได้เร็วขึ้น",
        description:
          "โครงสร้างเว็บที่เป็นมิตรกับ SEO ช่วยให้ลูกค้าเจอคุณก่อนคู่แข่ง",
      },
    ],
    process: [
      "วิเคราะห์ความต้องการธุรกิจ",
      "ออกแบบ UI/UX และ Wireframe",
      "พัฒนาเว็บไซต์และทดสอบ",
      "Launch และติดตั้ง Analytics",
    ],
  },
  {
    icon: <MapPin />,
    title: "Local SEO",
    thumbnail: "/Local_SEO_Service.png",
    headline:
      "ทำเว็บไซต์ และหมุด Google Maps ของคุณให้ติดอันดับการค้นหาในพื้นที่",
    description:
      "เพิ่มลูกค้าใหม่จากคนในพื้นที่ที่กำลังมองหาสินค้าและบริการของคุณ",
    url: "/service/local-seo",
    problems: [
      "เสียโอกาสขายให้คนในพื้นที่ เพราะลูกค้าไม่เจอบน Google",
      "คู่แข่งแย่งลูกค้า เพราะ Google Maps ไม่ติดอันดับ ",
      "ลูกค้าไม่กล้าใช้บริการ เพราะมีรีวิวน้อยหรือรีวิวไม่ดี",
    ],
    benefits: [
      {
        headline: "ลูกค้าในพื้นที่เจอคุณก่อน",
        description:
          "ปรับแต่ง Google My Business ให้ติดอันดับ 1 ในพื้นที่ เพิ่มลูกค้าใหม่ทุกวัน",
      },
      {
        headline: "คำค้นหาที่ลูกค้าพิมพ์แล้วเจอ",
        description:
          "วิจัยคำค้นหาที่คนในพื้นที่ใช้จริง เพื่อให้เจอธุรกิจคุณเป็นอันดับแรก",
      },
      {
        headline: "รีวิวดีๆ ไหลเข้ามาเอง",
        description: "ระบบจัดการรีวิวอัตโนมัติ ทำให้มีรีวิว 5 ดาวมากขึ้น",
      },
    ],
    process: [
      "Audit เว็บไซต์และ Local Presence",
      "วิจัย Keyword และคู่แข่ง",
      "Optimize On-page และ Technical SEO",
      "Build Citations และ Backlinks",
    ],
  },
  {
    icon: <TrendingUp />,
    title: "Conversion Rate Optimization",
    thumbnail: "/Conversion_Rate_Optimization_Service.png",
    headline:
      "ปรับปรุงประสิทธิภาพ และการออกแบบของเว็บไซต์ให้หาลูกค้าใหม่ง่ายขึ้น",
    description: "เพิ่มยอดขายจากเว็บไซต์ที่มีอยู่แล้ว โดยไม่ต้องเพิ่มงบโฆษณา",
    url: "/service/conversion-optimization",
    problems: [
      "มีคนเข้าเว็บเยอะแต่ไม่ซื้อ ทำให้เสียเงินโฆษณาฟรีๆ",
      "ลูกค้ากรอกข้อมูลครึ่งทางแล้วออกไป ไม่รู้ปัญหาตรงไหน",
      "เว็บสวยงาม แต่ไม่เห็นผลลัพธ์ดีๆ จากการทำโฆษณา",
    ],
    benefits: [
      {
        headline: "เงินโฆษณาได้ผลกลับมา 5 เท่า",
        description:
          "ทดสอบหน้าเว็บแบบวิทยาศาสตร์ เพิ่มอัตราการซื้อจาก 2% เป็น 10%",
      },
      {
        headline: "หน้าขายที่ขายได้จริง",
        description:
          "ปรับปรุงหน้า Landing Page ให้ลูกค้าตัดสินใจซื้อภายใน 30 วินาที",
      },
      {
        headline: "รู้ว่าลูกค้าติดขัดตรงไหน",
        description:
          "วิเคราะห์เส้นทางลูกค้า เจอจุดที่ลูกค้าเลิกซื้อและแก้ไขได้ทันที",
      },
    ],
    process: [
      "Data Analysis และ User Behavior Study",
      "สร้างสมมติฐานและแผนการทดสอบ",
      "ดำเนินการ A/B Testing",
      "วิเคราะห์ผลและ Implement Changes",
    ],
  },
  {
    icon: <Workflow />,
    title: "AI Chatbot & Automation",
    thumbnail: "/AI_Chatbot_and_Automation_Service.png",
    headline: "เพิ่มประสิทธิภาพและประหยัดเวลา พร้อมดูแลลูกค้าตลอด 24 ชั่วโมง",
    description:
      "เพิ่มยอดขายและประหยัดเวลาด้วย AI ที่ทำงานแทนคุณทั้งการขายและงานประจำ",
    url: "/service/ai",
    problems: [
      "เสียโอกาสขายเพราะลูกค้าทักมานอกเวลาทำการ",
      "ทำงานซ้ำๆ เดิมๆ ทุกวัน เสียเวลาที่ควรไปพัฒนาธุรกิจ",
      "เสียเวลานานในการตอบลูกค้าและจัดการข้อมูล",
    ],
    benefits: [
      {
        headline: "ขายได้ตลอด 24 ชั่วโมง",
        description:
          "AI Chatbot ฉลาดที่เข้าใจคำถามลูกค้า ตอบโต้และปิดการขายแทนคุณแม้ตอนหลับ",
      },
      {
        headline: "ประหยัดเวลา 20 ชั่วโมงต่อสัปดาห์",
        description:
          "ระบบอัตโนมัติทำงานซ้ำๆ แทนคุณ มีเวลาไปขยายธุรกิจแทนที่จะทำงานประจำ",
      },
      {
        headline: "ทำงานครบทุกแพลตฟอร์ม",
        description:
          "เชื่อมต่อ Line, Facebook, เว็บไซต์ และอีเมล ลูกค้าติดต่อช่องทางไหนก็ได้คำตอบทันที",
      },
    ],
    process: [
      "วิเคราะห์ Customer Journey และ Process Mapping",
      "ออกแบบ AI Chatbot และเลือกเครื่องมืออัตโนมัติ",
      "Training AI Model และ Setup Automation",
      "Testing, Deployment และ Optimization",
    ],
  },
  {
    icon: <IconParkOutlineGoogleAds />,
    title: "Google Ads",
    thumbnail: "/Google_Ads_Service.png",
    headline:
      "สร้างและจัดการแคมเปญโฆษณาเพื่อดึงดูดลูกค้าเป้าหมายที่มีคุณภาพสูง",
    description: "เพิ่มยอดขายอย่างรวดเร็วด้วยแคมเปญโฆษณาที่ตรงกลุ่มเป้าหมาย",
    url: "/service/lead-generation",
    problems: [
      "เสียเงินโฆษณา Google Ads แต่ไม่มีคนสนใจ",
      "มี Lead เข้ามาแต่ไม่ใช่คนที่พร้อมซื้อ เสียเวลาไปเปล่า",
      "ใช้งบไปแบบไม่มีทิศทาง เพราะไม่รู้ว่าแคมเปญไหนได้ผล",
    ],
    benefits: [
      {
        headline: "ลูกค้าคุณภาพสูงไหลเข้ามาทุกวัน",
        description:
          "คำค้นหาที่คัดสรรแล้ว ดึงเฉพาะคนที่พร้อมซื้อ ไม่เสียเวลาคุยกับคนเดินเล่น",
      },
      {
        headline: "เงินโฆษณาคืนทุนใน 30 วัน",
        description:
          "ตั้งค่าและจัดการแคมเปญอย่างเป็นระบบ ROI เริ่มต้น 300% ขึ้นไป",
      },
      {
        headline: "โฆษณาที่คนอยากกด",
        description:
          "ข้อความโฆษณาที่เขียนโดยผู้เชี่ยวชาญ เพิ่มอัตราคลิกขึ้น 250%",
      },
    ],
    process: [
      "Market Research และ Competitor Analysis",
      "Campaign Strategy และ Budget Planning",
      "Create และ Launch Campaigns",
      "Monitor, Optimize และ Report",
    ],
  },
];
