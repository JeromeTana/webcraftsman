import Image from "next/image";
import AnimatedSuccessIcon from "@/Components/Icons/AnimatedSeccessIcon";
import { LucideCode } from "@/Components/Icons/LucideCode";
import { LucideMapPin } from "@/Components/Icons/LucideMapPin";
import { LucideTrendingUp } from "@/Components/Icons/LucideTrendingUp";
import { LucideWorkflow } from "@/Components/Icons/LucideWorkflow";
import { LucideUserRound } from "@/Components/Icons/LucideUserRound";
import { LucideMessageCircle } from "@/Components/Icons/LucideMessageCircle";

export const tagline = "รับออกแบบและพัฒนาเว็บไซต์ สำหรับธุรกิจท้องถิ่นและ SME";
export const description =
  "รับออกแบบและพัฒนาเว็บไซต์ สำหรับทำการตลาดออนไลน์ เพื่อเพิ่มยอดขายและลูกค้าใหม่";
export const siteUrl = "https://www.webcraftsman.co";

export const navItems = [
  { name: "เกี่ยวกับเรา", href: "/about" },
  { name: "ผลงาน", href: "/showcase" },
  { name: "บริการ", href: "/service" },
];

export const SERVICES = [
  {
    icon: <LucideCode className="w-12 h-12 stroke-2" />,
    title: "Web Development",
    description:
      "สร้างเว็บไซต์ที่สวยงามและใช้งานง่าย เพื่อเสริมสร้างภาพลักษณ์และความน่าเชื่อถือให้กับธุรกิจของคุณ",
    href: "/services/web-development",
  },
  {
    icon: <LucideMapPin className="w-12 h-12 stroke-2" />,
    title: "Local SEO",
    description:
      "ทำเว็บไซต์ และหมุด Google Maps ของคุณให้ติดอันดับการค้นหาในพื้นที่บริการ",
    href: "/services/local-seo",
  },
  {
    icon: <LucideTrendingUp className="w-12 h-12 stroke-2" />,
    title: "Conversion Optimization",
    description:
      "ปรับปรุงประสิทธิภาพของเว็บไซต์เพื่อเพิ่มอัตรา conversion และสร้างรายได้ให้กับธุรกิจของคุณ",
    href: "/services/conversion-optimization",
  },
  {
    icon: <LucideMessageCircle className="w-12 h-12 stroke-2" />,
    title: "Chatbot",
    description:
      "ติดตั้ง AI Chatbot เพื่อให้พร้อมบริการลูกค้าตลอด 24 ชั่วโมง เพิ่มโอกาสในการปิดการขาย",
    href: "/services/chatbot",
  },
  {
    icon: <LucideWorkflow className="w-12 h-12 stroke-2" />,
    title: "AI Automation",
    description:
      "ใช้ AI และเครื่องมืออัตโนมัติเพื่อเพิ่มประสิทธิภาพการทำงาน และลดภาระงานที่ซ้ำซ้อน",
    href: "/services/automation",
  },
  {
    icon: <LucideUserRound className="w-12 h-12 stroke-2" />,
    title: "Google Ads",
    description:
      "สร้างและจัดการแคมเปญโฆษณาเพื่อดึงดูดลูกค้าเป้าหมายที่มีคุณภาพสูง",
    href: "/services/lead-generation",
  },
];

export const PLANS = [
  {
    title: "Website",
    price_from: 5590,
    price: 4590,
    description: "For scaling businesses",
    features: [
      "5 pages",
      "CMS integrated",
      "High-conversion design",
      "Copywriting",
      "SEO optimized",
      "High-performance score",
      "Mobile responsive",
      "Launched in 7 days",
    ],
    paymentUrl: "https://buy.stripe.com/00gdTSg4Cg4K3mg288",
    isHighlighted: false,
  },
  {
    title: "Landing",
    price_from: 1590,
    price: 1200,
    description: "For simple projects",
    features: [
      "1 landing page",
      "Built in Framer (or Wordpress)",
      "Conversion focused design",
      "Full copywriting",
      "Performance optimized",
      "5 days delivery",
    ],
    paymentUrl: "https://buy.stripe.com/14k3fe7y6g4K4qk7st",
    isHighlighted: true,
  },
  {
    title: "Roast",
    price: 89,
    description: "For better landing page",
    features: [
      "Full landing page roast",
      "Audit report",
      "Actionable fixes list",
    ],
    paymentUrl: "https://buy.stripe.com/fZeeXW5pY9Gm0a4fZ0",
    isHighlighted: false,
  },
];

export const WORK_MARQUEE = [
  "/DevWhoLifts.webp",
  "/contentcreatorcom.webp",
  "/whatsyourdream.webp",
  "/dataechooo.webp",
];

