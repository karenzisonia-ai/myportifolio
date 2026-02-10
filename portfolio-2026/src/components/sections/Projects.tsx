'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type ProjectCategory = 'All' | 'Web' | 'Mobile' | 'Blockchain';

const projects = [
  {
    id: '1',
    title: 'Procure2Pay',
    description:
      'A comprehensive web-based procurement management system that streamlines purchase requests, approvals, and receipts tracking in one centralized platform. Features multi-level approval workflows and real-time status tracking.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    image: '/images/procure2pay.png',
    type: 'Web Application',
    category: 'Web' as ProjectCategory,
    featured: true,
  },
  {
    id: '2',
    title: 'PredictX',
    description:
      'An innovative prediction markets platform enabling users to create and participate in various market predictions across sports, crypto, weather, tech, and economics. Features real-time odds and a dynamic leaderboard system.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    image: '/images/predictx.png',
    type: 'Web Application',
    category: 'Web' as ProjectCategory,
    featured: true,
  },
  {
    id: '3',
    title: 'KMPDU E-Voting System',
    description:
      'A secure, transparent, and democratic union elections platform empowering KMPDU members with blockchain-verified voting technology. Supports national and branch elections with complete privacy and real-time results tracking.',
    technologies: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
    image: '/images/evoting-web.png',
    type: 'Web Application',
    category: 'Blockchain' as ProjectCategory,
    featured: true,
  },
  {
    id: '4',
    title: 'KMPDU E-Voting Mobile',
    description:
      'The mobile companion for the KMPDU E-Voting system, allowing members to vote securely from their smartphones. Includes biometric authentication and real-time notifications.',
    technologies: ['React Native', 'Node.js', 'Secure Storage'],
    image: '/images/evoting-mobile.png',
    type: 'Mobile Application',
    category: 'Mobile' as ProjectCategory,
    featured: true,
  },
  {
    id: '5',
    title: 'Umudugudu',
    description:
      'A local community management application designed for managing local activities and events. Features calendar integration, resident management, and activity tracking to strengthen community engagement.',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    image: '/images/umudugudu.png',
    type: 'Mobile Application',
    category: 'Mobile' as ProjectCategory,
    featured: true,
  },
  {
    id: '6',
    title: 'GoPass',
    description:
      'An e-ticketing and GPS tracking solution for public transport that revolutionizes the commuting experience. Features real-time bus tracking, digital ticketing, QR code validation, and driver GPS tracking for enhanced passenger convenience.',
    technologies: ['React Native', 'Node.js', 'Google Maps API', 'MongoDB'],
    image: '/images/GoPass.png',
    type: 'Mobile Application',
    category: 'Mobile' as ProjectCategory,
    featured: true,
  },
  {
    id: '7',
    title: 'IDA Tech Management System',
    description:
      'A comprehensive school management system designed for IDA Technology. Handles student enrollment, employee management, financial overview with income/expense tracking, and detailed reporting capabilities.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/images/ida-management-system.png',
    type: 'Web Application',
    category: 'Web' as ProjectCategory,
    featured: true,
  },
];

const categories: ProjectCategory[] = ['All', 'Web', 'Mobile', 'Blockchain'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="text-cyan-primary font-mono text-xl">03.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-cyan-primary text-navy-primary shadow-lg shadow-cyan-primary/30'
                  : 'bg-navy-light text-text-secondary border border-slate-800 hover:border-cyan-primary/50 hover:text-cyan-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-navy-light rounded-lg overflow-hidden border border-slate-800 hover:border-cyan-primary/50 transition-colors h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                 {/*  
                  <a
                    href="#" 
                    className="text-text-primary hover:text-cyan-primary transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                 */}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-cyan-primary font-mono text-xs">
                    {project.type}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-cyan-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-4 line-clamp-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-cyan-primary bg-cyan-primary/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-text-secondary text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
