'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import TiltCard from '@/components/ui/TiltCard';
import { projects } from '@/constants/projects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectCategory } from '@/types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(0);

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter as ProjectCategory);

  // Carousel logic - 3 items per page
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Reset to first page when filter changes
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(0);
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-500/5 to-background -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="bg-gradient-to-r from-violet-400 to-pink-400 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring innovation through hands-on projects that solve real-world problems
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/25 scale-105'
                  : 'bg-card/50 border border-border/50 hover:border-violet-500/50 hover:bg-violet-500/10'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <div className="relative mb-12">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <Button
                onClick={prevPage}
                size="icon"
                variant="outline"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-500 -translate-x-6 hidden lg:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button
                onClick={nextPage}
                size="icon"
                variant="outline"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-md border-violet-500/50 hover:bg-violet-500/10 hover:border-violet-500 translate-x-6 hidden lg:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}

          {/* Projects Grid with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    github={project.github}
                    live={project.live}
                    stats={project.stats}
                    featured={project.featured}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentPage === index
                      ? 'w-8 bg-gradient-to-r from-violet-500 to-pink-500'
                      : 'w-2 bg-border hover:bg-violet-500/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Mobile Navigation Buttons */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-8 lg:hidden">
              <Button
                onClick={prevPage}
                variant="outline"
                className="border-violet-500/50 hover:bg-violet-500/10"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
              <Button
                onClick={nextPage}
                variant="outline"
                className="border-violet-500/50 hover:bg-violet-500/10"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