export const WORKS = [
  {
    img: "/showcase6.png",
    pills: ["Concept", "Design & Development"],
    title: "PhuketRoofing",
    description: "",
  },
  {
    img: "/showcase1.png",
    pills: ["Concept", "Online Course"],
    title: "Wealthery",
    description:
      "ContentCreator.com is a filmmaking course that teaches you how to create high-quality content for your audience.",
  },
  // {
  //   img: "/showcase2.png",
  //   pills: ["Web blog"],
  //   title: "Data Echooo",
  //   description:
  //     "Data Echooo is a data web blog that provides insights and analysis on the latest trends in data science and analytics.",
  // },
  // {
  //   img: "/showcase3.png",
  //   pills: ["Concept", "Design & Development"],
  //   title: "What's Your Dream Book",
  //   description:
  //     "Simon Squibb's book, 'What's Your Dream', is a guide to help you discover your true purpose and achieve your dreams.",
  // },
  {
    img: "/showcase4.png",
    pills: ["Concept", "Design & Development"],
    title: "Data Echooo",
    description:
      "DevWhoLifts is a web design agency that specializes in creating high-converting websites for fitness professionals.",
  },
  // {
  //   img: "/showcase5.png",
  //   pills: ["Concept", "Design & Development"],
  //   title: "Fit Dad",
  //   description:
  //     "DevWhoLifts is a web design agency that specializes in creating high-converting websites for fitness professionals.",
  // },
];

export const SHOWCASE_IMAGES = [
  {
    src: "/showcase6.png",
    alt: "work",
  },
  {
    src: "/showcase2.png",
    alt: "work",
  },
  {
    src: "/showcase1.png",
    alt: "work",
  },
  {
    src: "/showcase3.png",
    alt: "work",
  },
  {
    src: "/showcase4.png",
    alt: "work",
  },
];

export const PROCESS = [
  {
    title: "นัดรับคำแนะนำ",
    description:
      "ตอบแบบฟอร์ม และจองวันนัดพูดคุย เราจะพูดคุยเกี่ยวกับเป้าหมายธุรกิจของคุณ และวิธีที่เราสามารถช่วยได้",
    block: (
      <Image
        src="/DE_Call.png"
        alt="intro call"
        width={500}
        height={500}
        className="rounded-xl w-full object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: "ปล่อยให้เราจัดการ",
    description:
      "เราจะลงมือตามแผนให้คุณ ตามที่ได้พูดคุยกันหลังจากการชำระเงินเสร็จสิ้น",
    block: (
      <Image
        src="/DE_figma_shot.png"
        alt="intro call"
        width={500}
        height={500}
        className="rounded-xl w-full object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: "เว็บสวยพร้อมใช้งาน",
    description: "เราจะส่งมอบเว็บไซต์ที่สวยงามและพร้อมใช้งาน",
    block: (
      <div className="bg-background  rounded-2xl px-8 py-16 md:py-4 text-center flex flex-col gap-4 items-center justify-center">
        <AnimatedSuccessIcon size={80} />
        <p>Your site has been published</p>
      </div>
    ),
  },
];

export const FAQS = [
  {
    question: "เว็บไซต์จะเสร็จเมื่อไหร่?",
    answer:
      "หน้าแลนดิ้งจะส่งมอบภายใน 5 วัน และเว็บไซต์เต็มรูปแบบภายใน 7 วัน นับจากที่ได้รับข้อมูลโครงการ หากมีความล่าช้า เราจะแจ้งให้ทราบทันที",
  },
  {
    question: "ต้องเตรียมข้อมูลอะไรบ้างเพื่อเริ่มโครงการ?",
    answer:
      "เราต้องการแบรนด์ไกด์ไลน์ (หากมี) ข้อมูลเนื้อหาที่ต้องการ ข้อมูลกลุ่มเป้าหมาย และฟีเจอร์พิเศษที่ต้องการรวมอยู่ในเว็บไซต์",
  },
  {
    question: "ทำไมต้องชำระเงินล่วงหน้า?",
    answer:
      "การชำระเงินล่วงหน้าจะรับประกันสล็อตของคุณในตารางงานที่จำกัด และช่วยให้เราสามารถทุ่มเททรัพยากรเต็มที่กับโครงการของคุณได้ทันที",
  },
  {
    question: "มีบริการดูแลเว็บไซต์หลังส่งมอบไหม?",
    answer:
      "แพ็คเกจของเราไม่รวมการดูแลรักษาต่อเนื่อง แต่เรามีแพ็คเกจสนับสนุนที่สามารถซื้อแยกต่างหากได้หลังจากโครงการเสร็จสิ้น",
  },
  {
    question: "จะเริ่มต้นได้อย่างไร?",
    answer:
      "เพียงคลิกปุ่ม 'นัดพูดคุย' ในหน้าหลัก กรอกแบบสอบถาม และนัดวันพูดคุย เราจะติดต่อกลับภายใน 24 ชั่วโมงเพื่อเริ่มโครงการของคุณ",
  },
];

export const TESTIMONIAL_DATA = {
  quote: "เข้าใจใน branding ของเราจริงๆ",
  description:
    "ทำให้เว็บไซต์ที่ออกมาไม่ใช่แค่สวย แต่ยังสะท้อนตัวตนของแบรนด์ได้อย่างชัดเจน",
  author: {
    name: "Jatawat Xie",
    title: "Founder of Data Echooo",
    avatar: "/Jatawat_Xie.png",
    companyLogo: "/dataechooo.png",
  },
  image: "/DE_comparison.png",
  rating: 5,
};
