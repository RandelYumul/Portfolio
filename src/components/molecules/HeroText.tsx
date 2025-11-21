import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";

export const HeroText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
      <HeadingAtom className="font-headline text-4xl md:text-6xl font-black animate-in fade-in-0 duration-500">
        Hello, I'm <br /> Randel Yumul
      </HeadingAtom>
      <TextAtom className="text-xl md:text-2xl font-medium animate-in fade-in-0 delay-150 duration-500 text-[#1da1f2]">
        Front-End Lead & Aspiring Full-Stack Developer
      </TextAtom>
      <TextAtom className="text-lg animate-in fade-in-0 delay-300 duration-500">
        Creating user-focused designs that bring ideas to life, while improving skills and gaining experience across different programming languages, frameworks, and machine learning to grow into a full-stack developer.
      </TextAtom>
    </div>
  );
};
