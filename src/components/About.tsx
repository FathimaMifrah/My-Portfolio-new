import { FiMapPin, FiMail, FiBriefcase } from "react-icons/fi";
import { profile } from "../data/profile";
import { ScrollReveal } from "./ScrollReveal";
import "./About.css";

const highlights = [
  { icon: FiBriefcase, label: "Role", value: profile.role },
  { icon: FiMapPin, label: "Location", value: profile.location },
  { icon: FiMail, label: "Email", value: profile.email },
];

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Get to know me</h2>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal delay={1} className="about__visual-col">
            <div className="about__image-wrap">
              <div className="about__image-card">
                <img src={profile.avatar} alt={profile.name} className="about__image" />
              </div>
              <div className="about__badge">Available for internships</div>
              <div className="about__image-accent" />
            </div>
          </ScrollReveal>

          <div className="about__content-col">
            <ScrollReveal delay={2}>
              <p className="about__text">{profile.summary}</p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="about__text">{profile.goal}</p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="about__languages">
                <strong>Languages:</strong> {profile.languages.join(", ")}
              </p>
            </ScrollReveal>

            <div className="about__highlights">
              {highlights.map((item, i) => (
                <ScrollReveal key={item.label} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
                  <div className="about__highlight-card">
                    <div className="about__highlight-icon">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="about__highlight-label">{item.label}</p>
                      <p className="about__highlight-value">{item.value}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
