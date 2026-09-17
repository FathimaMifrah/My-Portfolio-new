import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";
import "./Footer.css";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-mark">&lt;/&gt;</span>
              {profile.name}
            </a>
            <p className="footer__tagline">{profile.role}</p>
          </div>

          <nav className="footer__nav">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            <a href={profile.github} className="btn-icon" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={profile.linkedin} className="btn-icon" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-icon"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
