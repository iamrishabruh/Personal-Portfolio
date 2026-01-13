import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'careaccess-ai',
    company: "Care Access",
    role: "AI Driven Marketing Operations Analyst",
    duration: "Jul 2025 – Present",
    location: "Remote",
    isHighlighted: true,
    description: "Architected and implemented end-to-end automation systems integrating Monday.com, Slack, Google Workspace, Microsoft Graph, Databricks, and Microsoft Fabric to support clinical trial operations, recruitment workflows, and field execution at global scale. Replaced manual operational processes with reliable, auditable automation pipelines using structured logging, diagnostics, and state tracking to improve traceability and resilience. Designed dynamic Monday.com workflows using board relations, people columns, and form ingestion to automate event creation, staffing coordination, and study updates without data loss. Built Slack orchestration systems to programmatically create channels, invite role-based participants, post formatted summaries, and manage mobile-safe message rendering. Developed secure data engineering pipelines with normalized lookup tables, deduplicated mappings, and curated warehouse views exposed via Fabric GraphQL APIs. Implemented privacy-preserving data practices using SHA-256 hashing with secret peppering to enable secure joins while maintaining compliance. Led migration of business-critical automations to a GitHub-based SDLC, defining repo structure, environment-scoped secrets, versioning, and deployment practices."
  },
  {
    id: 'skincentric',
    company: "Skincentric",
    role: "Founding Software Engineer",
    duration: "Dec 2024 – Mar 2025",
    location: "Remote",
    isHighlighted: true
  },
  {
    id: 'kaiser',
    company: "Kaiser Permanente",
    role: "Software Engineering Intern",
    duration: "Jun 2023 – Sep 2023",
    location: "Buckhead, GA",
    isHighlighted: true
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Work Experience</h2>
        
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`experience-card ${exp.isHighlighted ? 'highlighted' : ''}`}
            >
              <div className="card-header">
                <div className="role-container">
                  <h3 className="role">{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                
                <div className="card-details">
                  <span className="duration">{exp.duration}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              {exp.description && (
                <p className="experience-description">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 