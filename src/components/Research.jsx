export default function Research() {
  return (
    <section id="research" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Research</h2>
      <div className="research__content section-animate" style={{ animationDelay: '0.2s' }}>
        <p>
          <strong>CBA Lab (Georgia Tech)</strong> — advised by Thomas Plötz. Focus areas include health technologies, AI/ML, and human-centered computing.
        </p>
      </div>
      <style>{`
        .research__content p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text);
        }
      `}</style>
    </section>
  )
}
