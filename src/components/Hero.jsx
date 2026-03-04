export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner section-animate" style={{ animationDelay: '0.1s' }}>
        <h1 className="hero__name">Rishabh Chouhan</h1>
        <p className="hero__title">Software Engineer · Builder · Mensa Member</p>
        <p className="hero__bio">
          CS student at Georgia State University and CEO of Reachmind. I build software that matters — from AI chatbots to healthcare tools to full-stack products.
        </p>
        <div className="hero__contact">
          <a href="mailto:rishabruh@gmail.com">rishabruh@gmail.com</a>
          <span className="hero__dot">·</span>
          <a href="https://linkedin.com/in/rishabhchouhan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="hero__dot">·</span>
          <a href="https://github.com/rishabhchouhan" target="_blank" rel="noopener noreferrer">GitHub</a>
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
      `}</style>
    </section>
  )
}
