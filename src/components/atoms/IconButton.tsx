import { Button } from "../ui/button";

interface IconButtonAtomProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export const IconButtonAtom = ({ href, label, children }: IconButtonAtomProps) => (
  <Button variant="ghost" size="icon" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  </Button>
);
