"use client";

import React from "react";
import { RevealLink } from "./RevealLink";
import { MegaMenu } from "./MegaMenu";
import Logo from "./Icons/Logo";
import { LucideArrowRight } from "./Icons/LucideArrowRight";
import { BookIcon } from "./Icons/BookIcon";
import { ToolIcon } from "./Icons/ToolIcon";
import { BriefcaseIcon } from "./Icons/BriefcaseIcon";
import { BlogIcon } from "./Icons/BlogIcon";
import { DesignIcon } from "./Icons/DesignIcon";
import { CodeIcon } from "./Icons/CodeIcon";
import { openCtaPopup } from "./CtaPopup";

export default function Header() {
  // Define the mega menu structure for Services
  const servicesSections = [
    {
      title: "Services",
      icon: BriefcaseIcon,
      items: [
        {
          name: "Web Development",
          href: "/services/web-development",
          description: "Custom websites and applications",
          icon: CodeIcon,
        },
        {
          name: "UI/UX Design",
          href: "/services/ui-ux-design",
          description: "User-centered design solutions",
          icon: DesignIcon,
        },
        {
          name: "E-commerce",
          href: "/services/ecommerce",
          description: "Online store development",
          icon: BriefcaseIcon,
        },
        {
          name: "Consulting",
          href: "/services/consulting",
          description: "Strategic digital guidance",
          icon: ToolIcon,
        },
        {
          name: "Maintenance",
          href: "/services/maintenance",
          description: "Ongoing support and updates",
          icon: ToolIcon,
        },
        {
          name: "SEO Optimization",
          href: "/services/seo",
          description: "Search engine optimization",
          icon: BookIcon,
        },
      ],
    },
  ];

  // Define the mega menu structure for Resources
  const resourcesSections = [
    {
      title: "Resources",
      icon: BookIcon,
      items: [
        {
          name: "Blog Posts",
          href: "/posts",
          description: "Latest insights and tutorials",
          icon: BookIcon,
        },
        {
          name: "Design Guides",
          href: "/resources/design-guides",
          description: "UI/UX best practices",
          icon: DesignIcon,
        },
        {
          name: "Templates",
          href: "/resources/templates",
          description: "Pre-built design templates",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/resources/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/resources/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/resources/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between m-auto p-3 pl-4 bg-background">
        <a
          href="/"
          className="inline-flex gap-4 items-center md:text-2xl font-semibold tracking-tight"
        >
          <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
          <span className="hidden md:inline">WEBCRAFTSMAN</span>
        </a>
        <nav className="flex items-center gap-8">
          <ul className="gap-8 hidden md:flex text-(--paragraph)">
            <li>
              <RevealLink href="/about">About</RevealLink>
            </li>
            <li>
              <RevealLink href="/work">Showcases</RevealLink>
            </li>
            <li>
              <MegaMenu trigger="Services" sections={servicesSections} />
            </li>
            <li>
              <MegaMenu trigger="Resources" sections={resourcesSections} />
            </li>
          </ul>
        </nav>
        <button 
          onClick={openCtaPopup}
          className="cta flex items-center gap-2"
        >
          นัดพูดคุยเลย
          <LucideArrowRight />
        </button>
      </div>
    </header>
  );
}
