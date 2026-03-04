export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Contact</h2>
      <p className="contact__email section-animate" style={{ animationDelay: '0.2s' }}>
        <a href="mailto:rishabruh@gmail.com">rishabruh@gmail.com</a>
      </p>
      <div className="contact__buttons section-animate" style={{ animationDelay: '0.25s' }}>
        <a href="https://linkedin.com/in/rishabhchouhan" target="_blank" rel="noopener noreferrer" className="contact__btn">
          LinkedIn
        </a>
        <a href="https://github.com/rishabhchouhan" target="_blank" rel="noopener noreferrer" className="contact__btn">
          GitHub
        </a>
      </div>
      <p className="contact__line section-animate" style={{ animationDelay: '0.3s' }}>
        Open to internships, contracts, and ideas worth building.
      </p>
      <style>{`
        .contact { padding-bottom: 4rem; }
        .contact__email {
          font-size: 1.125rem;
          margin-bottom: 1rem;
        }
        .contact__email a {
          color: var(--accent);
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .contact__email a:hover { color: var(--hover); }
        .contact__buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact__btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          font-family: var(--font-body);
          font-size: 0.9375rem;
          background: var(--bg-card);
          color: var(--accent);
          border: 1px solid var(--line);
          border-radius: 4px;
          transition: all 0.2s ease;
        }
        .contact__btn:hover {
          border-color: var(--accent);
          transform: scale(1.02);
        }
        .contact__line {
          font-size: 0.9375rem;
          color: var(--text-muted);
          font-style: italic;
        }
      `}</style>
    </section>
  )
}
