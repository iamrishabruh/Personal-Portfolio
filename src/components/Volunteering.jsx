const ITEMS = [
  {
    org: 'Mensa',
    role: '20s to 30s Coordinator',
    bullets: [
      'Community building and events for the 20s–30s age group.',
    ],
  },
  {
    org: 'Future Business Leaders of America (FBLA)',
    role: 'Aug 2015 – May 2025',
    bullets: [
      '500+ service hours; national recognition.',
      '1st in State — Computer Problem Solving (2021); 2nd in State — Computer Applications (2021); 2nd in State — Desktop Publishing (2019); 4th in State — Keyboarding Applications II (2019).',
    ],
  },
  {
    org: 'Finance & Investment Club',
    role: 'Founder (2019 – 2022)',
    bullets: [
      'Founded and led the club; connected students to real-world finance and investment experiences.',
    ],
  },
  {
    org: 'AI FinTech Club',
    role: 'Founder (2024 – 2025)',
    bullets: [
      'Founded and led the club at the intersection of AI and financial technology.',
    ],
  },
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Volunteering & Leadership</h2>
      <ul className="vol-list">
        {ITEMS.map((item, i) => (
          <li key={i} className="vol-list__item section-animate" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
            <h3 className="vol-list__org">{item.org}</h3>
            {item.role && <p className="vol-list__role">{item.role}</p>}
            <ul className="vol-list__bullets">
              {item.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <style>{`
        .vol-list { list-style: none; }
        .vol-list__item {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--line);
        }
        .vol-list__item:last-child { border-bottom: none; margin-bottom: 0; }
        .vol-list__org {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
        }
        .vol-list__role {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        .vol-list__bullets {
          list-style: none;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--text);
          margin-top: 0.5rem;
        }
        .vol-list__bullets li {
          position: relative;
          padding-left: 1rem;
          margin-bottom: 0.35rem;
        }
        .vol-list__bullets li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--line);
        }
      `}</style>
    </section>
  )
}
