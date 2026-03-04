const ENTRIES = [
  {
    role: 'Software Engineer',
    company: 'Skincentric',
    note: 'VC-backed startup',
    duration: '6-month contract',
    bullets: [
      'Led migration of the full codebase and documentation for a dermatological application',
      'Selected directly by co-founders to architect scalable software solutions',
      'Delivered production features end-to-end as the primary engineer',
    ],
  },
  {
    role: 'AI Code Evaluator / RLHF Trainer',
    company: null,
    note: null,
    duration: 'Ongoing contract',
    bullets: [
      'Evaluated AI-generated code across Python, Java, C++, Rust, and TypeScript',
      'Provided reinforcement learning from human feedback (RLHF) to improve model accuracy',
      'Mentored students in cutting-edge AI and software development topics',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Kaiser Permanente',
    note: 'KP Mobile Flagship App',
    duration: 'Summer internship',
    bullets: [
      "Contributed to data analysis, project management, and software development on KP's flagship mobile app",
      'Presented findings and insights to senior leadership',
      'Recognized by manager as one of the most impressive interns',
    ],
  },
  {
    role: 'CEO & Founder',
    company: 'Reachmind LLC',
    note: null,
    duration: 'Current',
    bullets: [
      'Building advanced, highly personalized AI chatbot solutions for small and medium-sized businesses',
      'Leads product strategy, client consulting, and technical development',
      'Focused on enhancing customer interactions through custom AI technology',
    ],
  },
  {
    role: 'Community Outreach Coordinator',
    company: null,
    note: 'Volunteer',
    duration: null,
    bullets: [
      'Organized 3-day health events at strategic locations (Patel Brothers, retirement homes)',
      'Collaborated with NAACP, ATL Beltline, Northside Forsyth Hospital, and Empower Fest',
      'Connected seniors and underserved communities to clinical trials, health screenings, and resources',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Experience</h2>
      <div className="timeline">
        {ENTRIES.map((entry, i) => (
          <article key={i} className="timeline__entry section-animate" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
            <div className="timeline__line" />
            <div className="timeline__content">
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{entry.role}</h3>
                  {(entry.company || entry.note) && (
                    <p className="timeline__meta">
                      {entry.company}
                      {entry.company && entry.note && ' · '}
                      {entry.note && `(${entry.note})`}
                    </p>
                  )}
                </div>
                {(entry.duration) && (
                  <span className="timeline__date">{entry.duration}</span>
                )}
              </div>
              <ul className="timeline__bullets">
                {entry.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        .timeline { position: relative; }
        .timeline__entry {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
        }
        .timeline__entry:last-child { margin-bottom: 0; }
        .timeline__line {
          position: absolute;
          left: 0;
          top: 0.25rem;
          bottom: -2rem;
          width: 1px;
          background: var(--line);
        }
        .timeline__entry:last-child .timeline__line { bottom: 0; height: 1.5rem; }
        .timeline__content { padding-bottom: 0.25rem; }
        .timeline__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .timeline__role {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text);
        }
        .timeline__meta {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-top: 0.15rem;
        }
        .timeline__date {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .timeline__bullets {
          list-style: none;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text);
        }
        .timeline__bullets li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.35rem;
        }
        .timeline__bullets li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--line);
        }
      `}</style>
    </section>
  )
}
