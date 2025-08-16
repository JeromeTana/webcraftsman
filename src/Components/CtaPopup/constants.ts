import { FormStep } from "./types";
import { validateRequired, validateFirstName, validateEmail, validatePhone, validateUrl } from "./utils";
// Disabled: validateBusinessName, validateBusinessDescription

export const FORM_STEPS: FormStep[] = [
  // {
  //   id: 2,
  //   question: "เป้าหมายหลักของสำหรับเว็บไซต์คืออะไรครับ?",
  //   field: "mainGoal",
  //   type: "select",
  //   required: true,
  //   options: [
  //     "ได้ลูกค้าและยอดขายมากขึ้น",
  //     "ดูเป็นมืออาชีพและน่าเชื่อถือมากขึ้น",
  //     "แสดงข้อมูลเกี่ยวกับธุรกิจ",
  //     "สร้างตัวตนตนออนไลน์",
  //   ],
  //   validation: (value: string) => validateRequired(value, "เป้าหมายหลัก"),
  //   helpText:
  //     "การที่เข้าใจวัตถุประสงค์หลักของคุณ ช่วยให้ผมมุ่งเน้นไปที่เป้าหมายที่สำคัญที่สุดสำหรับคุณได้ครับ",
  // },
  {
    id: 1,
    question: "ปัญหาที่ใหญ่ที่สุดที่เจอตอนนี้คืออะไรครับ?",
    field: "biggestChallenge",
    type: "select",
    required: true,
    options: [
      "ไม่ได้ลูกค้าทางออนไลน์",
      "ภาพลักษณ์ไม่เป็นมืออาชีพ",
      "เสียลูกค้าให้กับคู่แข่ง",
    ],
    validation: (value: string) => validateRequired(value, "ปัญหาที่ใหญ่ที่สุด"),
    helpText:
      "การระบุ pain point ช่วยให้ผมจัดลำดับความสำคัญของสิ่งที่จะสร้างผลกระทบมากที่สุดได้ครับ",
  },
  {
    id: 2,
    question: "ต้องการดำเนินการโปรเจคนี้เมื่อไหร่ครับ?",
    field: "timeline",
    type: "select",
    required: true,
    options: ["ภายใน 14 วัน", "ภายใน 30 วัน", "ภายใน 3 เดือน", "ยังไม่แน่ใจ"],
    validation: (value: string) => validateRequired(value, "ไทม์ไลน์"),
    helpText:
      "ไทม์ไลน์ของคุณช่วยให้ผมวางแผนขอบเขตโปรเจค และตั้งความคาดหวังสำหรับการส่งมอบได้ครับ",
  },
  {
    id: 3,
    question: "งบประมาณสำหรับโฆษณาเท่าไร?",
    field: "budget",
    type: "select",
    required: true,
    options: [
      "เดือนละ 30,000 - 50,000 บาท ",
      "เดือนละ 50,000 - 100,000 บาท",
      "เดือนละ 100,000 - 500,000 บาท",
      "มากกว่าเดือนละ 500,000 บาท",
    ],
    validation: (value: string) => validateRequired(value, "งบประมาณ"),
    helpText:
      "ข้อมูลงบประมาณช่วยให้ผมแนะนำแพ็คเกจและฟีเจอร์ที่ดี และเหมาะสมที่สุดได้ครับ",
  },
  {
    id: 4,
    question: "รายได้ธุรกิจต่อเดือนเท่าไรครับ?",
    field: "monthlyRevenue",
    type: "select",
    required: true,
    options: [
      "100,000 - 500,000 บาท",
      "500,000 - 1,000,000 บาท",
      "1,000,000 - 5,000,000 บาท",
      "มากกว่า 5,000,000 บาท",
    ],
    validation: (value: string) => validateRequired(value, "รายได้ต่อเดือน"),
    helpText:
      "ข้อมูลรายได้ช่วยให้ผมเสนอแนวทางการลงทุนและกลยุทธ์ที่เหมาะสมกับขนาดธุรกิจของคุณครับ",
  },
  // {
  //   id: 7,
  //   question: "มีเนื้อหาสำหรับใส่ในเว็บไซต์พร้อมแล้วมั้ยครับ?",
  //   field: "contentReady",
  //   type: "select",
  //   required: true,
  //   options: [
  //     "ใช่ ฉันมีทุกอย่างพร้อมแล้ว",
  //     "ฉันมีเนื้อหาเตรียมไว้บางส่วน",
  //     "ไม่ ฉันต้องการความช่วยเหลือในการสร้างเนื้อหา",
  //   ],
  //   validation: (value: string) => validateRequired(value, "ความพร้อมของเนื้อหา"),
  //   helpText:
  //     "ความพร้อมของเนื้อหาช่วยให้ผมวางแผนการออกแบบและพัฒนาเว็บไซต์ได้อย่างมีประสิทธิภาพมากขึ้นครับ",
  // },
  // {
  //   id: 8,
  //   question: "รบกวนเล่าเกี่ยวกับตัวธุรกิจให้ฟังคร่าว ๆ ทีครับ",
  //   field: "businessName", // This step handles multiple business fields
  //   type: "business",
  //   required: true,
  //   validation: (value: string) => validateBusinessName(value),
  //   helpText:
  //     "การเข้าใจธุรกิจของคุณลูกค้าช่วยให้ผมสร้างกลยุทธ์และคำแนะนำที่เจาะจงมากขึ้นได้ครับ",
  // },
  {
    id: 5,
    question:
      "ข้อมูลติดต่อกลับของคุณลูกค้า สำหรับพูดคุย และส่งรายละเอียดโปรเจค",
    field: "firstName", // This step handles multiple fields
    type: "contact",
    required: true,
    validation: (value: string) => validateFirstName(value),
    helpText: "ผมขอข้อมูลติดต่อ เพื่อส่งรายละเอียดสำหรับเริ่มต้นโปรเจคครับ",
  },
];

export const INITIAL_FORM_DATA = {
  // businessName: "",
  // businessDescription: "",
  currentWebsiteUrl: "",
  // mainGoal: "",
  biggestChallenge: "",
  timeline: "",
  budget: "",
  monthlyRevenue: "",
  // contentReady: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

export const TOTAL_STEPS = FORM_STEPS.length;
