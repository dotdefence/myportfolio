'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, Zap, ArrowRight, ChevronRight, Binary, Github, Linkedin, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-dark-900">

            {/* 3D Perspective Grid Floor */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[50vh] cyber-grid pointer-events-none opacity-40"
                style={{ transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2.5)' }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">



                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white">
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="block mb-2"
                        >
                            Defending the
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-neon-pink"
                        >
                            Digital Frontier
                        </motion.span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Specializing in <span className="text-white font-medium">VAPT</span>, <span className="text-white font-medium">Red Teaming</span>, and <span className="text-white font-medium">Security Infrastructure</span>.
                        <br />
                        I turn vulnerabilities into fortified assets.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color-burn" />
                            <span className="relative flex items-center gap-2">
                                View Operations <ArrowRight size={18} />
                            </span>
                        </a>

                        <a href="#contact" className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
                            Initiate Comms <ChevronRight size={16} className="text-gray-500" />
                        </a>
                    </motion.div>

                    {/* Social Uplinks */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-all hover:scale-110">
                            <Github size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-all hover:scale-110">
                            <Linkedin size={20} />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] transition-all hover:scale-110">
                            <Instagram size={20} />
                        </a>
                    </motion.div>

                    {/* Tech Stack Ticker (Visual Decoration) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                    >
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                            <Shield size={16} /> SECURITY+
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                            <Terminal size={16} /> BASH
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                            <Binary size={16} /> PYTHON
                        </div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                            <Zap size={16} /> BURPSUITE
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;