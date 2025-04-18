import React from "react";
import { RevealLink } from "./RevealLink";

export default function Header() {
  return (
    <nav className="sticky top-2 px-2 z-50">
      <div className="flex items-center justify-between max-w-3xl m-auto p-2 rounded-2xl border border-border bg-background/50 backdrop-blur-lg">
        <a href="/#">
          <img src="/logo.svg" alt="logo" className="w-10 mx-2" />
        </a>
        <div className="flex items-center gap-8">
          <ul className="gap-8 hidden sm:flex">
            <li>
              <RevealLink href="/#work">Work</RevealLink>
            </li>
            <li>
              <RevealLink href="/#process">Process</RevealLink>
            </li>
            <li>
              <RevealLink href="/#faq">Faqs</RevealLink>
            </li>
          </ul>
          <a href="/#plan">
            <button className="cta">Get Started</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
