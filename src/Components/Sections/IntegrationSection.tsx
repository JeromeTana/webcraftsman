import React from "react";
import ShinyText from "../ShinyText/ShinyText";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import Image from "next/image";

type Locale = 'en' | 'th';

interface IntegrationSectionProps {
  locale: Locale;
}

export default function IntegrationSection({ locale }: IntegrationSectionProps) {
  return (
    <section id="integration">
      {/* <div className="flex flex-col gap-8">
        <div className="pill">
          <ShinyText text="Integrations" speed={5} />
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
          <h2 className="inline-flex items-center justify-center gap-4 text-4xl md:text-5xl">
            <span className={`highlight`}>คำถาม</span> ที่พบบ่อย
          </h2>
        </AnimatedContent>
      </div> */}
      <div className="flex items-center flex-wrap justify-center gap-x-16 w-full m-auto opacity-50 mt-20">
        {/* {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))} */}
        <Image
          src="/wordpress.png"
          alt="Wordpress Logo"
          width={200}
          height={200}
        />
        <Image src="/woo.png" alt="WooCommerce Logo" width={200} height={200} />
        <Image src="/framer.png" alt="Framer Logo" width={200} height={200} />
        <Image src="/shopify.png" alt="Framer Logo" width={200} height={200} />
        <Image src="/astro.png" alt="Astro Logo" width={200} height={200} />
        <Image src="/react.png" alt="React Logo" width={200} height={200} />
        <Image
          src="/next.png"
          alt="Next.js Logo"
          width={200}
          height={200}
        />{" "}
        <Image
          src="/highlevel.png"
          alt="HighLevel Logo"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
