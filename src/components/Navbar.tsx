import { useState, useEffect } from "react";
import { profile } from "../data/profile";
import { useScrolled } from "../hooks/useScrolled";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">&lt;/&gt;</span>
          <span className="navbar__logo-text">{profile.name}</span>
        </a>

        <nav className={`navbar__nav${menuOpen ? " navbar__nav--open" : ""}`}>
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={closeMenu}>
            Get in Touch
          </a>
        </nav>

        <button
          className={`navbar__toggle${menuOpen ? " navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
