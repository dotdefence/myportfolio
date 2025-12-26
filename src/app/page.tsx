import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import Contact from '@/components/sections/Contact';
import ParticleBackground from '@/components/shared/ParticleBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <ParticleBackground />

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  );
}