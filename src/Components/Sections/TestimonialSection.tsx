import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Image from "next/image";
import AnimatedQuoteIcon from "../Icons/AnimatedQuoteIcon";
import { testimonials } from "@/data";
import { renderStars } from "../CtaPopup/utils";

export default function TestimonialSection() {
  const testimonial = testimonials[0];

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
        <h2 className="text-4xl md:text-5xl shaded text-center w-full inline-flex items-center justify-center gap-4">
          <span>สิ่งที่ลูกค้า</span>
          <span className="inline-flex items-center gap-2 md:gap-4">
            <AnimatedQuoteIcon className="bg-primary hidden md:inline-block rounded-full p-2" />
            <span className={`highlight`}>พูดถึงเรา</span>
          </span>
        </h2>
      </AnimatedContent>
      <div className="flex flex-col md:flex-row-reverse md:gap-8">
        {testimonial.image && (
          <Image
            src={testimonial.image}
            alt="Testimonial comparison"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-3xl mb-16 md:mb-0 border border-neutral-200"
          />
        )}
        <div className="flex flex-col w-full gap-8 px-4 md:px-8 items-center md:items-start">
          {testimonial.rating && (
            <div className="flex">{renderStars(testimonial.rating)}</div>
          )}

          <div className="mb-8 text-center md:text-start">
            <h3 className="text-3xl mb-2 leading-snug">
              "{testimonial.quote}"
            </h3>
            {testimonial.description && (
              <p className="text-gray-600">{testimonial.description}</p>
            )}
          </div>

          <div className="flex items-center gap-8">
            <div className="relative">
              <Image
                src={testimonial.author.avatar}
                alt={testimonial.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              {testimonial.author.companyLogo && (
                <Image
                  src={testimonial.author.companyLogo}
                  alt="Company logo"
                  width={40}
                  height={40}
                  className="rounded-full absolute -bottom-2 -right-4 border-2 border-background"
                />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p>{testimonial.author.name}</p>
              <p className="!text-sm text-gray-600">
                {testimonial.author.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
