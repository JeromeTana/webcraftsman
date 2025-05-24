import BlurText from "@/TextAnimations/BlurText/BlurText";
import ComparisonItem from "@/Components/ComparisonItem";
import WorkItem from "@/Components/WorkItem";
import Image from "next/image";
import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import ProcessItem from "@/Components/ProcessItem";
import { LucideCheck } from "@/Components/Icons/LucideCheck";
import { LucideX } from "@/Components/Icons/LucideX";
import PricingItem from "@/Components/PricingItem";
import ShinyText from "@/Components/ShinyText/ShinyText";
import Accordion from "@/Components/Accordion";
import { MaterialSymbolsStarRounded } from "@/Components/Icons/MaterialStar";
import Footer from "@/Components/Footer";
import AvailableSpots from "@/Components/AvailableSpots";
import { CtaButton } from "@/Components/CtaButton";
import Logo from "@/Components/Icons/Logo";
import AnimatedQuestionIcon from "@/Components/Icons/AnimatedQuestionIcon";
import AnimatedTrendUpIcon from "@/Components/Icons/AnimatedTrendUpIcon";
import AnimatedCartIcon from "@/Components/Icons/AnimatedCartIcon";
import AnimatedCategoryIcon from "@/Components/Icons/AnimatedCategoryIcon";
import AnimatedCheckIcon from "@/Components/Icons/AnimatedCheckIcon";
import AnimatedSuccessIcon from "@/Components/Icons/AnimatedSeccessIcon";

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
      "Built in Framer (or Wordpress)",
      "Conversion focused design",
      "Full copywriting",
      "Performance optimized",
      "5 days delivery",
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
  "/DevWhoLifts.webp",
  "/contentcreatorcom.webp",
  "/whatsyourdream.webp",
  "/dataechooo.webp",
];

const WORKS = [
  {
    img: "/showcase1.png",
    pills: ["Concept", "Online Course"],
    title: "ContentCreator.com",
    description:
      "ContentCreator.com is a filmmaking course that teaches you how to create high-quality content for your audience.",
  },
  {
    img: "/showcase2.png",
    pills: ["Web blog"],
    title: "Data Echooo",
    description:
      "Data Echooo is a data web blog that provides insights and analysis on the latest trends in data science and analytics.",
  },
  {
    img: "/showcase3.png",
    pills: ["Concept", "Design & Development"],
    title: "What's Your Dream Book",
    description:
      "Simon Squibb's book, 'What's Your Dream', is a guide to help you discover your true purpose and achieve your dreams.",
  },
  {
    img: "/showcase4.png",
    pills: ["Concept", "Design & Development"],
    title: "DevWhoLifts",
    description:
      "DevWhoLifts is a web design agency that specializes in creating high-converting websites for fitness professionals.",
  },
];

