"use client";

import React, { useState, useEffect } from "react";
import { RevealLink } from "./RevealLink";
import { MegaMenu } from "./MegaMenu";
import Logo from "./Icons/Logo";
import { ArrowRight, X } from "lucide-react";
import { BookIcon } from "./Icons/BookIcon";
import { ToolIcon } from "./Icons/ToolIcon";
import { BriefcaseIcon } from "./Icons/BriefcaseIcon";
import { BlogIcon } from "./Icons/BlogIcon";
import { DesignIcon } from "./Icons/DesignIcon";
import { CodeIcon } from "./Icons/CodeIcon";
import { HamburgerIcon } from "./Icons/HamburgerIcon";
import { openCtaPopup } from "./CtaPopup";
import { navBarLinks } from "@/data";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (isMobileMenuOpen) {
  //       closeMobileMenu();
  //     }
  //   };

  //   if (isMobileMenuOpen) {
  //     window.addEventListener('scroll', handleScroll);
  //     // Prevent body scroll when menu is open
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     document.body.style.overflow = 'unset';
  //   };
  // }, [isMobileMenuOpen]);

  // Define the mega menu structure for Services
  const servicesSections = [
    {
      title: "Services",
      icon: BriefcaseIcon,
      items: [
        {
          name: "Landing Page & Website",
          href: "/service/web-development",
          description: "Custom websites and landing pages",
          icon: CodeIcon,
        },
        {
          name: "Website Audit",
          href: "/roast",
          description: "Free website analysis and optimization",
          icon: DesignIcon,
        },
        {
          name: "SEO",
          href: "/service/seo",
          description: "Search engine optimization",
          icon: BookIcon,
        },
        {
          name: "Conversion Rate Optimization",
          href: "/service/consulting",
          description: "Improve conversion and sales",
          icon: ToolIcon,
        },
        {
          name: "Maintenance Support",
          href: "/service/maintenance",
          description: "Ongoing support and updates",
          icon: ToolIcon,
        },
        {
          name: "E-Commerce",
          href: "/service/ecommerce",
          description: "Online store development (Coming Soon)",
          icon: BriefcaseIcon,
        },
      ],
    },
  ];

  // Define the mega menu structure for Value
  const valueSections = [
    {
      title: "Value",
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
          href: "/value/design-guides",
          description: "UI/UX best practices",
          icon: DesignIcon,
        },
        {
          name: "Assets",
          href: "/value/assets",
          description: "Design assets",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/value/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/value/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
        {
          name: "Development Tips",
          href: "/value/dev-tips",
          description: "Code optimization techniques",
          icon: CodeIcon,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center  justify-between m-auto p-3 pl-4 bg-background">
        <a
          href="/"
          className="inline-flex lg:w-1/4 gap-4 items-center sm:text-2xl font-semibold tracking-tight"
        >
          <Logo className="w-14 h-14 fill-primary text-primary ml-4" />
          <span className="hidden sm:inline">WEBCRAFTSMAN</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <ul className="gap-8 hidden lg:flex text-(--paragraph)">
            {navBarLinks.map((item, index) => (
              <li key={index}>
                <RevealLink href={item.url}>{item.title}</RevealLink>
              </li>
            ))}
            <li>
              <MegaMenu trigger="แหล่งความรู้" sections={valueSections} />
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="flex lg:w-1/4 justify-end gap-4">
          <Link href="#cta">
            <button
              // onClick={openCtaPopup}
              className="cta hidden md:flex items-center gap-2"
            >
              เริ่มต้นรับบริการ
              <ArrowRight />
            </button>
          </Link>

          {/* Mobile Hamburger Button */}
          {/* <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <HamburgerIcon className="w-8 h-8" />
            )}
          </button> */}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-background border-t border-border transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="px-4 py-4">
          <ul className="space-y-4">
            <li>
              <a
                href="/about"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/showcase"
                className="block py-2 text-lg hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Showcases
              </a>
            </li>

            {/* Mobile Services Section */}
            <li>
              <div className="py-2">
                <p className="text-lg font-semibold text-primary mb-2">
                  Services
                </p>
                <ul className="space-y-2 pl-4">
                  {servicesSections[0].items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block py-1 text-sm hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile Value Section */}
            <li>
              <div className="py-2">
                <p className="text-lg font-semibold text-primary mb-2">Value</p>
                <ul className="space-y-2 pl-4">
                  {valueSections[0].items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block py-1 text-sm hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Mobile CTA Button */}
            <li className="pt-4 border-t border-border">
              <button
                onClick={() => {
                  openCtaPopup();
                  closeMobileMenu();
                }}
                className="w-full cta flex items-center justify-center gap-2 py-3"
              >
                รับบริการ
                <ArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
