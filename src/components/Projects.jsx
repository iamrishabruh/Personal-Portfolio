const PROJECTS = [
  {
    title: 'Drug Interaction Checker (Proof of Concept)',
    description: 'Built a Swift-based healthcare tool integrating NIH drug interaction APIs with RESTful services and JSON parsing. Supported 10,000+ drug combinations with real-time feedback and async validation logic.',
    tags: ['Swift', 'REST APIs', 'iOS', 'Healthcare'],
    link: null,
    live: null,
  },
  {
    title: 'AI Chatbot Platform — Reachmind',
    description: 'Developed modular, highly personalized AI chatbot solutions for small businesses with custom consulting layers. Designed for seamless client interaction and easy white-labeling.',
    tags: ['AI', 'NLP', 'Full-Stack', 'Startups'],
    link: null,
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <article key={i} className="project-card section-animate" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
            </div>
            {(project.link || project.live) && (
              <div className="project-card__links">
                {project.link && <a href={project.link}>GitHub</a>}
                {project.live && <a href={project.live}>Live</a>}
              </div>
            )}
          </article>
        ))}
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 1.5rem;
          transition: all 0.2s ease;
        }
        .project-card:hover {
          border-color: var(--hover);
        }
        .project-card__title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        .project-card__desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text);
          margin-bottom: 1rem;
        }
        .project-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .project-card__tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background: var(--bg);
          color: var(--accent);
          border-radius: 4px;
        }
        .project-card__links {
          margin-top: 0.75rem;
          font-size: 0.875rem;
        }
        .project-card__links a {
          margin-right: 1rem;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
