import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaTrophy, FaCertificate, FaUserFriends, FaStar } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('awards');
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = [
    { id: 'awards', label: 'Awards & Honors' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'achievements', label: 'General Achievements' }
  ];

  const handleClick = (link, type) => {
    if (type === 'view') {
      window.open(link, '_blank');
    } else {
      window.open(link, '_blank');
    }
  };

  const academicAwards = [
    {
      title: "President's List",
      institution: 'Georgia State University',
      period: 'Spring 2025',
      icon: <FaStar />,
      link: '/documents/Spring2025PresidentsList.pdf'
    },
    {
      title: "President's List",
      institution: 'Georgia State University',
      period: 'Fall 2024',
      icon: <FaStar />,
      link: '/documents/Fall2024PresidentsList.pdf'
    },
    {
      title: "Dean's List",
      institution: 'Georgia State University',
      period: 'Summer 2024',
      icon: <FaStar />,
      link: '/documents/Summer2024DeansList.pdf'
    },
    {
      title: "Dean's List",
      institution: 'Georgia State University',
      period: 'Spring 2024',
      icon: <FaStar />,
      link: '/documents/Spring2024DeansList.pdf'
    },
    {
      title: 'AP Capstone Diploma, AP Scholar with Distinction',
      institution: 'College Board',
      issued: 'May 2022',
      icon: <FaStar />,
      link: '/documents/APCapstoneDiploma.pdf'
    }
  ];

  const hosaAwards = [
    {
      title: 'HOSA State Leadership Conference Rankings',
      event: 'Medical Terminology',
      year: '2020',
      placement: '2nd Place',
      icon: <FaTrophy />
    }
  ];

  const fblaAwards = [
    {
      title: 'FBLA State Leadership Conference',
      event: 'Computer Problem Solving',
      year: '2021',
      placement: '1st in State',
      icon: <FaTrophy />,
      isRanking: true
    },
    {
      title: 'FBLA State Leadership Conference',
      event: 'Computer Applications',
      year: '2021',
      placement: '2nd in State',
      icon: <FaTrophy />,
      isRanking: true
    },
    {
      title: 'FBLA State Leadership Conference',
      event: 'Desktop Publishing',
      year: '2019',
      placement: '2nd in State',
      icon: <FaTrophy />,
      isRanking: true
    },
    {
      title: 'FBLA State Leadership Conference',
      event: 'Keyboarding Applications II',
      year: '2019',
      placement: '4th in State',
      icon: <FaTrophy />,
      isRanking: true
    },
    {
      title: 'FBLA Volunteer',
      event: 'Future Business Leaders of America',
      year: 'Aug 2015 - May 2025',
      description: 'Volunteer, Member, Mentor, President - 500+ service hours',
      icon: <FaTrophy />,
      isRanking: false
    }
  ];

  const certifications = [
    {
      title: 'Generative AI Engineering with Databricks',
      issuer: 'Databricks',
      link: '#',
      type: 'view'
    },
    {
      title: 'Spring Boot 2.0 Essential Training',
      issuer: 'LinkedIn',
      link: '/documents/spring-boot-certificate.pdf',
      type: 'view'
    },
    {
      title: 'Practical Database Design: Implementing Responsible Data Solutions with SQL Querying',
      issuer: 'LinkedIn',
      link: '/documents/database-design-certificate.pdf',
      type: 'view'
    },
    {
      title: 'PowerPoint 2016: Core Presentation Design & Delivery Skills',
      issuer: 'Microsoft',
      link: '/documents/powerpoint-certificate.pdf',
      type: 'view'
    },
    {
      title: 'Word 2016: Core Document Creation, Collaboration & Communication',
      issuer: 'Microsoft',
      link: '/documents/word-certificate.pdf',
      type: 'view'
    },
    {
      title: 'Excel 2016: Core Data Analysis, Manipulation & Presentation',
      issuer: 'Microsoft',
      link: '/documents/excel-certificate.pdf',
      type: 'view'
    },
    {
      title: 'HIPAA Business Associate',
      issuer: 'CITI Program',
      link: '/documents/hipaa-certificate.pdf',
      type: 'download'
    },
    {
      title: 'Research Skills Certificate of Completion',
      issuer: 'Georgia State University',
      link: '/documents/research-skills-certificate.pdf',
      type: 'download'
    },
    {
      title: 'Student Health Clinic – Health Privacy',
      issuer: 'CITI Program',
      link: '/documents/health-privacy-certificate.pdf',
      type: 'download'
    }
  ];

  const recommendations = [
    {
      name: 'Tonya Hood, MBA',
      position: 'Medical Research Community Leader',
      institution: 'Care Access',
      excerpt: '"Rishabh consistently produces high-quality work with minimal direction, whether navigating tight deadlines, venturing into unfamiliar spaces, or supporting our most sensitive events. His follow-up game is unmatched, and his sense of humor makes him an instant favorite among teams and community members alike..."',
      link: 'https://www.linkedin.com/in/chouhanrishabh/details/recommendations/?detailScreenTabIndex=0',
      icon: <FaUserFriends />
    },
    {
      name: 'Santosh Rawat',
      position: 'Senior Software Engineer',
      institution: 'Kaiser Permanente',
      excerpt: '"Rishabh quickly adapted to the fast-paced environment and demonstrated a strong understanding of data analysis, project management and software development skills. He consistently displayed an eagerness to learn, ask insightful questions, and take on new challenges without hesitation..."',
      link: 'https://www.linkedin.com/in/chouhanrishabh/details/recommendations/?detailScreenTabIndex=0',
      icon: <FaUserFriends />
    },
    {
      name: 'Paige Malcolm',
      position: 'Co-Founder',
      institution: 'Skincentric, Inc.',
      excerpt: '"Having Rishabh on our team here at Skincentric has been a pleasure. He has a positive attitude and is adept at problem solving. Rishabh is a fast learner and a great communicator..."',
      link: 'https://www.linkedin.com/in/chouhanrishabh/details/recommendations/?detailScreenTabIndex=0',
      icon: <FaUserFriends />
    },
    {
      name: 'Ganesh Ananthu',
      position: 'Director of Software Engineering',
      institution: 'Oncology Health',
      excerpt: '"He possesses a keen attention to detail and a strong work ethic, ensuring that all requirements are met and that the final product meets the highest standards. Furthermore, Rishabh is an incredibly open-minded and collaborative individual..."',
      link: 'https://www.linkedin.com/in/chouhanrishabh/details/recommendations/?detailScreenTabIndex=0',
      icon: <FaUserFriends />
    },
    {
      name: 'Dr. Murray Patterson',
      position: 'Assistant Professor',
      institution: 'Georgia State University',
      excerpt: '"Rishabh embodies the qualities that I have come to value in exceptional students: intellectual curiosity, analytical precision, effective communication, and the humility to remain open-minded..."',
      course: 'Algorithms',
      link: '/documents/algorithms-recommendation.pdf',
      icon: <FaUserFriends />
    },
    {
      name: 'Dr. Roya Hosseini',
      position: 'Lecturer',
      institution: 'Georgia State University',
      excerpt: '"We ended up discussing how certain kernel-level strategies affect real-world performance and reliability—conversations I don\'t often have at the undergraduate level..."',
      course: 'Operating Systems',
      link: '/documents/os-recommendation.pdf',
      icon: <FaUserFriends />
    },
    {
      name: 'Laura Wilson',
      position: 'Principal',
      institution: 'South Forsyth High School',
      excerpt: '"Rishabh created a Finance and Investment Club designed to connect high school students to real life experiences and expose them to community members that could provide insight into these subjects..."',
      link: '/documents/principal-recommendation.pdf',
      icon: <FaUserFriends />
    }
  ];

  const generalAchievements = [
    {
      title: 'ACT Score',
      description: '35/36',
      icon: <FaStar />
    },
    {
      title: 'AP Scholar with Distinction',
      description: 'College Board Recognition',
      icon: <FaStar />
    },
    {
      title: 'FBLA Volunteer',
      description: '500+ service hours, National recognition',
      icon: <FaTrophy />
    },
    {
      title: 'Founder',
      description: 'Finance & Investment Club (2019-2022), AI FinTech Club (2024-2025)',
      icon: <FaStar />
    }
  ];

  const handleAwardClick = (award) => {
    if (award.link) {
      handleClick(award.link, 'download');
    }
  };

  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <h2 className="section-title">Achievements & Recognition</h2>
        
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="content-container">
          {activeTab === 'awards' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
              className="content-section"
            >
              <div className="category">
                <h3>Academic Awards</h3>
                <ul className="achievement-list">
                  {academicAwards.map((award, index) => (
                    <li 
                      key={index}
                      onClick={() => handleAwardClick(award)}
                      onMouseEnter={() => setHoveredCard(`academic-${index}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="achievement-icon">{award.icon}</div>
                      <div className="achievement-content">
                        <h4>{award.title}</h4>
                        <p>{award.institution}</p>
                        <span className="achievement-period">{award.period}</span>
                        {award.issued && <span className="achievement-issued"> {award.issued}</span>}
                      </div>
                      {hoveredCard === `academic-${index}` && (
                        <div className="hover-text">Click to access</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="category">
                <h3>HOSA Awards</h3>
                <ul className="achievement-list">
                  {hosaAwards.map((award, index) => (
                    <li key={index}>
                      <div className="achievement-icon">{award.icon}</div>
                      <div className="achievement-content">
                        <h4>{award.title}</h4>
                        <p>{award.event}</p>
                        {award.placement && <span className="achievement-placement">{award.placement}</span>}
                        <span className="achievement-year">{award.year}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="category">
                <h3>FBLA Awards</h3>
                <ul className="achievement-list">
                  {fblaAwards.map((award, index) => (
                    <li 
                      key={index}
                      onClick={() => !award.isRanking && handleAwardClick(award)}
                      onMouseEnter={() => !award.isRanking && setHoveredCard(`fbla-${index}`)}
                      onMouseLeave={() => !award.isRanking && setHoveredCard(null)}
                      className={award.isRanking ? 'ranking-item' : ''}
                    >
                      <div className="achievement-icon">{award.icon}</div>
                      <div className="achievement-content">
                        <h4>{award.title}</h4>
                        <p>{award.event}</p>
                        {award.placement && <span className="achievement-placement">{award.placement}</span>}
                        {award.awards && (
                          <ul className="sub-awards">
                            {award.awards.map((subAward, i) => (
                              <li key={i}>{subAward}</li>
                            ))}
                          </ul>
                        )}
                        {award.description && <p className="achievement-description">{award.description}</p>}
                        <span className="achievement-year">{award.year}</span>
                      </div>
                      {!award.isRanking && hoveredCard === `fbla-${index}` && (
                        <div className="hover-text">Click to access</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Certifications Section */}
          {activeTab === 'certifications' && (
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="content-section"
            >
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="certification-card"
                    onClick={() => handleClick(cert.link, cert.type)}
                    onMouseEnter={() => setHoveredCard(`cert-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="certification-content">
                      <h4>{cert.title}</h4>
                      <p>{cert.issuer}</p>
                      {hoveredCard === `cert-${index}` && (
                        <div className="hover-text">Click to access</div>
                      )}
                        </div>
                      </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Recommendations Section */}
          {activeTab === 'recommendations' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="content-section"
            >
              <div className="recommendations-grid">
                {recommendations.map((rec, index) => (
                  <div 
                    key={index} 
                    className="recommendation-card"
                    onClick={() => handleClick(rec.link, 'download')}
                    onMouseEnter={() => setHoveredCard(`rec-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="recommendation-icon">{rec.icon}</div>
                    <div className="recommendation-content">
                      <h4>{rec.name}</h4>
                      <p className="recommendation-position">{rec.position}</p>
                      <p className="recommendation-institution">{rec.institution}</p>
                      {rec.course && <p className="recommendation-course">{rec.course} Course</p>}
                      {rec.excerpt && <p className="recommendation-excerpt">{rec.excerpt}</p>}
                      {hoveredCard === `rec-${index}` && (
                        <div className="hover-text">Click to access</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* General Achievements Section */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="content-section"
            >
              <div className="achievements-grid">
                {generalAchievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
        </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 