import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Image from "next/image";
import AnimatedQuoteIcon from "../Icons/AnimatedQuoteIcon";
import { TESTIMONIAL_DATA } from "@/data/testimonials";
import { renderStars } from "../CtaPopup/utils";

export default function TestimonialSection() {

  return (
    <section
      className="flex flex-col items-center gap-8 !max-w-5xl"
      id="testimonial"
    >
      <div className="pill">
        <ShinyText text="รีวิวจากลูกค้า" speed={5} />
      </div>
      <AnimatedContent
        distance={100}
        direction="vertical"
        initialOpacity={0.05}
        animateOpacity
        damping={10}
        stiffness={50}
        scale={0.9}
        threshold={0.2}
      >
        <h2 className="text-4xl md:text-6xl shaded text-center w-full inline-flex items-center justify-center gap-4">
          <span>สิ่งที่ลูกค้า</span>
          <span className="inline-flex items-center gap-2 md:gap-4">
            <AnimatedQuoteIcon className="bg-primary hidden md:inline-block rounded-full p-2" />
            <span className={`highlight`}>พูดถึงเรา</span>
          </span>
        </h2>
      </AnimatedContent>
      <div className="flex flex-col md:flex-row-reverse md:gap-8">
        {TESTIMONIAL_DATA.image && (
          <Image
            src={TESTIMONIAL_DATA.image}
            alt="Testimonial comparison"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-3xl mb-16 md:mb-0 border border-neutral-200"
          />
        )}
        <div className="flex flex-col w-full gap-8 px-4 md:px-8 items-center md:items-start">
          {TESTIMONIAL_DATA.rating && (
            <div className="flex">{renderStars(TESTIMONIAL_DATA.rating)}</div>
          )}

          <div className="mb-8 text-center md:text-start">
            <h3 className="text-3xl mb-2 leading-snug">
              "{TESTIMONIAL_DATA.quote}"
            </h3>
            {TESTIMONIAL_DATA.description && (
              <p className="text-gray-600">{TESTIMONIAL_DATA.description}</p>
            )}
          </div>

          <div className="flex items-center gap-8">
            <div className="relative">
              <Image
                src={TESTIMONIAL_DATA.author.avatar}
                alt={TESTIMONIAL_DATA.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              {TESTIMONIAL_DATA.author.companyLogo && (
                <Image
                  src={TESTIMONIAL_DATA.author.companyLogo}
                  alt="Company logo"
                  width={40}
                  height={40}
                  className="rounded-full absolute -bottom-2 -right-4 border-2 border-background"
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p>{TESTIMONIAL_DATA.author.name}</p>
              <p className="!text-sm text-gray-600">
                {TESTIMONIAL_DATA.author.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
