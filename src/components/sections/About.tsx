'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { Trophy, Target, Shield, Cpu, Activity } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 relative bg-dark-900 overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeading
                    title="Operator"
                    highlight="Profile"
                />

                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

                    {/* Left: The "Scanner" Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl bg-dark-800/30 border border-white/5 p-2 overflow-hidden backdrop-blur-sm">
                            {/* Scanner Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-neon-green/50 shadow-[0_0_15px_rgba(0,255,148,0.5)] z-20 animate-[scan_3s_ease-in-out_infinite]" />

                            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-dark-900">
                                <div className="relative w-full h-full group/img">
                                    <img
                                        src="/pranaav_avatar.png"
                                        alt="Pranaav Bhatnagar"
                                        className="w-full h-full object-cover opacity-100 group-hover/img:opacity-0 transition-opacity duration-500"
                                    />
                                    <img
                                        src="/hackeravatarpranaav.png"
                                        alt="Cyber Avatar"
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"
                                    />
                                </div>

                                {/* HUD Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 to-transparent">
                                    <h3 className="text-2xl font-bold text-white font-mono">PRANAAV BHATNAGAR</h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                        <span className="text-neon-green text-xs font-mono tracking-widest">STATUS: ACTIVE</span>
                                    </div>
                                </div>

                                {/* Corner Markers */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20" />
                                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20" />
                                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Data Stream */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center space-x-2 border border-neon-purple/30 bg-neon-purple/5 px-3 py-1 rounded-full mb-6">
                                <Activity size={14} className="text-neon-purple" />
                                <span className="text-xs font-mono text-neon-purple">INITIALIZING BIO-DATA...</span>
                            </div>

                            <h3 className="text-3xl font-bold mb-6 leading-tight">
                                Securing the <span className="text-white">digital realm</span> through offensive research.
                            </h3>

                            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Cybersecurity researcher focused on <strong className="text-white">VAPT</strong> and <strong className="text-white">Red Teaming</strong>. I simulate sophisticated attacks to uncover critical vulnerabilities before they can be exploited in the wild.
                                </p>
                                <p>
                                    Currently refining my arsenal in <span className="text-gray-300">OSINT</span> and <span className="text-gray-300">Digital Forensics</span> while pursuing my BTech in Computer Science.
                                </p>
                            </div>
                        </div>

                        {/* Stats / Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-lg hover:border-neon-purple/50 transition-colors group">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-gray-400 text-xs font-mono uppercase">Global Rank</span>
                                    <Trophy size={16} className="text-yellow-500" />
                                </div>
                                <div className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors">Top 3%</div>
                                <div className="text-xs text-gray-500 mt-1">TryHackMe</div>
                            </div>

                            <div className="p-4 bg-white/5 border border-white/5 rounded-lg hover:border-neon-pink/50 transition-colors group">
                                <div className="flex items-start justify-between mb-2">
                                    <span className="text-gray-400 text-xs font-mono uppercase">Specialization</span>
                                    <Target size={16} className="text-neon-pink" />
                                </div>
                                <div className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">Red Team</div>
                                <div className="text-xs text-gray-500 mt-1">Offensive Security</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default About;