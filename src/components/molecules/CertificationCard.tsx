import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";
import { IconAtom } from "../atoms/Icon";
import { Award } from "lucide-react";

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
}

export const CertificationCard = ({ name, issuer, date }: CertificationCardProps) => {
  return (
    <div className="flex items-start gap-4 w-full p-4">
      <div className="p-1 shrink-0">
        <IconAtom Icon={Award} className="h-6 w-6 text-[#1da1f2]" />
      </div>
      <div className="text-left">
        <HeadingAtom className="font-semibold text-lg sm:text-xl">{name}</HeadingAtom>
        <TextAtom className="text-sm sm:text-base">{issuer}</TextAtom>
        <TextAtom className="text-xs sm:text-sm">{date}</TextAtom>
      </div>
    </div>
  );
};
