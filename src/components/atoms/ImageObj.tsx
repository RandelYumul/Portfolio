import Image from "next/image";

interface ImageObjProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageObj = ({ src, alt, className }: ImageObjProps) => {
  return (
    <div className={`relative w-full h-20 sm:h-20 md:h-40 lg:h-60 overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover w-full h-full" />
    </div>
  );
};
