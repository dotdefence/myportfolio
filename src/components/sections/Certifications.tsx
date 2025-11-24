'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink, Award, Calendar } from 'lucide-react';
import { certifications } from '@/constants/certifications';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
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
    <section id="certifications" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-500/5 to-background -z-10" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Certifications & <span className="bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Validated expertise through professional certifications and continuous learning
          </p>
        </div>

        {/* Certifications Grid - 5 Columns x 2 Rows */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {certifications.slice(0, 10).map((cert, index) => {
              // Show expanded by default on mobile, or on hover on desktop
              const isExpanded = isMobile || hoveredCert === cert.id;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => !isMobile && setHoveredCert(cert.id)}
                  onMouseLeave={() => !isMobile && setHoveredCert(null)}
                  className={`relative ${isExpanded ? 'z-50' : 'z-10'}`}
                >
                  <Card
                    className={`relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer h-full
                      ${isExpanded
                        ? 'border-orange-500/80 shadow-2xl shadow-orange-500/20 scale-110'
                        : 'hover:border-orange-500/50 hover:scale-105'
                      }`}
                  >
                    {/* Gradient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-transparent transition-opacity duration-300
                      ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                    />

                    <CardContent className="p-4 relative z-10">
                      {/* Icon - Always Visible */}
                      <div className="text-center mb-3">
                        <div className={`text-4xl mb-2 transition-transform duration-300
                          ${isExpanded ? 'scale-125' : ''}`}
                        >
                          {cert.issuerIcon}
                        </div>
                        <h3 className={`font-bold text-sm transition-colors duration-300 line-clamp-2 min-h-[2.5rem]
                          ${isExpanded ? 'text-orange-400' : 'text-foreground'}`}
                        >
                          {cert.title}
                        </h3>
                      </div>

                      {/* Year Badge - Always Visible */}
                      <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.year}</span>
                      </div>

                      {/* Expanded Details - Show on Hover */}
                      <div className={`transition-all duration-300 overflow-hidden
                        ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="space-y-2 pt-2 border-t border-border/50">
                          {/* Issuer */}
                          <div className="flex items-center gap-1.5">
                            <Award className="w-3 h-3 text-orange-400 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground line-clamp-1">
                              {cert.issuer}
                            </p>
                          </div>

                          {/* Verified Badge */}
                          {cert.verified && (
                            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs w-full justify-center">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}

                          {/* Description */}
                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                            {cert.description}
                          </p>

                          {/* Skills Preview */}
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 2).map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-[10px] px-1.5 py-0 border-orange-500/30">
                                {skill}
                              </Badge>
                            ))}
                            {cert.skills.length > 2 && (
                              <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-orange-500/30">
                                +{cert.skills.length - 2}
                              </Badge>
                            )}
                          </div>

                          {/* View Link */}
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full border-orange-500/50 hover:bg-orange-500/10 text-xs h-7"
                            asChild
                          >
                            <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-1 h-3 w-3" />
                              View
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Certifications (if more than 10) */}
          {certifications.length > 10 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {certifications.slice(10).map((cert, index) => {
                // Show expanded by default on mobile, or on hover on desktop
                const isExpanded = isMobile || hoveredCert === cert.id;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onMouseEnter={() => !isMobile && setHoveredCert(cert.id)}
                    onMouseLeave={() => !isMobile && setHoveredCert(null)}
                    className={`relative ${isExpanded ? 'z-50' : 'z-10'}`}
                  >
                    <Card
                      className={`relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer h-full
                        ${isExpanded
                          ? 'border-orange-500/80 shadow-2xl shadow-orange-500/20 scale-110'
                          : 'hover:border-orange-500/50 hover:scale-105'
                        }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-transparent transition-opacity duration-300
                        ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
                      />

                      <CardContent className="p-4 relative z-10">
                        <div className="text-center mb-3">
                          <div className={`text-4xl mb-2 transition-transform duration-300
                            ${isExpanded ? 'scale-125' : ''}`}
                          >
                            {cert.issuerIcon}
                          </div>
                          <h3 className={`font-bold text-sm transition-colors duration-300 line-clamp-2 min-h-[2.5rem]
                            ${isExpanded ? 'text-orange-400' : 'text-foreground'}`}
                          >
                            {cert.title}
                          </h3>
                        </div>

                        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.year}</span>
                        </div>

                        <div className={`transition-all duration-300 overflow-hidden
                          ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <div className="space-y-2 pt-2 border-t border-border/50">
                            <div className="flex items-center gap-1.5">
                              <Award className="w-3 h-3 text-orange-400 flex-shrink-0" />
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {cert.issuer}
                              </p>
                            </div>

                            {cert.verified && (
                              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs w-full justify-center">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}

                            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                              {cert.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                              {cert.skills.slice(0, 2).map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-[10px] px-1.5 py-0 border-orange-500/30">
                                  {skill}
                                </Badge>
                              ))}
                              {cert.skills.length > 2 && (
                                <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-orange-500/30">
                                  +{cert.skills.length - 2}
                                </Badge>
                              )}
                            </div>

                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full border-orange-500/50 hover:bg-orange-500/10 text-xs h-7"
                              asChild
                            >
                              <a href={cert.credential} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-1 h-3 w-3" />
                                View
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
