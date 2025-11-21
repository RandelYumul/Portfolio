"use client"; // needed for framer-motion
import { motion } from "framer-motion";
import { HeadingAtom } from "../atoms/Heading";
import { TextAtom } from "../atoms/Text";
import { CertificationCard } from "../molecules/CertificationCard";
import { CertificationsGrid } from "../molecules/CertificationsGrid";

const certifications = [
  { name: "Cyber Threat Management", issuer: "Cisco", date: "Issued Nov 2025" },
  { name: "Learning Data Analytics: 1 Foundations", issuer: "LinkedIn", date: "Issued June 2025" },
  { name: "Relational Database", issuer: "freeCodeCamp", date: "Issued Feb 2025" },
  { name: "JavaScript Essentials 1", issuer: "Cisco", date: "Issued Oct 2024" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "Issued Sep 2024" },
  { name: "CompTIA IT Fundamentals+ (ITF+) Certification", issuer: "CompTIA", date: "Issued Nov 2023" },
];

export const Certifications = () => {
  return (
    <motion.div
      id="certifications"
      className="flex flex-col py-20 md:py-30 items-center pt-30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Section header */}
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 text-center">
        <HeadingAtom className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
          Certifications
        </HeadingAtom>
        <TextAtom className="text-base sm:text-lg mb-12 max-w-full sm:max-w-xl">
          A selection of my certifications demonstrating my skills and professional achievements.
        </TextAtom>
      </div>

      {/* Grid of certification cards */}
      <div className="flex flex-col items-center justify-center pt-0 text-center w-full">
        <CertificationsGrid>
          {certifications.map((cert, idx) => (
            <CertificationCard
              key={idx}
              name={cert.name}
              issuer={cert.issuer}
              date={cert.date}
            />
          ))}
        </CertificationsGrid>
      </div>
    </motion.div>
  );
};
