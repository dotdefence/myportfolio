'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Island */}
      <motion.nav 
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-1/2 z-50 hidden md:flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-dark-900/50 backdrop-blur-xl shadow-2xl shadow-black/50"
      >
        <div className="px-4 py-2 flex items-center gap-2">
            <Terminal size={18} className="text-neon-purple" />
            <span className="font-bold text-sm tracking-tight text-white/90">PB.</span>
        </div>
        
        <div className="h-4 w-px bg-white/10 mx-1" />

        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pl-2 pr-1">
            <a href="#contact" className="flex items-center justify-center w-8 h-8 bg-white/10 hover:bg-neon-purple rounded-full text-white transition-all duration-300">
                <span className="sr-only">Contact</span>
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            </a>
        </div>
      </motion.nav>

      {/* Mobile Navbar (Classic) */}
      <nav className={`md:hidden fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="flex items-center gap-2 text-xl font-bold font-sans tracking-tight">
                <Terminal size={20} className="text-neon-purple" />
                <span>Pranaav</span>
            </a>

            <button 
            className="text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-dark-900 border-b border-white/10"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <a
                            key={item.label}
                            href={item.href}
                            className="text-gray-400 hover:text-neon-purple text-lg font-medium"
                            onClick={() => setIsOpen(false)}
                            >
                            {item.label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;