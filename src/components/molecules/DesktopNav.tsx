import { NavLinkAtom } from "../atoms/NavLink";

interface DesktopNavProps {
  navLinks: { href: string; label: string }[];
}

export const DesktopNav = ({ navLinks }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
      {navLinks.map(({ href, label }) => (
        <NavLinkAtom key={href} href={href} label={label} />
      ))}
    </nav>
  );
};
