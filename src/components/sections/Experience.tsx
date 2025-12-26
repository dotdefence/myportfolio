'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { EXPERIENCE } from '@/constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section id="work" className="py-32 bg-dark-900 relative">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Career"
                    highlight="Trajectory"
                    subtitle="My professional journey in cybersecurity and software engineering."
                />

                <div className="max-w-3xl mx-auto relative">
                    {/* PCB Trace Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple via-neon-pink to-transparent opacity-20 md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {EXPERIENCE.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* The Node (Dot) */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-neon-purple z-10 mt-1.5 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                    <div className="absolute inset-0 bg-neon-purple opacity-50 rounded-full animate-ping" />
                                </div>

                                {/* Content Width Spacer for Desktop Alignment */}
                                <div className="flex-1 md:w-1/2" />

                                {/* Card */}
                                <div className={`flex-1 md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="group relative p-6 bg-dark-800/40 rounded-xl border border-white/5 hover:border-neon-purple/30 transition-colors duration-300">

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-lg font-bold text-white group-hover:text-neon-purple transition-colors">{exp.role}</h3>
                                            <span className="text-xs font-mono text-neon-green bg-neon-green/10 px-2 py-0.5 rounded border border-neon-green/20 w-fit mt-1 sm:mt-0">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-400">
                                            <Briefcase size={14} className="text-neon-pink" />
                                            <span className="text-gray-300">{exp.company}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                            <span className="text-neon-purple/80 text-xs">{exp.type}</span>
                                            <span className="w-1 h-1 bg-gray-600 rounded-full" />
                                            <span>{exp.location}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-400 leading-relaxed">
                                                    <span className="mr-2 mt-1.5 w-1 h-1 bg-neon-purple rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;