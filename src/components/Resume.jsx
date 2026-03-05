const RESUME_PDF = '/documents/resume.pdf'

export default function Resume() {
  return (
    <section id="resume" className="section resume-section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Resume</h2>
      <div className="resume__actions section-animate" style={{ animationDelay: '0.2s' }}>
        <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer" className="resume__btn resume__btn--primary">
          View Resume
        </a>
        <a href={RESUME_PDF} download className="resume__btn resume__btn--secondary">
          Download PDF
        </a>
      </div>
      <p className="resume__hint section-animate" style={{ animationDelay: '0.25s' }}>
        Opens in a new tab; use your browser’s print or save to keep a copy.
      </p>
      <style>{`
        .resume-section { padding-bottom: 3rem; }
        .resume__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .resume__btn {
          display: inline-block;
          padding: 0.6rem 1.25rem;
          font-family: var(--font-body);
          font-size: 0.9375rem;
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .resume__btn--primary {
          background: var(--accent);
          color: #fff;
          border: 1px solid var(--accent);
        }
        .resume__btn--primary:hover {
          background: var(--text);
          border-color: var(--text);
          transform: scale(1.02);
        }
        .resume__btn--secondary {
          background: var(--bg-card);
          color: var(--accent);
          border: 1px solid var(--line);
        }
        .resume__btn--secondary:hover {
          border-color: var(--accent);
          transform: scale(1.02);
        }
        .resume__hint {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
