"use client";
import { ContactItem } from "../molecules/ContactItem";
import { ContactList } from "../molecules/ContactList";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "randel.angelo10@gmail.com", href: "mailto:randel.angelo10@gmail.com" },
  { icon: Phone, text: "+63 9690691662", href: "tel:+639690691662" },
  { icon: Linkedin, text: "www.linkedin.com/in/randel-yumul", href: "https://www.linkedin.com/in/randel-yumul-7228502bb/" },
  { icon: Github, text: "github.com/RandelYumul", href: "https://github.com/RandelYumul" },
];

export function Contact() {
  return (
    <section id="contact" className="container px-4 sm:px-6 md:px-10 py-10 md:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-6 font-headline">
        Contact Me
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-center max-w-full sm:max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-12">
        Excited to learn, grow, and collaborate on meaningful projects. Let’s connect and create something great!
      </p>

      <ContactList>
        {contactInfo.map((item, index) => (
          <ContactItem key={index} icon={item.icon} text={item.text} href={item.href} />
        ))}
      </ContactList>
    </section>
  );
}
