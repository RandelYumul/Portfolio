import Image from "next/image";

interface ImageAtomProps {
  src: string;
  alt: string;
  className?: string;
  height?: number;
  width?: number;
  fill?: boolean;
}

export const ImageAtom = ({ src, alt, className, width, height, fill }: ImageAtomProps) => {
  return <Image src={src} alt={alt} className={className} width={width} height={height} fill={fill} />;
};
