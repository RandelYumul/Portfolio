"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "../molecules/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Truth in Tales",
    description: "A web application that showcases different blogs to educate users about various topics.",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/RandelYumul/Truth_in_Tales",
    liveUrl: "https://randelyumul.github.io/Truth_in_Tales/index.html",
    imageSrc: "/images/truth-in-tales.webp",
    imageHint: "Blog web app screenshot",
  },
  {
      id: 2,
      title: "Wandertours",
      description: "This is my very first website project created using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/RandelYumul/Wandertours",
      liveUrl: "https://randelyumul.github.io/Wandertours/",
      imageSrc: "/images/wandertours.webp",
      imageHint: "Blog web app screenshot",
  },
  {
      id: 3,
      title: "VirtuoHero App",
      description: "AI-powered mobile platform for Filipino freelancers and students to track skills, monitor progress, and prepare for global digital careers.",
      tags: ["Flutter", "Dart"],
      githubUrl: "https://github.com/shokomori/Virtuo-Hero",
      liveUrl: null,
      imageSrc: "/images/virtuohero.webp",
      imageHint: "Blog web app screenshot",
  },
  {
      id: 4,
      title: "Fund Buddy",
      description: "Mobile-first finance management app that centralizes student organization funds, improves accuracy, and provides real-time financial visibility.",
      tags: ["Flutter", "Dart"],
      githubUrl: "https://github.com/JReshley/FundBuddy",
      liveUrl: null,
      imageSrc: "/images/fundbuddy.webp",
      imageHint: "Blog web app screenshot",
  },
  {
      id: 5,
      title: "sKEEP",
      description: "SKEEP helps users track and manage inventory while monitoring stock levels and identifying low or missing items.",
      tags: ["Flutter", "Dart"],
      githubUrl: "https://github.com/RandelYumul/sKEEP",
      liveUrl: null,
      imageSrc: "/images/skeep.webp",
      imageHint: "Blog web app screenshot",
  },
  {
      id: 6,
      title: "Capysaur",
      description: "A fun 2D game where players guide a capybara to jump over obstacles while tracking scores and increasing difficulty.",
      tags: ["Python", "Pygame"],
      githubUrl: "https://github.com/RandelYumul/Capysaur",
      liveUrl: null,
      imageSrc: "/images/capybara.webp",
      imageHint: "Blog web app screenshot",
  },
];

export const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="h-auto flex flex-col pt-30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-start pt-0 my-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Projects</h1>
        <p className="text-lg mb-8 max-w-xl text-center">
          Selected projects demonstrating my technical abilities and experience in development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
};
