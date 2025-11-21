"use client";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { NavLinkAtom } from "../atoms/NavLink";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
}

export const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5 sm:h-6 sm:w-full" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-60">
        <div className="flex flex-col h-full w-full items-center text-center p-10">
          <div className="flex items-center mb-8">
            <span className="font-bold text-lg">Randel Yumul</span>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map(({ href, label }) => (
              <NavLinkAtom key={href} href={href} label={label} className="text-foreground/80 hover:text-foreground transition-colors" />
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
