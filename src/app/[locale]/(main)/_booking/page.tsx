import AnimatedContent from "@/Animations/AnimatedContent/AnimatedContent";
import AvailableSpots from "@/Components/AvailableSpots";
import AnimatedArrowIcon from "@/Components/Icons/AnimatedArrowIcon";
import AnimatedCalendarIcon from "@/Components/Icons/AnimatedCalendarIcon";
import { Metadata } from "next";
import { getMetadata } from "@/data/metadata";
import Calcom from "@/Components/Booking/DemoCall";
import { type Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'en';
  const metadata = getMetadata(locale);

  return {
    title: "Book Your 30-min Intro Call",
    description: metadata.description,
    openGraph: {
      title: "Book a 30-min Intro Call",
      description: metadata.description,
      url: "https://www.webcraftsman.co",
      siteName: "Webcraftsman",
      images: [
        {
          url: "https://www.webcraftsman.co/OG_Booking.png",
          alt: "Open Graph Image",
        },
      ],
      locale: locale === 'th' ? "th_TH" : "en_US",
      type: "website",
    },
  };
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

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
