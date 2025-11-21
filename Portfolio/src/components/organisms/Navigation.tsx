"use client"; // required because of ThemeToggle and MobileMenu
import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "../molecules/ThemeToggle";
import { MobileMenu } from "../molecules/MobileMenu";
import { DesktopNav } from "../molecules/DesktopNav";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-2xl">
      <div className="container flex h-14 items-center justify-between px-3 sm:px-10 md:px-20 lg:px-40">
        {/* Left: Name / Logo */}
        <Link href="/" className="font-bold text-lg sm:text-lg md:text-lg lg:text-lg">
          Randel Yumul
        </Link>

        {/* Right: Navigation + Theme Toggle + Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <DesktopNav navLinks={navLinks} />
          <ThemeToggle />
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};
