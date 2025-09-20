import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import AvailableSpots from "@/Components/AvailableSpots";
import AnimatedArrowIcon from "@/Components/Icons/AnimatedArrowIcon";
import AnimatedCalendarIcon from "@/Components/Icons/AnimatedCalendarIcon";
import { Metadata } from "next";
import { description } from "@/data";
import Calcom from "@/Components/Booking/DemoCall";

export const metadata: Metadata = {
  title: "Book Your 30-min Intro Call",
  description: description,
  openGraph: {
    title: "Book a 30-min Intro Call",
    description: description,
    url: "https://www.webcraftsman.co",
    siteName: "Webcraftsman",
    images: [
      {
        url: "https://www.webcraftsman.co/OG_Booking.png",
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function BookingPage() {
  return (
    <section>
      <div className="relative space-y-8 py-16 text-center">
        <div>
          <AvailableSpots />
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
          <h1 className="text-center">
            Book Your{" "}
            <span className="inline-flex  items-center gap-4">
              <AnimatedCalendarIcon className="hidden md:inline-flex items-center gap-4 bg-primary p-3 rounded-full" />
              <span className="highlight">30-min Intro Call</span>
            </span>
          </h1>
        </AnimatedContent>
        <p className="text-xl font-medium text-center">
          Just a 30-minute chill call to see if we are a good fit!
        </p>
        <AnimatedArrowIcon className="absolute -rotate-129 opacity-40 right-1/12 bottom-10 md:scale-150" />
      </div>
      <Calcom />
    </section>
  );
}
