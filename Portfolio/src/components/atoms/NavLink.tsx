import Link from "next/link";

interface NavLinkAtomProps {
  href: string;
  label: string;
  className?: string;
}

export const NavLinkAtom = ({ href, label, className }: NavLinkAtomProps) => {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-[#1da1f2] text-black dark:hover:text-[#1da1f2] dark:text-white ${className}`}
    >
      {label}
    </Link>
  );
};
