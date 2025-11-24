import { Briefcase, Shield, Lock, Users, type LucideIcon } from 'lucide-react';

export interface WorkExperience {
  id: number;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Self-employed' | 'Freelance';
  description: string[];
  skills: string[];
  icon: LucideIcon;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    role: 'Founder & Director',
    company: 'Dot Defence',
    period: 'Jul 2023 - Present',
    location: 'New Delhi, Delhi, India',
    type: 'Self-employed',
    description: [
      'Leading cybersecurity initiatives in penetration testing, security audits, and awareness programs',
      'Managing digital defence projects for businesses, startups, and individuals across diverse industries',
      'Overseeing social media presence, marketing strategies, and client engagement to expand brand reach',
      'Driving research and innovation in AI-powered security solutions and digital forensics',
      'Building a community to promote cybersecurity education, bug bounty hunting, and ethical hacking practices',
    ],
    skills: ['Vulnerability Assessment and Penetration Testing (VAPT)', 'Penetration Testing', 'Leadership', 'Business Development'],
    icon: Shield,
  },
  {
    id: 2,
    role: 'Cyber Security Analyst',
    company: 'CyberFort Tech.',
    period: 'May 2024 - Sep 2024',
    location: 'Aligarh, Uttar Pradesh, India',
    type: 'Full-time',
    description: [
      'Conducted vulnerability scans on 15+ systems using Burp Suite & Nessus',
      'Automated reporting using Python for daily threat reports',
      'Collaborated in a 3-member team for internal red-teaming simulations',
    ],
    skills: ['Security Research', 'ISO 27001', 'Compliance', 'Burp Suite', 'Nessus', 'Python'],
    icon: Lock,
  },
  {
    id: 3,
    role: 'Cybersecurity and Digital Optimization Intern',
    company: 'Dharniya Lifestyle',
    period: 'Jul 2024 - Aug 2024',
    location: 'Delhi, India',
    type: 'Internship',
    description: [
      'Strengthened digital presence by implementing security measures and monitoring platform vulnerabilities',
      'Supported website performance optimization and cyber risk assessment',
      'Conducted website security audits and contributed to digital strategy enhancements',
    ],
    skills: ['Website Security', 'Performance Optimization', 'Risk Assessment', 'Digital Strategy'],
    icon: Briefcase,
  },
  {
    id: 4,
    role: 'Treasurer',
    company: 'Sharda University Technical Society',
    period: 'Jan 2023 - May 2024',
    location: 'Greater Noida, India',
    type: 'Part-time',
    description: [
      'Managed financial planning and budgeting for technical events and workshops',
      'Coordinated with university officials and sponsors to secure funding and resources',
      'Organized tech events, hackathons, and innovation challenges for students',
      'Promoted student engagement in technical activities and skill building programs',
    ],
    skills: ['Event Management', 'Financial Planning', 'Leadership', 'Coordination'],
    icon: Users,
  },
  {
    id: 5,
    role: 'CTF Player',
    company: 'TryHackMe/HackTheBox',
    period: 'Jan 2023 - Present',
    location: 'Remote',
    type: 'Freelance',
    description: [
      'Participated in multiple CTF tournaments, specializing in Web Exploitation and Steganography',
      'Ranked among the top 3% on TryHackMe/HackTheBox',
      'Trained junior team members in cybersecurity techniques',
    ],
    skills: ['CTF', 'Web Exploitation', 'Steganography', 'Ethical Hacking'],
    icon: Shield,
  },
];

export const experienceStats = {
  totalYears: '2+',
  companiesWorked: 5,
  projectsCompleted: '20+',
  clientsSatisfied: '15+',
};
