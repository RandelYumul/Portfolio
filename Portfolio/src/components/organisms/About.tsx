"use client"; // needed because of framer-motion
import { motion } from "framer-motion";
import { SectionHeader } from "../molecules/SectionHeader";
import { AboutCard } from "../molecules/AboutCard";
import { AboutGrid } from "../molecules/AboutGrid";
import { AboutCard2 } from "../molecules/AboutCard2";

export const About = () => {
  return (
    <motion.div
      id="about"
      className="flex flex-col py-30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <SectionHeader
        title="About Me"
        subtitle="Discover my background, explore my technical skills, and see the passions that motivate me in the world of technology."
      />

      <AboutGrid>
        <AboutCard2
          title="Who I Am"
          imageSrc="/images/who-am-i.webp"
          paragraphs={[
            "My name is Randel Angelo L. Yumul, and I’m a front-end developer passionate about creating engaging and user-friendly web experiences. I actively participate in hackathons, contributing to my team’s projects and solving real-world problems. I am also eager to expand my knowledge in AI, game development, machine learning, and backend technologies to broaden my technical expertise.",
            "Outside of coding, I enjoy traveling, playing games, listening to music, and exploring new programming skills. I am driven by a desire to learn and grow as a developer, aiming to create impactful digital experiences that inspire and help others. I thrive on challenges and embrace every opportunity to develop skills that push the boundaries of technology."
          ]}
          imageAlt="Who I Am"
        />
        <div className="flex flex-col gap-6">
            {/* Desktop version */}
            <div className="hidden lg:block">
                <AboutCard
                title="Journey & Growth"
                paragraphs={[
                    "Since I’m new to the field, I’ve taken various courses in front-end development to build a strong foundation, while also dedicating time to studying the back end to broaden my skills. I actively participate in hackathons as the front-end lead, which allows me to apply my knowledge in real-world projects, collaborate with my team, and tackle challenges that push me to think creatively and improve my coding abilities.",
                    "In addition, I’ve attended workshops and training sessions that expand my understanding of different areas in programming. I continuously seek opportunities through projects, collaborations, and competitions that help me gain practical experience and deepen my knowledge. I take on every challenge to improve my skills and become a better developer."
                ]}
                imageSrc="/images/journey.webp"
                imageAlt="Journey & Growth"
                />
            </div>

            {/* Mobile version */}
            <div className="block lg:hidden">
                <AboutCard2
                title="Journey & Growth"
                paragraphs={[
                    "Since I’m new to the field, I’ve taken various courses in front-end development to build a strong foundation, while also dedicating time to studying the back end to broaden my skills. I actively participate in hackathons as the front-end lead, which allows me to apply my knowledge in real-world projects, collaborate with my team, and tackle challenges that push me to think creatively and improve my coding abilities.",
                    "In addition, I’ve attended workshops and training sessions that expand my understanding of different areas in programming. I continuously seek opportunities through projects, collaborations, and competitions that help me gain practical experience and deepen my knowledge. I take on every challenge to improve my skills and become a better developer."
                ]}
                imageSrc="/images/journey.webp"
                imageAlt="Journey & Growth Mobile"
                />
            </div>
            </div>
      </AboutGrid>
    </motion.div>
  );
};
