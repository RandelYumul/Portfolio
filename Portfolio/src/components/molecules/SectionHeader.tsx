import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  return (
    <div className={`flex flex-col items-center justify-start pt-0 ${className}`}>
      <HeadingAtom className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-3 text-center">
        {title}
      </HeadingAtom>
      <TextAtom className="text-base sm:text-base mb-6 sm:mb-8 max-w-full sm:max-w-xl text-center">
        {subtitle}
      </TextAtom>
    </div>
  );
};
