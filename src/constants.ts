import {
  Shield, Code, Terminal, Globe, Lock, Cpu, Server,
  Database, Award, Zap, Layout, Smartphone, Share2,
  Search, Hash, Coffee, Box, type LucideIcon
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface Skill {
  name: string;
  category: 'Fundamentals' | 'Languages' | 'Tools' | 'Soft Skills';
  icon: LucideIcon;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  featured: boolean;
  stats: { label: string; value: string | number }[];
  category: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Self-employed';
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
  verified: boolean;
  tags: string[];
}

export const SOCIAL_LINKS = {
  github: 'https://github.com/techjunior2022',
  linkedin: 'https://www.linkedin.com/in/pranaavbhatnagar03/',
  instagram: 'https://www.instagram.com/0xpranaav',
  email: 'dotdefence.info@gmail.com'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#work' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  // Fundamentals
  { name: 'VAPT', category: 'Fundamentals', icon: Shield, color: 'text-blue-400' },
  { name: 'Web Pentesting', category: 'Fundamentals', icon: Lock, color: 'text-yellow-400' },
  { name: 'Linux', category: 'Fundamentals', icon: Terminal, color: 'text-white' },
  { name: 'Network Security', category: 'Fundamentals', icon: Globe, color: 'text-blue-500' },
  { name: 'Web Security', category: 'Fundamentals', icon: Shield, color: 'text-blue-400' },
  { name: 'Cryptography', category: 'Fundamentals', icon: Lock, color: 'text-yellow-400' },
  { name: 'ISO 27001', category: 'Fundamentals', icon: Shield, color: 'text-green-400' },
  { name: 'PCI DSS', category: 'Fundamentals', icon: Lock, color: 'text-red-400' },
  { name: 'Risk Assessment', category: 'Fundamentals', icon: Search, color: 'text-blue-300' },
  // Languages
  { name: 'Python', category: 'Languages', icon: Code, color: 'text-green-400' },
  { name: 'Java', category: 'Languages', icon: Coffee, color: 'text-orange-400' },
  { name: 'C/C++', category: 'Languages', icon: Cpu, color: 'text-blue-600' },
  // Tools
  { name: 'BurpSuite', category: 'Tools', icon: Search, color: 'text-orange-500' },
  { name: 'Git & GitHub', category: 'Tools', icon: Box, color: 'text-gray-200' },
  { name: 'Metasploit', category: 'Tools', icon: Terminal, color: 'text-red-400' },
  { name: 'Nmap', category: 'Tools', icon: Globe, color: 'text-blue-400' },
  { name: 'Hydra', category: 'Tools', icon: Lock, color: 'text-cyan-400' },
  { name: 'OWASP ZAP', category: 'Tools', icon: Zap, color: 'text-yellow-400' },
  { name: 'Kali Linux', category: 'Tools', icon: Terminal, color: 'text-purple-400' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Dot Defence',
    description: 'Premier cybersecurity platform providing VAPT, security auditing, and digital forensics services. Empowering businesses with AI-driven threat intelligence and defensive infrastructure.',
    tags: ['Cybersecurity', 'VAPT', 'Audit', 'Forensics', 'Threat Intel'],
    image: '/projects/dotdefence.in.png',
    liveUrl: 'https://dotdefence.in',
    featured: true,
    stats: [{ label: 'Clients', value: 15 }, { label: 'Vulns Found', value: '50+' }],
    category: 'Cybersecurity'
  },
  {
    title: 'Blomac Custom PC Builder',
    description: 'High-performance e-commerce platform for custom PC building. Features real-time compatibility checks and AI-powered hardware recommendations for creators and gamers.',
    tags: ['Next.js', 'E-commerce', 'Hardware', 'UI/UX', 'Automation'],
    image: '/projects/blomaccustompc.in.png',
    liveUrl: 'https://blomaccustompc.in',
    featured: true,
    stats: [{ label: 'Users', value: '1.2k' }, { label: 'Orders', value: 450 }],
    category: 'Web Apps'
  },
  {
    title: 'NikhilKun',
    description: 'A premium lifestyle and content platform for Indian creators in Japan. Blending culture, language exploration, and tech-driven content delivery.',
    tags: ['Branding', 'Portfolio', 'Content', 'Japan', 'Culture'],
    image: '/projects/nikhilkun.com.png',
    liveUrl: 'https://nikhilkun.com',
    featured: true,
    stats: [{ label: 'Traffic', value: '5k+' }, { label: 'Likes', value: 1200 }],
    category: 'Branding'
  },
  {
    title: 'R-Cult',
    description: 'A platform dedicated to real estate and cultural property management, leveraging modern web tech for a seamless property discovery experience.',
    tags: ['Real Estate', 'UI/UX', 'Discovery', 'Management'],
    image: '/projects/rcult.in.png',
    liveUrl: 'https://rcult.in',
    featured: true,
    stats: [{ label: 'Properties', value: 200 }, { label: 'Active', value: 'Yes' }],
    category: 'Web Apps'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Security Analyst Intern',
    company: 'PrudentBit',
    period: 'Oct 2025 - Present',
    location: 'Noida, Uttar Pradesh, India (Hybrid)',
    type: 'Internship',
    description: [
      'Performing comprehensive security analysis and vulnerability assessments across internal infrastructures',
      'Assisting in the development and implementation of advanced security protocols and defensive strategies',
      'Conducting targeted research on emerging cyber threats and evaluating potential mitigation techniques',
      'Collaborating with senior analysts to enhance the overall security posture and risk management framework',
    ]
  },
  {
    role: 'Cyber Security Analyst',
    company: 'CyberFort Tech.',
    period: 'May 2025 - Sep 2025',
    location: 'Aligarh, Uttar Pradesh, India (Hybrid)',
    type: 'Full-time',
    description: [
      'Conducted vulnerability scans on 15+ critical systems using Burp Suite and Nessus',
      'Automated reporting processes using Python to generate daily threat intelligence reports',
      'Collaborated in a 3-member red-teaming team for internal security simulations and breach scenarios',
      'Applied Security Research, ISO 27001, and PCI DSS standards to strengthen cyber defense mechanisms',
    ]
  },
  {
    role: 'Cybersecurity and Digital Optimization Intern',
    company: 'Dharniya Lifestyle',
    period: 'Jul 2025 - Aug 2025',
    location: 'Delhi, India (Hybrid)',
    type: 'Internship',
    description: [
      'Contributed to brand security by implementing measures and monitoring platform vulnerabilities',
      'Supported website performance optimization and comprehensive cyber risk assessments',
      'Conducted security audits to protect culturally-driven digital platforms blending tradition with tech',
      'Provided strategic support in digital optimization and security posture enhancements',
    ]
  },
  {
    role: 'Treasurer',
    company: 'Sharda University Technical Society',
    period: 'Jan 2025 - May 2025',
    location: 'Greater Noida, India',
    type: 'Part-time',
    description: [
      'Managed financial planning and budgeting for university-wide technical events and workshops',
      'Coordinated with university officials and external sponsors to secure project funding',
      'Organized tech hackathons and innovation challenges to foster student engagement',
      'Promoted technical skill-building programs and resource allocation for society members',
    ]
  },
  {
    role: 'Player',
    company: 'TryHackMe/HackTheBox',
    period: 'Jan 2025 - May 2025',
    location: 'Freelance',
    type: 'Self-employed',
    description: [
      'Participated in multiple international CTF tournaments, specializing in Web Exploitation',
      'Ranked among the top 3% of global users on TryHackMe and HackTheBox platforms',
      'Mentored and trained junior team members in advanced cybersecurity and hacking techniques',
    ]
  },
  {
    role: 'Co Lead',
    company: 'Cyberpirates',
    period: '2023 - 2024',
    location: 'Greater Noida, India',
    type: 'Part-time',
    description: [
      'Organized university-wide cybersecurity challenges, workshops, and awareness seminars',
      'Designed complex CTF challenges focused on web exploitation, steganography, and OSINT',
      'Mentored students in cybersecurity fundamentals and guided them through capture-the-flag events',
    ]
  }
];

export const CERTIFICATES: Certification[] = [
  {
    name: 'AWS Academy Graduate - Cloud Security Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2025',
    icon: Shield,
    verified: true,
    tags: ['Cloud Security', 'AWS']
  },
  {
    name: 'CSS Essentials',
    issuer: 'Cisco',
    date: 'Oct 2025',
    icon: Layout,
    verified: true,
    tags: ['Web Development', 'CSS']
  },
  {
    name: 'HTML Essentials',
    issuer: 'Cisco',
    date: 'Jun 2025',
    icon: Globe,
    verified: true,
    tags: ['Web Development', 'HTML']
  },
  {
    name: 'Network Defense',
    issuer: 'Cisco',
    date: 'Jun 2025',
    icon: Shield,
    verified: true,
    tags: ['Network Security', 'Cisco']
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco',
    date: 'May 2025',
    icon: Lock,
    verified: true,
    tags: ['Ethical Hacking', 'Security']
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco',
    date: 'May 2025',
    icon: Code,
    verified: true,
    tags: ['Python', 'Programming']
  },
  {
    name: 'Python Essentials 2',
    issuer: 'Cisco',
    date: 'May 2025',
    icon: Code,
    verified: true,
    tags: ['Python', 'Programming']
  },
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    date: 'Jan 2025',
    icon: Shield,
    verified: true,
    tags: ['Cybersecurity', 'Fundamentals']
  },
  {
    name: 'CompTIA Pentest Certificate',
    issuer: 'TryHackMe',
    date: 'Feb 2024',
    icon: Terminal,
    verified: true,
    tags: ['PenTesting', 'CompTIA']
  },
  {
    name: 'Pre Security Certificate',
    issuer: 'TryHackMe',
    date: 'Feb 2023',
    icon: Lock,
    verified: true,
    tags: ['Security Fundamentals', 'THM']
  },
  {
    name: 'Intro to Cyber Pathway',
    issuer: 'TryHackMe',
    date: 'Sep 2022',
    icon: Terminal,
    verified: true,
    tags: ['Cybersecurity', 'THM']
  },
  {
    name: 'Cyber Samurai Program in Cyber Defence',
    issuer: 'WhizHack Technologies / IITJ TISC',
    date: 'Aug 2022',
    icon: Zap,
    verified: true,
    tags: ['Advanced Defense', 'Cyber Samurai']
  },
  {
    name: 'Cyber Samurai Program in Cyber Defence',
    issuer: 'WhizHack Technologies / IITJ TISC',
    date: 'Jun 2022',
    icon: Zap,
    verified: true,
    tags: ['Advanced Defense', 'Cyber Samurai']
  }
];
