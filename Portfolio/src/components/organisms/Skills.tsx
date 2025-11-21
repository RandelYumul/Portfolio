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
      className="h-auto flex flex-col pt-30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-start">
        <HeadingAtom className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Skills & Expertise
        </HeadingAtom>
        <TextAtom className="text-lg mb-8 max-w-xl text-center">
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
