import { Button } from "../ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { IconButtonAtom } from "../atoms/IconButton";

export const HeroActions = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
      <Button className="bg-[#1da1f2] w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition hover:bg-black group dark:hover:bg-white">
        <a href="#contact" className="flex items-center gap-2 transition text-white group-hover:text-white dark:group-hover:text-black">
          Get in Touch <ArrowRight className="w-5 h-5 text-white group-hover:text-white dark:group-hover:text-black" />
        </a>
      </Button>

      <Button className="w-full flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium bg-black hover:bg-white transition group">
        <a href="#projects" className="flex items-center gap-2 text-white group-hover:text-black">
          View My Work
        </a>
      </Button>

      <div className="flex items-center gap-2">
        <IconButtonAtom href="#" label="GitHub">
          <Github />
        </IconButtonAtom>
        <IconButtonAtom href="https://www.linkedin.com/in/randel-yumul-7228502bb/" label="LinkedIn">
          <Linkedin />
        </IconButtonAtom>
      </div>
    </div>
  );
};
