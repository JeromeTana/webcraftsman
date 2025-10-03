import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - WEBCRAFTSMAN",
  description:
    "The page you're looking for doesn't exist. Get back on track with professional website design services.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col text-center items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        We can't find the page you're looking for. <br />
        Don't worry, let us help you get back on track!
      </p>
      <Link href="/">
        <button className="cta flex items-center gap-2">Go Home</button>
      </Link>
    </div>
  );
}
