import { Github, Linkedin, Mail, Instagram, type LucideIcon } from 'lucide-react';

export interface SocialLinkConfig {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const socialLinks: SocialLinkConfig[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/techjunior2022' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/pranaavbhatnagar03' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/0xpranaav/' },
  { icon: Mail, label: 'Email', href: 'mailto:dotdefence.info@gmail.com' },
];

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#experience' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const siteInfo = {
  name: 'Pranaav Bhatnagar',
  title: 'Cybersecurity Analyst & Founder @ Dot Defence',
  description: 'Cybersecurity Analyst passionate about securing web and network infrastructures through ethical hacking, penetration testing, and AI-driven security solutions. Top 3% on TryHackMe & HackTheBox.',
  tagline: 'Open to collaborations in Penetration Testing, Application Security & Red Teaming',
  buildWith: 'Built with Next.js 15, TypeScript & Tailwind CSS',
};

export const services = [
  'Penetration Testing',
  'Security Audits',
  'VAPT Services',
  'Red Team Operations',
  'Digital Forensics',
  'Cybersecurity Training'
];
