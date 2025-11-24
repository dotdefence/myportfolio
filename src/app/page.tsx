import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import ParticleBackground from '@/components/shared/ParticleBackground';
import MatrixRain from '@/components/shared/MatrixRain';
import ScrollProgress from '@/components/shared/ScrollProgress';

export default function Home() {
  // Choose between 'particles' or 'matrix' for background effect
  const backgroundEffect = 'particles'; // Change to 'matrix' for Matrix rain effect
  
  return (
    <main className="min-h-screen relative">
      {/* Background Effects - Choose one */}
      {backgroundEffect === 'particles' ? <ParticleBackground /> : <MatrixRain />}
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
  {/* Floating Navigation removed */}
      
      {/* Main Content */}
      <section id="home" className="relative">
        <Hero />
      </section>
      
      <section id="about" className="relative">
        <About />
      </section>
      
      <section id="skills" className="relative">
        <Skills />
      </section>
      
      <section id="projects" className="relative">
        <Projects />
      </section>
      
      <section id="experience" className="relative">
        <Experience />
      </section>
      
      <section id="certifications" className="relative">
        <Certifications />
      </section>
      
      <section id="contact" className="relative">
        <Contact />
      </section>
    </main>
  );
}