const PROCESS = [
  {
    title: "Book an Intro Call",
    description: "We’ll discuss your project, goals, and how we can help.",
    block: (
      <Image
        src="/DE_Call.png"
        alt="intro call"
        width={500}
        height={500}
        className="rounded-xl object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: "Let Us Craft",
    description:
      "We’ll build your site based on your brief after payment is done",
    block: (
      <Image
        src="/DE_figma_shot.png"
        alt="intro call"
        width={500}
        height={500}
        className="rounded-xl object-cover border border-neutral-200"
      />
    ),
  },
  {
    title: "Ready To Grow",
    description:
      "After review and revisions, your site will be ready to launch",
    block: (
      <div className="bg-background  rounded-2xl px-8 py-4 text-center flex flex-col gap-4 items-center justify-center">
        <AnimatedSuccessIcon size={80} />
        <p>Your site has been published</p>
      </div>
    ),
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
      "Simply click the 'Book an Intro Call' button on our homepage, select your package, and complete the payment process. We'll reach out to you within 24 hours to kick off your project.",
  },
];
export default function Home() {
  return (
    <div>
      <main>
        <section id="hero" className="flex flex-col items-center gap-8 !py-16">
          {/* <LightRay /> */}
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
            <AvailableSpots />
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
            <h1 className="text-center ">
              Get More Paying Customers <br /> For Your{" "}
              <span className="inline-flex items-center gap-4">
                <AnimatedCartIcon className="hidden md:block bg-primary rounded-full p-2" />
                <span className={`highlight_text`}>
                  {/* <Underline className="absolute w-56 -bottom-6 -right-4 fill-primary" /> */}
                  Digital Product
                </span>{" "}
              </span>
            </h1>
          </AnimatedContent>
          <BlurText
            text="We help creators increase their digital products, online courses and membership programs sales with high-converting websites."
            delay={50}
            animateBy="words"
            direction="top"
            className="max-w-2xl md:text-xl justify-center mb-8 text-center"
          />
          <CtaButton />
        </section>
        <div className="mt-24">
          {/* <Marquee fastDuration={20} slowDuration={40}>
            {[...WORK_MARQUEE, ...WORK_MARQUEE].map((img, index) => (
              <div
                key={index}
                className="relative aspect-video w-80 md:w-xl rounded-3xl overflow-hidden border border-border p-2 shadow-2xl"
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
          </Marquee> */}
          <div className="grid grid-cols-3 gap-4 max-w-7xl m-auto mb-32 px-4 overflow-x-clip">
            <Image
              src="/showcase2.png"
              alt="work"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top border border-neutral-200 group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 -rotate-1 md:hover:scale-105"
            />
            <Image
              src="/showcase1.png"
              alt="work"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top border border-neutral-200 group-hover:scale-105 duration-300 rounded md:rounded-lg scale-200 md:scale-125 md:hover:-rotate-1 md:hover:scale-[1.3] z-10"
            />
            <Image
              src="/showcase3.png"
              alt="work"
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-top border border-neutral-200 group-hover:scale-105 duration-300 rounded md:rounded-lg scale-150 md:scale-100 rotate-1 md:hover:scale-105"
            />
          </div>
        </div>
        <section id="Why Us" className="flex flex-col items-center gap-8">
          <div className="pill">
            <ShinyText text="We're Who You Looking For" speed={5} />
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
            <h2 className="shaded text-center">
              Why <span className={`highlight_text`}>Creators</span> Choose Us
            </h2>
          </AnimatedContent>
          <div className="flex flex-col md:flex-row items-end gap-16 sm:gap-6 w-full">
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
                <h3 className="text-2xl">Others</h3>
                <ComparisonItem
                  item={[
                    "Slow communication",
                    "Outdated growth strategies",
                    "No industry research",
                    "Unpredictable pricing",
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
                <div className="flex items-center gap-4">
                  <Logo className="w-16 h-16 fill-primary text-primary" />
                  <h3 className="text-2xl">Webcraftsman</h3>
                </div>
                <ComparisonItem
                  item={[
                    "Fast communication",
                    "Conversion focused",
                    "Proven growth strategies",
                    "Specialized in the industry",
                    "Predictable price, no hidden fees",
                  ]}
                  Icon={<LucideCheck className="text-primary" />}
                  isHighlighted
                  className="!bg-primary/10"
                />
              </div>
            </AnimatedContent>
          </div>
        </section>
        <section id="showcase" className="flex flex-col items-center gap-8">
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
            <h2 className="shaded text-center">
              See Our{" "}
              <span className="inline-flex items-center gap-4">
                <AnimatedCategoryIcon className="bg-primary rounded-full p-2" />
                <span className={`highlight_text`}>Recent Works</span>
              </span>
            </h2>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKS.map((work, index) => (
              <WorkItem key={index} work={work} />
            ))}
          </div>
          <div className="mt-20">
            <CtaButton />
          </div>
        </section>
        <section id="process" className="flex flex-col items-center gap-8">
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
            <h2 className="shaded text-center">
              <span className={`highlight_text`}>3 Easy Steps</span> To <br />
              <span className="inline-flex flex-col sm:flex-row items-center gap-4">
                Get Your{" "}
                <span className="inline-flex items-center gap-4">
                  <AnimatedTrendUpIcon className="bg-primary rounded-full p-2" />{" "}
                  Growth
                </span>
              </span>
            </h2>
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
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROCESS.map((process, index) => (
                <ProcessItem key={index} index={index + 1} process={process}>
                  {process.block}
                </ProcessItem>
              ))}
            </div>
            {/* <div className="card !p-0 aspect-video md:h-full w-full !bg-primary rounded-3xl overflow-hidden">
                <Image
                  src="/workstation.jpg"
                  alt="workstation"
                  width={500}
                  height={500}
                  className=" object-cover w-full h-full"
                />
              </div> */}
            {/* </div> */}
          </AnimatedContent>
        </section>
        <section className="flex flex-col items-center gap-8 !max-w-5xl">
          <Image
            src="/DE_comparison.png"
            alt="Data Echooo Comparison"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-3xl mb-16 border border-neutral-200"
          />
          <div className="flex scale-150">
            <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
            <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
            <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
            <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
            <MaterialSymbolsStarRounded className="text-(--accent-yellow)" />
          </div>
          <h3 className="text-center md:!text-5xl leading-snug">
            <span className="highlight_text">
              They truly understood our branding
            </span>
            , making it not just beautiful but also clearly reflecting our
            brand's identity
          </h3>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Image
                src="/Jatawat_Xie.png"
                alt="Jerome pfp"
                width={64}
                height={64}
                className="rounded-full"
              />
              <Image
                src="/dataechooo.png"
                alt="Jerome pfp"
                width={40}
                height={40}
                className="rounded-full absolute -bottom-2 -right-4 border-2 border-background"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="!text-black">Jatawat Xie</p>
              <p className="text-sm">Founder of Data Echooo</p>
            </div>
          </div>
        </section>
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
            <h2 className="shaded text-center">
              <span className="inline-flex items-center gap-4">
                <AnimatedCheckIcon className="hidden md:block" /> Choose a
                Package That
              </span>
              <br /> <span className={`highlight_text`}>Fits Your Needs</span>
            </h2>
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
        <section id="faq" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
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
              <h2>
                <span className={`highlight_text`}>Answers</span> to Your
                <span className="flex items-center gap-4">
                  <AnimatedQuestionIcon className="animate-bounce" />
                  Questions
                </span>
              </h2>
            </AnimatedContent>
          </div>
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
      <Footer />
    </div>
  );
}
