import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-inner">
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          abi<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Made with care.
        </p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
