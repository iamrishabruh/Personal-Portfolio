import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, descriptions, resume, social } = about; // Ensure descriptions is included
  const [roleTypingStarted] = useState(false); // State to control when to start role typing
  const roleDelay = 1000; // Set the delay for the role typing

  return (
    <div className='about center'>
      {name && (
        <h1 style={{ position: 'relative' }}>
          <span>Hi, I am </span>
          <ReactTyped
            strings={[`<span class="about__name">${name}</span>.`]} // Wrap in span for styling
            typeSpeed={52} // Adjust speed as necessary
            backSpeed={50} // Speed of backspacing
            loop={false} // Set to true if you want to loop
          />
        </h1>
      )}
      <h2 className='about__role'>
        <ReactTyped
          strings={descriptions.map(desc => `<span class="about__role">${desc}</span>`)} // Wrap in span for styling
          typeSpeed={40}
          backSpeed={20}
          loop={0} // Set to 0 to loop, false to avoid
          startDelay={roleTypingStarted ? 0 : roleDelay} // Start delay for role typing
        />
      </h2>
      <p className='about__desc'>{about.description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default About;