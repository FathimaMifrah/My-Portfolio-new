import { DiJava } from "react-icons/di";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiGit,
  SiMysql,
  SiPhp,
  SiSharp,
  SiGithub,
  SiVscodium,
} from "react-icons/si";
import { profile } from "../data/profile";
import { ScrollReveal } from "./ScrollReveal";
import "./Skills.css";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss, name: "CSS" },
  { icon: DiJava, name: "Java" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiSharp, name: "C#" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVscodium, name: "VS Code" },
];

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <ScrollReveal className="skills__header">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-subtitle">
            Proficient in modern web technologies, programming languages, and
            development tools used across academic and personal projects.
          </p>
        </ScrollReveal>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={(i % 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="skills__card">
                <div className="skills__icon">
                  <skill.icon size={28} />
                </div>
                <span className="skills__name">{skill.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={2}>
          <div className="skills__soft">
            <h3 className="skills__soft-title">Soft Skills</h3>
            <div className="skills__soft-tags">
              {profile.softSkills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
