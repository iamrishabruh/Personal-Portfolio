const HONORS = [
  'President\'s List (Georgia State University — Spring 2025, Fall 2024)',
  'Dean\'s List (Georgia State University — Summer 2024, Spring 2024)',
  'AP Capstone Diploma, AP Scholar with Distinction (College Board)',
  '35/36 ACT · Early academic excellence',
  'Recognized by Kaiser Permanente leadership for exceptional internship performance',
  'HOSA State Leadership Conference — 2nd Place, Medical Terminology (2020)',
]

export default function Honors() {
  return (
    <section id="honors" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Honors & Highlights</h2>
      <ul className="honors-list">
        {HONORS.map((item, i) => (
          <li key={i} className="honors-list__item section-animate" style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
            {item}
          </li>
        ))}
      </ul>
      <style>{`
        .honors-list {
          list-style: none;
        }
        .honors-list__item {
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--line);
          font-size: 0.9375rem;
          color: var(--text);
        }
        .honors-list__item:last-child { border-bottom: none; }
      `}</style>
    </section>
  )
}
