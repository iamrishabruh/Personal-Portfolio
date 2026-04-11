export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__cosmic">
        <div className="hero__cosmic-overlay" aria-hidden="true" />
        <div className="hero__cosmic-inner">
          <h1 className="hero__name">Rishabh Chouhan</h1>
          <p className="hero__title">Software Engineer · Builder · Entrepreneur</p>
        </div>
      </div>
      <p className="hero__credit section-animate" style={{ animationDelay: '0.05s' }}>
        NASA / JWST — Cosmic Cliffs, Carina Nebula
      </p>
      <div className="hero__body">
        <div className="hero__highlights section-animate" style={{ animationDelay: '0.1s' }}>
          <span>Georgia Tech MSCS (4.0 GPA)</span>
          <span>Full-time @ Care Access · AI & automation</span>
          <span>Healthcare ML + Platforms</span>
          <span>CBA Lab Research</span>
        </div>
        <div className="hero__inner section-animate" style={{ animationDelay: '0.15s' }}>
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
      </div>
      <style>{`
        .hero {
          border-bottom: 1px solid var(--line);
        }
        .hero__cosmic {
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          width: 100vw;
          min-height: min(52vh, 520px);
          background:
            linear-gradient(
              180deg,
              rgba(10, 12, 20, 0.25) 0%,
              rgba(26, 23, 20, 0.75) 55%,
              var(--bg) 100%
            ),
            url('/images/cosmic-cliffs.png') center 42% / cover no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 2.5rem 1.5rem 3.5rem;
        }
        .hero__cosmic-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.15) 0%,
            rgba(0, 0, 0, 0.35) 100%
          );
          pointer-events: none;
        }
        .hero__cosmic-inner {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 auto;
          width: 100%;
        }
        .hero__name {
          font-family: var(--font-display);
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 600;
          color: #f5f0e8;
          letter-spacing: 0.02em;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
        }
        .hero__title {
          font-family: var(--font-mono);
          font-size: clamp(0.8125rem, 2.5vw, 0.875rem);
          color: rgba(245, 240, 232, 0.88);
          margin: 0;
          text-shadow: 0 1px 16px rgba(0, 0, 0, 0.4);
        }
        .hero__credit {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          text-align: center;
          margin: 0;
          padding: 0.5rem 1rem 0;
          letter-spacing: 0.02em;
        }
        .hero__body {
          padding-top: 1.75rem;
          padding-bottom: 3rem;
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
          .hero__cosmic {
            min-height: min(44vh, 380px);
            padding: 2rem 1rem 2.75rem;
            background-position: center 38%;
          }
          .hero__body { padding-top: 1.25rem; padding-bottom: 2.5rem; }
          .hero__highlights { gap: 0.4rem 0.75rem; margin-bottom: 1.25rem; font-size: 0.7rem; }
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
          .hero__cosmic { min-height: 38vh; padding-bottom: 2.25rem; }
          .hero__contact a { padding: 0.5rem 0.5rem 0.5rem 0; }
        }
      `}</style>
    </section>
  )
}
