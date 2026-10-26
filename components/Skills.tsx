import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      className="section section-tinted"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="site-container">
        <Reveal>
          <p className="section-label">What I work with</p>
          <h2 className="section-title" id="skills-title">
            Skills &amp; tools
          </h2>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.07}>
              <article className="skill-group card">
                <h3>{group.category}</h3>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
