'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formatDate, calculateDuration } from '@/lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: '1',
    company: 'Personal Portfolio',
    title: 'UI/UX Designer & Developer',
    location: 'Remote',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-12-31'),
    current: false,
    type: 'work',
    description: [
      'Designed and developed my own personal portfolio website',
      'Created user-centered interfaces with modern design principles',
      'Implemented responsive layouts for optimal viewing on all devices',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
  {
    id: '2',
    company: 'Brand Design Projects',
    title: 'Graphic Designer',
    location: 'Freelance',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2025-01-01'),
    current: false,
    type: 'work',
    description: [
      'Created professional flyers and brand materials for various clients',
      'Developed visual identities that align with brand values',
      'Collaborated with clients to understand their design needs',
    ],
    technologies: ['Adobe Photoshop', 'Illustrator', 'Figma'],
  },
  {
    id: '3',
    company: 'ALX Software Engineering',
    title: 'Full-Stack Development Student',
    location: 'Online',
    startDate: new Date('2024-06-01'),
    endDate: null,
    current: true,
    type: 'education',
    description: [
      'Building skills in JavaScript, CSS, HTML, and responsive web design',
      'Working on the Herpathway platform project through ALX Pathway',
      'Learning modern web development best practices and frameworks',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'HTML/CSS'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding">
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
            <span className="text-cyan-primary font-mono text-xl">02.</span>
            Experience & Education
            <div className="h-px bg-dark-lighter flex-1 ml-4 max-w-xs"></div>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-8 px-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-primary/10 flex items-center justify-center text-cyan-primary">
                  {exp.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                      <p className="text-cyan-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-semibold text-cyan-primary bg-cyan-primary/10 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-text-muted mb-4">
                    {formatDate(exp.startDate)} -{' '}
                    {exp.current ? 'Present' : formatDate(exp.endDate!)} •{' '}
                    {calculateDuration(exp.startDate, exp.endDate)} • {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-text-secondary">
                        <span className="text-cyan-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-cyan-primary bg-cyan-primary/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
