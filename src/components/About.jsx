export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>About</h2>
      <p className="about__text section-animate" style={{ animationDelay: '0.2s' }}>
        I'm a computer science student at Georgia State University with a deep curiosity for building things that work elegantly. I founded Reachmind to bring personalized AI chatbot solutions to small businesses. I've interned at Kaiser Permanente on their mobile flagship app, built software for a VC-backed dermatology startup, and contributed to reinforcement learning from human feedback (RLHF) projects. Outside of code, I'm a proud Mensa member and an active contributor to my community through health outreach, NAACP partnerships, and events along the Atlanta Beltline.
      </p>
      <style>{`
        .about__text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text);
          max-width: 65ch;
        }
      `}</style>
    </section>
  )
}
