import { useState, useEffect } from 'react'
import fetchGitHubRepos from '../services/githubService'

const GITHUB_USERNAME = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GITHUB_USERNAME) || (typeof process !== 'undefined' && process.env?.REACT_APP_GITHUB_USERNAME) || 'iamrishabruh'

export default function GitHubProjects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchGitHubRepos(GITHUB_USERNAME)
      .then((data) => {
        if (!cancelled) {
          setRepos(Array.isArray(data) ? data : [])
          setError(null)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('GitHub fetch error:', err)
          setError(err.message)
          setRepos([])
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="github-projects github-projects--loading">
        <p>Loading projects from GitHub…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="github-projects github-projects--error">
        <p>Could not load GitHub projects. ({error})</p>
      </div>
    )
  }

  if (!repos.length) {
    return (
      <div className="github-projects github-projects--empty">
        <p>No public repositories to show.</p>
      </div>
    )
  }

  return (
    <div className="github-projects">
      <div className="github-projects__grid">
        {repos.map((repo) => (
          <article key={repo.name} className="github-project-card">
            <h4 className="github-project-card__title">{repo.name}</h4>
            <p className="github-project-card__desc">{repo.description}</p>
            {repo.stack && repo.stack.length > 0 && (
              <div className="github-project-card__tags">
                {repo.stack.map((lang) => (
                  <span key={lang} className="github-project-card__tag">{lang}</span>
                ))}
              </div>
            )}
            <div className="github-project-card__links">
              {repo.sourceCode && (
                <a href={repo.sourceCode} target="_blank" rel="noopener noreferrer" className="github-project-card__link">
                  GitHub
                </a>
              )}
              {repo.livePreview && (
                <a href={repo.livePreview} target="_blank" rel="noopener noreferrer" className="github-project-card__link">
                  Live
                </a>
              )}
            </div>
            {(repo.stars != null || repo.forks != null) && (
              <div className="github-project-card__stats">
                {repo.stars != null && <span>★ {repo.stars}</span>}
                {repo.forks != null && <span>⎇ {repo.forks}</span>}
              </div>
            )}
          </article>
        ))}
      </div>
      <style>{`
        .github-projects { margin-top: 1rem; }
        .github-projects--loading,
        .github-projects--error,
        .github-projects--empty {
          font-size: 0.9375rem;
          color: var(--text-muted);
        }
        .github-projects__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .github-project-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 1.25rem;
          transition: border-color 0.2s ease;
        }
        .github-project-card:hover { border-color: var(--hover); }
        .github-project-card__title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.35rem;
        }
        .github-project-card__desc {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        .github-project-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 0.5rem;
        }
        .github-project-card__tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          padding: 0.2rem 0.4rem;
          background: var(--bg);
          color: var(--accent);
          border-radius: 3px;
        }
        .github-project-card__links { display: flex; gap: 0.75rem; }
        .github-project-card__link {
          font-size: 0.8125rem;
          color: var(--accent);
        }
        .github-project-card__link:hover { color: var(--hover); }
        .github-project-card__stats {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.5rem;
        }
        .github-project-card__stats span { margin-right: 0.75rem; }
        @media (max-width: 768px) {
          .github-projects__grid { grid-template-columns: 1fr; gap: 0.875rem; }
          .github-project-card { padding: 1.125rem; }
          .github-project-card__link {
            display: inline-flex;
            align-items: center;
            min-height: 44px;
            padding: 0.35rem 0.25rem 0.35rem 0;
          }
        }
      `}</style>
    </div>
  )
}
