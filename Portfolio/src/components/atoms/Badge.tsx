import { Badge } from "../ui/badge";

interface BadgeAtomProps {
  children: string;
}

export const BadgeAtom = ({ children }: BadgeAtomProps) => {
  return <Badge variant="secondary">{children}</Badge>;
};
