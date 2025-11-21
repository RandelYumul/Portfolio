import Image from "next/image";

interface ImageProjectProps {
  src: string;
  alt: string;
  hint?: string;
  className?: string;
}

export const ImageProject = ({ src, alt, hint, className }: ImageProjectProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      data-ai-hint={hint}
      fill
      className={className}
    />
  );
};
