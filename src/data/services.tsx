import { Code, MapPin, MessageCircle, TrendingUp, UserRound, Workflow } from "lucide-react";

export const services = [
  {
    icon: <Code className="w-12 h-12 stroke-2" />,
    title: "Website Development",
    description:
      "สร้างเว็บไซต์ที่สวยงามและใช้งานง่าย เพื่อเสริมสร้างภาพลักษณ์และความน่าเชื่อถือให้กับธุรกิจของคุณ",
    url: "/services/web-development",
    features: [
      "Responsive Design ที่ใช้งานได้ทุกอุปกรณ์",
      "SEO-Friendly Structure",
      "Page Speed Optimization",
      "User Experience (UX) Design",
      "Content Management System",
      "SSL Certificate และ Security",
    ],
    process: [
      "วิเคราะห์ความต้องการธุรกิจ",
      "ออกแบบ UI/UX และ Wireframe",
      "พัฒนาเว็บไซต์และทดสอบ",
      "Launch และติดตั้ง Analytics",
    ],
  },
  {
    icon: <MapPin className="w-12 h-12 stroke-2" />,
    title: "Local SEO",
    description:
      "ทำเว็บไซต์ และหมุด Google Maps ของคุณให้ติดอันดับการค้นหาในพื้นที่บริการ",
    url: "/services/local-seo",
    features: [
      "Google My Business Optimization",
      "Local Keyword Research",
      "Citation Building",
      "Review Management",
      "Local Schema Markup",
      "Geographic Target Optimization",
    ],
    process: [
      "Audit เว็บไซต์และ Local Presence",
      "วิจัย Keyword และคู่แข่ง",
      "Optimize On-page และ Technical SEO",
      "Build Citations และ Backlinks",
    ],
  },
  {
    icon: <TrendingUp className="w-12 h-12 stroke-2" />,
    title: "Conversion Optimization",
    description:
      "ปรับปรุงประสิทธิภาพของเว็บไซต์เพื่อเพิ่มอัตรา conversion และสร้างรายได้ให้กับธุรกิจของคุณ",
    url: "/services/conversion-optimization",
    features: [
      "A/B Testing และ Analytics",
      "Landing Page Optimization",
      "User Journey Analysis",
      "Call-to-Action Optimization",
      "Form Optimization",
      "Performance Tracking",
    ],
    process: [
      "Data Analysis และ User Behavior Study",
      "สร้างสมมติฐานและแผนการทดสอบ",
      "ดำเนินการ A/B Testing",
      "วิเคราะห์ผลและ Implement Changes",
    ],
  },
  {
    icon: <MessageCircle className="w-12 h-12 stroke-2" />,
    title: "Chatbot",
    description:
      "ติดตั้ง AI Chatbot เพื่อให้พร้อมบริการลูกค้าตลอด 24 ชั่วโมง เพิ่มโอกาสในการปิดการขาย",
    url: "/services/chatbot",
    features: [
      "AI-Powered Natural Language Processing",
      "24/7 Customer Support",
      "Multi-platform Integration",
      "Lead Qualification",
      "Automated FAQ Responses",
      "Analytics และ Reporting",
    ],
    process: [
      "วิเคราะห์ Customer Journey",
      "ออกแบบ Conversation Flow",
      "Training AI Model",
      "Testing และ Deployment",
    ],
  },
  {
    icon: <Workflow className="w-12 h-12 stroke-2" />,
    title: "AI Automation",
    description:
      "ใช้ AI และเครื่องมืออัตโนมัติเพื่อเพิ่มประสิทธิภาพการทำงาน และลดภาระงานที่ซ้ำซ้อน",
    url: "/services/automation",
    features: [
      "Workflow Automation",
      "Data Processing และ Analysis",
      "Email Marketing Automation",
      "Social Media Management",
      "Customer Segmentation",
      "Performance Monitoring",
    ],
    process: [
      "Process Mapping และ Analysis",
      "เลือกเครื่องมือที่เหมาะสม",
      "Setup และ Configuration",
      "Testing และ Optimization",
    ],
  },
  {
    icon: <UserRound className="w-12 h-12 stroke-2" />,
    title: "Google Ads",
    description:
      "สร้างและจัดการแคมเปญโฆษณาเพื่อดึงดูดลูกค้าเป้าหมายที่มีคุณภาพสูง",
    url: "/services/lead-generation",
    features: [
      "Keyword Research และ Strategy",
      "Campaign Setup และ Management",
      "Ad Copy Optimization",
      "Landing Page Integration",
      "Conversion Tracking",
      "Monthly Performance Reports",
    ],
    process: [
      "Market Research และ Competitor Analysis",
      "Campaign Strategy และ Budget Planning",
      "Create และ Launch Campaigns",
      "Monitor, Optimize และ Report",
    ],
  },
];
