import BlurText from "@/TextAnimations/BlurText/BlurText";
import { poltawski } from "./fonts";
import ComparisonItem from "@/Components/ComparisonItem";
import WorkItem from "@/Components/WorkItem";
import Image from "next/image";
import ContactForm from "@/Components/ContactForm";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import StarBorder from "@/Animations/StarBorder/StarBorder";
import Magnet from "@/Animations/Magnet/Magnet";
import { RevealLink } from "@/Components/RevealLink";
import ProcessItem from "@/Components/ProcessItem";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";
import PricingItem from "@/Components/PricingItem";
import LightRay from "@/Components/LightRay";
import WorkCarousel from "@/Components/WorkCarousel";

export default function Home() {
  return (
    <div>
      <nav className="sticky top-2 flex items-center justify-between max-w-3xl m-auto p-2 rounded-2xl border border-border bg-background/50 backdrop-blur-lg z-50">
        <a href="/#">
          <img src="/logo.svg" alt="logo" className="w-10 mx-2" />
        </a>
        <div className="flex items-center gap-8">
          <ul className="gap-8 hidden sm:flex">
            <li>
              <RevealLink href="/#work">Works</RevealLink>
            </li>
            <li>
              <RevealLink href="/#process">Process</RevealLink>
            </li>
            <li>
              <RevealLink href="/#plan">Plans</RevealLink>
            </li>
          </ul>
          <button className="cta">
            <a href="#contact">Get Started</a>
          </button>
        </div>
      </nav>
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
              <button className="cta">
                <a href="#contact">Get Started Now</a>
              </button>
            </Magnet>
            <p className="text-xs">Only 3 simple steps</p>
          </div>
        </section>
        <WorkCarousel />

        <section id="comparison" className="flex flex-col items-center gap-8">
          <p className="pill">Comparison</p>
          <h1 className="text-6xl text-center font-medium mb-16">
            What Made Us{" "}
            <span className={`${poltawski.className} italic`}>Different</span>
          </h1>
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
                  "Multi-channel approach",
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
          <h1 className="text-6xl text-center font-medium mb-16">
            Modern and <br />
            <span className={`${poltawski.className} italic`}>
              High Converting
            </span>{" "}
            Design
          </h1>
          <div className="flex flex-col gap-12">
            <WorkItem
              img="/work.png"
              pills={["Concept", "Design & Development"]}
              title="Webcraftsman.co"
              description="We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting."
            />
            <WorkItem
              img="/work.png"
              pills={["Concept", "Design & Development"]}
              title="Webcraftsman.co"
              description="We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting."
            />
            <WorkItem
              img="/work.png"
              pills={["Concept", "Design & Development"]}
              title="Webcraftsman.co"
              description="We design and build beautiful Framer websites in 5-7 days. Faster than most people schedule a meeting."
            />
          </div>
        </section>
        <section id="process" className="flex flex-col gap-8">
          <p className="pill">Our Process</p>
          <h1 className="text-6xl font-medium mb-16">
            <span className={`${poltawski.className} italic`}>3 Steps </span>
            Simple Process
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-6">
              <ProcessItem
                index={1}
                title="Submit your Brief"
                description="Tell us your goals, your brand, and what you're building."
              />
              <ProcessItem
                index={2}
                title="Pick your favorite concepts"
                description="We’ll send over 3 designs to choose from."
              />
              <ProcessItem
                index={3}
                title="Launch in 5-7 days"
                description="We deliver your site. You review. We tweak it if needed. Done."
              />
            </div>
            <div className="card aspect-video md:aspect-auto !bg-primary"></div>
          </div>
        </section>
        <section id="plan" className="flex flex-col items-center gap-8">
          <p className="pill">Plans</p>
          <h1 className="text-6xl text-center font-medium mb-16">
            Choose Package That <br />
            <span className={`${poltawski.className} italic`}>
              Fits Your Needs
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <PricingItem
              plan={{
                title: "Landing",
                price: 499,
                description: "For small projects",
                features: [
                  "1 Page",
                  "1 Revision",
                  "1 Week Delivery",
                  "Email Support",
                ],
              }}
            />
            <PricingItem
              plan={{
                title: "Website",
                price: 499,
                description: "For small projects",
                features: [
                  "1 Page",
                  "1 Revision",
                  "1 Week Delivery",
                  "Email Support",
                ],
              }}
              isHighlighted
            />
            <PricingItem
              plan={{
                title: "Landing",
                price: 499,
                description: "For small projects",
                features: [
                  "1 Page",
                  "1 Revision",
                  "1 Week Delivery",
                  "Email Support",
                ],
              }}
            />
          </div>
        </section>
        <section id="contact" className="!max-w-3xl w-full">
          <div className="card relative">
            <Image
              src="/large-comet-l.png"
              alt="large comet"
              width={300}
              height={200}
              className="absolute -top-32 -left-24 w-2/3"
            />
            <div className="relative flex flex-col items-center gap-8">
              <p className="pill">Contact</p>
              <h1 className="text-6xl text-center font-medium mb-16">
                Ready to{" "}
                <span className={`${poltawski.className} italic`}>
                  Get Started
                </span>
                ?
              </h1>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}
