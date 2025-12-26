'use client';

import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { PROJECTS } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, GitFork, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Cybersecurity', 'Web Apps', 'Branding'];

    const filteredProjects = PROJECTS.filter(project =>
        activeFilter === 'All' || project.category === activeFilter
    );

    return (
        <section id="projects" className="py-32 bg-dark-900 relative">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Deployed"
                    highlight="Systems"
                    subtitle="Advanced solutions engineered for performance and security."
                />

                {/* Filter Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex p-1 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`
                            px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative
                            ${activeFilter === filter ? 'text-white' : 'text-gray-400 hover:text-white'}
                        `}
                            >
                                {activeFilter === filter && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-dark-700 rounded-lg shadow-sm border border-white/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{filter}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group relative h-full"
                            >
                                {/* Card Container */}
                                <div className="
                    h-full bg-dark-800/50 backdrop-blur-sm 
                    border border-white/5 rounded-2xl overflow-hidden
                    hover:border-white/10 transition-all duration-500
                    flex flex-col
                  ">

                                    {/* Image Area */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-dark-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />

                                        {/* Status Overlay */}
                                        <div className="absolute top-4 left-4 z-20 flex gap-2">
                                            {project.featured && (
                                                <span className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-wider rounded border border-neon-purple/20 backdrop-blur-md">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-grow relative">
                                        {/* Hover Gradient Border Effect on Content */}
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-bold text-white group-hover:text-neon-pink transition-colors">{project.title}</h3>
                                            <div className="flex gap-2">
                                                <a href={project.liveUrl} className="text-gray-500 hover:text-white transition-colors">
                                                    <ArrowUpRight size={18} />
                                                </a>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="space-y-4 mt-auto">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Stats */}
                                            <div className="pt-4 border-t border-white/5 flex items-center gap-4 text-xs font-mono text-gray-500">
                                                {project.stats.map(stat => (
                                                    <div key={stat.label} className="flex items-center gap-1">
                                                        <span className="text-gray-400">{stat.label}:</span>
                                                        <span className="text-gray-300">{stat.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;