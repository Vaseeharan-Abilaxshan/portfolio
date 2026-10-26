export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A clean, user-friendly web app built to make a common workflow faster and easier.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    demoUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "A full-stack application with a responsive interface and a robust API behind it.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/project-two",
    demoUrl: "https://example.com",
  },
  {
    title: "Project Three",
    description:
      "A practical software project focused on thoughtful details and a smooth experience.",
    technologies: ["Java", "Spring Boot", "MySQL"],
    githubUrl: "https://github.com/yourusername/project-three",
    demoUrl: "https://example.com",
  },
];
