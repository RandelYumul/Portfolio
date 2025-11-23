"use client";
import { motion } from "framer-motion";
import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";
import { SkillCard } from "../molecules/SkillCard";
import { SkillsGrid } from "../molecules/SkillsGrid";

const skillsData = [
  { title: "Soft Skills", content: ["Adaptable to Individual Work","Adaptable to Team Environments","Trustworthy","Discreet","Ethical"] },
  { title: "Technical Knowledge", content: ["Knowledgeable in Computing and IT Concepts","Strong Analytical Skills","Strong Critical Thinking Skills"] },
  { title: "Programming", content: ["Python","Java","JavaScript"] },
  { title: "Web Development", content: ["HTML","CSS","JavaScript","React","Next.js"] },
  { title: "Mobile Development", content: ["Flutter","Dart"] },
  { title: "Database Management", content: ["PostgreSQL","SQL"] },
  { title: "Networking", content: ["Basic Network Configuration"] },
  { title: "UI/UX Design", content: ["Figma"] },
];

export const Skills = () => {
  return (
    <motion.div
      id="skills"
      className="flex flex-col h-auto py-16 px-4 sm:px-6 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-start mb-8">
        <HeadingAtom className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & Expertise
        </HeadingAtom>
        <TextAtom className="text-base sm:text-lg md:text-lg max-w-xl text-center">
          An overview of my technical skills and professional strengths in software development.
        </TextAtom>
      </div>

      {/* Skills Grid */}
      <SkillsGrid>
        {skillsData.map((skill, idx) => (
          <SkillCard key={idx} title={skill.title} items={skill.content} />
        ))}
      </SkillsGrid>
    </motion.div>
  );
};
