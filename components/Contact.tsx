"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setFormError("Please complete all fields before sending.");
      return;
    }

    setFormError("");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="site-container">
        <Reveal>
          <p className="section-label">Let&apos;s connect</p>
          <h2 className="section-title" id="contact-title">
            Have a good one in mind?
          </h2>
          <p className="section-description">
            I&apos;m always happy to talk about thoughtful products, interesting
            challenges, and opportunities to work together.
          </p>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about what you have in mind..."
                  required
                />
              </div>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <button className="button button-primary form-submit" type="submit">
                Open email app
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                  <path d="m3 10 14-7-4 14-3.5-6.5L3 10Zm6.5.5L17 3" />
                </svg>
              </button>
              <p className="form-hint">
                This opens your email app with the message ready to send.
              </p>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="contact-aside">
              <p className="contact-aside-label">Prefer a direct hello?</p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
                <span aria-hidden="true">↗</span>
              </a>
              <div className="social-links">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="availability-card">
                <span className="status-dot" />
                <div>
                  <strong>Open to opportunities</strong>
                  <p>Based in {profile.location} · Working globally</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
