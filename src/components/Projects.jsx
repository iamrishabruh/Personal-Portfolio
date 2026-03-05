import GitHubProjects from './GitHubProjects'

const FEATURED = [
  {
    title: 'Diatrend',
    date: 'Dec 2024 – May 2025',
    description: 'AI-driven CGM trajectory prediction using PyTorch; temporal/clinical features; models like TabTransformer/GNN/attention MLP; FastAPI inference + Streamlit dashboard.',
    repo: 'https://github.com/iamrishabruh/Diatrend-ML',
  },
  {
    title: 'Nexus Lite',
    date: 'Dec 2024 – May 2025',
    description: 'Cross-platform mobile health tracker (React Native Expo + FastAPI); auth + structured health storage; secure endpoints; modular + tested.',
    repo: 'https://github.com/iamrishabruh/Nexus-Lite',
  },
  {
    title: 'Bennington',
    date: 'Dec 2024 – May 2025',
    description: 'Stock backtesting + ML trading platform in Python; Streamlit; Docker; deployed to Google Cloud Run; env-based config + key management.',
    repo: 'https://github.com/iamrishabruh/Bennington',
  },
  {
    title: 'Differential Learning',
    date: 'Aug 2024 – Dec 2025',
    description: 'Federated learning simulation with differential privacy (per-example clipping, DPAdam), gradient clustering aggregation, accuracy–privacy tradeoffs, Streamlit interface.',
    repo: 'https://github.com/iamrishabruh/Differential-Learning',
  },
  {
    title: 'Drug Interaction Checker',
    date: 'Jun 2023 – Sep 2023',
    description: 'Swift/SwiftUI POC integrating clinical APIs; robust error handling; XCTest; CI workflows; modular architecture.',
    repo: 'https://github.com/iamrishabruh/Drug-Interaction-Checker',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Projects</h2>

      <h3 className="projects-subtitle section-animate" style={{ animationDelay: '0.12s' }}>Featured</h3>
      <div className="projects-grid">
        {FEATURED.map((project, i) => (
          <article key={project.title} className="project-card section-animate" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
            <h4 className="project-card__title">{project.title}</h4>
            <p className="project-card__date">{project.date}</p>
            <p className="project-card__desc">{project.description}</p>
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-card__link">GitHub →</a>
          </article>
        ))}
      </div>

      <h3 className="projects-subtitle section-animate" style={{ animationDelay: '0.45s' }}>All repositories</h3>
      <GitHubProjects />

      <style>{`
        .projects-subtitle {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 1.5rem 0 1rem;
        }
        .projects-subtitle:first-of-type { margin-top: 0; }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 1.5rem;
          transition: all 0.2s ease;
        }
        .project-card:hover { border-color: var(--hover); }
        .project-card__title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.25rem;
        }
        .project-card__date {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .project-card__desc {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .project-card__link {
          font-size: 0.875rem;
          color: var(--accent);
        }
        .project-card__link:hover { color: var(--hover); }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
