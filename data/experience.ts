export type ExperienceItem = {
  role: string;
  company: string;
  department?: string;
  location?: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "Supply and Logistics Services",
    department: "ICT Department",
    location: "Sri Lanka",
    period: "Professional experience",
    description:
      "Contributed to software delivery within the ICT Department, collaborating with the team to build and maintain tools that support business operations.",
  },
  {
    role: "Software Engineering Intern",
    company: "Apexx (Private) Limited",
    location: "Remote",
    period: "11 months",
    description:
      "Gained hands-on experience across the software development lifecycle, working remotely with a team to develop, test, and improve software.",
  },
];
