'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { workExperiences } from '@/constants/experience';
import { useState, useEffect } from 'react';

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in cybersecurity, from founding Dot Defence to working with various organizations
          </p>
        </div>

        {/* Experience Timeline Grid - 2 Columns */}
        <div className="relative">
          {/* Vertical Timeline Line (Center) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {workExperiences.map((experience, index) => {
              const Icon = experience.icon;
              const isLeft = index % 2 === 0;
              // Show expanded by default on mobile, or on hover on desktop
              const isExpanded = isMobile || hoveredCard === experience.id;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => !isMobile && setHoveredCard(experience.id)}
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                >
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden lg:block absolute top-8 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-background z-10"
                    style={{
                      [isLeft ? 'right' : 'left']: '-2.5rem',
                    }}
                  />

                  <Card className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 h-full
                    ${isExpanded ? 'border-purple-500/80 shadow-2xl shadow-purple-500/20 scale-105' : 'hover:border-purple-500/50'}`}
                  >
                    {/* Gradient Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent opacity-0 transition-opacity duration-500
                      ${isExpanded ? 'opacity-100' : 'group-hover:opacity-50'}`}
                    />

                    <CardContent className="p-6 relative z-10">
                      {/* Icon & Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300
                          ${isExpanded ? 'scale-110' : 'group-hover:scale-105'}`}
                        >
                          <Icon className="w-7 h-7 text-purple-400" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className={`text-lg font-bold transition-colors line-clamp-2
                              ${isExpanded ? 'text-purple-400' : 'text-foreground group-hover:text-purple-400'}`}
                            >
                              {experience.role}
                            </h3>
                          </div>
                          <p className="text-purple-400 font-medium mb-2 truncate">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                        {experience.type}
                      </Badge>

                      {/* Date & Location - Always visible */}
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span className="truncate">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{experience.location}</span>
                        </div>
                      </div>

                      {/* Description - Show preview or full on hover */}
                      <div className={`transition-all duration-500 overflow-hidden
                        ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-[80px] opacity-70'}`}
                      >
                        <ul className="space-y-2 mb-4">
                          {experience.description.slice(0, isExpanded ? undefined : 2).map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span className="flex-1">{item}</span>
                            </li>
                          ))}
                          {!isExpanded && experience.description.length > 2 && (
                            <li className="text-sm text-purple-400 italic">Hover to see more...</li>
                          )}
                        </ul>

                        {/* Skills - Show on hover */}
                        <div className={`flex flex-wrap gap-2 transition-all duration-300
                          ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                        >
                          {experience.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-purple-500/30 text-purple-300 bg-purple-500/5 text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
