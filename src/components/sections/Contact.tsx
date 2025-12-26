'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Terminal, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-dark-900 relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <SectionHeading
                    title="Establish"
                    highlight="Uplink"
                    subtitle="Initiate encrypted communication channel."
                />

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Terminal Form */}
                    <div className="bg-[#0c0c0c] border border-white/10 rounded-lg overflow-hidden font-mono shadow-2xl">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-[#151515] border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <Terminal size={14} className="text-neon-green" />
                                <span className="text-xs text-gray-400">root@dot-defence:~# send-message</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                        </div>

                        <div className="p-8">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs text-neon-blue uppercase tracking-wider">&gt;&gt; Enter Identity</label>
                                    <input
                                        type="text"
                                        placeholder="[YOUR NAME]"
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-gray-700 focus:outline-none focus:border-neon-green transition-colors font-sans text-lg"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-neon-blue uppercase tracking-wider">&gt;&gt; Target Frequency</label>
                                    <input
                                        type="email"
                                        placeholder="[YOUR EMAIL]"
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-gray-700 focus:outline-none focus:border-neon-green transition-colors font-sans text-lg"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-neon-blue uppercase tracking-wider">&gt;&gt; Payload</label>
                                    <textarea
                                        rows={4}
                                        placeholder="[ENTER MESSAGE DATA]"
                                        className="w-full bg-transparent border-b border-white/20 px-0 py-2 text-white placeholder-gray-700 focus:outline-none focus:border-neon-green transition-colors font-sans text-lg resize-none"
                                    ></textarea>
                                </div>

                                <button className="group w-full bg-white/5 border border-white/10 text-white hover:bg-neon-green hover:text-black hover:border-neon-green py-4 mt-4 transition-all duration-300 flex items-center justify-between px-6">
                                    <span className="font-mono text-sm tracking-wider">EXECUTE_TRANSMISSION</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Connection Info */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Direct Line</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Ready to collaborate on security audits, penetration testing projects, or software development.
                                Response time typically under 24 hours.
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:dotdefence.info@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-lg hover:border-neon-purple/50 transition-all group">
                                    <div className="p-3 bg-dark-900 rounded-md text-neon-purple border border-white/5 group-hover:scale-110 transition-transform">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-mono">MAIL_TO</div>
                                        <div className="text-white font-medium">dotdefence.info@gmail.com</div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-lg">
                                    <div className="p-3 bg-dark-900 rounded-md text-neon-pink border border-white/5">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-mono">BASE_LOC</div>
                                        <div className="text-white font-medium">New Delhi, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-sm font-mono text-gray-500 mb-4 border-b border-white/10 pb-2">SOCIAL_UPLINKS</h4>
                            <div className="flex gap-4">
                                <a
                                    href={SOCIAL_LINKS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-800 rounded-full text-gray-400 hover:text-white hover:bg-dark-700 hover:scale-110 transition-all border border-white/5"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-800 rounded-full text-gray-400 hover:text-[#0077b5] hover:bg-dark-700 hover:scale-110 transition-all border border-white/5"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-dark-800 rounded-full text-gray-400 hover:text-[#E1306C] hover:bg-dark-700 hover:scale-110 transition-all border border-white/5"
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;