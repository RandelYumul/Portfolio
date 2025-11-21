import { Button } from "../ui/button";

interface ButtonProjectProps {
  children: React.ReactNode;
  href: string;
  variant?: "default" | "outline";
  size?: "sm" | "default" | "lg";
}

export const ButtonProject = ({ children, href, variant, size }: ButtonProjectProps) => {
  return (
    <Button variant={variant} size={size} asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};
