import BlurText from "@/TextAnimations/BlurText/BlurText";
import { poltawski } from "./fonts";
import ComparisonItem from "@/Components/ComparisonItem";
import WorkItem from "@/Components/WorkItem";
import Image from "next/image";
import ContactForm from "@/Components/ContactForm";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import StarBorder from "@/Animations/StarBorder/StarBorder";
import Magnet from "@/Animations/Magnet/Magnet";
import ProcessItem from "@/Components/ProcessItem";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";
import PricingItem from "@/Components/PricingItem";
import LightRay from "@/Components/LightRay";
import WorkCarousel from "@/Components/WorkCarousel";
import AuditForm from "@/Components/AuditForm";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";
import ShinyText from "@/Components/ShinyText/ShinyText";

const LANDING_PLAN = {
  title: "Landing",
  price: 1200,
  description: "For small projects",
  features: [
    "1 landing page",
    "High-conversion design",
    "Copywriting",
    "SEO optimized",
    "High-performance score",
    "Mobile responsive",
    "Launched in 5 days",
  ],
  paymentUrl: "https://buy.stripe.com/14k3fe7y6g4K4qk7st",
};

const WEBSITE_PLAN = {
  title: "Website",
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
};

const ROAST_PLAN = {
  title: "Roast",
  price: 89,
  description: "For better landing page",
  features: ["Landing page roast", "Audit report", "Actionable fixes list"],
  paymentUrl: "https://buy.stripe.com/fZeeXW5pY9Gm0a4fZ0",
};

const HERO_ROASTING_PLAN = {
  title: "Free Hero Roast",
  price: 0,
  description: "For conversion rate optimization",
  features: [
    "Roast your hero section",
    "Audit report published on Instagram",
    "Actionable Fixes List",
  ],
};

const WORKS = [
  {
    img: "/DevWhoLifts.png",
    pills: ["Concept", "Design & Development"],
    title: "Webcraftsman.co",
    description:
      "We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting.",
  },
  {
    img: "/IronLift.png",
    pills: ["Concept", "Design & Development"],
    title: "Webcraftsman.co",
    description:
      "We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting.",
  },
  {
    img: "/JeromeTana.png",
    pills: ["Concept", "Design & Development"],
    title: "Webcraftsman.co",
    description:
      "We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting.",
  },
];

const PROCESS = [
  {
    title: "Submit your Brief",
    description: "Tell us your goals, your brand, and what you're building.",
  },
  {
    title: "Pick your favorite concepts",
    description: "We’ll send over 3 designs to choose from.",
  },
  {
    title: "Launch in 5-7 days",
    description:
      "We deliver your site. You review. We tweak it if needed. Done.",
  },
];

const FAQS = [];

