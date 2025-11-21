"use client";
import { motion } from "framer-motion";
import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";
import { ObjectiveCard } from "../molecules/ObjectiveCard";
import { ObjectiveList } from "../molecules/ObjectiveList";

const objectives = [
  {
    title: "Short-Term Goal",
    description:
      "Over the next year, the goal is to improve front-end and back-end skills while learning the basics of machine learning. Practical experience will be gained through projects, hackathons, and earning certifications or pursuing other opportunities to strengthen technical skills.",
    imageUrl: "/images/objective-1.webp",
  },
  {
    title: "Mid-Term Goal",
    description:
      "The goal is to become an intermediate full-stack developer while continuing to learn AI and machine learning. Focus will be on working on larger, more complex projects, gaining practical experience through internships or real-world applications, and enhancing technical skills to progress toward a professional software engineering role.",
    imageUrl: "/images/objective-2.webp",
  },
  {
    title: "Long-Term Goal",
    description:
      "The goal is to become a senior full-stack developer with expertise in new technologies, while continuing to learn broadly in AI, machine learning, and related fields. The focus will be on creating innovative applications and products that improve productivity and make everyday life easier for the general public. Over time, after strengthening technical skills and experience, the aim is to contribute to the tech community and help others grow in their development journey.",
    imageUrl: "/images/objective-3.webp",
  },
];

export const Objective = () => {
  return (
    <motion.div
      id="objective"
      className="flex flex-col py-20 px-4 sm:px-6 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 px-2 sm:px-6">
        <HeadingAtom className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          Professional Objectives
        </HeadingAtom>
        <TextAtom className="text-base sm:text-lg md:text-lg max-w-xl text-center">
          My goals and interests in software development.
        </TextAtom>
      </div>

      {/* Objective Cards */}
      <ObjectiveList>
        {objectives.map((obj, index) => (
          <ObjectiveCard
            key={index}
            title={obj.title}
            description={obj.description}
            imageUrl={obj.imageUrl}
            reverse={index % 2 !== 0}
          />
        ))}
      </ObjectiveList>
    </motion.div>
  );
};
