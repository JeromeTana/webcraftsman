import React from "react";
import { RevealLink } from "./RevealLink";
import Logo from "./Icons/Logo";
import { LucideArrowRight } from "./Icons/LucideArrowRight";

export default function Header() {
  return (
    <header className="sticky top-2 px-2 z-50">
      <div className="flex items-center justify-between max-w-5xl m-auto py-3 px-4 rounded-full bg-background">
        <a
          href="/#"
          className="inline-flex gap-4 items-center md:text-2xl font-semibold tracking-tight"
        >
          <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
          <span className="hidden md:inline">WEBCRAFTSMAN</span>
        </a>
        <nav className="flex items-center gap-8">
          <ul className="gap-8 hidden sm:flex text-(--paragraph)">
            <li>
              <RevealLink href="/#showcase">Showcase</RevealLink>
            </li>
            <li>
              <RevealLink href="/#process">Process</RevealLink>
            </li>
            <li>
              <RevealLink href="/#faq">FAQs</RevealLink>
            </li>
          </ul>
          <a href="/booking">
            <button className="cta flex items-center gap-2">
              Book an Intro Call
              <LucideArrowRight />
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
