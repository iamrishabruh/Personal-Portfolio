import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleEducationClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        
        <div className="education-timeline">
          <div 
            className="timeline__item"
            onClick={() => handleEducationClick('https://www.usnews.com/best-colleges/georgia-institute-of-technology-1569')}
            onMouseEnter={() => setHoveredCard('gt')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src="/svg/gtsvg.svg" alt="Georgia Institute of Technology" className="timeline__logo" />
            <div className="timeline__content">
              <h3>Georgia Institute of Technology</h3>
              <p>Aug 2025 - Present</p>
              <p>M.S. Computer Science</p>
              <p>4.0/4.0 GPA</p>
            </div>
            {hoveredCard === 'gt' && (
              <div className="hover-text">Click to access</div>
            )}
          </div>
          <div 
            className="timeline__item"
            onClick={() => handleEducationClick('https://www.usnews.com/best-colleges/georgia-state-university-1574')}
            onMouseEnter={() => setHoveredCard('gsu')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src="/svg/gsusvg.svg" alt="Georgia State University" className="timeline__logo" />
            <div className="timeline__content">
              <h3>Georgia State University</h3>
              <p>Aug 2023 - May 2025</p>
              <p>B.S. Computer Science</p>
            </div>
            {hoveredCard === 'gsu' && (
              <div className="hover-text">Click to access</div>
            )}
          </div>
          <div 
            className="timeline__item"
            onClick={() => handleEducationClick('https://www.usnews.com/best-colleges/university-of-georgia-1598')}
            onMouseEnter={() => setHoveredCard('uga')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src="/svg/ugasvg.svg" alt="University of Georgia" className="timeline__logo" />
            <div className="timeline__content">
              <h3>University of Georgia</h3>
              <p>Aug 2022 - May 2023</p>
              <p>Undergraduate Coursework</p>
            </div>
            {hoveredCard === 'uga' && (
              <div className="hover-text">Click to access</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

