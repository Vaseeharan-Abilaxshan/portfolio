import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      className="section section-tinted"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <Reveal>
          <p className="section-label">Where I&apos;ve worked</p>
          <h2 className="section-title" id="experience-title">
            Experience
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.1}>
              <article className="timeline-item">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card card">
                  <div className="timeline-topline">
                    <p className="timeline-period">{item.period}</p>
                    {item.location && (
                      <span className="timeline-location">{item.location}</span>
                    )}
                  </div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">
                    {item.company}
                    {item.department ? ` · ${item.department}` : ""}
                  </p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
