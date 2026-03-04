const ENTRIES = [
  {
    school: 'Georgia State University',
    degree: 'B.S. Computer Science',
    note: 'Expected Graduation: 2026',
  },
  {
    school: 'South Forsyth High School',
    degree: null,
    note: 'FBLA Business Achievement Awards — 4-tier leadership program (Contributor → Leader → Advocate)',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Education</h2>
      <ul className="edu-list">
        {ENTRIES.map((entry, i) => (
          <li key={i} className="edu-list__item section-animate" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
            <h3 className="edu-list__school">{entry.school}</h3>
            {entry.degree && <p className="edu-list__degree">{entry.degree}</p>}
            <p className="edu-list__note">{entry.note}</p>
          </li>
        ))}
      </ul>
      <style>{`
        .edu-list { list-style: none; }
        .edu-list__item {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--line);
          margin-bottom: 1.5rem;
        }
        .edu-list__item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .edu-list__school {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
        }
        .edu-list__degree {
          font-size: 1rem;
          color: var(--text);
          margin-top: 0.25rem;
        }
        .edu-list__note {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
      `}</style>
    </section>
  )
}
