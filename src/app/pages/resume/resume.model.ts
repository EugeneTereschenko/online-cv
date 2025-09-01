export interface Resume {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: {
    programming: string[];
    frameworks: string[];
    devops: string[];
    sql: string[];
    vcs: string[];
    tools: string[];
    languages: string[];
  };
  experience: { role: string; company: string; location: string; period: string; details: string[] }[];
  education: { school: string; degree: string; year: string }[];
  certificates: { name: string; period: string }[];
  projects: { name: string; links: string[]; description: string[]; tech: string }[];
}
