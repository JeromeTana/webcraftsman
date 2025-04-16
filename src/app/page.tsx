import BlurText from "@/TextAnimations/BlurText/BlurText";
import { poltawski } from "./fonts";
import ComparisonItem from "@/Components/ComparisonItem";
import WorkItem from "@/Components/WorkItem";
import Image from "next/image";
import ContactForm from "@/Components/ContactForm";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import StarBorder from "@/Animations/StarBorder/StarBorder";
import SpotlightCard from "@/Components/SpotlightCard/SpotlightCard";
import Magnet from "@/Animations/Magnet/Magnet";
import { RevealLink } from "@/Components/RevealLink";

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
          {/* <Image
            src="/light_ray.svg"
            alt="light ray"
            width={180}
            height={38}
            className="absolute top-0 left-0 w-1/2 -z-10"
          /> */}
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
          <div className="flex flex-col items-center gap-2 scale-125">
            <Magnet padding={50} magnetStrength={10}>
              <button className="cta">
                <a href="#contact">Get Started Now</a>
              </button>
            </Magnet>
            <p className="text-xs">Only 3 simple steps</p>
          </div>
        </section>
        <section id="comparison" className="flex flex-col items-center gap-8">
          <p className="pill">Comparison</p>
          <h1 className="text-6xl text-center font-medium ">
            <span className={`${poltawski.className} italic`}>Unlike </span>
            Others Agencies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col items-center gap-6">
              <p>Other agencies</p>
              <ComparisonItem
                item={[
                  "Slow communication",
                  "Single channel approach",
                  "Outdated growth strategies",
                  "Lack of industry research",
                  "Outsourced to mediocre talent",
                ]}
              />
            </div>
            <div className="flex flex-col items-center gap-6">
              <p>Webcraftsman</p>
              <ComparisonItem
                item={[
                  "Fast communication",
                  "Multi-channel approach",
                  "Modern growth strategies",
                  "In-depth industry research",
                  "In-house team of experts",
                ]}
              />
            </div>
          </div>
        </section>
        <section id="work" className="flex flex-col items-center gap-8">
          <p className="pill">Our Work</p>
          <h1 className="text-6xl text-center font-medium">
            Modern and <br />
            <span className={`${poltawski.className} italic`}>
              High Converting
            </span>{" "}
            Design
          </h1>
          <div className="flex flex-col gap-6">
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
          <h1 className="text-6xl font-medium ">
            <span className={`${poltawski.className} italic`}>3 Steps </span>
            Simple Process
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-6">
              <SpotlightCard className="card hover:border-primary">
                <h2>Submit your Brief</h2>
                <p>Tell us your goals, your brand, and what you're building.</p>
              </SpotlightCard>
              <div className="card hover:border-primary">
                <h2>Pick your favorite concepts</h2>
                <p>We’ll send over 3 designs to choose from.</p>
              </div>
              <div className="card hover:border-primary">
                <h2>Launch in 3–5 days</h2>
                <p>
                  We deliver your site. You review. We tweak it if needed. Done.
                </p>
              </div>
            </div>
            <div className="card aspect-video md:aspect-auto !bg-primary"></div>
          </div>
        </section>
        <section id="plan" className="flex flex-col items-center gap-8">
          <p className="pill">Plans</p>
          <h1 className="text-6xl text-center font-medium">
            Choose Package That <br />
            <span className={`${poltawski.className} italic`}>
              Fits Your Needs
            </span>
          </h1>
        </section>
        <section id="contact" className="!max-w-3xl w-full">
          <div className="card relative">
            {/* <Image
              src="/large-comet.svg"
              alt="work"
              width={400}
              height={400}
              className="absolute top-0 left-0"
            /> */}
            <div className="relative flex flex-col items-center gap-8">
              <p className="pill">Contact</p>
              <h1 className="text-6xl text-center font-medium">
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        WEBCRAFTSMAN.CO
      </footer>
    </div>
  );
}
