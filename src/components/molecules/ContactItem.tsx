import { IconAtom } from "../atoms/Icon";
import { TextAtom } from "../atoms/Text";
import { LinkAtom } from "../atoms/Link";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export const ContactItem = ({ icon, text, href }: ContactItemProps) => {
  return (
    <LinkAtom
      href={href}
      className="flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-4 rounded-lg bg-white dark:bg-black hover:bg-muted dark:hover:bg-muted/50 transition-colors group"
    >
      <div className="text-[#1da1f2] mr-0 sm:mr-4 mb-2 sm:mb-0 shrink-0">
        <IconAtom Icon={icon} className="w-6 h-6" />
      </div>
      <TextAtom className="dark:text-white text-black group-hover:text-foreground transition-colors text-sm sm:text-base text-center sm:text-left">
        {text}
      </TextAtom>
    </LinkAtom>
  );
};
