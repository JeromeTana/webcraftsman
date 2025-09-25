import { LucideCode } from "@/Components/Icons/LucideCode";
import { LucideMapPin } from "@/Components/Icons/LucideMapPin";
import { LucideTrendingUp } from "@/Components/Icons/LucideTrendingUp";
import { LucideWorkflow } from "@/Components/Icons/LucideWorkflow";
import { LucideUserRound } from "@/Components/Icons/LucideUserRound";
import { LucideMessageCircle } from "@/Components/Icons/LucideMessageCircle";

export const services = [
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
