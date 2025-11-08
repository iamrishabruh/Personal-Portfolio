import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'careaccess-ai',
    company: "Care Access",
    role: "AI Marketing Operations Analyst",
    duration: "Jul 2025 – Present",
    location: "Remote",
    isHighlighted: true
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
    id: 'outlier',
    company: "Outlier AI",
    role: "Senior AI Code Reviewer & University Fellow",
    duration: "Nov 2024 – Feb 2025",
    location: "Remote",
    isHighlighted: false
  },
  {
    id: 'kaiser',
    company: "Kaiser Permanente",
    role: "Software Engineering Intern",
    duration: "Jun 2023 – Sep 2023",
    location: "Buckhead, GA",
    isHighlighted: true
  },
  {
    id: 'reachmind',
    company: "Reachmind LLC",
    role: "Founder",
    duration: "Jul 2024 – Present",
    location: "Remote",
    isHighlighted: false
  },
  {
    id: 'careaccess',
    company: "Care Access",
    role: "Community Engagement Ambassador",
    duration: "Jun 2023 – Jul 2025",
    location: "Atlanta, GA",
    isHighlighted: false
  },
  {
    id: 'walmart',
    company: "Walmart",
    role: "Deli Manager",
    duration: "May 2022 – Aug 2023",
    location: "Cumming, GA",
    isHighlighted: false
  },
  {
    id: 'mangia',
    company: "Mangia",
    role: "Team Lead",
    duration: "Sep 2021 – Jun 2022",
    location: "Alpharetta, GA",
    isHighlighted: false
  },
  {
    id: 'hexaware',
    company: "Hexaware Technologies",
    role: "Accounts Receivable Associate",
    duration: "Jun 2021 – Sep 2021",
    location: "Dunwoody, GA",
    isHighlighted: true
  },
  {
    id: 'starbucks',
    company: "Starbucks",
    role: "Barista",
    duration: "Sep 2020 – Jun 2021",
    location: "Cumming, GA",
    isHighlighted: false
  },
  {
    id: 'freddys',
    company: "Freddy's Frozen Custard & Steakburgers",
    role: "Grill Cook",
    duration: "Oct 2019 – Sep 2020",
    location: "Cumming, GA",
    isHighlighted: false
  },
  {
    id: 'kumon',
    company: "Kumon North America",
    role: "Tutor",
    duration: "Aug 2019 – Oct 2019",
    location: "Cumming, GA",
    isHighlighted: false
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 