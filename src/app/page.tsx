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

const ROASTING_PLAN = {
  title: "Roasting",
  price: 89,
  description: "For conversion rate optimization",
  features: ["Audit report", "Actionable Fixes List", "Actionable Fixes List"],
  paymentUrl: "https://buy.stripe.com/fZeeXW5pY9Gm0a4fZ0",
};

const WORKS = [
  {
    img: "/work.png",
    pills: ["Concept", "Design & Development"],
    title: "Webcraftsman.co",
    description:
      "We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting.",
  },
  {
    img: "/work.png",
    pills: ["Concept", "Design & Development"],
    title: "Webcraftsman.co",
    description:
      "We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting.",
  },
  {
    img: "/work.png",
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

export default function Home() {
  return (
    <div>
      <main>
        <section id="hero" className="flex flex-col items-center gap-8">
          <LightRay />
          <p className="pill text-accent-green flex items-center gap-2">
            <span className="relative flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              <span className="w-2 h-2 rounded-full bg-accent-green animate-ping absolute" />
            </span>
            2 spots left for April
          </p>
          <AnimatedContent
            distance={100}
            direction="vertical"
            initialOpacity={0.05}
            animateOpacity
            damping={10}
            stiffness={40}
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
                <button className="cta">Get Started Now</button>
              </a>
            </Magnet>
            <p className="text-xs">Only 3 simple steps</p>
          </div>
        </section>
        <WorkCarousel />

        <section id="comparison" className="flex flex-col items-center gap-8">
          <p className="pill">Comparison</p>
          <AnimatedContent
            distance={100}
            direction="vertical"
            initialOpacity={0.05}
            animateOpacity
            damping={10}
            stiffness={40}
            scale={0.9}
            threshold={0.2}
          >
            <h1 className="text-6xl text-center font-medium mb-16">
              What Made Us{" "}
              <span className={`${poltawski.className} italic`}>Different</span>
            </h1>
          </AnimatedContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-6 w-full">
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
          </div>
        </section>
        <section id="work" className="flex flex-col items-center gap-8">
          <p className="pill">Our Work</p>
          <AnimatedContent
            distance={100}
            direction="vertical"
            initialOpacity={0.05}
            animateOpacity
            damping={10}
            stiffness={40}
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
          <div className="flex flex-col gap-12">
            {WORKS.map((work, index) => (
              <WorkItem key={index} work={work} />
            ))}
          </div>
        </section>
        <section id="process" className="flex flex-col gap-8">
          <p className="pill">Our Process</p>
          <AnimatedContent
            distance={100}
            direction="vertical"
            initialOpacity={0.05}
            animateOpacity
            damping={10}
            stiffness={40}
            scale={0.9}
            threshold={0.2}
          >
            <h1 className="text-6xl font-medium mb-16">
              <span className={`${poltawski.className} italic`}>3 Steps </span>
              Simple Process
            </h1>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-6">
              {PROCESS.map((process, index) => (
                <ProcessItem key={index} index={index + 1} process={process} />
              ))}
            </div>
            <div className="card aspect-video md:aspect-auto !bg-primary"></div>
          </div>
        </section>
        <section id="plan" className="flex flex-col items-center gap-8">
          <p className="pill">Plans</p>
          <AnimatedContent
            distance={100}
            direction="vertical"
            initialOpacity={0.05}
            animateOpacity
            damping={10}
            stiffness={40}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <PricingItem plan={LANDING_PLAN} />
            <PricingItem plan={WEBSITE_PLAN} isHighlighted />
            <PricingItem plan={ROASTING_PLAN} />
          </div>
        </section>
        <section id="freebies" className="!max-w-3xl w-full">
          <div className="card relative">
            <Image
              src="/large-comet-l.png"
              alt="large comet"
              width={300}
              height={200}
              className="absolute -top-32 -left-24 w-2/3"
            />
            <div className="relative flex flex-col items-center gap-8">
              <p className="pill">Freebies</p>
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
      </main>
    </div>
  );
}
