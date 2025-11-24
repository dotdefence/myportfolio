// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  github?: string;
  live?: string;
  stats?: {
    stars: number;
    forks: number;
  };
}

export type ProjectCategory = 'web' | 'mobile' | 'ai' | 'tool';

export interface ProjectFilter {
  id: string;
  label: string;
  count: number;
}

// Skill Types
export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface SkillCategory {
  programming: Skill[];
  cybersecurity: Skill[];
  tools: Skill[];
}

// Stats Types
export interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color: string;
}

export interface SimpleStat {
  value: string | number;
  label: string;
}

// Certification Types
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issuerIcon: string;
  year: string;
  description: string;
  skills: string[];
  verified: boolean;
  credential?: string;
}

export interface UpcomingCertification {
  name: string;
  status: 'In Progress' | 'Planned';
  year: string;
}

export interface CertificationStat {
  value: string | number;
  label: string;
  icon: any; // Lucide icon component
}

// About/Expertise Types
export interface Expertise {
  icon: any; // Lucide icon component
  title: string;
  description: string;
  color: string;
}

export interface Highlight {
  icon: any; // Lucide icon component
  label: string;
}

// Social Links Types
export interface SocialLink {
  icon: any; // Lucide icon component
  label: string;
  href: string;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
}

