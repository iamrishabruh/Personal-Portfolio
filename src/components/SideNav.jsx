import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'H' },
  { id: 'about', label: 'A' },
  { id: 'experience', label: 'E' },
  { id: 'projects', label: 'P' },
  { id: 'research', label: 'R' },
  { id: 'volunteering', label: 'V' },
  { id: 'resume', label: 'Res' },
  { id: 'documents', label: 'D' },
  { id: 'honors', label: 'O' },
  { id: 'skills', label: 'S' },
  { id: 'contact', label: 'C' },
]

export default function SideNav() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(id)
          })
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
    return () => observers.forEach((cleanup) => cleanup?.())
  }, [])

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sidenav" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`sidenav__btn ${activeId === id ? 'sidenav__btn--active' : ''}`}
          onClick={() => handleClick(id)}
          aria-label={`Go to ${id} section`}
          aria-current={activeId === id ? 'true' : undefined}
        >
          {label}
        </button>
      ))}
      <style>{`
        .sidenav {
          position: fixed;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 100;
        }
        .sidenav__btn {
          width: 32px;
          min-width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: var(--bg);
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .sidenav__btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: scale(1.05);
        }
        .sidenav__btn--active {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
        }
        @media (max-width: 768px) {
          .sidenav { display: none; }
        }
      `}</style>
    </nav>
  )
}
