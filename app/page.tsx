import Image from "next/image";
import { SplitText } from "./components/SplitText";
import * as motion from "motion/react-client";
import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="grain grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex items-center gap-4">
        <Image src="/webcraftsman.svg" alt="Logo" width={32} height={32} />
        <h1 className="text-lg font-mono ">webcraftsman.co</h1>
      </header>
      <main className="flex flex-col w-full text-center gap-6 row-start-2 items-center sm:items-start">
        <motion.small
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center font-medium font-mono w-full"
        >
          Coming soon
        </motion.small>
        <div className="w-full">
          <SplitText className="text-4xl md:text-6xl lg:text-8xl font-semibold">
            WE ARE COOKING
          </SplitText>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/webcraftsman.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={24} />
          Follow us
        </a>
      </footer>
    </div>
  );
}
