import Image from "next/image";
import AnimatedSuccessIcon from "@/Components/Icons/AnimatedSeccessIcon";

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
    img: "/showcase1.png",
    pills: ["Concept", "Online Course"],
    title: "ContentCreator.com",
    description:
      "ContentCreator.com is a filmmaking course that teaches you how to create high-quality content for your audience.",
  },
  {
    img: "/showcase2.png",
    pills: ["Web blog"],
    title: "Data Echooo",
    description:
      "Data Echooo is a data web blog that provides insights and analysis on the latest trends in data science and analytics.",
  },
  {
    img: "/showcase3.png",
    pills: ["Concept", "Design & Development"],
    title: "What's Your Dream Book",
    description:
      "Simon Squibb's book, 'What's Your Dream', is a guide to help you discover your true purpose and achieve your dreams.",
  },
  {
    img: "/showcase4.png",
    pills: ["Concept", "Design & Development"],
    title: "DevWhoLifts",
    description:
      "DevWhoLifts is a web design agency that specializes in creating high-converting websites for fitness professionals.",
  },
  {
    img: "/showcase5.png",
    pills: ["Concept", "Design & Development"],
    title: "DevWhoLifts",
    description:
      "DevWhoLifts is a web design agency that specializes in creating high-converting websites for fitness professionals.",
  },
];

export const PROCESS = [
  {
    title: "นัดรับคำแนะนำ",
    description:
      "เราจะพูดคุยเกี่ยวกับเป้าหมาย ให้คำแนะนำ และวิธีที่เราสามารถช่วยได้",
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
    description:
      "เราจะส่งมอบเว็บไซต์ที่สวยงามและพร้อมใช้งานภายใน 7 วัน",
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
    question: "How quickly can I expect my website to be completed?",
    answer:
      "Your landing page will be delivered in 5 days, and full websites in 7 days from brief submission. If there's a delay, we will notify you immediately.",
  },
  {
    question: "What information do you need from me to get started?",
    answer:
      "We'll need your brand guidelines (if available), content preferences, target audience information, and any specific features you want included. ",
  },
  {
    question: "Why is payment required upfront?",
    answer:
      "The upfront payment secures your place in our limited schedule and allows us to dedicate full resources to your project immediately.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "While our packages don't include ongoing maintenance, we offer support packages that can be purchased separately after your project is completed.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply click the 'Book an Intro Call' button on our homepage, select your package, and complete the payment process. We'll reach out to you within 24 hours to kick off your project.",
  },
];

export const SHOWCASE_IMAGES = [
  {
    src: "/showcase2.png",
    alt: "work",
    className: "w-full h-full object-cover object-top shadow group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 -rotate-1 md:hover:scale-105"
  },
  {
    src: "/showcase1.png",
    alt: "work",
    className: "w-full h-full object-cover object-top shadow group-hover:scale-105 duration-300 rounded md:rounded-lg scale-200 md:scale-125 md:hover:-rotate-1 md:hover:scale-[1.3] z-10"
  },
  {
    src: "/showcase3.png",
    alt: "work",
    className: "w-full h-full object-cover object-top shadow group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 rotate-1 md:hover:scale-105"
  }
];

export const TESTIMONIAL_DATA = {
  quote: "They truly understood our branding",
  description: "Making it not just beautiful but also clearly reflecting our brand's identity",
  author: {
    name: "Jatawat Xie",
    title: "Founder of Data Echooo",
    avatar: "/Jatawat_Xie.png",
    companyLogo: "/dataechooo.png"
  },
  image: "/DE_comparison.png",
  rating: 5
};
