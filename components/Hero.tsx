import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="site-container hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="status-dot" />
            Building for the web, from Sri Lanka
          </p>
          <h1 id="hero-title">
            Hi, I&apos;m <span>{profile.name}.</span>
            <br />
            <span className="hero-title">{profile.title}</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#projects">
              View Projects
              <ArrowIcon />
            </Link>
            <Link className="button button-secondary" href="#contact">
              Contact Me
            </Link>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" />
            Open to meaningful opportunities
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="hero-mark-orbit hero-mark-orbit-one" />
          <div className="hero-mark-orbit hero-mark-orbit-two" />
          <div className="hero-mark-center">A<span>.</span></div>
          <div className="hero-mark-caption">Engineer · Creator · Learner</div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span />
      </a>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" />
    </svg>
  );
}
