import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";
import { ScrollReveal } from "./ScrollReveal";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <ScrollReveal>
            <p className="hero__greeting">Hello, I'm</p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h1 className="hero__name">{profile.name}</h1>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p className="hero__tagline">I turn ideas into digital experiences.</p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p className="hero__role">Frontend • UI Design • Software Development</p>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <div className="hero__actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={4}>
            <div className="hero__social">
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
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2} className="hero__visual-wrap">
          <div className="hero__visual">
            <div className="hero__visual-card">
              <div className="hero__image-shell">
                <img src={profile.avatar} alt={profile.name} className="hero__image" />
              </div>
              <div className="hero__status">
                <span className="hero__status-dot" />
                Open to internship
              </div>
            </div>

            <div className="hero__metric hero__metric--1">
              <strong>2+</strong>
              <span>Years of learning</span>
            </div>
            <div className="hero__metric hero__metric--2">
              <strong>6</strong>
              <span>Projects built</span>
            </div>
            <div className="hero__float hero__float--3">
              <span className="hero__float-dot" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
