import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/profile";
import { ScrollReveal } from "./ScrollReveal";
import "./Projects.css";

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <ScrollReveal className="projects__header">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Featured work</h2>
          <p className="section-subtitle">
            A selection of academic and personal projects showcasing web
            development, database integration, and full-stack application design.
          </p>
        </ScrollReveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={(i + 1) as 0 | 1 | 2 | 3 | 4}>
              <article className="projects__card">
                <div className="projects__preview">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__image"
                  />
                  <div className="projects__preview-overlay">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="projects__overlay-btn"
                      aria-label="View on GitHub"
                    >
                      <FiGithub size={22} />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>

                <div className="projects__body">
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__description">{project.description}</p>

                  <div className="projects__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="projects__links">
                    <a
                      href={project.github}
                      className="btn btn-ghost projects__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiGithub size={16} />
                      View on GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="btn btn-ghost projects__link">
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

