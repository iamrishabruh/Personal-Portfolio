export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>About</h2>
      <p className="about__text section-animate" style={{ animationDelay: '0.2s' }}>
        I'm currently at Georgia Tech for my M.S. in Computer Science. I'm part of the CBA Lab under Thomas Plötz, doing research at the intersection of health, AI, and ML. I graduated from Georgia State University with a B.S. in Computer Science and founded Reachmind to bring personalized AI solutions to small businesses. I've built automation and data pipelines at Care Access, shipped production software at Skincentric and Kaiser Permanente, and contributed to RLHF and healthcare tools. Outside of code, I'm a Mensa member and stay involved in community outreach. Based in Atlanta, GA; US Citizen.
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
