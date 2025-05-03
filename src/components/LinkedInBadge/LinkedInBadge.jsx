import React, { useEffect, useState } from 'react';
import { useTheme } from '../../theme';

export default function LinkedInBadge() {
  const { isDarkMode } = useTheme();
  const [badgeInitialized, setBadgeInitialized] = useState(false);

  useEffect(() => {
    // Dynamically load LinkedIn's badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      setBadgeInitialized(true);
    };

    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      document.body.removeChild(script);
    };
  }, []);

  // Update badge theme whenever isDarkMode changes
  useEffect(() => {
    if (badgeInitialized) {
      const badge = document.querySelector('.LI-profile-badge');
      if (badge) {
        badge.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        // Re-initialize the badge
        if (window.LI) {
          window.LI.init();
        }
      }
    }
  }, [isDarkMode, badgeInitialized]);

  return (
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="large" 
      data-theme={isDarkMode ? 'dark' : 'light'} 
      data-type="HORIZONTAL" 
      data-vanity="chouhanrishabh" 
      data-version="v1"
    >
      <a 
        className="badge-base__link LI-simple-link" 
        href="https://www.linkedin.com/in/chouhanrishabh?trk=profile-badge"
      >
      
      </a>
    </div>
  );
} 