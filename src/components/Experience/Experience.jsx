import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: "careaccess-ai-marketing-ops-analyst",
    company: "Care Access",
    role: "AI Marketing Operations Analyst",
    duration: "Jul 2025 – Present",
    location: "Remote",
    isHighlighted: true,
    description:
      "Bringing AI to Care Access."
  },
  {
    id: "reachmind-founder",
    company: "Reachmind LLC",
    role: "Founder",
    duration: "Feb 2025 – Present",
    location: "United States",
    isHighlighted: true,
    description:
      "Systems and automation studio that helps organizations reduce manual work by turning scattered tools and data into clear, reliable workflows."
  },
  {
    id: "careaccess-community-ambassador",
    company: "Care Access",
    role: "Community Ambassador",
    duration: "Apr 2024 – May 2025",
    location: "Decatur, GA",
    isHighlighted: true,
    description: ""
  },
  {
    id: "skincentric-founding-swe",
    company: "Skincentric",
    role: "Founding Software Engineer",
    duration: "Dec 2024 – Mar 2025",
    location: "Atlanta, GA",
    isHighlighted: true,
    description:
      "4 month contract."
  },
  {
    id: "kaiser-swe-intern",
    company: "Kaiser Permanente",
    role: "Software Engineering Intern",
    duration: "Jun 2023 – Sep 2023",
    location: "San Jose, CA",
    isHighlighted: true,
    description:
      "Part of the KP Mobile Flagship project in Atlanta, GA."
  },
  {
    id: "walmart-deli-operator-manager",
    company: "Walmart",
    role: "Deli Operator/Manager",
    duration: "May 2022 – Aug 2022",
    location: "Cumming, GA",
    isHighlighted: false,
    description:
      "4am - 1pm zzz."
  },
  {
    id: "hexaware-accounts-receivable-associate",
    company: "Hexaware Technologies",
    role: "Accounts Receivable Associate",
    duration: "Jun 2021 – Sep 2021",
    location: "Dunwoody, GA",
    isHighlighted: false,
    description:
      "Resolved balance claims with major insurers (Aetna, Blue Cross, Cigna)."
  },
  {
    id: "starbucks-barista",
    company: "Starbucks",
    role: "Barista",
    duration: "Sep 2020 – Jun 2021",
    location: "Cumming, GA",
    isHighlighted: false,
    description: ""
  },
  {
    id: "freddys-grill-cook",
    company: "Freddy's Frozen Custard & Steakburgers",
    role: "Grill Cook",
    duration: "Oct 2019 – Sep 2020",
    location: "Cumming, GA",
    isHighlighted: false,
    description: ""
  },
  {
    id: "kumon-tutor",
    company: "Kumon North America, Inc.",
    role: "Tutor",
    duration: "Aug 2019 – Oct 2019",
    location: "Cumming, GA",
    isHighlighted: false,
    description: ""
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