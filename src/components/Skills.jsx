const GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'Swift', 'TypeScript', 'JavaScript', 'C++', 'Rust'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'Node.js', 'REST APIs', 'JSON', 'Git'],
  },
  {
    label: 'Domains',
    items: ['AI/ML', 'RLHF', 'Mobile (iOS)', 'Healthcare Tech', 'Full-Stack Web'],
  },
  {
    label: 'Other',
    items: ['Product Strategy', 'UX Thinking', 'Community Organizing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Skills</h2>
      <div className="skills-grid">
        {GROUPS.map((group, i) => (
          <div key={group.label} className="skills-group section-animate" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
            <h3 className="skills-group__label">{group.label}</h3>
            <div className="skills-group__tags">
              {group.items.map((item) => (
                <span key={item} className="skills-group__tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .skills-group__label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .skills-group__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skills-group__tag {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          padding: 0.35rem 0.6rem;
          background: var(--bg-card);
          color: var(--accent);
          border-radius: 4px;
          border: 1px solid var(--line);
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .skills-group__tags { gap: 0.4rem; }
          .skills-group__tag { padding: 0.4rem 0.65rem; }
        }
      `}</style>
    </section>
  )
}
