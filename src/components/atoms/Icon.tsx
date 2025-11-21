import { LucideIcon } from "lucide-react";

interface IconAtomProps {
  Icon: LucideIcon;
  className?: string;
}

export const IconAtom = ({ Icon, className }: IconAtomProps) => {
  return <Icon className={className} />;
};
