'use client';

import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-12 pb-6 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold font-sans tracking-tight mb-4">
              Pranaav <span className="text-neon-purple">Bhatnagar</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dedicated cybersecurity enthusiast committed to fortifying digital infrastructure and solving complex security challenges.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-neon-pink transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-neon-pink transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-neon-pink transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-neon-pink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Penetration Testing</li>
              <li>Security Audits</li>
              <li>VAPT Services</li>
              <li>Red Team Operations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Available For</h3>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-emerald-500">Freelance Projects</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Pranaav Bhatnagar. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#E1306C] transition-colors">
              <Instagram size={20} />
            </a>
            <div className="h-4 w-px bg-white/10 mx-2 hidden md:block" />
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <span>Built with</span>
              <span className="text-neon-pink">♥</span>
              <span className="hidden sm:inline">using Next.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 p-3 rounded-full bg-neon-purple text-white shadow-lg shadow-neon-purple/30 hover:bg-neon-pink transition-colors z-40"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;