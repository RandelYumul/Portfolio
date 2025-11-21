import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";
import { ImageAtom } from "../atoms/ImageAbout";

interface AboutCardProps {
  title: string;
  paragraphs: string[];
  imageSrc?: string;
  imageAlt?: string;
}

export const AboutCard2 = ({ title, paragraphs, imageSrc, imageAlt }: AboutCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <HeadingAtom className="font-bold text-xl sm:text-lg text-[#1da1f2]">{title}</HeadingAtom>
      
       {imageSrc && (
        <div className="relative w-full h-40 overflow-hidden bg-gray-950">
          <ImageAtom src={imageSrc} alt={imageAlt || title} fill className="object-cover w-full h-full" />
        </div>
      )}
      <div className="flex flex-col gap-4">
        {paragraphs.map((text, idx) => (
          <TextAtom key={idx} className="text-lg sm:text-base md:text-sm text-justify">{text}</TextAtom>
        ))}
      </div>
    </div>
  );
};
