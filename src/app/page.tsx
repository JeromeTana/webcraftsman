import BlurText from "@/TextAnimations/BlurText/BlurText";
import { poltawski } from "./fonts";
import ComparisonItem from "@/Components/ComparisonItem";
import WorkItem from "@/Components/WorkItem";
import Image from "next/image";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import Magnet from "@/Animations/Magnet/Magnet";
import ProcessItem from "@/Components/ProcessItem";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";
import PricingItem from "@/Components/PricingItem";
import LightRay from "@/Components/LightRay";
import WorkCarousel from "@/Components/WorkCarousel";
import { LucideArrowRight } from "@/Components/Icons/LucideArrowRight";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Accordion from "@/Components/Accordion";
import Marquee from "@/Components/WorkCarousel";

const PLANS = [
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
      "High-conversion design",
      "Copywriting",
      "SEO optimized",
      "High-performance score",
      "Mobile responsive",
      "Launched in 5 days",
    ],
    paymentUrl: "https://buy.stripe.com/14k3fe7y6g4K4qk7st",
    isHighlighted: true,
  },
  // {
  //   title: "Custom",
  //   price: 5000,
  //   description: "For better landing page",
  //   features: ["Landing page roast", "Audit report", "Actionable fixes list"],
  //   paymentUrl: "https://buy.stripe.com/fZeeXW5pY9Gm0a4fZ0",
  //   isHighlighted: false,
  // },
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
  // {
  //   title: "Free Hero Roast",
  //   price: 0,
  //   description: "For conversion rate optimization",
  //   features: [
  //     "Roast your hero section",
  //     "Audit report published on Instagram",
  //     "Actionable Fixes List",
  //   ],
  //   isHighlighted: false,
  // },
];

const WORK_MARQUEE = [
  "/DevWhoLifts.png",
  "/IronLift.png",
  "/JeromeTana.png",
  "/FitDad.png",
];

const WORKS = [
  {
    img: "/DevWhoLifts.png",
    pills: ["Concept", "Design & Development"],
    title: "DevWhoLifts",
    description:
      "DevWhoLifts is a web design agency that specializes in creating high-converting websites for fitness professionals.",
  },
  {
    img: "/IronLift.png",
    pills: ["Concept", "Design & Development"],
    title: "IronLift",
    description:
      "IronLift is a gym and fitness center in Bangkok that focuses on providing a unique and personalized experience for its members.",
  },
  {
    img: "/JeromeTana.png",
    pills: ["Concept", "Design & Development"],
    title: "Jerome Tana",
    description:
      "Jerome Tana is a Content Creator specializing in designing and building high-converting websites",
  },
  {
    img: "/FitDad.png",
    pills: ["Concept", "Design & Development"],
    title: "FitDad",
    description:
      "FitDad is a fitness coaching program that helps busy dads get in shape and stay healthy.",
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

const FAQS = [
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
      "Simply click the 'Get Started Now' button on our homepage, select your package, and complete the payment process. We'll reach out to you within 24 hours to kick off your project.",
  },
];
export default function Home() {
  return (
    <div>
      <main>
        <section id="hero" className="flex flex-col items-center gap-8">
          <LightRay />
          <AnimatedContent
            distance={100}
            direction="vertical"
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
            <h1 className="shaded text-4xl sm:text-5xl lg:text-6xl text-center font-medium ">
              Build Modern High Converting Website in{" "}
              <span className={`${poltawski.className} italic`}>
                5 Days, No Calls
              </span>
            </h1>
          </AnimatedContent>
          <BlurText
            text="Website that improve branding turns visitors into customers. Made in 5-7 days. No meetings."
            delay={50}
            animateBy="words"
            direction="top"
            className="max-w-lg justify-center mb-8"
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
        <Marquee fastDuration={20} slowDuration={40}>
          {[...WORK_MARQUEE, ...WORK_MARQUEE].map((img, index) => (
            <div
              key={index}
              className="relative aspect-video w-80 md:w-xl rounded-3xl overflow-hidden border border-border p-2"
            >
              <Image
                src={img}
                alt="work"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-top group-hover:scale-105 duration-300 rounded-2xl  hover:scale-105"
              />
            </div>
          ))}
        </Marquee>

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
            <h1 className="shaded text-4xl sm:text-5xl lg:text-6xl text-center font-medium mb-6 md:mb-16">
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
        <div className="wrapper">
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
              <h1 className="shaded text-4xl sm:text-5xl lg:text-6xl text-center font-medium mb-6 md:mb-16">
                Modern and <br />
                <span className={`${poltawski.className} italic`}>
                  High Converting
                </span>{" "}
                Design
              </h1>
            </AnimatedContent>
            <div className="flex flex-col gap-12">
              {WORKS.map((work, index) => (
                <WorkItem key={index} work={work} />
              ))}
            </div>
          </section>
        </div>
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
            <h1 className="shaded text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 md:mb-16">
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
              <div className="card !p-0 aspect-video md:h-full w-full !bg-primary rounded-3xl overflow-hidden">
                <Image
                  src="/workstation.jpg"
                  alt="workstation"
                  width={500}
                  height={500}
                  className=" object-cover w-full h-full"
                />
              </div>
            </div>
          </AnimatedContent>
        </section>
        <div className="wrapper">
          <section id="plan" className="flex flex-col items-center gap-8">
            <div className="pill">
              <ShinyText text="Plan" speed={5} />
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
              <h1 className="shaded text-4xl sm:text-5xl lg:text-6xl text-center font-medium mb-6 md:mb-16">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-full m-auto">
                {PLANS.map((plan, index) => (
                  <PricingItem
                    key={index}
                    plan={plan}
                    isHighlighted={plan.isHighlighted}
                  />
                ))}
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
        </div>
        <section
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-medium mb-6 md:mb-16">
              <span className={`${poltawski.className} italic`}>Questions</span>{" "}
              You Might Have
            </h1>
          </AnimatedContent>
          <div className="grid grid-cols-1 gap-6 w-full max-w-2xl">
            {/* <div className="card w-full"></div> */}
            {FAQS.map((faq, index) => (
              <Accordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
