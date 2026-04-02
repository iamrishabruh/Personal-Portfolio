export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Contact</h2>
      <p className="contact__location section-animate" style={{ animationDelay: '0.15s' }}>
        Atlanta, GA · US Citizen
      </p>
      <p className="contact__emails section-animate" style={{ animationDelay: '0.2s' }}>
        <a href="mailto:rchouhan.network@gmail.com">rchouhan.network@gmail.com</a>
        {' · '}
        <a href="mailto:rchouhan8@gatech.edu">rchouhan8@gatech.edu</a>
        {' · '}
        <a href="mailto:rishabh@reachmindllc.com">rishabh@reachmindllc.com</a>
      </p>
      <div className="contact__buttons section-animate" style={{ animationDelay: '0.25s' }}>
        <a href="https://github.com/iamrishabruh" target="_blank" rel="noopener noreferrer" className="contact__btn">
          GitHub
        </a>
        <a href="https://reachmindllc.com" target="_blank" rel="noopener noreferrer" className="contact__btn">
          Reachmind
        </a>
        <a href="#resume" className="contact__btn">
          Resume
        </a>
      </div>
      <p className="contact__line section-animate" style={{ animationDelay: '0.3s' }}>
        Open to internships, contracts, and ideas worth building.
      </p>
      <style>{`
        .contact { padding-bottom: 4rem; }
        .contact__location {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
        }
        .contact__emails {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .contact__emails a {
          color: var(--accent);
          transition: color 0.2s ease;
        }
        .contact__emails a:hover { color: var(--hover); }
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
        @media (max-width: 768px) {
          .contact { padding-bottom: 3rem; }
          .contact__location { margin-bottom: 0.75rem; }
          .contact__emails {
            margin-bottom: 1.25rem;
            line-height: 1.8;
          }
          .contact__emails a {
            display: inline-block;
            padding: 0.35rem 0.25rem 0.35rem 0;
            min-height: 44px;
            line-height: 1.4;
          }
          .contact__buttons {
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
          }
          .contact__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            padding: 0.75rem 1.25rem;
            width: 100%;
            max-width: 280px;
          }
        }
        @media (max-width: 480px) {
          .contact__btn { max-width: none; }
        }
      `}</style>
    </section>
  )
}
