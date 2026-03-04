const HONORS = [
  { emoji: '🧠', text: 'Mensa Member — Top 2% of population by IQ', year: null },
  { emoji: '🏆', text: 'FBLA Business Achievement Awards — 4-tier completion', year: null },
  { emoji: '💼', text: 'Recognized by Kaiser Permanente leadership for exceptional internship performance', year: null },
]

export default function Honors() {
  return (
    <section id="honors" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Honors & Recognition</h2>
      <ul className="honors-list">
        {HONORS.map((item, i) => (
          <li key={i} className="honors-list__item section-animate" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
            <span className="honors-list__emoji" aria-hidden="true">{item.emoji}</span>
            <span className="honors-list__text">{item.text}</span>
            {item.year && <span className="honors-list__year">{item.year}</span>}
          </li>
        ))}
      </ul>
      <style>{`
        .honors-list { list-style: none; }
        .honors-list__item {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--line);
          flex-wrap: wrap;
        }
        .honors-list__item:last-child { border-bottom: none; }
        .honors-list__emoji { font-size: 1rem; }
        .honors-list__text {
          flex: 1;
          font-size: 1rem;
          color: var(--text);
        }
        .honors-list__text strong { font-weight: 600; }
        .honors-list__year {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
