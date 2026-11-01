export interface CaseStudySection {
  heading: string;
  body?: string;
  points?: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy?: CaseStudySection[];
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade?: string;
  coursework: string[];
  honors: string[];
}

export interface Recommendation {
  quote: string;
  name: string;
  role: string;
}

export interface WritingItem {
  title: string;
  href: string;
  source: string;
}

export interface ResourceLink {
  title: string;
  note?: string;
  href?: string;
}

export interface ResourceGroup {
  title: string;
  items: ResourceLink[];
}
