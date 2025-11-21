"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroText } from "../molecules/HeroText";
import { HeroActions } from "../molecules/HeroActions";

export const HeroHeader = () => {
  return (
    <motion.section
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* LEFT SIDE: text + actions */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <HeroText />
        <HeroActions />
      </div>

      {/* RIGHT SIDE: profile image */}
      <div className="flex justify-center md:justify-center">
        <Image
          src="/images/profile.webp"
          alt="Profile photo"
          width={400}
          height={400}
          className="rounded-full object-cover aspect-square shadow-lg border-8 border-card"
        />
      </div>
    </motion.section>
  );
};
