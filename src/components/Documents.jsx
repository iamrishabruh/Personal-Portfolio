// All paths under /documents/ — files live in public/documents/
const DOCS = {
  resume: [
    { label: 'Resume', path: '/documents/resume.pdf' },
  ],
  academicAwards: [
    { label: "President's List — Spring 2025", path: '/documents/Spring2025PresidentsList.pdf' },
    { label: "President's List — Fall 2024", path: '/documents/Fall2024PresidentsList.pdf' },
    { label: "Dean's List — Summer 2024", path: '/documents/Summer2024DeansList.pdf' },
    { label: "Dean's List — Spring 2024", path: '/documents/Spring2024DeansList.pdf' },
    { label: 'AP Capstone Diploma, AP Scholar with Distinction', path: '/documents/APCapstoneDiploma.pdf' },
  ],
  certifications: [
    { label: 'Generative AI Engineering with Databricks', path: null, note: 'Databricks' },
    { label: 'Spring Boot 2.0 Essential Training', path: '/documents/spring-boot-certificate.pdf' },
    { label: 'Practical Database Design & SQL Querying', path: '/documents/database-design-certificate.pdf' },
    { label: 'PowerPoint 2016: Core Presentation Design & Delivery', path: '/documents/powerpoint-certificate.pdf' },
    { label: 'Word 2016: Core Document Creation & Collaboration', path: '/documents/word-certificate.pdf' },
    { label: 'Excel 2016: Core Data Analysis & Presentation', path: '/documents/excel-certificate.pdf' },
    { label: 'HIPAA Business Associate', path: '/documents/hipaa-certificate.pdf' },
    { label: 'Research Skills Certificate of Completion', path: '/documents/research-skills-certificate.pdf' },
    { label: 'Student Health Clinic – Health Privacy', path: '/documents/health-privacy-certificate.pdf' },
  ],
  recommendations: [
    { label: 'Dr. Murray Patterson — Algorithms (GSU)', path: '/documents/algorithms-recommendation.pdf' },
    { label: 'Dr. Roya Hosseini — Operating Systems (GSU)', path: '/documents/os-recommendation.pdf' },
    { label: 'Laura Wilson — Principal, South Forsyth High School', path: '/documents/principal-recommendation.pdf' },
  ],
}

function DocLink({ label, path }) {
  if (!path) return <span className="doc-list__label">{label}</span>
  return (
    <a href={path} target="_blank" rel="noopener noreferrer" download className="doc-list__link">
      {label}
      <span className="doc-list__dl"> ↓</span>
    </a>
  )
}

function DocBlock({ title, items }) {
  return (
    <div className="doc-block">
      <h3 className="doc-block__title">{title}</h3>
      <ul className="doc-list">
        {items.map((item, i) => (
          <li key={i} className="doc-list__item">
            <DocLink label={item.label} path={item.path} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Documents() {
  return (
    <section id="documents" className="section documents-section">
      <h2 className="section-title section-animate" style={{ animationDelay: '0.1s' }}>Certificates & Documents</h2>
      <p className="documents__intro section-animate" style={{ animationDelay: '0.15s' }}>
        Download my resume, academic awards, certifications, and recommendation letters.
      </p>
      <DocBlock title="Resume" items={DOCS.resume} />
      <DocBlock title="Academic awards" items={DOCS.academicAwards} />
      <DocBlock title="Certifications" items={DOCS.certifications} />
      <DocBlock title="Recommendations" items={DOCS.recommendations} />
      <style>{`
        .documents-section { padding-bottom: 3rem; }
        .documents__intro {
          font-size: 0.9375rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .doc-block { margin-bottom: 2rem; }
        .doc-block__title {
          font-family: var(--font-mono);
          font-size: 0.8125rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .doc-list { list-style: none; }
        .doc-list__item {
          padding: 0.35rem 0;
          font-size: 0.9375rem;
        }
        .doc-list__link {
          color: var(--accent);
          transition: color 0.2s ease;
        }
        .doc-list__link:hover { color: var(--hover); }
        .doc-list__label { color: var(--text); }
        .doc-list__dl { color: var(--text-muted); font-size: 0.85em; }
        @media (max-width: 768px) {
          .documents-section { padding-bottom: 2.5rem; }
          .documents__intro { margin-bottom: 1.25rem; }
          .doc-block { margin-bottom: 1.5rem; }
          .doc-list__item {
            padding: 0.5rem 0;
          }
          .doc-list__link {
            display: inline-block;
            padding: 0.4rem 0.25rem 0.4rem 0;
            min-height: 44px;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  )
}
