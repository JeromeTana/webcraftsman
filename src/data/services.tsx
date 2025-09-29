import {
  Code,
  MapPin,
  MessageCircle,
  TrendingUp,
  UserRound,
  Workflow,
} from "lucide-react";

export const services = [
  {
    icon: <Code />,
    title: "Website Development",
    headline: "สร้างเว็บไซต์คุณภาพ เพื่อเสริมสร้างภาพลักษณ์ และความน่าเชื่อถือ",
    url: "/service/web-development",
    problems: [
      "เว็บไซต์เก่า โหลดช้า ทำให้เสียลูกค้าให้กับคู่แข่ง",
      "ไม่มีเว็บไซต์ ทำให้ดูไม่น่าเชื่อถือและแข่งขันกับคู่แข่งไม่ได้",
      "เสียโอกาสลูกค้าส่วนใหญ่บนมือถือ เพราะเว็บไซต์ไม่รองรับ",
    ],
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
    icon: <MapPin />,
    title: "Local SEO",
    headline:
      "ทำเว็บไซต์ และหมุด Google Maps ของคุณให้ติดอันดับการค้นหาในพื้นที่",
    url: "/service/local-seo",
    problems: [
      "เสียโอกาสขายให้คนในพื้นที่ เพราะลูกค้าไม่เจอบน Google",
      "คู่แข่งแย่งลูกค้า เพราะ Google Maps ไม่ติดอันดับ ",
      "ลูกค้าไม่กล้าใช้บริการ เพราะมีรีวิวน้อยหรือรีวิวไม่ดี",
    ],
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
    icon: <TrendingUp />,
    title: "Conversion Optimization",
    headline: "ปรับปรุงประสิทธิภาพของเว็บไซต์เพื่อเพิ่มอัตรา conversion",
    url: "/service/conversion-optimization",
    problems: [
      "มีคนเข้าเว็บเยอะแต่ไม่ซื้อ ทำให้เสียเงินโฆษณาฟรีๆ",
      "ลูกค้ากรอกข้อมูลครึ่งทางแล้วออกไป ไม่รู้ปัญหาตรงไหน",
      "เว็บสวยงาม แต่ไม่เห็นผลลัพธ์ดีๆ จากการทำโฆษณา",
    ],
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
    icon: <MessageCircle />,
    title: "Chatbot",
    headline: "ติดตั้ง AI Chatbot เพื่อให้พร้อมบริการลูกค้าตลอด 24 ชั่วโมง",
    url: "/service/chatbot",
    problems: [
      "เสียโอกาสขายเพราะลูกค้าทักมานอกเวลาทำการ ",
      "เสียเวลาทำงานสำคัญอื่น ๆ เพราะตอบคำถามซ้ำๆ ทุกวัน",
      "เสียเวลานานในการตอบลูกค้าให้ครบ",
    ],
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
    icon: <Workflow />,
    title: "AI Automation",
    headline:
      "ใช้ AI และเครื่องมืออัตโนมัติเพื่อเพิ่มประสิทธิภาพ และลดเวลาทำงาน",
    url: "/service/automation",
    problems: [
      "ทำงานซ้ำๆ เดิมๆ ทุกวัน เสียเวลาที่ควรไปพัฒนาธุรกิจ",
      "พลาดการติดตามลูกค้า เพราะมีงานเยอะเกินไป",
      "ข้อมูลกระจัดกระจาย ไม่มีระบบ ทำให้วิเคราะห์และตัดสินใจช้า",
    ],
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
    icon: <UserRound />,
    title: "Google Ads",
    headline:
      "สร้างและจัดการแคมเปญโฆษณาเพื่อดึงดูดลูกค้าเป้าหมายที่มีคุณภาพสูง",
    url: "/service/lead-generation",
    problems: [
      "เสียเงินโฆษณา Google Ads แต่ไม่มีคนสนใจ",
      "มี Lead เข้ามาแต่ไม่ใช่คนที่พร้อมซื้อ เสียเวลาไปเปล่า",
      "ใช้งบไปแบบไม่มีทิศทาง เพราะไม่รู้ว่าแคมเปญไหนได้ผล",
    ],
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
