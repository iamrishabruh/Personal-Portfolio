export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>About</h2>
      <p className="about__text section-animate" style={{ animationDelay: '0.2s' }}>
        I'm at Georgia Tech for my M.S. in Computer Science and part of the CBA Lab under Thomas Plötz, working on research at the intersection of health, AI, and ML. I graduated from Georgia State with a B.S. in CS and founded Reachmind to bring personalized AI to small businesses. I've built automation and data pipelines at Care Access, shipped production software at Skincentric and Kaiser Permanente, and worked on RLHF and healthcare tools. I stay involved in community outreach. Based in Atlanta, GA; US Citizen.
      </p>
      <p className="about__text about__interests section-animate" style={{ animationDelay: '0.25s' }}>
        Outside of work: singing, songwriting, video games, football, basketball, the gym, traveling, and an interest in the CIA and intelligence world.
      </p>
      <style>{`
        .about__text {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text);
          max-width: 65ch;
        }
        .about__interests { margin-top: 1rem; color: var(--text-muted); }
        @media (max-width: 768px) {
          .about__text { font-size: 0.9375rem; line-height: 1.75; }
          .about__interests { margin-top: 1.25rem; }
        }
      `}</style>
    </section>
  )
}
