import { SubHeadingAtom } from "../atoms/SubHeading";
import { TextAtom } from "../atoms/Text";
import { ImageObj } from "../atoms/ImageObj";

interface ObjectiveCardProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean; // for alternating layout
}

export const ObjectiveCard = ({ title, description, imageUrl, reverse = false }: ObjectiveCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      {/* Text */}
      <div className={`flex flex-col justify-center p-4 sm:p-6 md:p-8 ${reverse ? "md:order-2" : ""}`}>
        <SubHeadingAtom className="text-xl sm:text-2xl md:text-2xl font-bold mb-2">{title}</SubHeadingAtom>
        <div className="border-b-2 border-[#1da1f2] mb-3 sm:mb-4 w-full"></div>
        <TextAtom className="text-sm sm:text-base md:text-lg text-justify">{description}</TextAtom>
      </div>

      {/* Image */}
      <ImageObj src={imageUrl} alt={title} className={reverse ? "md:order-1" : ""} />
    </div>
  );
};
