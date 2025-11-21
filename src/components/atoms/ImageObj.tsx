import Image from "next/image";

interface ImageObjProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageObj = ({ src, alt, className }: ImageObjProps) => {
  return (
    <div className={`relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] h-25 sm:h-56 md:h-72 overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover w-full h-full" />
    </div>
  );
};
