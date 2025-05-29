import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import './Tour.css';

const tourSteps = [
  {
    id: 'intro',
    title: 'Welcome to My Portfolio!',
    content: 'Would you like a quick guided tour of my website? It will take about 20 seconds.',
  },
  {
    id: 'about',
    title: 'About Me',
    content: 'This section introduces who I am, my background, and my passions.',
    target: 'hero'
  },
  {
    id: 'interactive',
    title: 'Interactive Elements',
    content: 'Many panels and sections throughout the site are interactive! Hover over them to see details and click to view proof of my experiences.',
    target: 'hero'
  },
  {
    id: 'resume',
    title: 'Resume Download',
    content: 'My resume is available for download, just click the file icon.',
    target: 'hero'
  },
  {
    id: 'experience',
    title: 'Work Experience',
    content: 'Here, you can see my professional journey. Hover to see details.',
    target: 'experience'
  },
  {
    id: 'projects',
    title: 'Projects',
    content: 'Check out my technical projects and what I\'ve built. (Updated live from GitHubAPI)',
    target: 'projects'
  },
  {
    id: 'achievements',
    title: 'Achievements',
    content: 'My academic and professional accomplishments. Click panels to view.',
    target: 'achievements'
  },
  {
    id: 'contact',
    title: 'Get in Touch',
    content: 'Feel free to reach out for work opportunities or just to connect!',
    target: 'contact'
  }
];

const Tour = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isTourActive, setIsTourActive] = useState(false);
  const [spotlightRect, setSpotlightRect] = useState(null);
  const spotlightRef = useRef(null);

  const startTour = () => {
    setIsTourActive(true);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const endTour = () => {
    setIsVisible(false);
    setIsTourActive(false);
    onClose();
  };

  useEffect(() => {
    if (isTourActive && currentStep > 0) {
      const target = document.getElementById(tourSteps[currentStep].target);
      if (target) {
        if (tourSteps[currentStep].id === 'resume') {
          // For resume step, find and highlight the resume link
          const resumeLink = document.querySelector('.hero__social a[href*="docs.google.com"]');
          if (resumeLink) {
            resumeLink.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const rect = resumeLink.getBoundingClientRect();
            setSpotlightRect({
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            });
            return;
          }
        } else if (tourSteps[currentStep].id === 'interactive') {
          // For interactive step, highlight the timeline box
          const timelineBox = document.querySelector('.hero__timeline');
          if (timelineBox) {
            timelineBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const rect = timelineBox.getBoundingClientRect();
            setSpotlightRect({
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            });
            return;
          }
        } else if (['experience', 'projects', 'achievements'].includes(tourSteps[currentStep].id)) {
          // For these sections, scroll to the top
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          const rect = target.getBoundingClientRect();
          setSpotlightRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        } else if (tourSteps[currentStep].id === 'contact') {
          // For contact section, find and highlight the Get in Touch button
          const contactButton = document.querySelector('.email-button');
          if (contactButton) {
            contactButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const rect = contactButton.getBoundingClientRect();
            setSpotlightRect({
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            });
            return;
          }
        } else {
          // For other steps, scroll to the target
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const rect = target.getBoundingClientRect();
          setSpotlightRect({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        }
      }
    }
  }, [currentStep, isTourActive]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="tour-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {spotlightRect && (
          <motion.div
            ref={spotlightRef}
            className="tour-spotlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              top: spotlightRect.top,
              left: spotlightRect.left,
              width: spotlightRect.width,
              height: spotlightRect.height
            }}
          />
        )}

        <motion.div
          className="tour-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="tour-content">
            <div className="tour-text">
              <h2>{tourSteps[currentStep].title}</h2>
              <p>{tourSteps[currentStep].content}</p>
            </div>

            <div className="tour-controls">
              {currentStep > 0 && (
                <button className="tour-button" onClick={prevStep}>
                  <FaArrowLeft /> Previous
                </button>
              )}
              
              {currentStep === 0 ? (
                <button className="tour-button primary" onClick={startTour}>
                  Start Tour
                </button>
              ) : (
                <button className="tour-button primary" onClick={nextStep}>
                  {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'} <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Tour; 