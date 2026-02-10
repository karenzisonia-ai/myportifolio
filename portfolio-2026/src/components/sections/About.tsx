'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Python',
  'Django',
  'Tailwind CSS',
  'Figma',
  'Adobe XD',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Expo',
  'Flutter',
  'Docker',
  'Postman',
  'Firebase',
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="text-cyan-primary font-mono text-xl">01.</span>
            About Me
            <div className="h-px bg-dark-lighter flex-1 ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              Hello! I'm <span className="text-cyan-primary font-semibold">Sonia Karenzi Uwase</span>, a
              passionate UI/UX Designer and Full-Stack Developer dedicated to crafting intuitive and
              visually stunning digital experiences.
            </p>

            <p className="text-lg leading-relaxed text-text-secondary">
              With expertise in modern web technologies and design tools, I create user-centered
              interfaces that seamlessly blend creativity and functionality. My design philosophy is
              rooted in empathy, ensuring that every product I develop is not only aesthetically
              appealing but also meaningful and accessible.
            </p>

            <p className="text-lg leading-relaxed text-text-secondary">
              Beyond design and development, I'm deeply committed to the power of storytelling. I
              transform ideas into impactful narratives that inspire and connect on an emotional
              level.
            </p>

            <div className="pt-4">
              <p className="text-text-primary font-medium mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <span className="text-cyan-primary text-sm">▹</span>
                    <span className="font-mono text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto md:mx-0">
              <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-cyan-primary/30 hover:border-cyan-primary transition-all duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                <Image
                  src="/images/sonia.png"
                  alt="Sonia Karenzi Uwase"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 border-2 border-cyan-primary rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
