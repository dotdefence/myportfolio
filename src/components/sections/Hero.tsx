'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Code2, Target } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setIsMounted(true);
    // Set actual window dimensions on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs - Match Website Theme */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

        {/* Floating Particles - Only render on client side to avoid hydration mismatch */}
        {isMounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              y: [null, Math.random() * dimensions.height],
              x: [null, Math.random() * dimensions.width],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className={`container mx-auto max-w-7xl z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Subtle Glow Background - Match Theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-violet-500/20 blur-[120px] animate-pulse" />

              {/* Clean Image */}
              <div className="relative">
                <Image
                  src="/hackeravatarpranaav.png"
                  alt="Cybersecurity Expert"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Bold Main Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white whitespace-nowrap">
                  Guarding What Matters
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 animate-gradient bg-300% whitespace-nowrap">
                  in the Digital Age
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed max-w-2xl font-medium text-center">
                Cybersecurity enthusiast and penetration tester committed to{' '}
                <span className="text-purple-400 font-bold">fortifying digital infrastructure</span>{' '}
                through ethical hacking and{' '}
                <span className="text-pink-400 font-bold">proactive threat intelligence</span>.
              </p>
            </div>

            {/* Badge Tags */}
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Badge className="bg-transparent border-2 border-violet-500/50 text-violet-400 px-4 py-2 text-sm font-semibold hover:bg-violet-500/10 transition-all ">
                  <Shield className="w-4 h-4 mr-2 inline" />
                  Cybersecurity Expert
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Badge className="bg-transparent border-2 border-purple-500/50 text-purple-400 px-4 py-2 text-sm font-semibold hover:bg-purple-500/10 transition-all">
                  <Code2 className="w-4 h-4 mr-2 inline" />
                  AI Developer
                </Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Badge className="bg-transparent border-2 border-pink-500/50 text-pink-400 px-4 py-2 text-sm font-semibold hover:bg-pink-500/10 transition-all">
                  <Target className="w-4 h-4 mr-2 inline" />
                  Penetration Tester
                </Badge>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-base font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-500 text-white px-8 py-6 text-base font-bold transition-all"
                  onClick={() => scrollToSection('about')}
                >
                  About Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-transparent hover:border-purple-500/30 hover:bg-purple-500/5 text-white px-8 py-6 text-base font-bold transition-all"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Resume
                </Button>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6 justify-center">
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '6', label: 'Projects Completed' },
                { value: '9+', label: 'Certifications' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-110 transition-transform inline-block">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
