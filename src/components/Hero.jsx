export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__highlights section-animate" style={{ animationDelay: '0.05s' }}>
        <span>Georgia Tech MSCS (4.0 GPA)</span>
        <span>Full-time @ Care Access · AI & automation</span>
        <span>Healthcare ML + Platforms</span>
        <span>CBA Lab Research</span>
      </div>
      <div className="hero__inner section-animate" style={{ animationDelay: '0.1s' }}>
        <h1 className="hero__name">Rishabh Chouhan</h1>
        <p className="hero__title">Software Engineer · Builder · Entrepreneur</p>
        <p className="hero__bio">
          I'm a master's student in Computer Science at Georgia Tech and CEO of Reachmind. I work full time at Care Access building automation systems and data pipelines. I build software that matters — from AI and automation to healthcare tools and full-stack products.
        </p>
        <div className="hero__contact">
          <a href="mailto:rchouhan.network@gmail.com">rchouhan.network@gmail.com</a>
          <span className="hero__dot">·</span>
          <a href="https://github.com/iamrishabruh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="hero__dot">·</span>
          <a href="https://reachmindllc.com" target="_blank" rel="noopener noreferrer">Reachmind</a>
          <span className="hero__dot">·</span>
          <a href="#resume">Resume</a>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-line" />
        </div>
      </div>
      <style>{`
        .hero {
          padding-top: 4rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--line);
        }
        .hero__highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .hero__name {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          color: var(--text);
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
        }
        .hero__title {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .hero__bio {
          font-size: 1.125rem;
          max-width: 36em;
          margin-bottom: 1.5rem;
          color: var(--text);
        }
        .hero__contact {
          font-family: var(--font-mono);
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        .hero__contact a {
          color: var(--accent);
          transition: color 0.2s ease;
        }
        .hero__contact a:hover {
          color: var(--hover);
        }
        .hero__dot {
          margin: 0 0.5rem;
          color: var(--line);
        }
        .hero__scroll {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }
        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--line), transparent);
          border-radius: 1px;
        }
        @media (max-width: 768px) {
          .hero { padding-top: 2.5rem; padding-bottom: 2.5rem; }
          .hero__highlights { gap: 0.4rem 0.75rem; margin-bottom: 1.25rem; font-size: 0.7rem; }
          .hero__name { margin-bottom: 0.35rem; }
          .hero__title { margin-bottom: 1rem; }
          .hero__bio { font-size: 1rem; margin-bottom: 1.25rem; }
          .hero__contact {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.25rem 0;
          }
          .hero__contact a {
            padding: 0.5rem 0.25rem 0.5rem 0;
            margin-right: 0.25rem;
            min-height: 44px;
            display: inline-flex;
            align-items: center;
          }
          .hero__dot { margin: 0 0.35rem; }
          .hero__scroll { margin-top: 2rem; }
        }
        @media (max-width: 480px) {
          .hero { padding-top: 2rem; padding-bottom: 2rem; }
          .hero__contact a { padding: 0.5rem 0.5rem 0.5rem 0; }
        }
      `}</style>
    </section>
  )
}
