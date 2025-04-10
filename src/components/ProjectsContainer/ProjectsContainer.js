import React from 'react';
import uniqid from 'uniqid';
import { GitHubIcon, LaunchIcon } from '@material-ui/icons';
import './ProjectsContainer.css';

const ProjectsContainer = ({ project }) => (
  <div className='project'>
    <h3 className='project__title'>{project.name}</h3>
    <p className='project__description'>{project.description}</p>
    
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    <div className='project__links'>
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          target='_blank'
          rel='noreferrer'
          className='link link--icon'
          aria-label='source code'
        >
          <GitHubIcon />
        </a>
      )}
      {project.livePreview && (
        <a
          href={project.livePreview}
          target='_blank'
          rel='noreferrer'
          className='link link--icon'
          aria-label='live preview'
        >
          <LaunchIcon />
        </a>
      )}
      {project.videoDemo && (
        <a
          href={project.videoDemo}
          target='_blank'
          rel='noopener noreferrer'
          className='link link--icon'
          aria-label='View video demo'
        >
          <i className='fas fa-video' />
        </a>
      )}
    </div>

    <div className='project__stats'>
      <div className='project__stat'>
        <i className='fas fa-star' />
        <span>{project.stars}</span>
      </div>
      <div className='project__stat'>
        <i className='fas fa-code-branch' />
        <span>{project.forks}</span>
      </div>
    </div>

    {project.media && (
      <div className='project__media'>
        {project.media.map((media) => (
          <div key={uniqid()} className='project__media-item'>
            {media.type === 'image' && (
              <img
                src={media.url}
                alt={project.name}
                className='project__image'
              />
            )}
            {media.type === 'video' && (
              <video
                src={media.url}
                controls
                className='project__video'
              >
                <track kind="captions" src="" label="English" />
              </video>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ProjectsContainer;