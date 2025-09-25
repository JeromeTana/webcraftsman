import Image from "next/image";
import AnimatedSuccessIcon from "@/Components/Icons/AnimatedSeccessIcon";

export const process = [
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
