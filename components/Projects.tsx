import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="site-container">
        <Reveal>
          <p className="section-label">Selected work</p>
          <h2 className="section-title" id="projects-title">
            Things I&apos;ve built.
          </h2>
          <p className="section-description">
            A few projects that reflect how I think, what I&apos;m learning, and
            the kind of problems I like to solve.
          </p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="project-card card">
                <div className="project-card-top">
                  <div className="project-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 5.5h16v13H4zM4 9h16M8 7.25h.01M10.5 7.25h.01" />
                    </svg>
                  </div>
                  {project.featured && (
                    <span className="project-featured">Featured</span>
                  )}
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    Live demo
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7S17.5.9 15 2.8a13.3 13.3 0 0 0-7 0C5.5.9 4.3 1.3 4.3 1.3a4.9 4.9 0 0 0-.1 3.7A5.3 5.3 0 0 0 2.8 8.7c0 5.3 3.1 6.5 6.1 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M11 4h5v5m-.5-4.5-7 7M14 11v4H5V6h4" />
    </svg>
  );
}
