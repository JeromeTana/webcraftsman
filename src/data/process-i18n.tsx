import Image from "next/image";
import AnimatedSuccessIcon from "@/Components/Icons/AnimatedSeccessIcon";
import type { Locale } from '@/i18n/routing';

interface ProcessStep {
  title: string;
  description: string;
  block: React.ReactNode;
}

interface LocalizedProcessStep extends Omit<ProcessStep, 'title' | 'description'> {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

const localizedProcess: LocalizedProcessStep[] = [
  {
    title: {
      en: "Consultation & Planning",
      th: "พูดคุยให้คำปรึกษา"
    },
    description: {
      en: "Fill out the form so we can contact you back and understand your goals to find the best approach.",
      th: "กรอกแบบฟอร์ม เพื่อให้เราติดต่อกลับและทำความเข้าใจเป้าหมายของคุณ เพื่อหาแนวทางที่ดีที่สุด"
    },
    block: (
      <Image
        src="/DE_Call.png"
        alt="Consultation meeting"
        width={500}
        height={500}
        className="rounded-xl w-full object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: {
      en: "Design & Development",
      th: "วางแผนและดำเนินการ"
    },
    description: {
      en: "We'll start executing your project and keep you informed of progress throughout the development process.",
      th: "เราจะเริ่มดำเนินการโครงการของคุณ พร้อมแจ้งข้อมูลความคืบหน้าตตลอดกระบวนการพัฒนา"
    },
    block: (
      <Image
        src="/DE_figma_shot.png"
        alt="Project planning"
        width={500}
        height={500}
        className="rounded-xl w-full object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: {
      en: "Launch & Support",
      th: "ส่งมอบและดูแล"
    },
    description: {
      en: "Once completed, we'll deliver and provide ongoing support to ensure everything runs smoothly.",
      th: "เมื่อเสร็จสิ้นแล้ว เราจะส่งมอบและให้การดูแลอย่างต่อเนื่องเพื่อให้มั่นใจว่าทุกอย่างทำงานได้อย่างราบรื่น"
    },
    block: (
      <div className="bg-background rounded-2xl px-8 py-16 md:py-4 text-center flex flex-col gap-4 items-center justify-center">
        <AnimatedSuccessIcon size={80} />
        <p>Your site has been published</p>
      </div>
    ),
  },
];

export function getProcess(locale: Locale): ProcessStep[] {
  return localizedProcess.map(step => ({
    ...step,
    title: step.title[locale] || step.title.en,
    description: step.description[locale] || step.description.en
  }));
}

// Keep the old export for backward compatibility
export const process = getProcess('th'); // Default to Thai for existing code