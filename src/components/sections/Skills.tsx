'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import { programmingSkills, cybersecuritySkills, toolsSkills, softSkills } from '@/constants/skills';

export default function Skills() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Duplicate skills for seamless loop
  const duplicatedProgramming = [...programmingSkills, ...programmingSkills, ...programmingSkills];
  const duplicatedTools = [...toolsSkills, ...toolsSkills, ...toolsSkills];

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let animationId1: number;
    let animationId2: number;
    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    const scrollSpeed = 1;

    const animate1 = () => {
      scrollPosition1 += scrollSpeed;
      
      if (scrollPosition1 >= scrollContainer1.scrollWidth / 3) {
        scrollPosition1 = 0;
      }
      
      scrollContainer1.scrollLeft = scrollPosition1;
      animationId1 = requestAnimationFrame(animate1);
    };

    const animate2 = () => {
      scrollPosition2 -= scrollSpeed;
      
      if (scrollPosition2 <= 0) {
        scrollPosition2 = scrollContainer2.scrollWidth / 3;
      }
      
      scrollContainer2.scrollLeft = scrollPosition2;
      animationId2 = requestAnimationFrame(animate2);
    };

    scrollPosition2 = scrollContainer2.scrollWidth / 3;
    scrollContainer2.scrollLeft = scrollPosition2;

    animationId1 = requestAnimationFrame(animate1);
    animationId2 = requestAnimationFrame(animate2);

    return () => {
      cancelAnimationFrame(animationId1);
      cancelAnimationFrame(animationId2);
    };
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in cybersecurity tools, programming languages, and penetration testing
          </p>
        </div>

        {/* Cybersecurity Skills Grid - Static */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Cybersecurity Fundamentals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cybersecuritySkills.map((skill, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 hover:bg-purple-500/10 transition-all hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h4 className="font-semibold text-sm">{skill.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Programming Languages - Infinite Scroll Row 1 */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
            Programming Languages
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={scrollRef1}
              className="flex gap-6 overflow-x-hidden pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedProgramming.map((skill, index) => (
                <Card 
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-56 border-border/50 bg-card/50 backdrop-blur-sm hover:border-pink-500/50 hover:scale-105 transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies - Infinite Scroll Row 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Tools & Technologies
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div 
              ref={scrollRef2}
              className="flex gap-6 overflow-x-hidden pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {duplicatedTools.map((skill, index) => (
                <Card 
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 w-40 sm:w-48 md:w-56 border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-500/50 hover:scale-105 transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
