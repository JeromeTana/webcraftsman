import Image from "next/image";
import AnimatedSuccessIcon from "@/Components/Icons/AnimatedSeccessIcon";

export const process = [
  {
    title: "พูดคุยให้คำปรึกษา",
    description:
      "กรอกแบบฟอร์ม เพื่อให้เราติดต่อกลับและทำความเข้าใจเป้าหมายของคุณ เพื่อหาแนวทางที่ดีที่สุด",
    block: (
      <Image
        src="/DE_Call.png"
        alt="การประชุมปรึกษา"
        width={500}
        height={500}
        className="rounded-xl w-full object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: "วางแผนและดำเนินการ",
    description:
      "เราจะเริ่มดำเนินการโครงการของคุณ พร้อมแจ้งข้อมูลความคืบหน้าตตลอดกระบวนการพัฒนา",
    block: (
      <Image
        src="/DE_figma_shot.png"
        alt="การวางแผนโครงการ"
        width={500}
        height={500}
        className="rounded-xl w-full object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: "ส่งมอบและดูแล",
    description:
      "เมื่อเสร็จสิ้นแล้ว เราจะส่งมอบและให้การดูแลอย่างต่อเนื่องเพื่อให้มั่นใจว่าทุกอย่างทำงานได้อย่างราบรื่น",
    block: (
      <div className="bg-background  rounded-2xl px-8 py-16 md:py-4 text-center flex flex-col gap-4 items-center justify-center">
        <AnimatedSuccessIcon size={80} />
        <p>Your site has been published</p>
      </div>
    ),
  },
];
