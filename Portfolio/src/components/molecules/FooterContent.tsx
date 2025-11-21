import { TextAtom } from "../atoms/Text";

export const FooterContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 md:px-15 lg:px-20 gap-4 sm:gap-0">
      {/* Left side */}
      <TextAtom className="text-xs sm:text-sm md:text-base text-center sm:text-right mt-2 sm:mt-0">
        Built with Next.js, Tailwind CSS, and Framer Motion.
      </TextAtom>

      {/* Right side */}
      <TextAtom className="text-xs sm:text-sm md:text-base font-semibold text-center sm:text-left">
        © {new Date().getFullYear()} Randel Angelo L. Yumul — All Rights Reserved.
      </TextAtom>
    </div>
  );
};