export default function Home() {
  return (
    <div>
      <main>
        <section id="hero" className="flex flex-col items-center gap-8">
          <LightRay />
          <AnimatedContent
            distance={100}
            direction="vertical"
            initialOpacity={0.05}
            animateOpacity
            damping={10}
            stiffness={50}
            scale={0.9}
            delay={400}
            threshold={0.2}
          >
            <div className="pill text-accent-green flex items-center gap-2 m-auto">
              <div className="relative flex items-center">
                <div className="w-2 h-2 rounded-full bg-accent-green" />
                <div className="w-2 h-2 rounded-full bg-accent-green animate-ping absolute" />
              </div>
              <ShinyText
                text={
                  "2 spots left for " +
                  new Date().toLocaleString("default", {
                    month: "long",
                  })
                }
                speed={5}
                className="text-accent-green"
              />
            </div>
          </AnimatedContent>
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
            <h1 className="text-6xl text-center font-medium ">
              Build Modern High Converting Website in{" "}
              <span className={`${poltawski.className} italic`}>
                5 Days, No Calls
              </span>
            </h1>
          </AnimatedContent>

          <BlurText
            text="We design and build beautiful Framer websites in 5-7 days. Faster than
          most people schedule a meeting."
            delay={50}
            animateBy="words"
            direction="top"
            className="w-lg justify-center mb-8"
          />
          <div className="flex flex-col items-center gap-3 scale-125">
            <Magnet padding={50} magnetStrength={10}>
              <a href="#plan">
                <button className="cta flex items-center gap-2">
                  Get Started Now <LucideArrowRight />
                </button>
              </a>
            </Magnet>
            <p className="text-xs">Only 3 simple steps</p>
          </div>
        </section>
        <WorkCarousel />

        <section id="comparison" className="flex flex-col items-center gap-8">
          <div className="pill">
            <ShinyText text="Comparison" speed={5} />
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
            <h1 className="text-6xl text-center font-medium mb-16">
              What Made Us{" "}
              <span className={`${poltawski.className} italic`}>Different</span>
            </h1>
          </AnimatedContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-6 w-full">
            <AnimatedContent
              distance={100}
              direction="vertical"
              animateOpacity
              damping={10}
              stiffness={50}
              threshold={0.2}
              delay={100}
            >
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-2xl">Other agencies</h2>
                <ComparisonItem
                  item={[
                    "Slow communication",
                    "Single channel approach",
                    "Outdated growth strategies",
                    "Lack of industry research",
                    "Outsourced to mediocre talent",
                  ]}
                  Icon={<LucideX />}
                  className="text-neutral-500"
                />
              </div>
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              animateOpacity
              damping={10}
              stiffness={50}
              threshold={0.2}
              delay={200}
            >
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="logo" className="w-10 mx-2" />
                  <h2 className="text-2xl">Webcraftsman</h2>
                </div>
                <ComparisonItem
                  item={[
                    "Fast communication",
                    "Conversion focused",
                    "Modern growth strategies",
                    "In-depth industry research",
                    "In-house team of experts",
                  ]}
                  Icon={<LucideCheck className="text-accent-green" />}
                  isHighlighted
                  className="!bg-black"
                />
              </div>
            </AnimatedContent>
          </div>
        </section>
        <section id="work" className="flex flex-col items-center gap-8">
          <div className="pill">
            <ShinyText text="Our Work" speed={5} />
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
            <h1 className="text-6xl text-center font-medium mb-16">
              Modern and <br />
              <span className={`${poltawski.className} italic`}>
                High Converting
              </span>{" "}
              Design
            </h1>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            animateOpacity
            damping={10}
            stiffness={50}
            threshold={0.2}
            delay={100}
          >
            <div className="flex flex-col gap-12">
              {WORKS.map((work, index) => (
                <WorkItem key={index} work={work} />
              ))}
            </div>
          </AnimatedContent>
        </section>
        <section id="process" className="flex flex-col gap-8">
          <div className="pill">
            <ShinyText text="Process" speed={5} />
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
            <h1 className="text-6xl font-medium mb-16">
              <span className={`${poltawski.className} italic`}>3 Steps </span>
              Simple Process
            </h1>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            animateOpacity
            damping={10}
            stiffness={50}
            threshold={0.2}
            delay={100}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 gap-6">
                {PROCESS.map((process, index) => (
                  <ProcessItem
                    key={index}
                    index={index + 1}
                    process={process}
                  />
                ))}
              </div>
              <div className="card aspect-video md:aspect-auto !bg-primary"></div>
            </div>
          </AnimatedContent>
        </section>
        <section id="plan" className="flex flex-col items-center gap-8">
          <div className="pill">
            <ShinyText text="Plans" speed={5} />
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
            <h1 className="text-6xl text-center font-medium mb-16">
              Choose Package That <br />
              <span className={`${poltawski.className} italic`}>
                Fits Your Needs
              </span>
            </h1>
          </AnimatedContent>
          <AnimatedContent
            distance={100}
            direction="vertical"
            animateOpacity
            damping={10}
            stiffness={50}
            threshold={0.2}
            delay={100}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <PricingItem plan={LANDING_PLAN} />
              <PricingItem plan={WEBSITE_PLAN} isHighlighted />
              <PricingItem plan={ROAST_PLAN} />
            </div>
          </AnimatedContent>
          {/* <div className="card w-full flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                {HERO_ROASTING_PLAN.title}
              </h2>
              <p className="text-4xl font-medium !text-white">
                ${HERO_ROASTING_PLAN.price}
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              {HERO_ROASTING_PLAN.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <LucideCheck className="text-accent-green" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
            <a href="/#free">
              <button className="cta mt-16 w-full flex items-center justify-center gap-2">
                Roast me
              </button>
            </a>
          </div> */}
        </section>
        <section id="free" className="!max-w-2xl w-full">
          <div className="card relative">
            <Image
              src="/large-comet-l.png"
              alt="large comet"
              width={300}
              height={200}
              className="absolute -top-32 -left-24 w-2/3"
            />
            <div className="relative flex flex-col items-center gap-8">
              <div className="pill">
                <ShinyText text="Free" speed={5} />
              </div>
              <h1 className="text-6xl text-center font-medium mb-16">
                Free{" "}
                <span className={`${poltawski.className} italic`}>
                  Hero Roasting
                </span>
              </h1>
              <AuditForm />
            </div>
          </div>
        </section>
        {/* <section
          id="faq"
          className="flex flex-col items-center gap-8 !max-w-4xl"
        >
          <div className="pill">
            <ShinyText text="FAQ" speed={5} />
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
            <h1 className="text-6xl text-center font-medium mb-16">
              <span className={`${poltawski.className} italic`}>Questions</span>{" "}
              You Might Have
            </h1>
          </AnimatedContent>
          <div className="grid grid-cols-1 gap-6 w-full">
            <div className="card w-full"></div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
