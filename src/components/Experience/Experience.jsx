import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'skincentric',
    company: "Skincentric",
    role: "Founding Software Engineer",
    duration: "Dec 2024 – Mar 2025",
    location: "Remote",
    isHighlighted: true,
    achievements: [
      "Led development of core platform architecture",
      "Implemented scalable backend services",
      "Built responsive frontend interfaces"
    ]
  },
  {
    id: 'outlier',
    company: "Outlier AI",
    role: "Senior AI Code Reviewer & University Fellow",
    duration: "Nov 2024 – Feb 2025",
    location: "Remote",
    isHighlighted: false,
    achievements: [
      "Reviewed and improved AI-generated code",
      "Mentored junior reviewers",
      "Contributed to code quality standards"
    ]
  },
  {
    id: 'kaiser',
    company: "Kaiser Permanente",
    role: "Software Engineering Intern",
    duration: "Jun 2023 – Sep 2023",
    location: "Buckhead, GA",
    isHighlighted: true,
    achievements: [
      "Cut iOS test-automation time by 40% through innovative ML solutions",
      "Developed and maintained automated testing frameworks",
      "Collaborated with cross-functional teams"
    ]
  },
  {
    id: 'perplexity',
    company: "Perplexity",
    role: "AI Business Fellow",
    duration: "Feb 2025 – Present",
    location: "Remote",
    isHighlighted: false,
    achievements: [
      "Worked on AI business applications",
      "Developed AI solutions for business problems",
      "Collaborated with industry experts"
    ]
  },
  {
    id: 'reachmind',
    company: "Reachmind LLC",
    role: "Founder & CTO",
    duration: "Jul 2024 – Present",
    location: "Remote",
    isHighlighted: false,
    achievements: [
      "Founded and led technical direction",
      "Developed core product architecture",
      "Managed technical team"
    ]
  },
  {
    id: 'careaccess',
    company: "Care Access",
    role: "Community Engagement Ambassador",
    duration: "Jun 2023 – Present",
    location: "Atlanta, GA",
    isHighlighted: false,
    achievements: [
      "Led community engagement initiatives",
      "Developed outreach programs",
      "Managed community relationships"
    ]
  },
  {
    id: 'walmart',
    company: "Walmart",
    role: "Deli Manager",
    duration: "May 2022 – Aug 2023",
    location: "Cumming, GA",
    isHighlighted: false,
    achievements: [
      "Managed daily operations and staff",
      "Ensured quality control and customer satisfaction",
      "Maintained inventory and ordering systems"
    ]
  },
  {
    id: 'mangia',
    company: "Mangia",
    role: "Team Lead",
    duration: "Sep 2021 – Jun 2022",
    location: "Alpharetta, GA",
    isHighlighted: false,
    achievements: [
      "Led team of 15+ employees",
      "Coordinated daily operations",
      "Implemented efficiency improvements"
    ]
  },
  {
    id: 'hexaware',
    company: "Hexaware Technologies",
    role: "Software Engineering Intern",
    duration: "Jun 2021 – Sep 2021",
    location: "Dunwoody, GA",
    isHighlighted: true,
    achievements: [
      "Developed web applications using React",
      "Implemented RESTful APIs",
      "Participated in agile development"
    ]
  },
  {
    id: 'starbucks',
    company: "Starbucks",
    role: "Barista",
    duration: "Sep 2020 – Jun 2021",
    location: "Cumming, GA",
    isHighlighted: false,
    achievements: [
      "Prepared high-quality beverages",
      "Provided excellent customer service",
      "Maintained store cleanliness"
    ]
  },
  {
    id: 'freddys',
    company: "Freddy's Frozen Custard & Steakburgers",
    role: "Grill Cook",
    duration: "Oct 2019 – Sep 2020",
    location: "Cumming, GA",
    isHighlighted: false,
    achievements: [
      "Prepared food to specifications",
      "Maintained food safety standards",
      "Worked in fast-paced environment"
    ]
  },
  {
    id: 'kumon',
    company: "Kumon North America",
    role: "Tutor",
    duration: "Aug 2019 – Oct 2019",
    location: "Cumming, GA",
    isHighlighted: false,
    achievements: [
      "Tutored students in math and reading",
      "Tracked student progress",
      "Created personalized learning plans"
    ]
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
              
              <ul className="achievements-list">
                {exp.achievements.map((achievement) => (
                  <li key={`${exp.id}-${achievement}`} className="achievement">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 