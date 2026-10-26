import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <Reveal>
          <div>
            <p className="section-label">A little about me</p>
            <h2 className="section-title" id="about-title">
              Building useful things, with care.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="about-copy">
            <p>{profile.about}</p>
            <div className="about-facts">
              <div>
                <span className="fact-marker" />
                <span>IT graduate, SLIIT</span>
              </div>
              <div>
                <span className="fact-marker" />
                <span>Based in {profile.location}</span>
              </div>
              <div>
                <span className="fact-marker" />
                <span>Full stack, by curiosity</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
