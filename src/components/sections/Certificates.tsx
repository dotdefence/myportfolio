'use client';

import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { CERTIFICATES } from '@/constants';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-32 bg-dark-900">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Security" 
          highlight="Clearance"
          subtitle="Validated credentials and authorized certifications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => {
             const Icon = cert.icon;
             
             return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                >
                    {/* Card Body */}
                    <div className="
                        relative h-full p-6 
                        bg-[#0a0a0a] 
                        border border-white/10 rounded-xl 
                        overflow-hidden
                        transition-all duration-300
                        group-hover:border-neon-purple/50
                        group-hover:shadow-[0_0_20px_rgba(176,38,255,0.15)]
                    ">
                        {/* Hover Holographic Sheen */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/5 rounded-lg border border-white/5 group-hover:border-neon-purple/30 group-hover:bg-neon-purple/10 transition-colors">
                                {/* @ts-ignore */}
                                <Icon size={24} className="text-gray-400 group-hover:text-neon-purple transition-colors" />
                            </div>
                            {cert.verified && (
                                <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] font-mono text-emerald-500">
                                    <ShieldCheck size={10} />
                                    <span>VERIFIED</span>
                                </div>
                            )}
                        </div>
                        
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-white group-hover:text-neon-blue transition-colors mb-1">{cert.name}</h3>
                            <p className="text-sm text-gray-500">{cert.issuer}</p>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                             <div className="flex items-center gap-1.5">
                                <Calendar size={12} />
                                <span>Issued {cert.date}</span>
                             </div>
                             <div className="flex gap-1">
                                {cert.tags.slice(0, 2).map(tag => (
                                    <span key={tag} className="px-1.5 py-0.5 bg-white/5 rounded text-[10px] border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                             </div>
                        </div>
                    </div>
                </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;