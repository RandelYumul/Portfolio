import { ReactNode } from "react";

interface ContactListProps {
  children: ReactNode;
}

export const ContactList = ({ children }: ContactListProps) => {
  return <div className="max-w-full sm:max-w-sm md:max-w-md mx-auto space-y-4">{children}</div>;
};
